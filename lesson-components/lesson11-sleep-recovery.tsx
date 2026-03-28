import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { LessonView } from "./lesson1-energy-crisis";
import { DeviceMobile as Smartphone, Pill, CaretDown as ChevronDown, CaretUp as ChevronUp, ArrowLeft, Warning as AlertTriangle, Clock, BookOpen, Moon, ForkKnife as UtensilsCrossed, Wine, Thermometer, Sun} from "@phosphor-icons/react";

const IMAGES = {
  brainSleep: "https://amerisleep.com/blog/wp-content/uploads/2019/10/Boost_Brain_Health__How_Sleep_Impacts_Your_Brain_Functions-03-scaled.jpg",
  sleepHygiene: "https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/journeys/journeys_sleep_hygiene_tips_infographic/Journey.SleepHygiene.500pix.jpg?resize=750px:*&output-quality=75",
  sleepTimeline: "https://images.squarespace-cdn.com/content/v1/63813f208be08634a208db60/747d5323-97ad-4ccd-a5ac-af28435da3fb/Sleep+Timeline+web.jpg?format=2500w",
};

function SimpleView({ onShowDeepDive }: { onShowDeepDive: () => void }) {
  return (
    <div className="space-y-4">
      <Card className="p-4 space-y-3" data-testid="card-l11-intro">
        <h2 className="text-lg font-bold" data-testid="text-l11-title">Sleep: The Ultimate Recovery Tool for Boxers</h2>
        <p className="text-sm text-white/60 leading-relaxed">
          After a hard sparring session or a fight where you've taken a "bell-ringer," your brain enters an energy gap. Think of it like a phone with a damaged battery — it's trying to run background updates while it's at 2%, and it can't keep up.
        </p>
        <p className="text-sm text-white/60 leading-relaxed">
          Between <span className="font-medium text-slate-200">30% and 70%</span> of people with head injuries struggle with sleep, and if you don't fix it, your recovery will stall.
        </p>
      </Card>

      <Card className="p-4 space-y-3" data-testid="card-l11-secret-weapon">
        <div className="flex items-center gap-2">
          <Moon className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold">1. Why Sleep is Your Secret Weapon</h3>
        </div>
        <div className="space-y-3">
          <div className="p-3 rounded-md bg-emerald-500/100/5 border border-indigo-500/10 space-y-1" data-testid="item-l11-brain-wash">
            <div className="text-xs font-medium text-slate-200">The "Brain Wash" (Glymphatic System)</div>
            <div className="text-[11px] text-white/60">While you sleep, your brain literally "washes" itself. It opens up drainage channels to clear out toxic waste and proteins that build up after a hit. If you don't sleep, these toxins stay in your head, leading to brain fog and long-term damage.</div>
          </div>
          <div className="p-3 rounded-md bg-emerald-500/100/5 border border-indigo-500/10 space-y-1" data-testid="item-l11-rewiring">
            <div className="text-xs font-medium text-slate-200">Rewiring the Connections</div>
            <div className="text-[11px] text-white/60">A concussion damages the "wires" in your brain. To fix them, your brain needs to find detours. Sleep releases a protein called BDNF that acts like "brain fertilizer," helping those wires reconnect so you get your reaction time and cognitive speed back.</div>
          </div>
        </div>
        <img src={IMAGES.brainSleep} alt="How sleep impacts brain functions" className="w-full rounded-md" loading="lazy" />
      </Card>

      <Card className="p-4 space-y-3 border-red-500/30 bg-red-500/5" data-testid="card-l11-sleep-killers">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-red-500" />
          <h3 className="text-sm font-bold text-red-500">2. The Three Sleep Killers for Fighters</h3>
        </div>
        <div className="space-y-2">
          <div className="p-2.5 rounded-md bg-white/5 space-y-1" data-testid="item-l11-killer-alcohol">
            <div className="flex items-center gap-1.5">
              <Wine className="w-3 h-3 text-red-400" />
              <div className="text-xs font-medium text-red-500">Alcohol</div>
            </div>
            <div className="text-[11px] text-white/60">The biggest barrier to recovery. It might help you fall asleep, but it destroys the quality of that sleep. It also increases brain inflammation, making the "bell-ringer" symptoms last longer and potentially leading to permanent damage.</div>
          </div>
          <div className="p-2.5 rounded-md bg-white/5 space-y-1" data-testid="item-l11-killer-bluelight">
            <div className="flex items-center gap-1.5">
              <Smartphone className="w-3 h-3 text-red-400" />
              <div className="text-xs font-medium text-red-500">Blue Light</div>
            </div>
            <div className="text-[11px] text-white/60">Screens (phones, tablets, TVs) trick your brain into thinking it's daytime. This stops the production of melatonin, the hormone that tells your brain to start the repair process. Put the phone away two hours before bed.</div>
          </div>
          <div className="p-2.5 rounded-md bg-white/5 space-y-1" data-testid="item-l11-killer-meals">
            <div className="flex items-center gap-1.5">
              <UtensilsCrossed className="w-3 h-3 text-red-400" />
              <div className="text-xs font-medium text-red-500">Late-Night Heavy Meals</div>
            </div>
            <div className="text-[11px] text-white/60">Your gut and brain are connected. If you eat a massive meal right before bed, your body spends energy on digestion instead of brain repair. Stop eating at least 3 hours before you hit the hay.</div>
          </div>
        </div>
      </Card>

      <Card className="p-4 space-y-3" data-testid="card-l11-sanctuary">
        <div className="flex items-center gap-2">
          <Moon className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold">3. Creating a "Sleep Sanctuary"</h3>
        </div>
        <p className="text-xs text-white/60 mb-2">Your brain is extra sensitive to light and noise after a hit. Control your environment:</p>
        <div className="space-y-2">
          <div className="flex items-start gap-2 p-2.5 rounded-md bg-muted/50" data-testid="item-l11-darkness">
            <Moon className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-xs font-medium text-slate-200">Total Darkness</div>
              <div className="text-[11px] text-white/60">Blackout curtains or an eye mask. Even a little light can mess with your recovery.</div>
            </div>
          </div>
          <div className="flex items-start gap-2 p-2.5 rounded-md bg-muted/50" data-testid="item-l11-cold">
            <Thermometer className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-xs font-medium text-slate-200">Keep it Cold</div>
              <div className="text-[11px] text-white/60">Your body needs to drop its temperature to fall asleep. Aim for 64°F – 72°F (18°C – 22°C).</div>
            </div>
          </div>
          <div className="flex items-start gap-2 p-2.5 rounded-md bg-muted/50" data-testid="item-l11-sunlight">
            <Sun className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-xs font-medium text-slate-200">Morning Sunlight</div>
              <div className="text-[11px] text-white/60">Get 20 minutes of sun as soon as you wake up. This resets your internal clock so you can sleep better that night.</div>
            </div>
          </div>
        </div>
        <img src={IMAGES.sleepHygiene} alt="Sleep hygiene tips" className="w-full rounded-md" loading="lazy" />
      </Card>

      <Card className="p-4 space-y-3" data-testid="card-l11-supplements">
        <div className="flex items-center gap-2">
          <Pill className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold">4. The Supplement Stack (Consult your Doc)</h3>
        </div>
        <div className="overflow-x-auto -mx-1">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-2 font-medium text-slate-200">Supplement</th>
                <th className="text-left py-2 px-2 font-medium text-slate-200">What it does</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-muted" data-testid="item-l11-supp-melatonin"><td className="py-2 px-2">Melatonin</td><td className="py-2 px-2 text-white/60">Resets your sleep clock and acts as an antioxidant for the brain.</td></tr>
              <tr className="border-b border-muted" data-testid="item-l11-supp-mag"><td className="py-2 px-2">Magnesium L-Threonate</td><td className="py-2 px-2 text-white/60">The only magnesium that easily enters the brain to help "quiet" the system and improve sleep depth.</td></tr>
              <tr className="border-b border-muted" data-testid="item-l11-supp-creatine"><td className="py-2 px-2">Creatine</td><td className="py-2 px-2 text-white/60">Helps fill that "energy gap" by replenishing the brain's fuel.</td></tr>
              <tr data-testid="item-l11-supp-omega"><td className="py-2 px-2">Omega-3 (DHA/EPA)</td><td className="py-2 px-2 text-white/60">Provides the raw materials to repair damaged brain cell membranes.</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="p-4 space-y-3" data-testid="card-l11-rules">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-green-500" />
          <h3 className="text-sm font-bold">5. The New Rules of Recovery</h3>
        </div>
        <div className="space-y-2">
          <div className="p-2.5 rounded-md bg-muted/50 space-y-1" data-testid="item-l11-darkroom-myth">
            <div className="text-xs font-medium text-slate-200">Avoid the "Dark Room" Myth</div>
            <div className="text-[11px] text-white/60">You don't need to sit in a dark room for a week. Rest for the first 24–48 hours, then start doing light walks or very basic activity. Complete inactivity can actually make you feel worse.</div>
          </div>
          <div className="p-2.5 rounded-md bg-muted/50 space-y-1" data-testid="item-l11-naps">
            <div className="text-xs font-medium text-slate-200">Watch the Naps</div>
            <div className="text-[11px] text-white/60">In the first 2 days, sleep as much as you want. After that, keep naps under 30 minutes. If you nap too long during the day, you won't be able to get the deep, "wash-cycle" sleep at night.</div>
          </div>
        </div>
      </Card>

      <Card className="p-4 space-y-2 border-primary/20 bg-primary/5" data-testid="card-l11-summary">
        <h3 className="text-sm font-bold">Summary for the Gym</h3>
        <p className="text-xs text-white/60 leading-relaxed">
          If you've been rocked, your priority is <span className="font-medium text-slate-200">Sleep, Cold, and Dark</span>. Cut the booze, kill the screens, and let your brain's natural "wash cycle" do the work.
        </p>
      </Card>

      <Button className="w-full" variant="secondary" onClick={onShowDeepDive} data-testid="button-show-deep-dive-11">
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
      key: "phenotypes",
      title: "Clinical Phenotypes of Post-Traumatic Sleep Disturbances",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>Sleep disorders after concussion are highly heterogeneous, often shifting from acute hypersomnia to chronic insomnia or circadian rhythm shifts.</p>
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Sleep Phenotype</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Characteristics</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Prevalence</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2">Insomnia</td><td className="py-2 px-2">Difficulty initiating/maintaining sleep; fragmentation</td><td className="py-2 px-2">30–60%</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Excessive Daytime Sleepiness</td><td className="py-2 px-2">Irrepressible need to sleep during sedentary tasks</td><td className="py-2 px-2">~57%</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Pleiosomnia</td><td className="py-2 px-2">Increased total sleep requirement (1–2 hrs more)</td><td className="py-2 px-2">22% at 6 months</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Circadian Rhythm Disorder</td><td className="py-2 px-2">Misalignment between internal clock and environment</td><td className="py-2 px-2">Common in adolescents</td></tr>
                <tr><td className="py-2 px-2">Sleep-Related Breathing</td><td className="py-2 px-2">Obstructive/central sleep apnea</td><td className="py-2 px-2">25–35%</td></tr>
              </tbody>
            </table>
          </div>
          <p>Insomnia is a particularly strong predictor of prolonged recovery, especially in pediatric/adolescent populations — identified as the second strongest predictor of recovery extending past 28 days.</p>
        </div>
      ),
    },
    {
      key: "glymphatic",
      title: "The Glymphatic System & Neurotoxic Waste Clearance",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>The glymphatic system is a brain-wide perivascular network that facilitates exchange of cerebrospinal fluid (CSF) and interstitial fluid (ISF). It clears metabolic waste including amyloid-beta and phosphorylated tau (p-tau).</p>
          <p>During <span className="font-medium text-slate-200">slow-wave sleep</span>, the interstitial space increases significantly, allowing more rapid CSF flow through brain tissue. Concussion impairs this system by disrupting Aquaporin-4 (AQP4) water channel polarization on astrocyte endfeet.</p>
          <p>When sleep is compromised after concussion, neurotoxic waste accumulates, worsening cognitive deficits and potentially contributing to chronic traumatic encephalopathy (CTE).</p>
        </div>
      ),
    },
    {
      key: "neuroplasticity",
      title: "Neuroplasticity & BDNF During Sleep",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>Neuroplasticity — the brain's ability to reorganize and form new neural connections — is highly sleep-dependent. Neurons must find "detours" to reconnect damaged electrical pathways.</p>
          <p>During sleep cycles, the brain consolidates memories and strengthens newly formed synapses through the release of <span className="font-medium text-slate-200">brain-derived neurotrophic factor (BDNF)</span>, a protein that supports the growth and survival of neurons.</p>
          <p>Without adequate sleep, BDNF production is impaired, and the brain's capacity for adaptive rewiring is significantly diminished.</p>
        </div>
      ),
    },
    {
      key: "environment",
      title: "Environmental Optimization: The Sleep Sanctuary",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Factor</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Target</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Rationale</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2">Luminance</td><td className="py-2 px-2">Total darkness</td><td className="py-2 px-2">Maximizes pineal melatonin secretion</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Morning Light</td><td className="py-2 px-2">20–30 min natural sunlight</td><td className="py-2 px-2">Resets circadian clock; improves alertness</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Temperature</td><td className="py-2 px-2">18°C – 22°C</td><td className="py-2 px-2">Supports nocturnal core body temp drop</td></tr>
                <tr><td className="py-2 px-2">Acoustic Floor</td><td className="py-2 px-2">&lt; 30 dB or white noise</td><td className="py-2 px-2">Prevents sympathetic startle responses</td></tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-slate-200">Light Hygiene & Melatonin</p>
          <p>Blue-wavelength light from screens stimulates melanopsin-containing ganglion cells, signaling the SCN (suprachiasmatic nucleus) to suppress melatonin secretion. For concussion recovery, this suppression prevents the brain from entering deep sleep. Screen use should cease 1–2 hours before bed.</p>
          <p className="font-medium text-slate-200">Thermoregulation</p>
          <p>Concussion can cause dysautonomia where the ANS struggles to regulate body temperature. The core temperature must decline to initiate sleep. An environment between 18°C–22°C facilitates this thermal transition.</p>
          <p className="font-medium text-slate-200">Acoustic Stabilization</p>
          <p>Phonophobia often accompanies post-concussion syndrome. Sudden noises trigger sympathetic fight-or-flight responses. Acoustic consistency — via white noise machines or fans — prevents cortisol spikes and sleep disruption.</p>
        </div>
      ),
    },
    {
      key: "disruptors",
      title: "Mitigation of Sleep Disruptors",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p className="font-medium text-slate-200">Alcohol: The Toxicological Impact</p>
          <p>Alcohol reduces REM sleep (critical for memory consolidation and emotional regulation). It exacerbates the neuroinflammatory state by increasing microglial activation and HMGB1 expression — a "danger signaling" molecule that promotes chronic neuroinflammation. TBI survivors who consume alcohol during the first 6–9 months perform significantly worse on cognitive tests.</p>
          <p className="font-medium text-slate-200">Dietary Timing & Autonomic Strain</p>
          <p>~50% of TBI patients experience gastroparesis (delayed gastric emptying). Heavy meals before bed divert energy to digestion, raise core temperature and heart rate, preventing the physiological "dip" needed for sleep. Avoid large meals at least 3–4 hours before bed. A small protein-rich snack may prevent nocturnal hypoglycemia.</p>
          <p className="font-medium text-slate-200">Strategic Napping</p>
          <p>First 48–72 hours: nap whenever fatigued. After that, naps over 30 minutes or after 3:00 PM reduce "sleep pressure" (homeostatic drive), leading to a "tired-but-wired" state at night. Power naps of 20–30 minutes boost alertness and BDNF without disrupting nighttime cycles.</p>
          <img src={IMAGES.sleepTimeline} alt="Sleep recovery timeline" className="w-full rounded-md" loading="lazy" />
        </div>
      ),
    },
    {
      key: "supplements-deep",
      title: "Supplementation Strategies for Sleep Recovery",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Supplement</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Mechanism</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Dosage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2">Melatonin</td><td className="py-2 px-2">Resets SCN clock; antioxidant; neuroprotection</td><td className="py-2 px-2">2–10mg</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Mg L-Threonate</td><td className="py-2 px-2">Crosses BBB; blocks NMDA excitotoxicity</td><td className="py-2 px-2">400mg twice daily</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Omega-3 (DHA/EPA)</td><td className="py-2 px-2">Structural repair of neuronal membranes</td><td className="py-2 px-2">3g+ EPA/DHA</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Creatine</td><td className="py-2 px-2">Replenishes ATP; addresses energy gap</td><td className="py-2 px-2">5g daily (post-loading)</td></tr>
                <tr><td className="py-2 px-2">Zinc</td><td className="py-2 px-2">Essential cofactor for 300+ enzymes</td><td className="py-2 px-2">30–40mg</td></tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-slate-200">Melatonin: Beyond a Sleep Aid</p>
          <p>Melatonin acts as a chronobiotic (resets circadian rhythms), a potent antioxidant (neutralizes free radicals), and an anti-inflammatory agent (reduces microglial activation). In pediatric populations, 3–10mg has been used in RCTs for persistent post-concussive symptoms. Neuroimaging suggests melatonin may alter functional connectivity within the Default Mode Network.</p>
          <p className="font-medium text-slate-200">Magnesium L-Threonate</p>
          <p>Common forms like magnesium oxide are poorly absorbed and don't cross the BBB effectively. L-Threonate is scientifically demonstrated to increase magnesium concentrations in cerebrospinal fluid, supporting synaptic plasticity, GABA production, and HPA-axis stress response attenuation.</p>
          <p className="font-medium text-slate-200">Zinc & Mitochondrial Support</p>
          <p>TBI patients experience acute reduction in serum zinc levels. Supplementation with ~30mg has been correlated with improved sleep quality through its role in neurotransmitter synthesis.</p>
        </div>
      ),
    },
    {
      key: "ans",
      title: "The Autonomic Nervous System & Sleep",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>Concussions often damage the midbrain where ANS neurons reside, causing dysautonomia. This is measured through <span className="font-medium text-slate-200">Heart Rate Variability (HRV)</span> — high HRV indicates a balanced system, low HRV indicates sympathetic dominance.</p>
          <p>Sleep disturbances and ANS dysfunction are bidirectionally linked: poor sleep increases sympathetic overdrive, which makes it harder to fall asleep. HRV abnormalities often persist even after clinical symptoms have seemingly resolved, especially in female athletes.</p>
          <p>Monitoring HRV and practicing relaxation techniques (progressive muscle relaxation, guided imagery) can help "train" the parasympathetic system back into dominance, facilitating better sleep.</p>
        </div>
      ),
    },
    {
      key: "guidelines",
      title: "Clinical Pathways & Behavioral Guidelines",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p className="font-medium text-slate-200">The "Dark Room" Myth & Relative Rest</p>
          <p>Modern research has debunked the "cocooning" approach. Complete inactivity can prolong recovery and lead to depression and social isolation. The gold standard is relative rest for 24–48 hours, followed by gradual, symptom-limited return to daily activities.</p>
          <p>Patients must practice "pacing" — if an activity causes symptoms to flare, stop and rest. This prevents the "boom-and-bust" cycle that leads to physiological exhaustion and sleep disruption.</p>
          <p className="font-medium text-slate-200">Morning Light & Exercise</p>
          <p>Aim for 20–30 minutes of natural light as early as possible to suppress residual melatonin and signal the "active" phase. Once cleared by a physician, gradual exercise is one of the most effective ways to improve sleep quality — it increases BDNF and regulates the ANS (avoid exercising too close to bedtime).</p>
        </div>
      ),
    },
    {
      key: "conclusion",
      title: "Conclusion: Sleep as the Engine of Neurorehabilitation",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>Sleep is not an optional luxury but the foundational platform upon which all recovery mechanisms — glymphatic clearance, neuroplasticity, and autonomic regulation — are built.</p>
          <p>By optimizing the sleep environment (quiet, dark, cool), eliminating disruptors (alcohol, blue light, late meals), and using targeted supplements (melatonin, magnesium L-threonate), the metabolic "gap" can be bridged.</p>
          <p className="font-medium text-slate-200">Recovery is a marathon of metabolic management, and sleep is the fuel that allows the brain to reach the finish line.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-3">
      <Button variant="ghost" size="sm" onClick={onBack} className="mb-1" data-testid="button-back-simple-11">
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Overview
      </Button>

      <Card className="p-4 space-y-2">
        <h2 className="text-lg font-bold" data-testid="text-l11-deep-dive-title">Clinical Deep Dive</h2>
        <p className="text-xs text-white/60 leading-relaxed">
          Neurometabolic Recovery and Sleep Optimization Strategies Following Concussive Brain Injury.
        </p>
      </Card>

      {sections.map((section) => (
        <Card key={section.key} className="overflow-hidden" data-testid={`section-l11-${section.key}`}>
          <button
            className="w-full flex items-center justify-between gap-2 px-4 py-3 text-left"
            onClick={() => toggle(section.key)}
            data-testid={`button-toggle-l11-${section.key}`}
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
          <p>Traumatic Brain Injury and Sleep Disorders — PMC/NIH</p>
          <p>Concussion and the Sleeping Brain — PMC</p>
          <p>The Glymphatic System and CTE — PMC</p>
          <p>Alcohol Exposure after Mild Focal TBI — PMC</p>
          <p>Sleep-Wake Disturbances After TBI — PMC</p>
          <p>Melatonin for Pediatric TBI (SMARTKids Trial)</p>
          <p>Effects of Magnesium L-Threonate on Sleep — UCLA Clinical Trials</p>
          <p>Concussion History and Heart Rate Variability — PMC</p>
        </div>
      </Card>
    </div>
  );
}

export default function Lesson11({ view, onViewChange }: { view: LessonView; onViewChange: (v: LessonView) => void }) {
  if (view === "deep") {
    return <DeepDiveView onBack={() => onViewChange("simple")} />;
  }
  return <SimpleView onShowDeepDive={() => onViewChange("deep")} />;
}
