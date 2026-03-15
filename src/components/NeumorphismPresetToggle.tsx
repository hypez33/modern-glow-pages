import { useEffect, useState } from "react";

type NeuPreset = "subtle" | "intense";

const STORAGE_KEY = "neumorphism-preset";

const isPreset = (value: string | null): value is NeuPreset =>
  value === "subtle" || value === "intense";

const applyPreset = (preset: NeuPreset) => {
  document.documentElement.setAttribute("data-neu", preset);
};

const NeumorphismPresetToggle = ({ className = "" }: { className?: string }) => {
  const [preset, setPreset] = useState<NeuPreset>("subtle");

  useEffect(() => {
    const htmlPreset = document.documentElement.getAttribute("data-neu");
    const storagePreset = localStorage.getItem(STORAGE_KEY);

    const initial: NeuPreset = isPreset(htmlPreset)
      ? htmlPreset
      : isPreset(storagePreset)
        ? storagePreset
        : "subtle";

    setPreset(initial);
    applyPreset(initial);
  }, []);

  const handlePresetChange = (nextPreset: NeuPreset) => {
    setPreset(nextPreset);
    applyPreset(nextPreset);
    localStorage.setItem(STORAGE_KEY, nextPreset);
  };

  return (
    <div
      className={`neu-inset flex items-center gap-1 rounded-full p-1 ${className}`.trim()}
      role="group"
      aria-label="Neumorphismus Intensität"
    >
      <button
        type="button"
        onClick={() => handlePresetChange("subtle")}
        className={`rounded-full px-3 py-1.5 text-xs sm:text-sm font-body transition-all duration-200 ${
          preset === "subtle"
            ? "neu-surface text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-pressed={preset === "subtle"}
      >
        Subtil
      </button>
      <button
        type="button"
        onClick={() => handlePresetChange("intense")}
        className={`rounded-full px-3 py-1.5 text-xs sm:text-sm font-body transition-all duration-200 ${
          preset === "intense"
            ? "neu-surface text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-pressed={preset === "intense"}
      >
        Intensiv
      </button>
    </div>
  );
};

export default NeumorphismPresetToggle;
