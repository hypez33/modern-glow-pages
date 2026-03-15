import { useState } from "react";
import { ArrowRight, Globe, LayoutTemplate, Wrench } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import ConsultationModal from "@/components/ConsultationModal";

const services = [
  {
    icon: Globe,
    title: "One Pager",
    price: "ab 699 €",
    fit: "Einzelunternehmer, kleine Betriebe und der schnelle Start.",
    result: "Ideal für Handwerksbetriebe, die schnell professionell online sichtbar sein wollen.",
    points: [
      "Übersichtliche Website auf einer Seite",
      "Mobil optimiert",
      "Klare Darstellung Ihrer Leistungen",
      "Kontaktformular inklusive",
      "Schneller und professioneller Online-Auftritt",
    ],
  },
  {
    icon: LayoutTemplate,
    title: "Multi Page Website",
    price: "ab 1.399 €",
    fit: "Betriebe mit mehreren Leistungen, größerem Einzugsgebiet oder wachsendem Anspruch.",
    result: "Für Handwerksbetriebe, die mehrere Leistungen professionell darstellen und mehr Vertrauen aufbauen wollen.",
    points: [
      "Mehrseitige Website mit klarer Struktur",
      "Startseite, Leistungsseiten, Über-uns und Kontakt",
      "Mobil optimiert",
      "Sauberer Seitenaufbau für bessere Nutzerführung",
      "Kontaktformular inklusive",
    ],
    highlighted: true,
  },
  {
    icon: Wrench,
    title: "Individualentwicklung",
    price: "Preis auf Anfrage",
    fit: "Anspruchsvolle Projekte mit individuellen Anforderungen.",
    result: "Für Betriebe mit besonderen Anforderungen, individuellen Funktionen oder einem umfangreicheren digitalen Auftritt.",
    points: [
      "Individuelle Konzeption und Umsetzung",
      "Maßgeschneiderte Seitenstruktur",
      "Spezielle Funktionen und Anforderungen möglich",
      "Persönliche Abstimmung und individuelle Kalkulation",
    ],
  },
];

const ServicesSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="pakete" className="py-14 sm:py-16 lg:py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12">
            <p className="text-sm font-body tracking-[0.2em] uppercase text-accent mb-4">Leistungen und Pakete</p>
            <h2 className="text-[2.05rem] sm:text-4xl lg:text-[3.2rem] leading-tight mb-4">Passende Website-Lösungen für Handwerksbetriebe</h2>
            <p className="text-secondary-foreground/70 font-body text-lg sm:text-xl leading-relaxed">
              Klare Pakete, klarer Leistungsumfang. Damit Sie genau die Lösung wählen, die zu Ihrem Betrieb passt.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-xl neu-inset px-4 py-3 text-sm sm:text-base font-body text-secondary-foreground/70 mb-6 sm:mb-8">
            Vergleich: <span className="text-secondary-foreground">Schneller Start</span> · <span className="text-secondary-foreground">Mehrere Leistungen</span> · <span className="text-secondary-foreground">Individuelle Anforderungen</span>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.12}>
              <article
                className={`rounded-2xl p-5 sm:p-6 flex flex-col h-full transition-all duration-300 ${
                  service.highlighted
                    ? "bg-accent text-accent-foreground ring-2 ring-accent shadow-elevated relative"
                    : "neu-surface"
                }`}
              >
                {service.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-[11px] font-body font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Empfohlen
                  </span>
                )}

                <service.icon className={`w-8 h-8 mb-4 ${service.highlighted ? "text-accent-foreground" : "text-accent"}`} />
                <h3 className="font-body font-semibold text-2xl mb-1">{service.title}</h3>
                <p className={`font-display text-2xl sm:text-3xl mb-3 ${service.highlighted ? "text-accent-foreground" : "text-accent"}`}>
                  {service.price}
                </p>
                <p className={`text-base font-body mb-2 ${service.highlighted ? "text-accent-foreground/85" : "text-secondary-foreground/70"}`}>
                  <strong>Geeignet für:</strong> {service.fit}
                </p>
                <p className={`text-base font-body mb-5 ${service.highlighted ? "text-accent-foreground/85" : "text-secondary-foreground/70"}`}>
                  <strong>Ergebnis:</strong> {service.result}
                </p>

                <ul className="space-y-2.5 flex-1">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className={`flex items-start gap-2 text-base font-body ${
                        service.highlighted ? "text-accent-foreground/85" : "text-secondary-foreground/75"
                      }`}
                    >
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${service.highlighted ? "bg-accent-foreground" : "bg-accent"}`} />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-7 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-xl neu-surface-soft p-4 sm:p-5">
            <p className="font-body text-base sm:text-lg text-secondary-foreground/75">
              Unsicher, welche Lösung für Ihren Betrieb sinnvoll ist? Wir klären das kurz mit Ihnen und empfehlen nur, was wirklich passt.
            </p>
            <Button
              variant="hero"
              className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => setModalOpen(true)}
            >
              Passendes Paket finden <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </ScrollReveal>

        <ConsultationModal open={modalOpen} onOpenChange={setModalOpen} />
      </div>
    </section>
  );
};

export default ServicesSection;
