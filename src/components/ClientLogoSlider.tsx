import logo1 from "@/assets/1.svg";
import logo2 from "@/assets/2.svg";
import logo3 from "@/assets/3.svg";
import logo4 from "@/assets/4.svg";
import ScrollReveal from "@/components/ScrollReveal";

const logos = [
  { src: logo1, alt: "Partnerlogo 1" },
  { src: logo2, alt: "Partnerlogo 2" },
  { src: logo3, alt: "Partnerlogo 3" },
  { src: logo4, alt: "Partnerlogo 4" },
];

const marqueeLogos = [...logos, ...logos];

const ClientLogoSlider = () => {
  return (
    <section id="kundenlogos" className="py-10 sm:py-12">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="px-1 sm:px-0">
            <div className="mb-6 flex flex-col items-center gap-2 text-center">
              <p className="text-sm font-body uppercase tracking-[0.16em] text-muted-foreground">
                Kunden und Partner
              </p>
              <p className="max-w-2xl text-base sm:text-lg font-body text-foreground/80">
                Ausgewählte Marken und Auftritte aus dem Handwerk und regionalen Mittelstand.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-xl">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background via-background/85 to-transparent sm:w-16" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background via-background/85 to-transparent sm:w-16" />

              <div className="flex w-max animate-marquee items-center whitespace-nowrap will-change-transform hover:[animation-play-state:paused]">
                {marqueeLogos.map((logo, index) => (
                  <div
                    key={`${logo.alt}-${index}`}
                    className="mr-4 flex h-[5.5rem] min-w-[190px] items-center justify-center rounded-2xl border border-border/45 bg-background/80 px-6 shadow-soft sm:mr-5 sm:h-[6.5rem] sm:min-w-[240px] sm:px-8"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-10 w-auto object-contain opacity-80 transition-opacity duration-300 hover:opacity-100 dark:invert-0 dark:opacity-95 sm:max-h-12"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ClientLogoSlider;
