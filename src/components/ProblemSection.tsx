import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { AlertTriangle, ChevronDown } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const painPoints = [
  {
    label: "Keine starke Website",
    text: "Es gibt noch keine Webseite oder nur eine einfache Visitenkarte ohne Wirkung.",
  },
  {
    label: "Veralteter Eindruck",
    text: "Die aktuelle Seite wirkt alt und schafft beim ersten Klick kein Vertrauen.",
  },
  {
    label: "Kaum sichtbar",
    text: "Bei Google und Maps taucht der Betrieb kaum oder gar nicht auf.",
  },
  {
    label: "Nur Empfehlungen",
    text: "Anfragen kommen fast nur über Empfehlungen statt planbar über die Webseite.",
  },
  {
    label: "Unklare Leistungen",
    text: "Leistungen sind unklar dargestellt und unterscheiden sich nicht vom Wettbewerb.",
  },
  {
    label: "Kontakt bricht ab",
    text: "Kontaktwege sind unpraktisch, Kunden springen vor dem Anruf wieder ab.",
  },
];

/* ── Single Card ── */
const ProblemCard = ({
  index,
  total,
  point,
  progress,
  reducedMotion,
}: {
  index: number;
  total: number;
  point: (typeof painPoints)[number];
  progress: MotionValue<number>;
  reducedMotion: boolean;
}) => {
  const relative = useTransform(progress, (v) => {
    const offset = index - v;
    return Math.max(-2, Math.min(2, offset));
  });

  // Only the active card (relative ≈ 0) is fully visible
  const opacity = useTransform(relative, [-0.6, -0.15, 0, 0.15, 0.6], [0, 0.4, 1, 0.4, 0]);
  const y = useTransform(
    relative,
    [-1, 0, 1],
    reducedMotion ? [-20, 0, 20] : [-60, 0, 60]
  );
  const scale = useTransform(
    relative,
    [-1, 0, 1],
    reducedMotion ? [0.97, 1, 0.97] : [0.88, 1, 0.88]
  );
  const rotateX = useTransform(
    relative,
    [-1, 0, 1],
    reducedMotion ? [0, 0, 0] : [12, 0, -12]
  );

  return (
    <motion.article
      className="absolute inset-0 rounded-2xl border border-border/70 bg-background/90 p-5 sm:p-7 lg:p-8 backdrop-blur-md will-change-transform"
      style={{
        y,
        scale,
        rotateX,
        opacity,
        transformStyle: "preserve-3d",
        zIndex: total - index,
      }}
    >
      <div className="flex h-full flex-col justify-between gap-4 sm:gap-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="inline-flex rounded-full border border-border/60 bg-background/75 px-3 py-1 text-xs font-body uppercase tracking-[0.22em] text-primary">
              0{index + 1} / 0{total}
            </span>
            <p className="mt-3 text-sm sm:text-base font-body uppercase tracking-[0.16em] text-muted-foreground">
              {point.label}
            </p>
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/16 text-accent">
            <AlertTriangle className="h-5 w-5" />
          </div>
        </div>

        <div className="space-y-4 flex-1 flex flex-col justify-center">
          <p className="text-xl leading-snug tracking-tight text-foreground sm:text-2xl lg:text-[2.1rem] lg:leading-[1.12]">
            {point.text}
          </p>
          <div className="rounded-xl border border-border/55 bg-primary/[0.045] px-4 py-3">
            <p className="text-sm font-body leading-relaxed text-muted-foreground">
              Dieser Engpass kostet Vertrauen, Sichtbarkeit oder direkte Anfragen, bevor überhaupt ein Gespräch entsteht.
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

/* ── Dot indicator ── */
const DotIndicator = ({ progress, total }: { progress: MotionValue<number>; total: number }) => (
  <div className="flex items-center justify-center gap-1.5">
    {Array.from({ length: total }).map((_, i) => (
      <Dot key={i} index={i} progress={progress} />
    ))}
  </div>
);

const Dot = ({ index, progress }: { index: number; progress: MotionValue<number> }) => {
  const w = useTransform(progress, (v) => (Math.abs(v - index) < 0.5 ? 20 : 6));
  const o = useTransform(progress, (v) => (Math.abs(v - index) < 0.5 ? 1 : 0.3));
  return <motion.div className="h-1.5 rounded-full bg-accent" style={{ width: w, opacity: o }} />;
};

/* ── Animation helper ── */
function animateTo(mv: MotionValue<number>, target: number, duration = 450) {
  const start = mv.get();
  const startTime = performance.now();
  const step = (now: number) => {
    const t = Math.min(1, (now - startTime) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    mv.set(start + (target - start) * eased);
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ── Main Section ── */
const ProblemSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const indexRef = useRef(0);
  const cooldownRef = useRef(false);
  const lockedRef = useRef(false);
  const progress = useMotionValue(0);
  const lastCard = painPoints.length - 1;

  const goTo = useCallback(
    (direction: 1 | -1) => {
      if (cooldownRef.current) return true; // still consume the event
      const prev = indexRef.current;
      const next = Math.max(0, Math.min(lastCard, prev + direction));
      if (next === prev) return false; // let page scroll naturally
      indexRef.current = next;
      cooldownRef.current = true;
      lockedRef.current = true;
      animateTo(progress, next);
      setTimeout(() => {
        cooldownRef.current = false;
      }, 650);
      return true;
    },
    [progress, lastCard]
  );

  // Lock body scroll while inside slider
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top <= 80 && rect.bottom >= window.innerHeight * 0.6;
      if (!inView) {
        lockedRef.current = false;
        return;
      }

      const delta = e.deltaY;
      if (Math.abs(delta) < 8) return;

      const dir: 1 | -1 = delta > 0 ? 1 : -1;
      const consumed = goTo(dir);
      if (consumed) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [goTo]);

  // Touch handling
  const touchY = useRef(0);
  useEffect(() => {
    const onStart = (e: TouchEvent) => {
      touchY.current = e.touches[0].clientY;
    };
    const onEnd = (e: TouchEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top <= 80 && rect.bottom >= window.innerHeight * 0.6;
      if (!inView) return;

      const delta = touchY.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) < 30) return;
      const dir: 1 | -1 = delta > 0 ? 1 : -1;
      goTo(dir);
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
  }, [goTo]);

  return (
    <section
      id="probleme"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden py-10 sm:py-14 lg:py-20"
    >
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-muted to-background" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-secondary to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

      <div className="container relative z-10 mx-auto flex flex-col gap-6 sm:gap-8">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-body uppercase tracking-[0.2em] text-accent">
              Wenn es aktuell stockt
            </p>
            <h2 className="text-2xl leading-tight text-foreground sm:text-4xl lg:text-[3.2rem]">
              Viele Betriebe verlieren online Anfragen,{" "}
              <span className="italic text-accent">ohne es zu merken.</span>
            </h2>
            <p className="mt-3 max-w-2xl text-base font-body leading-relaxed text-muted-foreground sm:text-xl">
              Das Problem ist selten die Arbeit auf der Baustelle. Das Problem ist der erste Eindruck davor.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div
          className="relative mx-auto w-full max-w-[42rem]"
          style={{ perspective: "1800px" }}
        >
          <div className="relative h-[52vh] min-h-[320px] max-h-[420px] sm:min-h-[360px] sm:max-h-[460px] lg:max-h-[500px]">
            {painPoints.map((point, i) => (
              <ProblemCard
                key={point.label}
                index={i}
                total={painPoints.length}
                point={point}
                progress={progress}
                reducedMotion={reduceMotion}
              />
            ))}
          </div>

          {/* Dots */}
          <div className="mt-5">
            <DotIndicator progress={progress} total={painPoints.length} />
          </div>

          {/* Scroll hint */}
          <motion.div
            className="mt-3 flex justify-center text-muted-foreground/50"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
