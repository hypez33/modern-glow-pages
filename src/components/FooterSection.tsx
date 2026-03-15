const FooterSection = () => {
  return (
    <footer className="py-12 sm:py-14 border-t border-border">
      <div className="container mx-auto">
        <div className="grid gap-10 md:grid-cols-12 mb-10 sm:mb-12">
          <div className="md:col-span-4">
            <a href="#hero" className="font-display text-2xl font-bold text-foreground">
              Handwerk<span className="text-primary">digital</span>
            </a>
            <p className="text-sm text-muted-foreground font-body mt-4 max-w-xs leading-relaxed">
              Webseiten und optionale Betreuung speziell für Handwerksbetriebe. Klar, schnell und auf mobile Anfragen ausgerichtet.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-body uppercase tracking-widest text-muted-foreground mb-4">Funnel</p>
            <div className="space-y-3">
              <a href="#probleme" className="block text-sm font-body text-foreground/70 hover:text-foreground transition-colors">
                Ausgangslage
              </a>
              <a href="#vorteile" className="block text-sm font-body text-foreground/70 hover:text-foreground transition-colors">
                Vorteile
              </a>
              <a href="#pakete" className="block text-sm font-body text-foreground/70 hover:text-foreground transition-colors">
                Pakete
              </a>
              <a href="#qualifizierung" className="block text-sm font-body text-foreground/70 hover:text-foreground transition-colors">
                60-Sekunden-Check
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs font-body uppercase tracking-widest text-muted-foreground mb-4">Rechtliches</p>
            <div className="space-y-3">
              <a href="#" className="block text-sm font-body text-foreground/70 hover:text-foreground transition-colors">
                Impressum
              </a>
              <a href="#" className="block text-sm font-body text-foreground/70 hover:text-foreground transition-colors">
                Datenschutz
              </a>
              <a href="#" className="block text-sm font-body text-foreground/70 hover:text-foreground transition-colors">
                AGB
              </a>
            </div>
          </div>

          <div className="md:col-span-3 md:text-right">
            <p className="text-xs font-body uppercase tracking-widest text-muted-foreground mb-4">Kontakt</p>
            <p className="text-sm font-body text-foreground/70">info@handwerk-digital.de</p>
            <p className="text-sm font-body text-foreground/70 mt-1">0800 123 456</p>
            <p className="text-xs font-body text-muted-foreground mt-2">Mo-Fr 8-18 Uhr · Sa 9-14 Uhr</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground font-body">© 2026 Handwerkdigital. Alle Rechte vorbehalten.</p>
          <p className="text-xs text-muted-foreground/60 font-body">Von Handwerkern empfohlen. Für Handwerker gebaut.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
