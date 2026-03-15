import { Clock3, MapPinned, Smartphone, UserRoundCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const trades = [
  "Elektro",
  "Sanitär & Heizung",
  "Dach",
  "Maler",
  "Tischlerei",
  "Fliesen",
  "Gartenbau",
];

const proofItems = [
  {
    icon: Smartphone,
    title: "Mobil optimiert",
    text: "Leicht bedienbar auf jedem Smartphone.",
  },
  {
    icon: MapPinned,
    title: "Google-ready",
    text: "Struktur für lokale Suche und Maps.",
  },
  {
    icon: UserRoundCheck,
    title: "Fester Ansprechpartner",
    text: "Direkter Kontakt statt Ticketsystem.",
  },
  {
    icon: Clock3,
    title: "In 14 Tagen online",
    text: "Klare Abläufe, feste Meilensteine.",
  },
];

const TrustBarSection = () => {
  return (
    <section id="vertrauen" className="py-10 sm:py-12">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="rounded-2xl neu-surface p-5 sm:p-6">
            <p className="text-sm font-body tracking-[0.18em] uppercase text-primary mb-4">
              Bereits für Handwerksbetriebe im Einsatz
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {trades.map((trade) => (
                <span
                  key={trade}
                  className="inline-flex items-center rounded-full border border-border/50 bg-background/60 px-3 py-1 text-xs sm:text-sm font-body text-muted-foreground"
                >
                  {trade}
                </span>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {proofItems.map((item) => (
                <div key={item.title} className="rounded-xl neu-surface-soft neu-pressable p-4">
                  <item.icon className="h-4 w-4 text-primary mb-2" />
                  <p className="font-body text-base font-semibold text-foreground">{item.title}</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TrustBarSection;
