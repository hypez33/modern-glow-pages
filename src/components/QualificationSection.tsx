import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ScrollReveal from "./ScrollReveal";
import { consultationSteps } from "@/data/consultationSteps";

const QualificationSection = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const current = consultationSteps[step];
  const progress = ((step + 1) / consultationSteps.length) * 100;

  const summary = useMemo(
    () => [
      { label: "Gewerk", value: answers.gewerk },
      { label: "Teamgröße", value: answers.mitarbeiter },
      { label: "Ausgangslage", value: answers.webseite },
      { label: "Hauptziel", value: answers.ziel },
    ],
    [answers],
  );

  const handleSelect = (option: string) => {
    setAnswers((prev) => ({ ...prev, [current.id]: option }));
    if (step < consultationSteps.length - 1) {
      setTimeout(() => setStep((s) => s + 1), 180);
    }
  };

  const handleSubmit = () => {
    if (!contact.name.trim() || (!contact.phone.trim() && !contact.email.trim())) {
      return;
    }
    setSubmitted(true);
  };

  const resetFlow = () => {
    setStep(0);
    setAnswers({});
    setContact({ name: "", phone: "", email: "" });
    setSubmitted(false);
  };

  return (
    <section id="qualifizierung" className="py-14 sm:py-16 lg:py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="max-w-3xl mb-8">
            <p className="text-sm font-body tracking-[0.2em] uppercase text-accent mb-4">Nächster Schritt</p>
            <h2 className="text-[2.05rem] sm:text-4xl lg:text-[3.2rem] leading-tight mb-4">
              In 60 Sekunden zur <span className="italic text-accent">passenden Empfehlung.</span>
            </h2>
            <p className="font-body text-lg sm:text-xl text-secondary-foreground/70 leading-relaxed max-w-2xl">
              Klicken Sie sich kurz durch. Danach melden wir uns mit einer klaren Einschätzung, was für Ihren Betrieb wirklich sinnvoll ist.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-2xl neu-surface overflow-hidden shadow-elevated">
            <div className="h-1 bg-secondary-foreground/15">
              <div
                className="h-full bg-accent transition-all duration-500"
                style={{ width: `${submitted ? 100 : progress}%` }}
              />
            </div>

            <div className="p-4 sm:p-6 lg:p-8">
              {submitted ? (
                <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-start">
                  <div>
                    <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                      <Check className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl mb-3">Danke, {contact.name.split(" ")[0]}.</h3>
                    <p className="font-body text-secondary-foreground/75 leading-relaxed max-w-lg">
                      Ihre Anfrage ist angekommen. Wir melden uns innerhalb von 24 Stunden mit einem konkreten Vorschlag für Webseite und ggf. laufende Betreuung.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button asChild variant="hero" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <a href="tel:+49800123456">
                          <Phone className="w-4 h-4" /> Direkt anrufen
                        </a>
                      </Button>
                      <Button variant="hero-outline" className="border-secondary-foreground/30 text-secondary-foreground hover:text-secondary-foreground" onClick={resetFlow}>
                        Weitere Anfrage starten
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-xl neu-inset p-4 sm:p-5">
                    <p className="text-sm font-body uppercase tracking-[0.18em] text-secondary-foreground/50 mb-3">Ihre Angaben</p>
                    <div className="space-y-2.5">
                      {summary.map((entry) => (
                        <div key={entry.label} className="flex items-start justify-between gap-3 text-base">
                          <span className="text-secondary-foreground/60">{entry.label}</span>
                          <span className="text-right text-secondary-foreground/90">{entry.value || "-"}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                        <current.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-body uppercase tracking-[0.18em] text-secondary-foreground/55">
                          Schritt {step + 1} von {consultationSteps.length}
                        </p>
                        <h3 className="font-body font-semibold text-xl sm:text-2xl">{current.question}</h3>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base font-body text-secondary-foreground/60">Dauer: ca. 60 Sekunden</p>
                  </div>

                  {current.type === "select" && (
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {current.options.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleSelect(option)}
                          className={`rounded-xl px-4 py-3 text-left font-body text-base transition-all duration-200 ${
                            answers[current.id] === option
                              ? "bg-accent/16 text-secondary-foreground shadow-[inset_5px_5px_10px_hsl(var(--accent)/0.22),inset_-5px_-5px_10px_hsl(0_0%_100%/0.15)]"
                              : "neu-inset text-secondary-foreground/85 hover:bg-accent/10"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}

                  {current.type === "contact" && (
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label className="text-sm font-body text-secondary-foreground/55 uppercase tracking-[0.18em] mb-1.5 block">
                          Name *
                        </label>
                        <Input
                          placeholder="Max Mustermann"
                          value={contact.name}
                          onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                          className="h-11 rounded-xl border-secondary-foreground/20 bg-secondary text-secondary-foreground placeholder:text-secondary-foreground/40"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-body text-secondary-foreground/55 uppercase tracking-[0.18em] mb-1.5 block">
                          Telefon
                        </label>
                        <Input
                          placeholder="0171 123 456 78"
                          value={contact.phone}
                          onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                          className="h-11 rounded-xl border-secondary-foreground/20 bg-secondary text-secondary-foreground placeholder:text-secondary-foreground/40"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-body text-secondary-foreground/55 uppercase tracking-[0.18em] mb-1.5 block">
                          E-Mail
                        </label>
                        <Input
                          type="email"
                          placeholder="info@mein-betrieb.de"
                          value={contact.email}
                          onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                          className="h-11 rounded-xl border-secondary-foreground/20 bg-secondary text-secondary-foreground placeholder:text-secondary-foreground/40"
                        />
                      </div>

                      <p className="sm:col-span-2 text-sm font-body text-secondary-foreground/55">
                        * Bitte Telefon oder E-Mail angeben
                      </p>

                      <Button
                        variant="hero"
                        size="lg"
                        className="sm:col-span-2 w-full bg-accent text-accent-foreground hover:bg-accent/90"
                        onClick={handleSubmit}
                        disabled={!contact.name.trim() || (!contact.phone.trim() && !contact.email.trim())}
                      >
                        Jetzt Anfrage senden <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  )}

                  {step > 0 && (
                    <button
                      onClick={() => setStep((s) => s - 1)}
                      className="mt-4 inline-flex items-center gap-1.5 text-base font-body text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Schritt zurück
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default QualificationSection;
