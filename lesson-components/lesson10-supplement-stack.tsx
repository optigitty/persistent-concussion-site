import { Card } from "@/components/ui/card";
import type { LessonView } from "./lesson1-energy-crisis";
import { Warning as AlertTriangle, Pill, TestTube } from "@phosphor-icons/react";

const SUPPLEMENTS = [
  {
    name: "Omega-3 Fish Oil (High in DHA)",
    benefits: "Reduces inflammation and supports brain repair, especially after a brain injury.",
    dosage: "1.5g of DHA, twice daily, stored in the fridge.",
    research: "Doses up to 7.5g/day have been studied with no significant side effects. Consult a doctor if on blood thinners, but doses under 6g/day don't affect platelet function.",
    color: "text-sky-500",
    bg: "bg-sky-500/10",
  },
  {
    name: "Magnesium",
    benefits: "Helps combat magnesium deficiency, which worsens inflammation; levels drop after a traumatic brain injury (TBI).",
    dosage: "200–400mg of amino acid forms like glycinate or L-threonate daily.",
    research: "Generally safe even in higher doses, but some people may experience loose stools at higher levels.",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    name: "Melatonin",
    benefits: "Supports circadian rhythms and has neuro-antioxidant properties, particularly helpful post-concussion.",
    dosage: "0.5–3mg taken 60 minutes before bed. A spray form is an option.",
    research: "Melatonin is well-tolerated but may cause grogginess or vivid dreams in some individuals.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/100/10",
  },
  {
    name: "Curcumin",
    benefits: "A potent antioxidant and anti-inflammatory herb, beneficial for brain health and recovery.",
    dosage: "400mg, three times daily with food, standardized to 95% curcuminoids.",
    research: "Avoid in cases of active gastric ulcers or while on blood thinners. May cause gastric upset at higher doses.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    name: "Creatine",
    benefits: "Boosts brain energy and has been shown to aid memory and cognitive function after brain injury.",
    dosage: "5g daily, or 25g for 3 days followed by 5g for maintenance.",
    research: "Creatine is safe but should be avoided by those with severe kidney disease. It may cause temporary water retention.",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    name: "N-Acetyl Cysteine (NAC)",
    benefits: "Increases glutathione, a potent intracellular antioxidant, promoting brain health and recovery.",
    dosage: "500mg, two to three times daily, away from food.",
    research: "Generally well-tolerated, though some may experience hypersensitivity reactions.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/100/10",
  },
];

export default function Lesson10({ view: _view, onViewChange: _onViewChange }: { view: LessonView; onViewChange: (v: LessonView) => void }) {
  return (
    <div className="space-y-4">
      <Card className="p-4 space-y-3" data-testid="card-l10-intro">
        <h2 className="text-lg font-bold" data-testid="text-l10-title">Supplement Stack for Brain Recovery</h2>
        <p className="text-sm text-white/60 leading-relaxed">
          Supplements can support brain recovery when paired with a solid nutritional foundation. Here's the recommended stack with dosages, benefits, and safety notes.
        </p>
      </Card>

      <Card className="p-4 space-y-3 border-amber-500/30 bg-amber-500/5" data-testid="card-l10-tips">
        <div className="flex items-center gap-2">
          <TestTube className="w-4 h-4 text-amber-500" />
          <h3 className="text-sm font-bold text-amber-600">Before You Start</h3>
        </div>
        <div className="space-y-2">
          <div className="p-2.5 rounded-md bg-white/5 space-y-1" data-testid="item-l10-tip-levels">
            <div className="text-xs font-medium text-slate-200">Get your levels tested</div>
            <div className="text-[11px] text-white/60">So that you can take the appropriate dosage. You don't want to be taking too much or too little.</div>
          </div>
          <div className="p-2.5 rounded-md bg-white/5 space-y-1" data-testid="item-l10-tip-medium">
            <div className="text-xs font-medium text-slate-200">Consider the medium</div>
            <div className="text-[11px] text-white/60">Sometimes sprays or liquids are better than capsules/gummies/tablets because they have better bioavailability, meaning your body will better absorb the supplement.</div>
          </div>
        </div>
      </Card>

      <div className="space-y-3">
        {SUPPLEMENTS.map((supp) => (
          <Card key={supp.name} className="p-4 space-y-2.5" data-testid={`card-l10-supp-${supp.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}>
            <div className="flex items-center gap-2">
              <div className={`w-6 h-6 rounded-md ${supp.bg} flex items-center justify-center flex-shrink-0`}>
                <Pill className={`w-3.5 h-3.5 ${supp.color}`} />
              </div>
              <h3 className="text-sm font-bold">{supp.name}</h3>
            </div>
            <div className="space-y-1.5">
              <div className="text-xs text-white/60">
                <span className="font-medium text-slate-200">Benefits:</span> {supp.benefits}
              </div>
              <div className="text-xs text-white/60">
                <span className="font-medium text-slate-200">Dosage:</span> {supp.dosage}
              </div>
              <div className="text-[11px] text-white/60/70 italic p-2 rounded bg-muted/30">
                <span className="font-medium not-italic text-white/60">Research:</span> {supp.research}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-3 border-muted bg-muted/30" data-testid="card-l10-disclaimer">
        <div className="flex items-start gap-2">
          <AlertTriangle className="w-3.5 h-3.5 text-white/60/60 mt-0.5 flex-shrink-0" />
          <p className="text-[10px] text-white/60/60 leading-relaxed">
            <span className="font-medium">Disclaimer:</span> This guide is intended for educational purposes only and does not substitute for professional medical advice. Always consult with your healthcare provider before starting any new supplement regimen.
          </p>
        </div>
      </Card>
    </div>
  );
}
