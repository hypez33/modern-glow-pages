import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import problemBackground from "@/assets/problem-bg.webp";

const painPoints = [
  "Es gibt noch keine Webseite oder nur eine einfache Visitenkarte ohne Wirkung.",
  "Die aktuelle Seite wirkt alt und schafft beim ersten Klick kein Vertrauen.",
  "Bei Google und Maps taucht der Betrieb kaum oder gar nicht auf.",
  "Anfragen kommen fast nur über Empfehlungen statt planbar über die Webseite.",
  "Leistungen sind unklar dargestellt und unterscheiden sich nicht vom Wettbewerb.",
  "Kontaktwege sind unpraktisch, Kunden springen vor dem Anruf wieder ab.",
];

const ProblemSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-70, 70]);

  return (
    <section
      id="probleme"
      ref={sectionRef}
      className="relative min-h-screen py-14 sm:py-16 lg:py-24 overflow-hidden flex items-center"
    >
      <motion.img
        src={problemBackground}
        alt="Handwerker auf der Baustelle"
        aria-hidden="true"
        className="absolute inset-0 h-[118%] w-full object-cover"
        style={{ y: bgY }}
      />
      <div className="absolute inset-0 bg-secondary/72" />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/70 to-secondary/85" />

      <div className="container mx-auto relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-sm font-body tracking-[0.2em] uppercase text-accent mb-4">Wenn es aktuell stockt</p>
            <h2 className="text-[2.05rem] sm:text-4xl lg:text-[3.2rem] leading-tight text-secondary-foreground">
              Viele Betriebe verlieren online Anfragen, <span className="italic text-accent">ohne es zu merken.</span>
            </h2>
            <p className="mt-4 text-lg sm:text-xl font-body text-secondary-foreground/80 max-w-2xl leading-relaxed">
              Das Problem ist selten die Arbeit auf der Baustelle. Das Problem ist der erste Eindruck davor.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {painPoints.map((point, index) => (
            <ScrollReveal key={point} delay={index * 0.05}>
              <div className="rounded-xl border border-white/20 bg-secondary/45 backdrop-blur-[2px] p-4 sm:p-5 h-full shadow-card">
                <p className="text-base sm:text-lg font-body leading-relaxed text-white">{point}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
