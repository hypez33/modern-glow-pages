import ScrollReveal from "./ScrollReveal";

const painPoints = [
  "Es gibt noch keine Webseite oder nur eine einfache Visitenkarte ohne Wirkung.",
  "Die aktuelle Seite wirkt alt und schafft beim ersten Klick kein Vertrauen.",
  "Bei Google und Maps taucht der Betrieb kaum oder gar nicht auf.",
  "Anfragen kommen fast nur über Empfehlungen statt planbar über die Webseite.",
  "Leistungen sind unklar dargestellt und unterscheiden sich nicht vom Wettbewerb.",
  "Kontaktwege sind unpraktisch, Kunden springen vor dem Anruf wieder ab.",
];

const ProblemSection = () => {
  return (
    <section
      id="probleme"
      className="relative min-h-screen py-14 sm:py-16 lg:py-24 overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-muted to-background" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

      <div className="container mx-auto relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-sm font-body tracking-[0.2em] uppercase text-accent mb-4">Wenn es aktuell stockt</p>
            <h2 className="text-[2.05rem] sm:text-4xl lg:text-[3.2rem] leading-tight text-foreground">
              Viele Betriebe verlieren online Anfragen, <span className="italic text-accent">ohne es zu merken.</span>
            </h2>
            <p className="mt-4 text-lg sm:text-xl font-body text-muted-foreground max-w-2xl leading-relaxed">
              Das Problem ist selten die Arbeit auf der Baustelle. Das Problem ist der erste Eindruck davor.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {painPoints.map((point, index) => (
            <ScrollReveal key={point} delay={index * 0.05}>
              <div className="rounded-xl border border-border/70 bg-background/82 backdrop-blur-[2px] p-4 sm:p-5 h-full shadow-card">
                <p className="text-base sm:text-lg font-body leading-relaxed text-foreground">{point}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
