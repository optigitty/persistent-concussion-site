import { Card } from "@/components/ui/card";
import type { LessonView } from "./lesson1-energy-crisis";
import { Check, Timer, Drop as Droplets, Prohibit as Ban, Leaf, ForkKnife as UtensilsCrossed} from "@phosphor-icons/react";

export default function Lesson9({ view: _view, onViewChange: _onViewChange }: { view: LessonView; onViewChange: (v: LessonView) => void }) {
  return (
    <div className="space-y-4">
      <Card className="p-4 space-y-3" data-testid="card-l9-intro">
        <h2 className="text-lg font-bold" data-testid="text-l9-title">Optimizing Nutrition for Brain Health & Performance</h2>
        <p className="text-sm text-white/60 leading-relaxed">
          The significant dietary shifts over the past centuries, especially in the last 50 years, have distanced us from the nutritional practices of our ancestors. This mismatch between our modern diet and our body's natural needs has led to widespread health issues.
        </p>
        <p className="text-sm text-white/60 leading-relaxed">
          Proper nutrition is the cornerstone of optimal brain health, rapid recovery, and peak athletic performance — especially vital in the demanding world of combat sports. A diet high in processed foods, both before and after a traumatic brain injury, can significantly hinder recovery.
        </p>
        <div className="p-3 rounded-md bg-primary/5 border border-primary/10">
          <p className="text-xs text-white/60 leading-relaxed">
            <span className="font-medium text-slate-200">Our goal:</span> Focus on foods that support brain function and healing while eliminating those that cause inflammation. Input = Output.
          </p>
        </div>
        <p className="text-xs text-white/60">After a concussion, proper nutrition helps:</p>
        <div className="space-y-1 pl-2 text-xs text-white/60">
          <p>Break the cycle of neuroinflammation</p>
          <p>Restore balance of nervous system</p>
          <p>Promote a healthy gut-brain relationship</p>
          <p>Promote brain blood flow</p>
          <p>Support mitochondrial function</p>
        </div>
      </Card>

      <Card className="p-4 space-y-3 border-red-500/30 bg-red-500/5" data-testid="card-l9-cut">
        <div className="flex items-center gap-2">
          <Ban className="w-4 h-4 text-red-500" />
          <h3 className="text-sm font-bold text-red-500">Cutting the Unhealthy</h3>
        </div>
        <div className="space-y-2">
          {[
            { label: "Ultra-processed foods", detail: "Refined sugars, refined carbs (candy, donuts...)" },
            { label: "Reduce gluten", detail: "White bread, pasta, white rice, cookies..." },
            { label: "Unhealthy meats", detail: "Ultra-processed, deep-fried, and charred meats (charred BBQ ribs, deep-fried chicken)" },
            { label: "Beverages", detail: "Alcohol, energy drinks, pop/soda, sugary drinks — these dehydrate you amongst other bad effects" },
            { label: "Unhealthy oils", detail: "Vegetable oil, corn oil, safflower oil, margarine, canola oil, soy oil, and peanut oil" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-2 p-2 rounded-md bg-white/5" data-testid={`item-l9-cut-${item.label.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}>
              <Ban className="w-3 h-3 text-red-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs font-medium text-red-500">{item.label}</div>
                <div className="text-[11px] text-white/60">{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4 space-y-3 border-green-500/30 bg-green-500/5" data-testid="card-l9-hydration">
        <div className="flex items-center gap-2">
          <Droplets className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold text-green-600">Hydration</h3>
        </div>
        <div className="p-3 rounded-md bg-white/5">
          <div className="text-sm font-medium text-slate-200">3.5–4L of water daily</div>
          <div className="text-xs text-white/60 mt-1">Ideally spring water</div>
        </div>
      </Card>

      <Card className="p-4 space-y-3 border-green-500/30 bg-green-500/5" data-testid="card-l9-balanced-meals">
        <div className="flex items-center gap-2">
          <UtensilsCrossed className="w-4 h-4 text-green-500" />
          <h3 className="text-sm font-bold text-green-600">Balanced Meals</h3>
        </div>
        <div className="space-y-2">
          <div className="p-2.5 rounded-md bg-white/5 space-y-1" data-testid="item-l9-protein">
            <div className="flex items-center gap-1.5">
              <Check className="w-3 h-3 text-green-500" />
              <div className="text-xs font-medium text-slate-200">Good Protein Sources</div>
            </div>
            <div className="text-[11px] text-white/60 pl-[18px]">Wild fish, free-range chicken/turkey, beans, beef, lamb</div>
            <div className="text-[10px] text-white/60/70 pl-[18px] italic">Choose local, organic, antibiotic-free, and free-range meats whenever possible</div>
          </div>
          <div className="p-2.5 rounded-md bg-white/5 space-y-1" data-testid="item-l9-carbs">
            <div className="flex items-center gap-1.5">
              <Check className="w-3 h-3 text-green-500" />
              <div className="text-xs font-medium text-slate-200">Non-processed, Low Glycemic Carbs</div>
            </div>
            <div className="text-[11px] text-white/60 pl-[18px]">Sweet potato, quinoa, brown rice, beets, zucchini</div>
          </div>
          <div className="p-3 rounded-md bg-green-500/10 border border-green-500/20" data-testid="item-l9-plate-rule">
            <div className="text-xs font-medium text-green-600">50% of your plate should be vegetables</div>
            <div className="text-[11px] text-white/60 mt-0.5">The more diverse, the better</div>
          </div>
        </div>
      </Card>

      <Card className="p-4 space-y-3 border-green-500/30 bg-green-500/5" data-testid="card-l9-fruits-vegs">
        <div className="flex items-center gap-2">
          <Leaf className="w-4 h-4 text-green-500" />
          <h3 className="text-sm font-bold text-green-600">More Fruits & Vegetables</h3>
        </div>
        <p className="text-xs text-white/60">
          Full of antioxidants. Incorporate a variety of colorful plants — blueberries, strawberries, broccoli — to obtain a diverse range of antioxidant properties.
        </p>
      </Card>

      <Card className="p-4 space-y-3 border-green-500/30 bg-green-500/5" data-testid="card-l9-healthy-fats">
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-green-500" />
          <h3 className="text-sm font-bold text-green-600">More Healthy Fats</h3>
        </div>
        <div className="space-y-2">
          <div className="p-2.5 rounded-md bg-white/5 space-y-1">
            <div className="text-xs font-medium text-slate-200">Wild Fish</div>
            <div className="text-[11px] text-white/60">Primary source of omega-3 fatty acids for brain repair</div>
          </div>
          <div className="p-2.5 rounded-md bg-white/5 space-y-1">
            <div className="text-xs font-medium text-slate-200">Nuts, Seeds & Oils</div>
            <div className="text-[11px] text-white/60">Walnuts, almonds, ground flaxseeds, chia seeds, hemp seeds, grass-fed butter, high-quality olive oil, coconut oil, avocado oil, and MCT oil</div>
          </div>
          <div className="p-2 rounded-md bg-red-500/5 border border-red-500/10">
            <div className="text-[11px] text-red-500">Avoid ultra-processed nuts, meats, and dairy, as well as deep-fried versions</div>
          </div>
        </div>
      </Card>

      <Card className="p-4 space-y-3" data-testid="card-l9-additional">
        <div className="flex items-center gap-2">
          <Leaf className="w-4 h-4 text-emerald-500" />
          <h3 className="text-sm font-bold">Additional Helpers</h3>
        </div>
        <div className="space-y-2">
          {[
            { label: "Healthy spices", detail: "Turmeric and ginger — potent anti-inflammatories" },
            { label: "Green tea", detail: "Sencha or matcha — rich in antioxidants" },
            { label: "Herbal teas", detail: "A healthier alternative for coffee and the beverages eliminated above" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-2 p-2 rounded-md bg-muted/50" data-testid={`item-l9-helper-${item.label.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}>
              <Check className="w-3 h-3 text-emerald-500 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs font-medium text-slate-200">{item.label}</div>
                <div className="text-[11px] text-white/60">{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4 space-y-3" data-testid="card-l9-fasting">
        <div className="flex items-center gap-2">
          <Timer className="w-4 h-4 text-amber-500" />
          <h3 className="text-sm font-bold">Caloric Restriction & Fasting</h3>
        </div>
        <p className="text-xs text-white/60 mb-1">
          Both caloric restriction and fasting have been shown to improve brain health and enhance cognitive function. Options include:
        </p>
        <div className="space-y-1.5">
          {[
            "Fast 1 day a week",
            "Fast 2–3 days, once a month",
            "Intermittent fast (eating only in a time window like 12pm–6pm)",
            "Simply reduce overall calorie intake by ~30% — especially beneficial if already overeating",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 p-2 rounded-md bg-muted/50">
              <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-[10px] font-bold text-amber-500">{i + 1}</span>
              </div>
              <div className="text-[11px] text-white/60">{item}</div>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-white/60/70 italic">
          Fasting isn't one-size-fits-all; find a method that fits your lifestyle and listen to your body's signals. When fasting, typically you don't consume anything other than water.
        </p>
      </Card>

      <Card className="p-3 border-muted bg-muted/30" data-testid="card-l9-disclaimer">
        <p className="text-[10px] text-white/60/60 leading-relaxed">
          <span className="font-medium">Disclaimer:</span> This guide is intended for educational purposes only and should not be considered a substitute for professional medical advice, diagnosis, or treatment. Always consult with your healthcare provider before making any changes to your diet, beginning a new exercise program, or starting any supplementation regimen.
        </p>
      </Card>
    </div>
  );
}
