import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { useRef } from "react";
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

type ProblemCarouselCardProps = {
  index: number;
  total: number;
  point: (typeof painPoints)[number];
  progress: MotionValue<number>;
  reducedMotion: boolean;
};

const ProblemCarouselCard = ({
  index,
  total,
  point,
  progress,
  reducedMotion,
}: ProblemCarouselCardProps) => {
  const relative = useTransform(progress, (value) => {
    const offset = index - value;
    return Math.max(-2.35, Math.min(2.35, offset));
  });

  const opacity = useTransform(
    relative,
    [-1.15, -0.32, -0.08, 0, 0.08, 0.32, 1.15],
    [0, 0, 0.72, 1, 0.72, 0, 0]
  );
  const y = useTransform(
    relative,
    [-1.15, 0, 1.15],
    reducedMotion ? [-18, 0, 18] : [-42, 0, 42]
  );
  const scale = useTransform(
    relative,
    [-1.15, 0, 1.15],
    reducedMotion ? [0.98, 1, 0.98] : [0.93, 1, 0.95]
  );
  const rotateX = useTransform(
    relative,
    [-1.15, 0, 1.15],
    reducedMotion ? [0, 0, 0] : [8, 0, -8]
  );
  const rotateY = useTransform(
    relative,
    [-1.15, 0, 1.15],
    reducedMotion ? [0, 0, 0] : [-6, 0, 6]
  );
  const blur = useTransform(relative, (value) =>
    `blur(${Math.max(0, Math.abs(value) - 0.05) * 4.2}px)`
  );
  const shadow = useTransform(relative, (value) => {
    const intensity = Math.max(0.3, 1 - Math.min(Math.abs(value), 1.15) * 0.55);
    return `0 ${Math.round(14 + intensity * 16)}px ${Math.round(38 + intensity * 24)}px hsl(var(--foreground) / ${(
      0.08 + intensity * 0.08
    ).toFixed(3)})`;
  });

  return (
    <motion.article
      className="absolute inset-0 rounded-[1.65rem] border border-border/70 bg-background/88 p-5 sm:p-7 lg:p-8 backdrop-blur-md"
      style={{
        y,
        scale,
        rotateX,
        rotateY,
        opacity,
        filter: blur,
        boxShadow: shadow,
        transformStyle: "preserve-3d",
        zIndex: total - index,
      }}
    >
      <div className="flex h-full flex-col justify-between gap-6 sm:gap-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex rounded-full border border-border/60 bg-background/75 px-3 py-1 text-xs font-body uppercase tracking-[0.22em] text-primary">
              0{index + 1}
            </span>
            <p className="mt-4 text-sm sm:text-base font-body uppercase tracking-[0.16em] text-muted-foreground">
              {point.label}
            </p>
          </div>
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/16 text-accent">
            <AlertTriangle className="h-5 w-5" />
          </div>
        </div>

        <div className="space-y-5">
          <p className="max-w-[20ch] text-[1.5rem] leading-[1.08] tracking-tight text-foreground sm:text-[1.95rem] lg:text-[2.35rem]">
            {point.text}
          </p>
          <div className="rounded-2xl border border-border/55 bg-primary/[0.045] px-4 py-3">
            <p className="text-sm font-body leading-relaxed text-muted-foreground sm:text-base">
              Dieser Engpass kostet Vertrauen, Sichtbarkeit oder direkte Anfragen, bevor ueberhaupt ein Gespraech entsteht.
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

/* ── Dot indicator ── */
const DotIndicator = ({ progress, total }: { progress: MotionValue<number>; total: number }) => {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <DotItem key={i} index={i} progress={progress} />
      ))}
    </div>
  );
};

const DotItem = ({ index, progress }: { index: number; progress: MotionValue<number> }) => {
  const scale = useTransform(progress, (v) => {
    const dist = Math.abs(v - index);
    return dist < 0.5 ? 1.35 : 0.85;
  });
  const dotOpacity = useTransform(progress, (v) => {
    const dist = Math.abs(v - index);
    return dist < 0.5 ? 1 : 0.35;
  });
  const width = useTransform(progress, (v) => {
    const dist = Math.abs(v - index);
    return dist < 0.5 ? 24 : 8;
  });

  return (
    <motion.div
      className="h-2 rounded-full bg-accent"
      style={{ width, scale, opacity: dotOpacity }}
    />
  );
};

const ProblemSection = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // scrollYProgress goes 0→1 as the tall wrapper scrolls through
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to card index (0 → last)
  const carouselProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, painPoints.length - 1]
  );

  // Height: 100vh per card creates enough scroll room
  const scrollHeight = `${painPoints.length * 100}vh`;

  return (
    <div ref={wrapperRef} id="probleme" style={{ height: scrollHeight }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-muted to-background" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-secondary to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

        <div className="container relative z-10 mx-auto flex h-full flex-col justify-center py-14 sm:py-16 lg:py-20">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-body uppercase tracking-[0.2em] text-accent">
                Wenn es aktuell stockt
              </p>
              <h2 className="text-[2.05rem] leading-tight text-foreground sm:text-4xl lg:text-[3.2rem]">
                Viele Betriebe verlieren online Anfragen,{" "}
                <span className="italic text-accent">ohne es zu merken.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-lg font-body leading-relaxed text-muted-foreground sm:text-xl">
                Das Problem ist selten die Arbeit auf der Baustelle. Das Problem ist der erste Eindruck davor.
              </p>
            </div>
          </ScrollReveal>

          {/* Card slider */}
          <div className="relative mt-8 sm:mt-10 flex-1 min-h-0">
            <div
              className="relative mx-auto w-full max-w-[42rem] h-full max-h-[32rem]"
              style={{ perspective: "1800px" }}
            >
              <div className="relative h-full">
                {painPoints.map((point, index) => (
                  <ProblemCarouselCard
                    key={point.label}
                    index={index}
                    total={painPoints.length}
                    point={point}
                    progress={carouselProgress}
                    reducedMotion={reduceMotion}
                  />
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
              <DotIndicator progress={carouselProgress} total={painPoints.length} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
