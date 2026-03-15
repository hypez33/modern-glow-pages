import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUp } from "lucide-react";

const BackToTopButton = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 24,
    mass: 0.25,
  });

  const progressDegrees = useTransform(smoothProgress, (value) => `${Math.min(360, Math.round(value * 360))}deg`);
  const ringBackground = useMotionTemplate`
    conic-gradient(hsl(var(--accent)) ${progressDegrees}, hsl(var(--border)) 0deg)
  `;

  const [visible, setVisible] = useState(false);
  useMotionValueEvent(scrollY, "change", (value) => {
    setVisible(value > 360);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.92 }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed right-4 md:right-6 bottom-24 md:bottom-6 z-50"
        >
          <motion.button
            type="button"
            aria-label="Nach oben scrollen"
            onClick={scrollToTop}
            className="relative h-12 w-12 rounded-full p-[2px] shadow-elevated"
            style={{ background: ringBackground }}
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="absolute inset-[2px] rounded-full bg-background/95 backdrop-blur-sm" />
            <span className="relative z-10 flex h-full w-full items-center justify-center text-foreground">
              <ArrowUp className="h-4 w-4" />
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;
