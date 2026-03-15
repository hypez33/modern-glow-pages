import { ArrowRight, Globe, Search, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Webseite Basis",
    price: "ab 990€ einmalig",
    fit: "Ideal für Einzelunternehmer und kleine Teams",
    result: "Schneller, professioneller Auftritt mit klaren Kontaktwegen",
    points: [
      "Strategischer Seitenaufbau für Anfragen",
      "Mobil optimiert, schnell und sauber lesbar",
      "Leistungen, Referenzen und Kontakt klar strukturiert",
      "Inklusive technischer Einrichtung",
    ],
  },
  {
    icon: Search,
    title: "Webseite + Sichtbarkeit",
    price: "ab 149€/Monat",
    fit: "Ideal für wachsende Betriebe mit klarem Einzugsgebiet",
    result: "Mehr Auffindbarkeit in Google und Google Maps",
    points: [
      "Laufende lokale SEO-Optimierung",
      "Google Business Profil mitbetreut",
      "Monatliche Anpassungen an Inhalten",
      "Kurzes Performance-Update pro Monat",
    ],
    highlighted: true,
  },
  {
    icon: ShieldCheck,
    title: "Volle Betreuung",
    price: "ab 249€/Monat",
    fit: "Ideal für Betriebe, die alles aus einer Hand möchten",
    result: "Stabiler Online-Auftritt mit kontinuierlicher Weiterentwicklung",
    points: [
      "Webseite, Sichtbarkeit und Inhaltspflege kombiniert",
      "Regelmäßige Verbesserungen und Aktualisierungen",
      "Technische Wartung und Sicherheit inklusive",
      "Ein fester Ansprechpartner für alles",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="pakete" className="py-14 sm:py-16 lg:py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12">
            <p className="text-sm font-body tracking-[0.2em] uppercase text-accent mb-4">Leistungen und Pakete</p>
            <h2 className="text-[2.05rem] sm:text-4xl lg:text-[3.2rem] leading-tight mb-4">
              Erst eine saubere Webseite,
              <br />
              dann auf Wunsch <span className="italic text-accent">laufender Service.</span>
            </h2>
            <p className="text-secondary-foreground/70 font-body text-lg sm:text-xl leading-relaxed">
              Sie wählen, wie viel Unterstützung Sie brauchen. Keine überladene Preis-Show, sondern klare Pakete für echte Betriebsrealität.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-xl neu-inset px-4 py-3 text-sm sm:text-base font-body text-secondary-foreground/70 mb-6 sm:mb-8">
            Vergleich: <span className="text-secondary-foreground">Einzelunternehmer</span> · <span className="text-secondary-foreground">Wachsende Betriebe</span> · <span className="text-secondary-foreground">Volle Betreuung</span>
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
                  <strong>Für wen:</strong> {service.fit}
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
              Unsicher, welches Paket passt? Wir ordnen das kurz mit Ihnen und empfehlen nur, was wirklich nötig ist.
            </p>
            <Button asChild variant="hero" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/qualifizierung">
                Passendes Paket finden <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
