export const lessonSourceMap = {
  "what-is-a-concussion": "lesson1-energy-crisis.tsx",
  "full-body-shutdown": "lesson2-full-body-shutdown.tsx",
  "recovery-roadmap": "lesson3-recovery-guide.tsx",
  "body-and-mind": "lesson5-body-mind-short-circuit.tsx",
  "soothe-the-system": "lesson6-soothing-nervous-system.tsx",
  "exercise-and-rehab": "lesson7-exercise-recovery.tsx",
  "nutrition-for-recovery": "lesson8-nutrition-recovery.tsx",
  "optimize-nutrition": "lesson9-optimizing-diet.tsx",
  "supplement-stack": "lesson10-supplement-stack.tsx",
  "sleep-fundamentals": "lesson11-sleep-recovery.tsx",
  "sleep-blueprint": "lesson12-sleep-blueprint.tsx",
  "neck-and-cervical": "lesson13-neck-injury.tsx",
  "proprioception-reset": "lesson14-proprioception.tsx",
};

export function hasLessonSource(articleId) {
  return Boolean(lessonSourceMap[articleId]);
}
