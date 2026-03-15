import type { LucideIcon } from "lucide-react";
import { Building2, Check, Globe, Target, Users } from "lucide-react";

export type ConsultationStepType = "select" | "contact";

export interface ConsultationStep {
  id: string;
  icon: LucideIcon;
  question: string;
  type: ConsultationStepType;
  options: string[];
}

export const consultationSteps: ConsultationStep[] = [
  {
    id: "gewerk",
    icon: Building2,
    question: "Welches Gewerk betreiben Sie?",
    type: "select",
    options: [
      "Elektriker",
      "Sanitär & Heizung",
      "Dachdecker",
      "Maler & Lackierer",
      "Tischler / Schreiner",
      "Fliesenleger",
      "Maurer / Betonbauer",
      "Anderes Gewerk",
    ],
  },
  {
    id: "mitarbeiter",
    icon: Users,
    question: "Wie viele Mitarbeiter hat Ihr Betrieb?",
    type: "select",
    options: [
      "Nur ich (Einzelunternehmer)",
      "2–5 Mitarbeiter",
      "6–15 Mitarbeiter",
      "16–50 Mitarbeiter",
      "Über 50 Mitarbeiter",
    ],
  },
  {
    id: "webseite",
    icon: Globe,
    question: "Haben Sie bereits eine Webseite?",
    type: "select",
    options: [
      "Nein, noch keine",
      "Ja, aber veraltet",
      "Ja, aber bringt keine Kunden",
      "Ja, bin zufrieden — will aber mehr",
    ],
  },
  {
    id: "ziel",
    icon: Target,
    question: "Was ist Ihr wichtigstes Ziel?",
    type: "select",
    options: [
      "Mehr Kundenanfragen über Google",
      "Professioneller Online-Auftritt",
      "Bessere Google Maps Platzierung",
      "Social Media Präsenz aufbauen",
    ],
  },
  {
    id: "kontakt",
    icon: Check,
    question: "Fast geschafft! Wie erreichen wir Sie?",
    type: "contact",
    options: [],
  },
];
