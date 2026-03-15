import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import ConsultationModal from "@/components/ConsultationModal";

const CTASection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="abschluss" className="py-12 sm:py-14 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto relative">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-body tracking-[0.2em] uppercase text-primary mb-5">Bereit für den nächsten Schritt</p>
            <h2 className="font-display text-[2.05rem] sm:text-4xl lg:text-[3.2rem] leading-tight mb-5">
              Aus Besucher wird Anfrage.
              <br />
              <span className="italic text-primary">Aus Anfrage wird Auftrag.</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              Gehen Sie jetzt den kurzen 60-Sekunden-Check durch. Danach wissen Sie, welcher Aufbau und welches Paket für Ihren Betrieb sinnvoll ist.
            </p>

            <div className="grid gap-3 sm:grid-cols-2 max-w-2xl mx-auto">
              <Button variant="hero" size="xl" className="w-full" onClick={() => setModalOpen(true)}>
                Zum 60-Sekunden-Check <ArrowRight className="w-5 h-5" />
              </Button>
              <Button asChild variant="hero-outline" size="xl" className="w-full">
                <a href="tel:+49800123456">
                  <Phone className="w-4 h-4" /> 0800 123 456
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground font-body mt-4">
              Antwort in der Regel innerhalb von 24 Stunden · Auch außerhalb klassischer Bürozeiten
            </p>
          </div>
        </ScrollReveal>
      </div>

      <ConsultationModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default CTASection;
