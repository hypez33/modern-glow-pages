import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

const faqItems = [
  {
    q: "Brauche ich überhaupt eine neue Webseite?",
    a: "Wenn Ihre Seite keine klaren Anfragen bringt oder veraltet wirkt, verschenken Sie täglich Vertrauen. Eine moderne, mobile Seite macht aus Besuchern konkrete Kontakte.",
  },
  {
    q: "Was ist, wenn ich schon eine Webseite habe?",
    a: "Dann prüfen wir, was sinnvoll bleibt. Oft übernehmen wir Inhalte, straffen die Struktur und bauen die Seite technisch sowie optisch auf einen aktuellen Stand.",
  },
  {
    q: "Wie schnell seid ihr?",
    a: "In der Regel ist die Webseite in 14 Tagen online. Voraussetzung ist, dass Abstimmungen zeitnah erfolgen. Den Ablauf dafür halten wir bewusst einfach.",
  },
  {
    q: "Wer liefert Texte und Bilder?",
    a: "Wir führen Sie durch kurze Fragen und erstellen daraus die Texte. Bestehende Fotos nutzen wir, fehlendes Material planen wir gemeinsam pragmatisch nach.",
  },
  {
    q: "Was kostet das insgesamt?",
    a: "Es gibt eine einmalige Webseitenerstellung und optional laufende Service-Pakete. Sie erhalten vor Start eine klare Aufstellung ohne versteckte Zusatzposten.",
  },
  {
    q: "Gibt es laufende Betreuung?",
    a: "Ja, auf Wunsch übernehmen wir Pflege, kleine Anpassungen und Sichtbarkeits-Themen dauerhaft. Sie haben dabei einen festen Ansprechpartner.",
  },
  {
    q: "Was ist mit Google, SEO und Maps?",
    a: "Die Seite wird technisch sauber vorbereitet, lokal ausgerichtet und auf Maps-Sichtbarkeit abgestimmt. Damit Ihr Betrieb dort erscheint, wo Kunden suchen.",
  },
  {
    q: "Muss ich mich um Technik kümmern?",
    a: "Nein. Hosting, Updates, Formulare und technische Details übernehmen wir. Sie konzentrieren sich auf Baustelle, Team und Kunden.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-12 sm:py-14 lg:py-20">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="max-w-2xl mb-8 sm:mb-10">
            <p className="text-sm font-body tracking-[0.2em] uppercase text-primary mb-4">Häufige Fragen</p>
            <h2 className="text-[2.05rem] sm:text-4xl lg:text-[3.2rem] leading-tight mb-4">
              Kurz beantwortet, <span className="italic text-primary">ohne Umwege.</span>
            </h2>
            <p className="font-body text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Genau diese Punkte hören wir in fast jedem Erstgespräch mit Handwerksbetrieben.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-2xl neu-surface px-4 sm:px-6">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={item.q} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-lg sm:text-xl font-body font-semibold hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
