import { Clock3, MapPinned, Smartphone, UserRoundCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";


const proofItems = [
  {
    icon: Smartphone,
    title: "Mobil optimiert",
    text: "Ihre Website sieht auf jedem Smartphone sauber aus und ist leicht bedienbar.",
  },
  {
    icon: MapPinned,
    title: "Google-ready",
    text: "Damit Ihr Betrieb in der lokalen Suche und bei Google Maps besser gefunden werden kann.",
  },
  {
    icon: UserRoundCheck,
    title: "Fester Ansprechpartner",
    text: "Kein Ticketsystem, kein Weiterreichen, kein unnötiges Technik-Wirrwarr.",
  },
  {
    icon: Clock3,
    title: "Schnell online",
    text: "Klare Abläufe, kurze Wege und eine Umsetzung ohne unnötige Verzögerungen.",
  },
];

const TrustBarSection = () => {
  return (
    <section id="vorteile" className="py-10 sm:py-12">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="rounded-2xl neu-surface p-5 sm:p-6">
            <h2 className="text-[2rem] sm:text-4xl lg:text-[3rem] leading-tight mb-6">
              Darum funktioniert das für Handwerksbetriebe
            </h2>

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
