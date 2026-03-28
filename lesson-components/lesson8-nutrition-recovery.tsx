import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { LessonView } from "./lesson1-energy-crisis";
import { Brain, Pill, CaretDown as ChevronDown, CaretUp as ChevronUp, ArrowLeft, Pulse as Activity, BookOpen, AppleLogo as Apple, Drop as Droplets, Prohibit as Ban} from "@phosphor-icons/react";

const IMAGES = {
  gutBrain: "https://completeconcussions.com/wp-content/uploads/2024/04/image6.png",
  healthyFats: "https://www.cognitivefxusa.com/hs-fs/hubfs/nutrition-for-post-concussion-syndrome-2.jpg?width=1800&name=nutrition-for-post-concussion-syndrome-2.jpg",
  antioxidants: "https://www.cognitivefxusa.com/hs-fs/hubfs/nutrition-for-post-concussion-syndrome-3.jpg?width=1800&name=nutrition-for-post-concussion-syndrome-3.jpg",
  ultraprocessed: "https://cdn.ncbi.nlm.nih.gov/pmc/blobs/0ffe/7317220/b2bb25e03352/gr1.jpg",
  avoidFoods: "https://www.cognitivefxusa.com/hs-fs/hubfs/nutrition-for-post-concussion-syndrome-7.jpg?width=1104&height=560&name=nutrition-for-post-concussion-syndrome-7.jpg",
};

