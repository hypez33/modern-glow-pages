import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Kurzes Kennenlernen",
    text: "In 15 Minuten klaeren wir Gewerk, Region, Ziel und Ihre aktuelle Ausgangslage.",
  },
  {
    number: "02",
    title: "Konzept, Texte und Struktur",
    text: "Sie geben den Input aus Ihrem Alltag. Daraus entsteht ein klarer und professioneller Auftritt.",
  },
  {
    number: "03",
    title: "Umsetzung und Freigabe",
    text: "Sie sehen den Stand der Website Schritt fuer Schritt und geben nur das frei, was fuer Sie passt.",
  },
  {
    number: "04",
    title: "Livegang",
    text: "Ihre Website geht online und ist sauber eingerichtet, mobil optimiert und kontaktfreundlich aufgebaut.",
  },
];

const ProcessSection = () => {
  return (
    <section id="ablauf" className="py-12 sm:py-14 lg:py-20">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="max-w-2xl mb-8 sm:mb-10">
            <p className="text-sm font-body tracking-[0.2em] uppercase text-primary mb-4">Ablauf</p>
            <h2 className="text-[2.05rem] sm:text-4xl lg:text-[3.2rem] leading-tight mb-4">So laeuft die Zusammenarbeit ab</h2>
            <p className="font-body text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Einfach. Klar. Ohne Projekt-Chaos.
            </p>
            <p className="mt-3 font-body text-base sm:text-lg text-muted-foreground leading-relaxed">
              Sie wissen zu jedem Zeitpunkt, was als Naechstes passiert. Kein Fachchinesisch, keine unnoetig langen Abstimmungen.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <ScrollReveal key={item.number} delay={index * 0.08}>
              <article className="rounded-xl neu-surface-soft neu-pressable p-4 sm:p-5 h-full">
                <p className="font-display text-3xl text-primary/35 leading-none mb-3">{item.number}</p>
                <h3 className="font-body font-semibold text-xl sm:text-2xl mb-2">{item.title}</h3>
                <p className="text-base sm:text-lg font-body text-muted-foreground leading-relaxed">{item.text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
