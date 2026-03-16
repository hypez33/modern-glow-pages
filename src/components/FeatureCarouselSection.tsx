import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Gauge,
  MapPinned,
  MessageSquareText,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import heroIllustration from "@/assets/hero-illustration.png";
import problemBg from "@/assets/problem-bg.webp";
import teamCollab from "@/assets/team-collab.jpg";
import workspace from "@/assets/workspace.jpg";
import personOne from "@/assets/person-1.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    id: "mobile",
    label: "Mobil stark",
    icon: Smartphone,
    image: heroIllustration,
    eyebrow: "Erster Eindruck",
    title: "Die Seite sieht auf dem Handy nicht nach Kompromiss aus.",
    description:
      "Große Buttons, klare Texte und ein Aufbau, den man sofort versteht. Genau da springen sonst die meisten Besucher wieder ab.",
  },
  {
    id: "google",
    label: "Lokal sichtbar",
    icon: MapPinned,
    image: workspace,
    eyebrow: "Gefunden werden",
    title: "Google versteht schneller, wer Sie sind und was Sie anbieten.",
    description:
      "Struktur, Inhalte und regionale Signale greifen sauber zusammen, damit Ihr Betrieb nicht irgendwo auf Seite drei verendet.",
  },
  {
    id: "trust",
    label: "Vertrauen direkt",
    icon: ShieldCheck,
    image: teamCollab,
    eyebrow: "Seriöser Auftritt",
    title: "Besucher merken in Sekunden, dass hier ein echter Betrieb dahintersteht.",
    description:
      "Klare Leistungen, echte Bilder, saubere Kontaktwege und ein ruhiges Layout schaffen Vertrauen, bevor überhaupt jemand anruft.",
  },
  {
    id: "performance",
    label: "Schnell geladen",
    icon: Gauge,
    image: problemBg,
    eyebrow: "Technische Basis",
    title: "Weniger Warten, mehr Anfragen.",
    description:
      "Eine schnelle Seite fühlt sich nicht nur besser an, sie sorgt auch dafür, dass Besucher länger bleiben und eher Kontakt aufnehmen.",
  },
  {
    id: "contact",
    label: "Klare Anfragewege",
    icon: MessageSquareText,
    image: personOne,
    eyebrow: "Kontakt ohne Reibung",
    title: "Der nächste Schritt ist überall eindeutig und simpel.",
    description:
      "Kein Rätselraten, kein digitales Labyrinth. Der Besucher weiß sofort, wie er Sie erreicht und warum er es tun sollte.",
  },
] as const;

const AUTO_PLAY_INTERVAL = 3400;
const ITEM_HEIGHT = 82;

