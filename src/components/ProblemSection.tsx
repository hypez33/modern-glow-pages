import ScrollReveal from "./ScrollReveal";

const painPoints = [
  "Es gibt noch keine Website oder nur eine sehr einfache Seite ohne Wirkung.",
  "Die bestehende Website wirkt alt und baut beim ersten Klick kein Vertrauen auf.",
  "Bei Google oder in Maps ist der Betrieb kaum sichtbar.",
  "Leistungen sind unklar dargestellt und unterscheiden sich kaum vom Wettbewerb.",
  "Kunden wissen nicht sofort, was angeboten wird und wie sie Kontakt aufnehmen können.",
  "Anfragen kommen fast nur über Empfehlungen statt zusätzlich planbar über die Website.",
];

const ProblemSection = () => {
  return (
    <section
      id="ausgangslage"
      className="relative min-h-screen py-14 sm:py-16 lg:py-24 overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-muted to-background" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

      <div className="container mx-auto relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl">
            <h2 className="text-[2.05rem] sm:text-4xl lg:text-[3.2rem] leading-tight text-foreground">
              Viele Handwerksbetriebe verlieren online Anfragen, <span className="italic text-accent">ohne es zu merken.</span>
            </h2>
            <p className="mt-4 text-lg sm:text-xl font-body text-muted-foreground max-w-2xl leading-relaxed">
              Nicht weil die Arbeit nicht gut ist. Sondern weil der erste Eindruck online nicht überzeugt.
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

        <ScrollReveal>
          <div className="mt-7 rounded-xl neu-surface px-4 py-4 sm:px-5">
            <p className="text-base sm:text-lg font-body text-foreground leading-relaxed">
              <strong>Die Folge:</strong> Interessenten springen ab, bevor sie überhaupt anrufen oder eine Anfrage senden.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProblemSection;
