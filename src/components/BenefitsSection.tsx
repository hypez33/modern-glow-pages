import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ArrowRight } from "lucide-react";

const benefits = [
  {
    number: "01",
    title: "Sie arbeiten, die Seite gewinnt Anfragen",
    description:
      "Während Sie im Betrieb sind, nimmt die Webseite rund um die Uhr Kontaktanfragen auf und leitet sie klar weiter.",
  },
  {
    number: "02",
    title: "In 14 Tagen online",
    description:
      "Keine monatelange Hängepartie. Mit klarem Ablauf ist Ihre Seite in kurzer Zeit live und einsatzbereit.",
  },
  {
    number: "03",
    title: "Dort sichtbar, wo Kunden suchen",
    description:
      "Google, lokale Suche und Maps werden mitgedacht, damit Ihr Betrieb bei relevanten Suchanfragen erscheint.",
  },
  {
    number: "04",
    title: "Ohne Technikstress",
    description:
      "Design, Inhalte, Hosting und Updates laufen über uns. Sie konzentrieren sich auf Team, Kunden und Baustelle.",
  },
];

const SWIPE_THRESHOLD = 50;

const BenefitsSection = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % benefits.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + benefits.length) % benefits.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 4500);
    return () => clearInterval(interval);
  }, [next]);

  const goTo = (index: number) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) {
      next();
    } else if (info.offset.x > SWIPE_THRESHOLD) {
      prev();
    }
  };

  const getIndex = (offset: number) => (active + offset + benefits.length) % benefits.length;

  const cardVariants = {
    enter: (dir: number) => ({
      rotateY: dir > 0 ? 36 : -36,
      x: dir > 0 ? 260 : -260,
      opacity: 0,
      scale: 0.82,
    }),
    center: {
      rotateY: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
    exit: (dir: number) => ({
      rotateY: dir > 0 ? -36 : 36,
      x: dir > 0 ? -260 : 260,
      opacity: 0,
      scale: 0.82,
      transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
    }),
  };

  const sideCards = [-1, 1].map((offset) => {
    const idx = getIndex(offset);
    const item = benefits[idx];
    return (
      <div
        key={`side-${offset}`}
        onClick={() => goTo(idx)}
        className="hidden lg:flex cursor-pointer flex-col justify-center rounded-xl p-5 neu-surface-soft neu-pressable backdrop-blur-sm transition-all duration-500"
        style={{
          perspective: "1000px",
          transform: `scale(0.86) rotateY(${offset * -14}deg)`,
          opacity: 0.55,
          minHeight: "188px",
        }}
      >
        <span className="text-3xl font-display text-primary/20 leading-none mb-2">{item.number}</span>
        <h3 className="font-body font-semibold text-lg text-foreground/70 mb-2">{item.title}</h3>
        <p className="text-muted-foreground/55 font-body text-base leading-relaxed line-clamp-2">{item.description}</p>
      </div>
    );
  });

  return (
    <section id="vorteile" className="py-12 sm:py-14 lg:py-20 overflow-hidden">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <p className="text-sm font-body tracking-[0.2em] uppercase text-primary mb-4">Warum das wirkt</p>
            <h2 className="text-[2.05rem] sm:text-4xl lg:text-[3.25rem] leading-tight mb-4">
              Ihr Handwerk verdient eine <span className="italic text-primary">starke digitale Basis.</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg sm:text-xl max-w-2xl mx-auto">
              Damit Kunden nicht nur schauen, sondern sich direkt bei Ihnen melden.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative flex items-center justify-center gap-4 lg:gap-6" style={{ perspective: "1200px", minHeight: "230px" }}>
          {sideCards[0]}

          <div className="relative w-full max-w-xl touch-pan-y" style={{ minHeight: "210px" }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.28}
                onDragEnd={handleDragEnd}
                className="absolute inset-0 neu-surface rounded-2xl p-5 sm:p-6 lg:p-8 shadow-elevated cursor-grab active:cursor-grabbing"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex gap-4 items-start">
                  <span className="text-4xl sm:text-5xl font-display text-primary/30 leading-none">{benefits[active].number}</span>
                  <div>
                    <h3 className="font-body font-semibold text-xl sm:text-2xl lg:text-[1.7rem] text-foreground mb-2.5">{benefits[active].title}</h3>
                    <p className="text-base sm:text-lg text-muted-foreground font-body leading-relaxed">{benefits[active].description}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {sideCards[1]}
        </div>

        <p className="text-center text-sm text-muted-foreground/60 font-body mt-3 lg:hidden">← Wischen zum Blättern →</p>

        <div className="flex justify-center gap-2 mt-4 sm:mt-5">
          {benefits.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === active ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/40"
              }`}
              aria-label={`Vorteil ${i + 1}`}
            />
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-7 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-xl neu-surface-soft p-4 sm:p-5">
            <p className="font-body text-base sm:text-lg text-muted-foreground leading-relaxed">
              Im nächsten Schritt sehen Sie, wie diese Vorteile konkret in Ihrem Projekt umgesetzt werden.
            </p>
            <a href="#ablauf" className="inline-flex items-center gap-1.5 text-base font-body text-foreground hover:text-primary transition-colors">
              Zum Ablauf <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BenefitsSection;
