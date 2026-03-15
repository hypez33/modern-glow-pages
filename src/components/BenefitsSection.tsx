import ScrollReveal from "./ScrollReveal";
import { ArrowRight } from "lucide-react";

const concreteBenefits = [
  {
    title: "Mehr Anfragen ohne zusätzlichen Technikaufwand",
    description:
      "Ihre Website unterstützt Ihren Betrieb im Hintergrund, während Sie sich auf Ihr Tagesgeschäft konzentrieren.",
  },
  {
    title: "Mehr Vertrauen beim ersten Klick",
    description:
      "Ein professioneller Auftritt entscheidet oft darüber, ob ein Interessent anruft oder weitersucht.",
  },
  {
    title: "Bessere Auffindbarkeit in Ihrer Region",
    description:
      "Ihr Betrieb wird dort sichtbar, wo Kunden tatsächlich suchen: bei Google, lokal und mobil.",
  },
  {
    title: "Weniger Rückfragen",
    description:
      "Klare Leistungsseiten helfen Interessenten schneller zu verstehen, was Sie anbieten.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="warum-das-wirkt" className="py-12 sm:py-14 lg:py-20 overflow-hidden">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-[2.05rem] sm:text-4xl lg:text-[3.2rem] leading-tight mb-4">
              Ihr Handwerk verdient einen Auftritt, der Vertrauen schafft - nicht nur online vorhanden ist
            </h2>
            <p className="text-muted-foreground font-body text-lg sm:text-xl leading-relaxed mb-4">
              Eine gute Handwerker-Website sorgt dafür, dass Interessenten in wenigen Sekunden verstehen, wer Sie sind, was Sie anbieten, warum man Ihnen vertrauen kann und wie man Sie direkt erreicht.
            </p>
            <p className="font-body text-base sm:text-lg text-foreground">
              <strong>So wird aus Sichtbarkeit echte Nachfrage.</strong>
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-xl neu-surface-soft p-4 sm:p-5 mb-7 sm:mb-8">
            <div>
              <p className="text-sm font-body tracking-[0.2em] uppercase text-primary mb-2">Was Sie konkret gewinnen</p>
              <h3 className="font-display text-2xl sm:text-3xl leading-tight">Klare Vorteile für Ihren Betrieb</h3>
            </div>
            <a href="#ablauf" className="inline-flex items-center gap-1.5 text-base font-body text-foreground hover:text-primary transition-colors">
              Zum Ablauf <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-2">
          {concreteBenefits.map((benefit, index) => (
            <ScrollReveal key={benefit.title} delay={index * 0.08}>
              <article className="rounded-2xl neu-surface p-5 sm:p-6 h-full">
                <h3 className="font-body font-semibold text-xl sm:text-2xl text-foreground mb-3">{benefit.title}</h3>
                <p className="text-base sm:text-lg text-muted-foreground font-body leading-relaxed">{benefit.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
