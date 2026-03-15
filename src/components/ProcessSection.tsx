import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Kurzes Kennenlernen",
    text: "Wir klären in 15 Minuten Gewerk, Region und Ziel. Ohne Fachchinesisch.",
  },
  {
    number: "02",
    title: "Konzept, Texte, Design",
    text: "Sie geben Input aus dem Alltag. Wir bauen daraus klare Inhalte und Struktur.",
  },
  {
    number: "03",
    title: "Umsetzung und Abstimmung",
    text: "Sie sehen den Stand laufend und geben punktgenau frei. Keine langen Schleifen.",
  },
  {
    number: "04",
    title: "Online und betreut",
    text: "Die Seite geht live, wird technisch gepflegt und für lokale Suche vorbereitet.",
  },
];

const ProcessSection = () => {
  return (
    <section id="ablauf" className="py-12 sm:py-14 lg:py-20">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="max-w-2xl mb-8 sm:mb-10">
            <p className="text-sm font-body tracking-[0.2em] uppercase text-primary mb-4">So läuft es ab</p>
            <h2 className="text-[2.05rem] sm:text-4xl lg:text-[3.2rem] leading-tight mb-4">
              Klarer Ablauf, <span className="italic text-primary">kein Projekt-Chaos.</span>
            </h2>
            <p className="font-body text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Sie wissen jederzeit, was als Nächstes passiert. Das spart Zeit und sorgt für einen sauberen Start.
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
