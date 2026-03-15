import ScrollReveal from "./ScrollReveal";
import person1 from "@/assets/person-1.jpg";
import person2 from "@/assets/person-2.jpg";
import person3 from "@/assets/person-3.jpg";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  {
    quote:
      "Seit der neuen Webseite bekomme ich pro Woche mehrere Anfragen über Google. Vorher kam online praktisch nichts rein.",
    name: "Thomas Richter",
    title: "Elektriker, Richter Elektrotechnik",
    metric: "+340%",
    metricLabel: "mehr Anfragen",
    result: "Vorher keine stabile Online-Anfragequelle",
    image: person1,
  },
  {
    quote:
      "Ich hatte vorher gar keine Webseite. Nach zwei Wochen war ich online und Kunden konnten endlich direkt sehen, was wir anbieten.",
    name: "Sandra Hoffmann",
    title: "Malermeisterin, Hoffmann & Sohn",
    metric: "14 Tage",
    metricLabel: "bis online",
    result: "Von Null auf professionellen Auftritt",
    image: person2,
  },
  {
    quote:
      "Unser Google-Maps-Profil war kaum sichtbar. Jetzt werden wir in der Region deutlich besser gefunden und bekommen regelmäßig Anrufe.",
    name: "Klaus Becker",
    title: "Dachdeckermeister, Becker Dach",
    metric: "Top 3",
    metricLabel: "lokale Sichtbarkeit",
    result: "Stärkere Präsenz in lokaler Suche",
    image: person3,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="stimmen" className="py-12 sm:py-14 lg:py-20 overflow-hidden">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 sm:mb-10 gap-4 sm:gap-6">
            <div>
              <p className="text-sm font-body tracking-[0.2em] uppercase text-primary mb-4">Kundenstimmen</p>
              <h2 className="text-[2.05rem] sm:text-4xl lg:text-[3.2rem] leading-tight max-w-xl">
                Betriebe wie Ihrer zeigen,
                <br />
                dass es <span className="italic text-primary">messbar funktioniert.</span>
              </h2>
            </div>
            <p className="text-muted-foreground font-body max-w-sm lg:text-right text-base sm:text-lg">
              Echte Stimmen von Handwerksbetrieben, die vorher keine oder nur eine schwache Webseite hatten.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 0.12}>
              <article
                className={`rounded-2xl overflow-hidden flex flex-col h-full ${
                  i === 1 ? "bg-secondary text-secondary-foreground" : "neu-surface"
                }`}
              >
                <div className="relative h-44 sm:h-52 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover object-top" />
                  <div
                    className={`absolute inset-0 ${
                      i === 1 ? "bg-gradient-to-t from-secondary via-secondary/45 to-transparent" : "bg-gradient-to-t from-card via-card/45 to-transparent"
                    }`}
                  />
                  <div className="absolute bottom-4 left-5">
                    <p className="font-display text-3xl sm:text-4xl text-primary">{item.metric}</p>
                    <p className={`text-xs sm:text-sm font-body uppercase tracking-[0.18em] ${i === 1 ? "text-secondary-foreground/60" : "text-muted-foreground"}`}>
                      {item.metricLabel}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
                  <span
                    className={`inline-flex w-fit rounded-full px-3 py-1 text-xs sm:text-sm uppercase tracking-wider ${
                      i === 1
                        ? "bg-secondary-foreground/10 text-secondary-foreground/70"
                        : "bg-primary/5 text-muted-foreground"
                    }`}
                  >
                    {item.result}
                  </span>
                  <p className={`font-body text-base sm:text-lg leading-relaxed ${i === 1 ? "text-secondary-foreground/85" : "text-foreground/75"}`}>
                    "{item.quote}"
                  </p>
                  <div>
                    <p className={`font-body font-semibold text-base ${i === 1 ? "text-secondary-foreground" : "text-foreground"}`}>{item.name}</p>
                    <p className={`text-sm font-body ${i === 1 ? "text-secondary-foreground/60" : "text-muted-foreground"}`}>{item.title}</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-7 sm:mt-8 rounded-xl neu-surface-soft p-4 sm:p-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-base sm:text-lg font-body text-muted-foreground leading-relaxed">
              Das sagen Betriebe, die vorher keine oder nur eine schwache Webseite hatten. Im nächsten Schritt prüfen wir Ihren Status und empfehlen den klarsten Weg.
            </p>
            <Button asChild variant="hero" className="w-full sm:w-auto">
              <Link to="/qualifizierung">
                Jetzt Status prüfen <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
