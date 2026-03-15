import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import teamImage from "@/assets/team-collab.jpg";
import workspaceImage from "@/assets/workspace.jpg";
import person1 from "@/assets/person-1.jpg";
import person2 from "@/assets/person-2.jpg";

const claims = [
  "Auf jedem Gerät sauber lesbar",
  "Klare Kontaktwege",
  "Leistungen verständlich erklärt",
  "Sauber strukturierter Aufbau",
];

const PhotoBreakSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftImageY = useTransform(scrollYProgress, [0, 1], [-24, 24]);
  const rightTopY = useTransform(scrollYProgress, [0, 1], [-16, 18]);
  const rightBottomY = useTransform(scrollYProgress, [0, 1], [16, -16]);

  return (
    <section ref={sectionRef} className="py-10 sm:py-12 lg:py-16 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-3 sm:gap-4 lg:gap-6 items-stretch" style={{ minHeight: "380px" }}>
          <ScrollReveal className="col-span-12 md:col-span-7" direction="left">
            <motion.div
              className="relative rounded-2xl overflow-hidden group h-full min-h-[250px] sm:min-h-[290px]"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <motion.img
                src={teamImage}
                alt="Handwerker-Webseite in Aktion"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ y: leftImageY }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/15 to-transparent"
                whileHover={{ opacity: 0.88 }}
                transition={{ duration: 0.35 }}
              />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 max-w-[320px]">
                <p className="text-xs sm:text-sm font-body uppercase tracking-[0.2em] text-primary-foreground/65 dark:text-white mb-2">So kann Ihr Betrieb online wirken</p>
                <p className="font-display text-2xl sm:text-3xl lg:text-[2.2rem] text-primary-foreground dark:text-white leading-tight">
                  Professionell. Klar. Vertrauenswürdig. Damit Kunden sofort sehen: <span className="italic">Hier arbeitet ein echter Fachbetrieb.</span>
                </p>
              </div>
            </motion.div>
          </ScrollReveal>

          <div className="col-span-12 md:col-span-5 flex flex-col gap-3 sm:gap-4 lg:gap-6">
            <ScrollReveal className="flex-1" direction="right" delay={0.1}>
              <motion.div
                className="relative rounded-2xl overflow-hidden group min-h-[170px] h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.img
                  src={person1}
                  alt="Zufriedener Handwerker mit Tablet"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  style={{ y: rightTopY }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent" />
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                  <p className="font-body text-base font-semibold text-primary-foreground dark:text-white">Professionell auf jedem Gerät</p>
                  <p className="text-sm font-body text-primary-foreground/65 dark:text-white/80">Mobil sauber und direkt verständlich</p>
                </div>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal className="flex-1" direction="right" delay={0.2}>
              <motion.div
                className="relative rounded-2xl overflow-hidden group min-h-[170px] h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.img
                  src={workspaceImage}
                  alt="Webseiten-Design für Handwerksbetrieb"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ y: rightBottomY }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent" />
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                  <p className="font-body text-base font-semibold text-primary-foreground dark:text-white">Klare Leistungen und Kontaktwege</p>
                  <p className="text-sm font-body text-primary-foreground/65 dark:text-white/80">Sauber strukturiert und vertrauenswürdig aufgebaut</p>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={0.25}>
          <motion.div
            className="mt-5 sm:mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-xl neu-surface px-4 py-3"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[person1, person2].map((img, i) => (
                  <img key={i} src={img} alt="Kunde" className="w-9 h-9 rounded-full object-cover object-top border-2 border-background" />
                ))}
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-xs font-body font-bold text-primary-foreground border-2 border-background">
                  +380
                </div>
              </div>
              <p className="text-base font-body text-muted-foreground">So kann Ihr Betrieb online professionell, klar und vertrauenswürdig wirken</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {claims.map((claim) => (
                <motion.span
                  key={claim}
                  className="inline-flex rounded-full neu-inset px-3 py-1 text-xs sm:text-sm uppercase tracking-wider text-muted-foreground"
                  whileHover={{ y: -2, scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  {claim}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PhotoBreakSection;
