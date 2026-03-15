import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import ConsultationModal from "@/components/ConsultationModal";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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

        <div className="hidden md:flex items-center gap-5">
          <ThemeToggle />
          <Button size="default" className="ml-1" onClick={() => setModalOpen(true)}>
            Kostenlosen Check starten
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button size="sm" onClick={() => setModalOpen(true)}>
            Check starten
          </Button>
        </div>
      </div>

      <ConsultationModal open={modalOpen} onOpenChange={setModalOpen} />
    </nav>
  );
};

export default Navbar;
