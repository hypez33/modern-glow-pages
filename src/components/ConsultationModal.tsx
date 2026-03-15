import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { consultationSteps } from "@/data/consultationSteps";

const ConsultationModal = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const current = consultationSteps[step];
  const progress = ((step + 1) / consultationSteps.length) * 100;

  const handleSelect = (value: string) => {
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
    if (step < consultationSteps.length - 1) {
      setTimeout(() => setStep((s) => s + 1), 220);
    }
  };

  const handleSubmit = () => {
    if (!contact.name.trim() || (!contact.phone.trim() && !contact.email.trim())) {
      return;
    }
    setSubmitted(true);
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setStep(0);
      setAnswers({});
      setContact({ name: "", phone: "", email: "" });
      setSubmitted(false);
    }, 220);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg p-0 gap-0 overflow-hidden neu-surface">
        <DialogTitle className="sr-only">Qualifizierung für Webseiten-Beratung</DialogTitle>

        <div className="h-1 bg-muted">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${submitted ? 100 : progress}%` }}
          />
        </div>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Check className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl mb-3">Danke, {contact.name.split(" ")[0]}.</h3>
              <p className="text-muted-foreground font-body leading-relaxed max-w-sm mx-auto">
                Wir melden uns innerhalb von 24 Stunden mit einem konkreten Vorschlag für Ihren Betrieb.
              </p>
              <Button className="mt-7" onClick={handleClose}>
                Fenster schließen
              </Button>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <current.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-body text-muted-foreground uppercase tracking-[0.12em]">
                    Schritt {step + 1} von {consultationSteps.length}
                  </p>
                  <h3 className="font-body font-semibold text-xl sm:text-2xl">{current.question}</h3>
                </div>
              </div>

              {current.type === "select" && (
                <div className="space-y-2.5">
                  {current.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSelect(option)}
                      className={`w-full text-left px-4 py-3 rounded-xl font-body text-base transition-all duration-200 ${
                        answers[current.id] === option
                          ? "bg-accent/15 text-foreground shadow-[inset_5px_5px_10px_hsl(var(--accent)/0.22),inset_-5px_-5px_10px_hsl(0_0%_100%/0.18)]"
                          : "neu-inset text-foreground/80"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {current.type === "contact" && (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-body text-muted-foreground uppercase tracking-[0.12em] mb-1.5 block">
                      Name *
                    </label>
                    <Input
                      placeholder="Max Mustermann"
                      value={contact.name}
                      onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                      maxLength={100}
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-body text-muted-foreground uppercase tracking-[0.12em] mb-1.5 block">
                      Telefon
                    </label>
                    <Input
                      placeholder="0171 123 456 78"
                      value={contact.phone}
                      onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                      maxLength={30}
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-body text-muted-foreground uppercase tracking-[0.12em] mb-1.5 block">
                      E-Mail
                    </label>
                    <Input
                      type="email"
                      placeholder="info@mein-betrieb.de"
                      value={contact.email}
                      onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                      maxLength={255}
                      className="rounded-xl"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground font-body">* Bitte Telefon oder E-Mail angeben</p>
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full"
                    onClick={handleSubmit}
                    disabled={!contact.name.trim() || (!contact.phone.trim() && !contact.email.trim())}
                  >
                    60-Sekunden-Anfrage senden <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              )}

              {step > 0 && (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="flex items-center gap-1.5 text-base font-body text-muted-foreground hover:text-foreground transition-colors mt-4"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Zurück
                </button>
              )}
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;