function SimpleView({ onShowDeepDive }: { onShowDeepDive: () => void }) {
  return (
    <div className="space-y-4">
      <Card className="p-4 space-y-3">
        <h2 className="text-lg font-bold" data-testid="text-l8-title">The Fighter's Guide to Concussion Recovery: Feed Your Brain</h2>
        <p className="text-sm text-white/60 leading-relaxed">
          When you get "rocked" or take a hard shot to the head, it's not just a brain issue. It's a whole-body crisis. Research shows that a concussion triggers a massive "energy gap" in your brain and actually messes with your stomach (your gut). If you want to get back in the ring safely, you need to treat your recovery like a training camp.
        </p>
      </Card>

      <Card className="p-4 space-y-3" data-testid="card-l8-gut-brain">
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold">1. The Gut-Brain Connection</h3>
        </div>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p>Your brain and your gut are constantly talking. Within hours of a hit, your gut wall can become "leaky." This allows toxins to enter your bloodstream, which travels back to your brain and makes inflammation (swelling) worse.</p>
          <p><span className="font-medium text-slate-200">The Fix:</span> You need to keep your "good bacteria" strong to protect your brain. A messed-up gut leads to more unhelpful inflammation, neuroinflammation, and brain fog.</p>
        </div>
        <img src={IMAGES.gutBrain} alt="Gut-brain connection after concussion" className="w-full rounded-md" loading="lazy" />
      </Card>

      <Card className="p-4 space-y-3" data-testid="card-l8-energy-gap">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-red-500" />
          <h3 className="text-sm font-bold">2. Close the "Energy Gap"</h3>
        </div>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p>After a concussion, your brain's demand for energy spikes. It usually uses 20% of your body's energy, but after a hit, that can jump to <span className="font-medium text-slate-200">40%</span>.</p>
          <p><span className="font-medium text-slate-200">Food First:</span> Don't just pop pills. Real food has the "team" of nutrients your brain needs for an effective recovery.</p>
          <p>After a concussion, proper nutrition is especially important to:</p>
          <div className="space-y-1 pl-2 text-xs">
            <p>Break the cycle of neuroinflammation</p>
            <p>Restore balance of nervous system</p>
            <p>Promote a healthy gut-brain relationship</p>
            <p>Promote brain blood flow</p>
            <p>Support mitochondrial function</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 space-y-3" data-testid="card-l8-diet">
        <div className="flex items-center gap-2">
          <Apple className="w-4 h-4 text-green-500" />
          <h3 className="text-sm font-bold">3. The Brain-Building Diet</h3>
        </div>
        <p className="text-xs text-white/60 mb-2">
          Proper nutrition is the cornerstone of optimal brain health, rapid recovery, and peak athletic performance. Think of these as the raw materials for repairing your gut and brain:
        </p>
        <div className="space-y-3">
          <div className="p-2.5 rounded-md bg-muted/50 space-y-1">
            <div className="text-xs font-medium text-slate-200">Healthy Fats</div>
            <div className="text-[11px] text-white/60">Your brain is 60% fat. Use Salmon, Sardines, Avocados, and Walnuts to repair brain cell membranes.</div>
          </div>
          <img src={IMAGES.healthyFats} alt="Healthy fats for concussion recovery" className="w-full rounded-md" loading="lazy" />

          <div className="p-2.5 rounded-md bg-muted/50 space-y-1">
            <div className="text-xs font-medium text-slate-200">Protein</div>
            <div className="text-[11px] text-white/60">You need 1.0 to 1.5g of protein per kg of body weight to fix damaged tissue. Eat eggs, fish, chicken, and beef. Ideally well-sourced and organic.</div>
          </div>

          <div className="p-2.5 rounded-md bg-muted/50 space-y-1">
            <div className="text-xs font-medium text-slate-200">Antioxidants</div>
            <div className="text-[11px] text-white/60">A concussion causes an "oxidative storm" (cellular stress). Blueberries, dark chocolate, and leafy greens help neutralize this damage. Eat the rainbow! Different colored fruits and vegetables come with different antioxidant properties.</div>
          </div>
          <img src={IMAGES.antioxidants} alt="Antioxidant foods for brain recovery" className="w-full rounded-md" loading="lazy" />
        </div>
      </Card>

      <Card className="p-4 space-y-3" data-testid="card-l8-hydration">
        <div className="flex items-center gap-2">
          <Droplets className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold">4. Hydration Quality Matters</h3>
        </div>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p>Your brain is 75% water. If you are even mildly dehydrated, this doesn't help recovery.</p>
          <p><span className="font-medium text-slate-200">Ditch the Tap:</span> Chlorine in tap water can kill the good bacteria in your gut that help your brain heal.</p>
          <p><span className="font-medium text-slate-200">Spring Water:</span> Use natural spring water or filtered water. It contains minerals like Magnesium that help stabilize your nerves.</p>
          <p className="font-medium text-slate-200">Aim for 3–4L per day.</p>
        </div>
      </Card>

      <Card className="p-4 space-y-3" data-testid="card-l8-supplements">
        <div className="flex items-center gap-2">
          <Pill className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold">5. The "Battery Pack" Supplements</h3>
        </div>
        <p className="text-xs text-white/60 mb-2">Once your diet is dialed in, use these to further support your body and brain:</p>
        <div className="space-y-2">
          {[
            { name: "Omega-3 Fish Oil (High DHA)", benefits: "Reduces inflammation, supports brain repair.", dose: "1.5g DHA, twice daily. Store in fridge.", note: "Doses up to 7.5g/day studied safely. Under 6g/day doesn't affect platelet function." },
            { name: "Magnesium", benefits: "Combats deficiency that worsens inflammation. Levels drop after TBI.", dose: "200–400mg of glycinate or L-threonate daily.", note: "Generally safe. Some may experience loose stools at higher levels." },
            { name: "Melatonin", benefits: "Supports circadian rhythms, neuro-antioxidant properties.", dose: "0.5–3mg, 60 minutes before bed. Spray form available.", note: "Well-tolerated. May cause grogginess or vivid dreams." },
            { name: "Curcumin", benefits: "Potent antioxidant and anti-inflammatory herb.", dose: "400mg, three times daily with food. 95% curcuminoids.", note: "Avoid with active gastric ulcers or blood thinners." },
            { name: "Creatine", benefits: "Boosts brain energy, aids memory and cognition after injury.", dose: "5g daily, or 25g for 3 days then 5g maintenance.", note: "Safe. Avoid with severe kidney disease. May cause temporary water retention." },
            { name: "N-Acetyl Cysteine (NAC)", benefits: "Increases glutathione (potent intracellular antioxidant).", dose: "500mg, 2–3 times daily, away from food.", note: "Generally well-tolerated. Some may experience hypersensitivity." },
          ].map((supp) => (
            <div key={supp.name} className="p-3 rounded-md bg-muted/50 space-y-1.5" data-testid={`card-l8-supp-${supp.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}>
              <div className="text-xs font-medium text-slate-200">{supp.name}</div>
              <div className="text-[11px] text-white/60">{supp.benefits}</div>
              <div className="text-[11px] text-white/60"><span className="font-medium text-slate-200">Dose:</span> {supp.dose}</div>
              <div className="text-[10px] text-white/60/70 italic">{supp.note}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4 space-y-3 border-red-500/30 bg-red-500/5" data-testid="card-l8-avoid">
        <div className="flex items-center gap-2">
          <Ban className="w-4 h-4 text-red-500" />
          <h3 className="text-sm font-bold text-red-500">6. What to Avoid (The "Progress Killers")</h3>
        </div>
        <div className="space-y-2">
          {[
            { name: "Alcohol", desc: "Total poison for a concussed brain. It kills REM sleep, which is the only time your brain truly repairs itself." },
            { name: "Caffeine", desc: "Avoid for at least the first 72 hours. It causes dehydration and keeps your brain \"on\" when it needs to be resting." },
            { name: "Ultraprocessed Foods", desc: "Can exacerbate TBI-induced energy crisis and metabolic dysfunction, leading to exacerbated neuroinflammation." },
            { name: "Processed Sugar", desc: "Causes energy crashes that make headaches and brain fog worse." },
          ].map((item) => (
            <div key={item.name} className="p-2.5 rounded-md bg-white/5 space-y-0.5">
              <div className="text-xs font-medium text-red-500">{item.name}</div>
              <div className="text-[11px] text-white/60">{item.desc}</div>
            </div>
          ))}
        </div>
        <img src={IMAGES.ultraprocessed} alt="Ultra-processed food effects on TBI" className="w-full rounded-md" loading="lazy" />
        <img src={IMAGES.avoidFoods} alt="Foods to avoid during concussion recovery" className="w-full rounded-md" loading="lazy" />
      </Card>

      <Button className="w-full" variant="secondary" onClick={onShowDeepDive} data-testid="button-show-deep-dive-8">
        <BookOpen className="w-4 h-4 mr-2" />
        Read the Deep Dive
      </Button>
    </div>
  );
}

function DeepDiveView({ onBack }: { onBack: () => void }) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

  const sections = [
    {
      key: "gut-brain",
      title: "The Gut-Brain Axis in TBI",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>The bidirectional pathways of the gut-brain axis are composed of neural, endocrine, and immune signaling routes. Following concussion, disruption of normal brain function initiates a systemic response characterized by dysautonomia and HPA axis activation.</p>
          <p className="font-medium text-slate-200">Intestinal Permeability ("Leaky Gut")</p>
          <p>Within minutes to hours of impact, DAMPs and pro-inflammatory cytokines (IL-1β, TNF-α) trigger destabilization of tight junction proteins. Bacterial products like lipopolysaccharides (LPS) enter systemic circulation, creating a feed-forward cycle where enteric inflammatory challenges prolong neuroinflammation.</p>
          <p className="font-medium text-slate-200">Microbial Dysbiosis</p>
          <p>Concussion induces rapid shifts in gut microbiome composition: decreased Firmicutes and Bacteroidetes, increased Proteobacteria and Acidobacteria. Loss of beneficial taxa like Bifidobacterium and Lactobacillus depletes neuroprotective SCFAs, leaving the brain more vulnerable.</p>
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">GI Alteration</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Mechanism</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Clinical Implication</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2">Increased Permeability</td><td className="py-2 px-2">Tight junction destabilization</td><td className="py-2 px-2">Systemic endotoxemia, neuroinflammation</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Microbial Dysbiosis</td><td className="py-2 px-2">Shift in Firmicutes:Bacteroidetes</td><td className="py-2 px-2">Increased oxidative stress, microglial activation</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Dysautonomia</td><td className="py-2 px-2">Vagal dysfunction, HPA activation</td><td className="py-2 px-2">Impaired gastric emptying, malabsorption</td></tr>
                <tr><td className="py-2 px-2">Immune Recruitment</td><td className="py-2 px-2">DAMPs, systemic cytokine surge</td><td className="py-2 px-2">Feed-forward loop of damage</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      key: "food-first",
      title: "The Nutritional Foundation: Food First",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p className="font-medium text-slate-200">The Metabolic Crisis and Caloric Demands</p>
          <p>The brain typically consumes 20% of total energy; post-injury this can surge to 40%. Military personnel and athletes meeting at least 50–65% of total energy expenditure within the first week have significantly better outcomes.</p>
          <p className="font-medium text-slate-200">Whole Foods and Neuroplasticity</p>
          <p>While an Omega-3 supplement provides specific fatty acids, whole salmon provides high-quality protein, Vitamin D, selenium, and B-vitamins that facilitate absorption and utilization of the Omega-3s.</p>
          <p>Complex carbohydrates provide steady glucose release — the brain's primary fuel — whereas processed sugars cause spikes and crashes that exacerbate headaches and fatigue.</p>
          <p className="font-medium text-slate-200">The Healthy Plate:</p>
          <p className="text-xs">~¼ high-quality protein + ¼ complex carbohydrates + ½ fruits and vegetables</p>
        </div>
      ),
    },
    {
      key: "mediterranean",
      title: "The Mediterranean Diet & Key Nutrients",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>The Mediterranean diet has emerged as the gold standard for brain health and concussion recovery — emphasizing anti-inflammatory fats, colorful antioxidants, and high-fiber plant foods.</p>
          <p className="font-medium text-slate-200">Lipids and Membrane Integrity</p>
          <p>The brain is ~60% fat. DHA and EPA are crucial for neuronal membrane integrity and inflammatory response. Sources: fatty fish, extra virgin olive oil, avocados, walnuts, flaxseeds, chia seeds.</p>
          <p className="font-medium text-slate-200">Proteins and Neurotransmitter Synthesis</p>
          <p>1.0–1.5 g/kg body weight recommended. Leucine (dairy, chicken, eggs) acts as an "anabolic trigger." Casein-rich dairy before bed provides slow-release amino acids during sleep repair.</p>
          <p className="font-medium text-slate-200">Antioxidants and Oxidative Stress</p>
          <p>Berries (anthocyanins) maintain normal BDNF levels. Cruciferous greens provide Vitamin K, C, and folate. Polyphenols (curcumin, green tea, dark chocolate) provide anti-inflammatory signals.</p>
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Nutrient</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Function</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Sources</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2">DHA/EPA</td><td className="py-2 px-2">Membrane repair, anti-inflammation</td><td className="py-2 px-2">Salmon, sardines, algae oil</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Magnesium</td><td className="py-2 px-2">NMDA receptor regulation, headache relief</td><td className="py-2 px-2">Spinach, pumpkin seeds, black beans</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Leucine</td><td className="py-2 px-2">Tissue repair and protein synthesis</td><td className="py-2 px-2">Eggs, chicken breast, Swiss cheese</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Anthocyanins</td><td className="py-2 px-2">Preservation of BDNF and cognition</td><td className="py-2 px-2">Blueberries, raspberries, tart cherries</td></tr>
                <tr><td className="py-2 px-2">B-Vitamins</td><td className="py-2 px-2">Energy metabolism, myelin support</td><td className="py-2 px-2">Leafy greens, eggs, organ meats</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      key: "hydration",
      title: "Hydration Dynamics & Water Quality",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>The brain is ~75% water. Even mild dehydration (1.5% body fluid loss) can significantly impair mood, memory, and executive function.</p>
          <p className="font-medium text-slate-200">Cellular Hydration vs. Simple Fluid Volume</p>
          <p>Effective hydration depends on electrolytes (sodium, potassium, calcium, magnesium) that create osmotic pressure to draw water into tissues. Without minerals, water may pass through too quickly. Properly hydrated neurons transmit signals more efficiently. Hydration also supports the glymphatic system — the brain's waste-clearance pathway active during sleep.</p>
          <p className="font-medium text-slate-200">Spring Water vs. Treated Tap Water</p>
          <div className="space-y-1.5 pl-2 text-xs">
            <p><span className="font-medium text-slate-200">Chlorination:</span> Residual chlorine reduces α-diversity (species richness) in the gut. Chronic exposure may increase antibiotic-resistance genes.</p>
            <p><span className="font-medium text-slate-200">Fluoride:</span> Excessive fluoride linked to disruption of tight junction proteins, aggravating leaky gut.</p>
            <p><span className="font-medium text-slate-200">Mineral Bioavailability:</span> Natural spring/mineral waters contain essential minerals in ionic form. Studies show up to 31% magnesium and 16% calcium requirements can be met through mineral-rich water.</p>
          </div>
        </div>
      ),
    },
    {
      key: "supplements",
      title: "Evidence-Based Supplementation",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>Targeted supplementation addresses specific biochemical bottlenecks when the nutritional foundation is established.</p>
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Supplement</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Evidence</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Protocol</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2">Creatine</td><td className="py-2 px-2">ATP buffering, reduces dizziness/fatigue</td><td className="py-2 px-2">10–20g/day (acute), 3–5g/day (maintenance)</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Omega-3 (DHA/EPA)</td><td className="py-2 px-2">Reduced neural damage, anti-inflammatory</td><td className="py-2 px-2">1,000–2,500mg/day (high DHA focus)</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Magnesium</td><td className="py-2 px-2">Nerve stabilization, headache prevention</td><td className="py-2 px-2">250–500mg/day (Glycinate/Malate)</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Vitamin D3</td><td className="py-2 px-2">Immune and neuroplasticity support</td><td className="py-2 px-2">2,000 IU/day (or based on deficiency)</td></tr>
                <tr><td className="py-2 px-2">Vitamin B2</td><td className="py-2 px-2">Chronic post-concussion headache relief</td><td className="py-2 px-2">400mg/day</td></tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-slate-200">Creatine Deep Dive</p>
          <p>Creatine serves as a phosphate donor to convert ADP back into ATP — an emergency energy buffer for neurons. Animal studies show it reduces brain damage volume and improves neurological outcomes. Higher doses (10–20g/day) may be necessary in the acute phase to increase brain creatine stores by the 5–10% required for therapeutic benefit.</p>
          <p className="font-medium text-slate-200">NAC (N-Acetylcysteine)</p>
          <p>A direct precursor to glutathione, the body's master antioxidant. Supplementation supports cognitive function and decreases markers of oxidative stress in TBI populations.</p>
        </div>
      ),
    },
    {
      key: "fasting",
      title: "Metabolic Interventions: Fasting & Caloric Restriction",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p className="font-medium text-slate-200">Autophagy, Mitophagy, and Cellular Cleaning</p>
          <p>Autophagy ("self-eating") allows cells to identify and degrade damaged organelles and misfolded proteins. Fasting or caloric restriction induces autophagy, helping the brain clear debris and maintain healthy mitochondria (mitophagy).</p>
          <p>However, there's a delicate balance: adaptive autophagy helps cells survive, but excessive starvation can trigger autophagic cell death. Short-term fasting (~24 hours) has been shown to be neuroprotective in animal models.</p>
          <p className="font-medium text-slate-200">BDNF Signaling and Neurogenesis</p>
          <p>Intermittent fasting and caloric restriction significantly increase BDNF expression — promoting neural stem cell proliferation and newborn neuron survival, particularly in the hippocampus. Caloric restriction also mitigates age-related microglial activation and decreases pro-inflammatory cytokines.</p>
        </div>
      ),
    },
    {
      key: "avoid",
      title: "Substances to Avoid: The Neuro-Inhibitors",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Substance</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Primary Adverse Effect</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Protocol</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2">Alcohol</td><td className="py-2 px-2">Impairs REM sleep; increases seizure risk</td><td className="py-2 px-2">Complete abstinence until clearance</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Caffeine</td><td className="py-2 px-2">Dehydration; interferes with neurological rest</td><td className="py-2 px-2">Avoid entirely 24–72 hours; limit after</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">THC/Cannabis</td><td className="py-2 px-2">Impairs memory/coordination; abuse risk</td><td className="py-2 px-2">Extreme caution; prioritize CBD if used</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Nicotine/Vapes</td><td className="py-2 px-2">Reduces deep sleep (N3); brain edema risk</td><td className="py-2 px-2">Avoid; restricts oxygen delivery</td></tr>
                <tr><td className="py-2 px-2">Processed Sugar</td><td className="py-2 px-2">Spikes blood glucose; inflammatory crashes</td><td className="py-2 px-2">Limit for stable energy levels</td></tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-slate-200">Alcohol</p>
          <p>While it may help some fall asleep, it severely impairs sleep quality by disrupting REM sleep — the phase critical for memory consolidation, emotional regulation, and neural repair. Also increases risk of post-traumatic seizures.</p>
          <p className="font-medium text-slate-200">Nicotine</p>
          <p>Interferes with blood-brain barrier function, increases neuroinflammation and brain edema. Highly disruptive to deep slow-wave sleep (N3), essential for physical repair. Exposure can "rewire" a neuroplastic brain, increasing long-term risk of depression and anxiety.</p>
        </div>
      ),
    },
    {
      key: "hierarchy",
      title: "The Hierarchy of Recovery",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>The recovery hierarchy should be strictly followed:</p>
          <div className="space-y-1.5">
            {[
              { n: 1, title: "Metabolic Stabilization", desc: "20–40% increase in caloric intake through whole-food, anti-inflammatory Mediterranean diet." },
              { n: 2, title: "Structural Foundation", desc: "High-quality proteins, lipids, and complex carbohydrates for neural repair building blocks." },
              { n: 3, title: "Hydro-Molecular Support", desc: "Mineral-rich spring water and electrolyte balance for cellular hydration and glymphatic waste clearance." },
              { n: 4, title: "Targeted Supplementation", desc: "Creatine, Omega-3s, Magnesium to address specific neurochemical deficits and oxidative stress." },
              { n: 5, title: "Metabolic Optimization", desc: "Intermittent fasting and caloric restriction to trigger autophagy and BDNF once acute crisis passes." },
              { n: 6, title: "Neuro-Inhibitor Avoidance", desc: "Eliminate alcohol, nicotine, and excessive caffeine to protect sleep and vascular integrity." },
            ].map((item) => (
              <div key={item.n} className="flex items-start gap-2 p-2 rounded-md bg-muted/50">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-bold text-primary">{item.n}</span>
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-200">{item.title}</div>
                  <div className="text-[11px]">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="font-medium text-slate-200">The brain does not heal in isolation. Its restoration is inextricably linked to the health of the gastrointestinal system, the quality of its fuel, and the restraint of toxicological stressors.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-3">
      <Button variant="ghost" size="sm" onClick={onBack} className="mb-1" data-testid="button-back-simple-8">
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Overview
      </Button>

      <Card className="p-4 space-y-2">
        <h2 className="text-lg font-bold" data-testid="text-l8-deep-dive-title">Clinical Deep Dive</h2>
        <p className="text-xs text-white/60 leading-relaxed">
          Integrative Neurobiology of the Gut-Brain Axis and Nutritional Protocols for Post-Concussive Recovery.
        </p>
      </Card>

      {sections.map((section) => (
        <Card key={section.key} className="overflow-hidden" data-testid={`section-l8-${section.key}`}>
          <button
            className="w-full flex items-center justify-between gap-2 px-4 py-3 text-left"
            onClick={() => toggle(section.key)}
            data-testid={`button-toggle-l8-${section.key}`}
          >
            <span className="text-sm font-medium">{section.title}</span>
            {openSections[section.key] ? (
              <ChevronUp className="w-4 h-4 text-white/60 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-4 h-4 text-white/60 flex-shrink-0" />
            )}
          </button>
          {openSections[section.key] && (
            <div className="px-4 pb-4 border-t pt-3">
              {section.content}
            </div>
          )}
        </Card>
      ))}

      <Card className="p-4 space-y-2">
        <div className="text-xs font-medium">Works Cited</div>
        <div className="text-[9px] text-white/60/60 leading-relaxed space-y-0.5">
          <p>Brain-gut Axis Dysfunction in TBI Pathogenesis — PMC</p>
          <p>Rebuilding Microbiome for Mitigating Traumatic Brain Injury — PMC</p>
          <p>Nutrition for Post-Concussion Syndrome — Cognitive FX</p>
          <p>Creatine and Concussion Recovery — Complete Concussions</p>
          <p>Mitigating Traumatic Brain Injury: Supplementation and Dietary Protocols — PMC</p>
          <p>The Effects of Chlorinated Drinking Water on the Intestinal Microbiome — MDPI</p>
          <p>Comparison of Mineral Content of Tap Water and Bottled Waters — PMC</p>
        </div>
      </Card>
    </div>
  );
}

export default function Lesson8({ view, onViewChange }: { view: LessonView; onViewChange: (v: LessonView) => void }) {
  if (view === "deep") {
    return <DeepDiveView onBack={() => onViewChange("simple")} />;
  }
  return <SimpleView onShowDeepDive={() => onViewChange("deep")} />;
}
