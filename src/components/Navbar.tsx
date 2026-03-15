import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import NeumorphismPresetToggle from "@/components/NeumorphismPresetToggle";

const Navbar = () => {
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
        <a href="/#hero" className="font-display text-[1.35rem] sm:text-2xl font-bold tracking-tight text-foreground">
          Handwerk<span className="text-primary">digital</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          <NeumorphismPresetToggle />
          <ThemeToggle />
          <Button asChild size="default" className="ml-1">
            <Link to="/qualifizierung">Kostenlosen Check starten</Link>
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm">
            <Link to="/qualifizierung">Check starten</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
