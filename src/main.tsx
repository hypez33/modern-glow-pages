import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

try {
  const savedPreset = window.localStorage.getItem("neumorphism-preset");
  const preset = savedPreset === "intense" || savedPreset === "subtle" ? savedPreset : "subtle";
  document.documentElement.setAttribute("data-neu", preset);
} catch {
  document.documentElement.setAttribute("data-neu", "subtle");
}

createRoot(document.getElementById("root")!).render(<App />);
