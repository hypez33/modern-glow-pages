import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import NeumorphismPresetToggle from "@/components/NeumorphismPresetToggle";

const links = [
  { href: "#vorteile", label: "Vorteile" },
  { href: "#pakete", label: "Pakete" },
  { href: "#stimmen", label: "Ergebnisse" },
  { href: "#faq", label: "FAQ" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/92 backdrop-blur-lg neu-surface-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 sm:h-[72px]">
        <a href="#hero" className="font-display text-[1.35rem] sm:text-2xl font-bold tracking-tight text-foreground">
          Handwerk<span className="text-primary">digital</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-body text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <NeumorphismPresetToggle />
          <ThemeToggle />
          <Button asChild size="default" className="ml-1">
            <a href="#qualifizierung">Kostenlosen Check starten</a>
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-5 pt-2 space-y-1.5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-base font-body text-muted-foreground py-2 uppercase tracking-wide"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-1">
            <NeumorphismPresetToggle className="w-full rounded-xl" />
          </div>
          <div className="pt-1">
            <ThemeToggle className="w-full rounded-xl" />
          </div>
          <Button asChild className="w-full mt-2" size="default">
            <a href="#qualifizierung" onClick={() => setMobileOpen(false)}>
              Kostenlosen Check starten
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
