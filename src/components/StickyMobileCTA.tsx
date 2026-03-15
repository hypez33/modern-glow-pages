import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const StickyMobileCTA = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 neu-surface px-3 py-2 md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <Button asChild variant="hero" className="flex-1 h-11 px-3 text-base">
          <Link to="/qualifizierung">
            In 60 Sek. starten <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
        <Button asChild variant="hero-outline" className="h-11 px-3 text-base">
          <a href="tel:+49800123456" aria-label="Jetzt anrufen">
            <Phone className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