const wrap = (min: number, max: number, value: number) => {
  const rangeSize = max - min;
  return ((((value - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const FeatureCarouselSection = () => {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex = ((step % FEATURES.length) + FEATURES.length) % FEATURES.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => window.clearInterval(interval);
  }, [isPaused, nextStep]);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + FEATURES.length) % FEATURES.length;
    if (diff === 0) return;
    setStep((prev) => prev + diff);
  };

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const length = FEATURES.length;

    let normalizedDiff = diff;
    if (diff > length / 2) normalizedDiff -= length;
    if (diff < -length / 2) normalizedDiff += length;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <section id="vorteile-slider" className="py-14 sm:py-16 lg:py-24 bg-background text-foreground overflow-hidden">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12">
            <p className="text-sm font-body tracking-[0.2em] uppercase text-accent mb-4">So fühlt sich der Unterschied an</p>
            <h2 className="text-[2.05rem] sm:text-4xl lg:text-[3.2rem] leading-tight mb-4">
              Keine Website als digitale Broschüre.
              <br />
              Sondern als <span className="italic text-accent">saubere Verkaufssektion</span> für Ihren Betrieb.
            </h2>
            <p className="text-foreground/70 font-body text-lg sm:text-xl leading-relaxed">
              Dieser Slider zeigt nicht Spielerei um der Spielerei willen, sondern die Punkte, die bei Besuchern sofort hängen bleiben.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div
            className="relative overflow-hidden rounded-[2rem] lg:rounded-[2.75rem] flex flex-col lg:flex-row min-h-[620px] border border-border/60 neu-surface"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="order-2 w-full lg:order-1 lg:w-[38%] min-h-[360px] md:min-h-[430px] lg:h-auto relative z-20 flex flex-col justify-center overflow-hidden px-5 sm:px-8 lg:px-10 py-8 sm:py-10 bg-secondary/65 border-t lg:border-t-0 lg:border-b-0 lg:border-r border-border/50">
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-secondary via-secondary/90 to-transparent z-30" />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-secondary via-secondary/90 to-transparent z-30" />

              <div className="relative z-20 mb-6">
                <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.28em] bg-accent/15 text-foreground border border-accent/20">
                  Interaktive Übersicht
                </span>
              </div>

              <div className="relative w-full h-[380px] sm:h-[430px] lg:h-[470px] flex items-center justify-start z-20">
                {FEATURES.map((feature, index) => {
                  const isActive = index === currentIndex;
                  const distance = index - currentIndex;
                  const wrappedDistance = wrap(-(FEATURES.length / 2), FEATURES.length / 2, distance);
                  const Icon = feature.icon;

                  return (
                    <motion.div
                      key={feature.id}
                      style={{ height: ITEM_HEIGHT, width: "100%" }}
                      animate={{
                        y: wrappedDistance * ITEM_HEIGHT,
                        opacity: 1 - Math.abs(wrappedDistance) * 0.23,
                        scale: isActive ? 1 : 0.96,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 92,
                        damping: 22,
                        mass: 1,
                      }}
                      className="absolute left-0 right-0 flex items-center justify-start"
                    >
                      <button
                        type="button"
                        onClick={() => handleChipClick(index)}
                        className={cn(
                          "w-full text-left rounded-full px-4 sm:px-5 py-4 sm:py-[1.05rem] border transition-all duration-500 flex items-center gap-3 sm:gap-4",
                          isActive
                            ? "bg-foreground text-background border-foreground shadow-elevated"
                            : "bg-background/60 text-foreground/60 border-border/70 hover:text-foreground hover:border-foreground/20"
                        )}
                        aria-pressed={isActive}
                      >
                        <span
                          className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-500",
                            isActive
                              ? "bg-accent text-accent-foreground border-accent"
                              : "bg-secondary text-foreground/60 border-border"
                          )}
                        >
                          <Icon className="w-[18px] h-[18px]" />
                        </span>
                        <span className="font-body text-sm sm:text-[15px] tracking-tight uppercase whitespace-nowrap">
                          {feature.label}
                        </span>
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="order-1 lg:order-2 flex-1 min-h-[500px] md:min-h-[580px] lg:min-h-0 relative flex items-center justify-center p-5 sm:p-8 lg:p-10 bg-background">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.14),transparent_28%),radial-gradient(circle_at_bottom_left,hsl(var(--foreground)/0.08),transparent_30%)]" />

              <div className="relative w-full max-w-[520px] aspect-[4/5] flex items-center justify-center">
                {FEATURES.map((feature, index) => {
                  const status = getCardStatus(index);
                  const isActive = status === "active";
                  const isPrev = status === "prev";
                  const isNext = status === "next";

                  return (
                    <motion.article
                      key={feature.id}
                      initial={false}
                      animate={{
                        x: isActive ? 0 : isPrev ? -120 : isNext ? 120 : 0,
                        scale: isActive ? 1 : isPrev || isNext ? 0.88 : 0.74,
                        opacity: isActive ? 1 : isPrev || isNext ? 0.38 : 0,
                        rotate: isPrev ? -4 : isNext ? 4 : 0,
                        zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                        pointerEvents: isActive ? "auto" : "none",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 24,
                        mass: 0.82,
                      }}
                      className="absolute inset-0 overflow-hidden rounded-[1.7rem] sm:rounded-[2rem] border border-border/70 bg-card shadow-card"
                    >
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className={cn(
                          "w-full h-full object-cover transition-all duration-700",
                          isActive ? "grayscale-0 blur-0" : "grayscale-[0.35] blur-[1px] brightness-[0.78]"
                        )}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5" />

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.28 }}
                            className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10"
                          >
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.25em] text-white/85 backdrop-blur-md mb-4">
                              <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_14px_hsl(var(--accent))]" />
                              {feature.eyebrow}
                            </div>
                            <h3 className="text-white text-2xl sm:text-[2rem] leading-tight mb-3 max-w-[24rem]">
                              {feature.title}
                            </h3>
                            <p className="text-white/82 font-body text-base sm:text-lg leading-relaxed max-w-[29rem]">
                              {feature.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className={cn("absolute top-5 left-5 sm:top-6 sm:left-6 transition-opacity duration-300", isActive ? "opacity-100" : "opacity-0")}>
                        <div className="inline-flex items-center gap-2 rounded-full bg-black/28 backdrop-blur-md border border-white/10 px-3 py-1.5 text-white/88 text-[11px] uppercase tracking-[0.24em]">
                          {String(index + 1).padStart(2, "0")} / {String(FEATURES.length).padStart(2, "0")}
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeatureCarouselSection;
