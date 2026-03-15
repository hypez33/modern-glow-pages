import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import ConsultationModal from "@/components/ConsultationModal";
import teamImage from "@/assets/team-collab.jpg";
import workspaceImage from "@/assets/workspace.jpg";
import FilmGrain from "@/components/FilmGrain";

const trustItems = [
  "Für Handwerksbetriebe in Deutschland",
  "Ohne Technikstress",
  "Mit festem Ansprechpartner",
];

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="hero" className="relative overflow-hidden pt-16 sm:pt-8 pb-8 sm:pb-12">
      <FilmGrain />
      <div className="absolute top-20 right-[-140px] h-[320px] w-[320px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-[-100px] h-[250px] w-[250px] rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto relative">
        <motion.div
          className="mb-4 flex justify-end lg:absolute lg:right-0 lg:top-0 lg:mb-0 lg:z-20"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
        >
          <div className="neu-surface-soft flex items-center rounded-2xl px-2 py-2 sm:px-3">
            <ThemeToggle className="shrink-0" />
          </div>
        </motion.div>

        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:items-end lg:gap-10">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="text-[2.4rem] leading-[1.05] sm:text-5xl lg:text-[4rem] xl:text-[4.6rem] tracking-tight mb-3 sm:mb-6">
              Websites fuer Handwerksbetriebe in Deutschland, die Vertrauen schaffen und neue Anfragen moeglich machen
            </h1>

            <p className="text-base sm:text-xl lg:text-[1.35rem] text-muted-foreground font-body max-w-2xl leading-relaxed mb-4 sm:mb-8">
              Ob Sie noch keine Website haben oder Ihr aktueller Auftritt nicht mehr ueberzeugt: Wir erstellen moderne Websites fuer Handwerksbetriebe in Deutschland, die professionell wirken, auf dem Smartphone sauber funktionieren und den Kontakt fuer potenzielle Kunden einfacher machen.
            </p>

            <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm sm:text-lg font-body text-foreground/85 mb-5 sm:mb-8">
              {trustItems.map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button variant="hero" size="xl" className="w-full sm:w-auto" onClick={() => setModalOpen(true)}>
                60-Sekunden-Check starten <ArrowRight className="w-5 h-5" />
              </Button>
              <Button asChild variant="hero-outline" size="xl" className="w-full sm:w-auto">
                <a href="tel:+49800123456">
                  <Phone className="w-4 h-4" /> 0800 123 456
                </a>
              </Button>
            </div>
            <p className="text-xs sm:text-base text-muted-foreground font-body mt-2 sm:mt-3">
              Kostenlos · Unverbindlich · Speziell fuer Handwerksbetriebe in Deutschland
            </p>
          </motion.div>

          <motion.div
            className="mb-8 sm:mb-6 lg:mb-0 lg:col-span-5"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative mx-auto max-w-[520px]">
              <img
                src={teamImage}
                alt="Handwerker-Webseite auf verschiedenen Geräten"
                className="w-full rounded-2xl shadow-elevated object-cover aspect-[4/3]"
              />
              <img
                src={workspaceImage}
                alt="Google-Ergebnisse für Handwerksbetrieb"
                className="absolute -bottom-5 left-3 sm:left-5 w-[68%] rounded-xl shadow-elevated object-cover aspect-video border-4 border-background"
              />
            </div>
          </motion.div>
        </div>

        <div id="zahlen" className="mt-7 sm:mt-9 lg:max-w-[56rem]">
          <h2 className="text-[1.5rem] sm:text-[1.9rem] lg:text-[2.3rem] leading-tight mb-3 sm:mb-4">
            Mehr Sichtbarkeit. Mehr Vertrauen. Mehr qualifizierte Anfragen.
          </h2>

          <motion.div
            className="grid grid-cols-2 gap-2 sm:gap-2.5 lg:grid-cols-4"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <div className="rounded-lg sm:rounded-xl neu-surface-soft px-2.5 py-2 sm:px-3.5 sm:py-2.5">
              <p className="font-display text-xl sm:text-2xl lg:text-[1.6rem] text-foreground leading-none">+67%</p>
              <p className="mt-1 text-[11px] leading-tight text-muted-foreground font-body sm:text-sm">
                mehr qualifizierte Anfragen
              </p>
            </div>
            <div className="rounded-lg sm:rounded-xl neu-surface-soft px-2.5 py-2 sm:px-3.5 sm:py-2.5">
              <p className="font-display text-xl sm:text-2xl lg:text-[1.6rem] text-foreground leading-none">380+</p>
              <p className="mt-1 text-[11px] leading-tight text-muted-foreground font-body sm:text-sm">
                umgesetzte Websites fuer Handwerk und regionalen Mittelstand
              </p>
            </div>
            <div className="rounded-lg sm:rounded-xl neu-surface-soft px-2.5 py-2 sm:px-3.5 sm:py-2.5">
              <p className="font-display text-xl sm:text-2xl lg:text-[1.6rem] text-foreground leading-none">4.9★</p>
              <p className="mt-1 text-[11px] leading-tight text-muted-foreground font-body sm:text-sm">
                Google-Bewertung
              </p>
            </div>
            <div className="rounded-lg sm:rounded-xl neu-surface-soft px-2.5 py-2 sm:px-3.5 sm:py-2.5">
              <p className="font-display text-xl sm:text-2xl lg:text-[1.6rem] text-foreground leading-none">Ø 14 Tage</p>
              <p className="mt-1 text-[11px] leading-tight text-muted-foreground font-body sm:text-sm">
                bis zur fertigen Website
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-6 sm:mt-8 rounded-xl neu-surface px-4 py-3 sm:px-5 sm:py-4">
          <p className="text-base sm:text-lg font-body font-semibold text-foreground leading-relaxed">
            Fuer Handwerksbetriebe in Deutschland, die online professionell auftreten und leichter gefunden werden wollen
          </p>
          <p className="mt-2 text-sm sm:text-base font-body text-muted-foreground leading-relaxed">
            Ob Elektriker, Dachdecker, SHK, Maler, Gartenbau, Trockenbau oder Innenausbau: Wer heute online nicht ueberzeugend auftritt, wird oft gar nicht erst kontaktiert.
          </p>
        </div>
      </div>

      <ConsultationModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default HeroSection;
