import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { AlertTriangle, ArrowDown } from "lucide-react";
import { useRef, useState } from "react";
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
  const blur = useTransform(relative, (value) => `blur(${Math.max(0, Math.abs(value) - 0.05) * 4.2}px)`);
  const shadow = useTransform(relative, (value) => {
    const intensity = Math.max(0.3, 1 - Math.min(Math.abs(value), 1.15) * 0.55);
    return `0 ${Math.round(14 + intensity * 16)}px ${Math.round(38 + intensity * 24)}px hsl(var(--foreground) / ${(
      0.08 +
      intensity * 0.08
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

const ProblemSection = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });
  const carouselProgress = useSpring(useTransform(scrollYProgress, [0, 1], [0, painPoints.length - 1]), {
    stiffness: 120,
    damping: 26,
    mass: 0.24,
  });

  useMotionValueEvent(carouselProgress, "change", (value) => {
    const nextIndex = Math.max(0, Math.min(painPoints.length - 1, Math.round(value)));
    setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
  });

  return (
    <section id="probleme" className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-muted to-background" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-secondary to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

      <div className="container relative z-10 mx-auto">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-body uppercase tracking-[0.2em] text-accent">Wenn es aktuell stockt</p>
            <h2 className="text-[2.05rem] leading-tight text-foreground sm:text-4xl lg:text-[3.2rem]">
              Viele Betriebe verlieren online Anfragen, <span className="italic text-accent">ohne es zu merken.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg font-body leading-relaxed text-muted-foreground sm:text-xl">
              Das Problem ist selten die Arbeit auf der Baustelle. Das Problem ist der erste Eindruck davor.
            </p>
          </div>
        </ScrollReveal>

        <div
          ref={trackRef}
          className="relative mt-10 sm:mt-12"
          style={{ height: `calc(100vh + ${(painPoints.length - 1) * 34}vh)` }}
        >
          <div className="sticky top-0 flex min-h-screen items-center">
            <ScrollReveal className="w-full">
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:items-center lg:gap-10">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-2 text-sm font-body text-foreground shadow-soft">
                    <ArrowDown className="h-4 w-4 text-accent" />
                    Scrollen, um jeden Engpass einzeln nach vorne zu holen
                  </div>

                  <p className="mt-5 text-base font-body leading-relaxed text-muted-foreground sm:text-lg">
                    Statt eines langen Kartenblocks sehen Besucher hier Punkt fuer Punkt, wo die Website aktuell Vertrauen, Sichtbarkeit oder direkte Kontakte verliert.
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2">
                    {painPoints.map((point, index) => (
                      <div
                        key={point.label}
                        className={`rounded-2xl border px-3 py-3 transition-all duration-500 ${
                          activeIndex === index
                            ? "border-primary/30 bg-background/85 shadow-card"
                            : "border-border/50 bg-background/45"
                        }`}
                      >
                        <p className="text-[11px] font-body uppercase tracking-[0.22em] text-muted-foreground">
                          0{index + 1}
                        </p>
                        <p className="mt-2 text-sm font-body leading-snug text-foreground sm:text-[0.95rem]">
                          {point.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-border/65 bg-background/78 p-4 shadow-card backdrop-blur-sm sm:p-5">
                    <p className="text-sm font-body leading-relaxed text-foreground sm:text-base">
                      <strong>Die Folge:</strong> Interessenten springen ab, bevor sie ueberhaupt anrufen oder eine Anfrage senden.
                    </p>
                  </div>
                </div>

                <div className="relative mx-auto w-full max-w-[42rem]" style={{ perspective: "1800px" }}>
                  <div className="relative h-[24rem] sm:h-[28rem] lg:h-[32rem]">
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
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
