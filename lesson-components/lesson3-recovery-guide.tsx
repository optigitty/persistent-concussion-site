import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { LessonView } from "./lesson1-energy-crisis";
import { Brain, ShieldCheck as Shield, Pulse as Activity, CaretDown as ChevronDown, CaretUp as ChevronUp, ArrowLeft, Warning as AlertTriangle, BookOpen, Footprints, Smiley as Smile, AppleLogo as Apple} from "@phosphor-icons/react";

const IMAGES = {
  recoveryTimeline: "https://completeconcussions.com/wp-content/uploads/2024/07/image2.png",
  mindset: "https://www.cognitivefxusa.com/hs-fs/hubfs/image1-4.jpg?width=1104&height=762&name=image1-4.jpg",
};

function SimpleView({ onShowDeepDive }: { onShowDeepDive: () => void }) {
  return (
    <div className="space-y-4">
      <Card className="p-4 space-y-3">
        <h2 className="text-lg font-bold">Concussion Recovery: The Fighter's Guide to Getting Back in the Ring</h2>
        <p className="text-sm text-white/60 leading-relaxed">
          The old advice for a concussion was "stay in a dark room until you feel better." Research now shows that too much rest actually slows you down.
        </p>
        <p className="text-xs font-medium text-slate-200">
          Modern recovery is active, not passive.
        </p>
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold">1. The "Energy Crisis" in Your Brain</h3>
        </div>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p>A concussion isn't a bruise or a bleed that shows up on an MRI. It is a functional "power failure." When you take a hard shot, your brain cells leak potassium and soak up calcium. This creates a massive demand for energy (ATP) to fix the balance.</p>
          <p>At the same time, blood flow to the brain drops. Your brain is essentially "running lean" — it needs more fuel but has less coming in. This is why you feel "foggy." Even after your symptoms vanish, your brain's energy levels may still be low for weeks.</p>
        </div>
      </Card>

      <Card className="p-4 space-y-3 border-red-500/30 bg-red-500/5">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-red-500" />
          <h3 className="text-sm font-bold text-red-500">2. The Golden Rule: No "Second Hits"</h3>
        </div>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p>The biggest risk is <span className="font-medium text-slate-200">Second Impact Syndrome (SIS)</span>. If you take another hit while your brain is still in that energy crisis, your brain can lose the ability to regulate its own blood flow. This causes rapid swelling and can be fatal or lead to permanent damage.</p>
          <p className="font-medium text-slate-200">"No symptoms" does not mean you are healed.</p>
        </div>
        <img src={IMAGES.recoveryTimeline} alt="Concussion recovery timeline" className="w-full rounded-md" loading="lazy" />
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold">3. The End of the "Dark Room"</h3>
        </div>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p>You should rest for the first <span className="font-medium text-slate-200">24–48 hours only</span>. After that, total rest makes things worse by causing anxiety and deconditioning.</p>
          <p><span className="font-medium text-slate-200">Active Recovery:</span> Within 2–10 days, you should start light exercise that doesn't make your symptoms worse. This helps "re-train" your nervous system and gets blood flowing back to the brain like it did pre-injury.</p>
        </div>
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Footprints className="w-4 h-4 text-green-500" />
          <h3 className="text-sm font-bold">4. Training Your Way Back (The 6 Steps)</h3>
        </div>
        <div className="space-y-2">
          {[
            { step: 1, title: "Light Daily Life", desc: "Walking, light chores." },
            { step: 2, title: "Progressive Aerobic Exercise", desc: "15–20 mins on a stationary bike. No lifting." },
            { step: 3, title: "Sport-Specific Work", desc: "Running drills, shadowboxing. No head impact." },
            { step: 4, title: "Non-Contact Drills", desc: "Heavy bag, pads, complex footwork, and lifting. At least 14 days out. Start light." },
            { step: 5, title: "Full-Contact Practice", desc: "Technical and hard sparring. At least 30 days out from injury." },
            { step: 6, title: "Competition", desc: "Full return to the ring." },
          ].map((s) => (
            <div key={s.step} className="flex items-start gap-2 p-2 rounded-md bg-muted/50">
              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[10px] font-bold text-green-500">{s.step}</span>
              </div>
              <div>
                <div className="text-xs font-medium text-slate-200">{s.title}</div>
                <div className="text-[11px] text-white/60">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Smile className="w-4 h-4 text-amber-500" />
          <h3 className="text-sm font-bold">5. Mindset: Don't Let Fear Slow You Down</h3>
        </div>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p>If you believe every small headache is a sign of permanent brain damage, your recovery will take longer. This is called the <span className="font-medium text-slate-200">"Nocebo Effect."</span></p>
          <p><span className="font-medium text-slate-200">Avoid "Fear-Avoidance":</span> If you stop moving entirely because you're scared of symptoms, your body gets "unfit," making you even more sensitive to light and movement. Trust the gradual process and remember you're not back at square one just because you feel symptoms.</p>
        </div>
        <img src={IMAGES.mindset} alt="Fear avoidance in concussion recovery" className="w-full rounded-md" loading="lazy" />
        <p className="text-xs text-white/60 italic">
          It is ok to feel some symptoms within reason. But listen to your body and follow the Rule of Three!
        </p>
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Apple className="w-4 h-4 text-green-600" />
          <h3 className="text-sm font-bold">6. Fueling the Repair</h3>
        </div>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p>Specific nutrients can help bridge the energy gap. Healthy nutrition (diet, hydration, supplements) is key for concussion recovery.</p>
          <p className="text-xs italic">We get into more detail on nutrition in an upcoming lesson.</p>
        </div>
      </Card>

      <Button className="w-full" variant="secondary" onClick={onShowDeepDive} data-testid="button-show-deep-dive-3">
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
      key: "13rs",
      title: "The 13 Rs of Concussion Management",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>The Amsterdam 2022 Consensus expanded the previous "11 Rs" to "13 Rs," reflecting the growing complexity of clinical care.</p>
          <div className="space-y-1.5">
            {[
              { r: "Recognize", desc: "On-field identification via tools like the CRT6." },
              { r: "Reduce", desc: "Rule changes and training modifications to decrease incidence." },
              { r: "Remove", desc: "Immediate cessation of play upon suspicion of injury." },
              { r: "Refer", desc: "Triage to emergency services or specialized care." },
              { r: "Re-evaluate", desc: "Assessment using standardized tools (SCAT6, SCOAT6)." },
              { r: "Rest", desc: "24–48 hours of relative, not absolute, rest." },
              { r: "Rehabilitate", desc: "Tailored physical, vestibular, and ocular therapies." },
              { r: "Recover", desc: "Integration of clinical symptom resolution with physiological readiness." },
              { r: "Return-to-Learn", desc: "Gradual reintegration into academic/cognitive tasks." },
              { r: "Return-to-Sport", desc: "Individualized, exertion-based progression to competition." },
              { r: "Reconsider", desc: "Evaluation of comprehensive medical and concussion history." },
              { r: "Residual Effects", desc: "Long-term monitoring for chronic cognitive or emotional signs." },
              { r: "Retire", desc: "Multidisciplinary counseling regarding cessation of contact sports." },
            ].map((item) => (
              <div key={item.r} className="flex gap-2 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-200 text-xs">{item.r}:</span>{" "}
                  <span className="text-xs">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      key: "metabolic",
      title: "The Metabolic Energy Crisis",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>A concussion represents a functional disruption of brain cells rather than a gross anatomical tear or bleed. When subjected to forces, neurons undergo ionic shifts: potassium leaks out while sodium and calcium flood inward.</p>
          <p>The sodium-potassium pumps go into overdrive, demanding massive amounts of ATP. This leads to acute hypermetabolism — the brain's demand for glucose spikes dramatically. However, this occurs in a context of reduced cerebral blood flow, creating a dangerous mismatch between metabolic demand and supply.</p>
          <p>Research using arterial spin labeling has shown that even after athletes report being symptom-free and return to baseline on cognitive tests, their cerebral blood flow may remain significantly reduced. In one study, concussed players showed clinical recovery by day 8, yet neurophysiological markers remained abnormal, indicating neurons were still under metabolic stress.</p>
          <p className="font-medium text-slate-200">This gap between "feeling fine" and "being recovered" is the most dangerous window in concussion management.</p>
        </div>
      ),
    },
    {
      key: "sis",
      title: "Second Impact Syndrome (SIS)",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>SIS occurs when an individual sustains a second head impact before the brain has fully recovered. During the metabolic energy crisis, the brain's ability to regulate its own blood flow (autoregulation) is compromised.</p>
          <p>A second impact, even if relatively minor, can trigger catastrophic loss of autoregulation, leading to rapid vascular engorgement, diffuse cerebral swelling, and massive increase in intracranial pressure. This can cause brain herniation, often leading to permanent disability or death within minutes.</p>
          <p className="font-medium text-slate-200">While SIS is statistically rare, its mortality rate is reported to be over 50%, with nearly 100% of survivors suffering permanent neurological deficits.</p>
          <p>This is the primary biological rationale for the stepwise return-to-sport protocols and why no athlete should be cleared for contact before full physiological recovery.</p>
        </div>
      ),
    },
    {
      key: "active-recovery",
      title: "Active Recovery & Aerobic Exercise",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>Prolonged rest for more than 48 hours has been shown to be counterproductive, potentially leading to social isolation, anxiety, and physical deconditioning. Current consensus recommends "relative rest" for 24–48 hours, followed by gradual activity increase.</p>
          <p className="font-medium text-slate-200">The Buffalo Concussion Treadmill Test (BCTT)</p>
          <p>Controlled exertion facilitates recovery by improving autonomic nervous system regulation and normalizing cerebral blood flow. Early aerobic intervention can reduce the risk of persistent post-concussion symptoms by nearly 50%.</p>
          <p>The BCTT determines the exact heart rate threshold at which symptoms begin to exacerbate. The patient is then prescribed exercise at a specific percentage of that threshold.</p>
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Metric</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Protocol</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2">Heart Rate Threshold (HRt)</td><td className="py-2 px-2">HR at which symptoms increase during testing</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Athletes</td><td className="py-2 px-2">90% of HRt, 20 min daily</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Deconditioned</td><td className="py-2 px-2">80% of HRt, 20 min daily</td></tr>
                <tr><td className="py-2 px-2">Progression</td><td className="py-2 px-2">5–7 days/week; increase HR by 5–10% weekly if tolerated</td></tr>
              </tbody>
            </table>
          </div>
          <p>This approach allows the brain to adapt to metabolic stress without triggering the full energy crisis, effectively "training" the autonomic nervous system to recover.</p>
        </div>
      ),
    },
    {
      key: "psychology",
      title: "Psychological Factors: Nocebo & Fear-Avoidance",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p className="font-medium text-slate-200">The Nocebo Effect</p>
          <p>The nocebo effect occurs when negative expectations lead to worsening of physical symptoms. Studies show that patients told they have a "mild traumatic brain injury" often expect worse outcomes and report more severe symptoms than those told they have a "concussion" — even though the pathology is identical.</p>
          <p>The "Good Ole Days" bias causes patients to misattribute everyday lapses (misplacing keys, feeling tired) to their concussion, when these experiences were present before injury too.</p>
          <p>Anxiety triggers stress hormones like cortisol and CCK, which heighten pain sensitivity and lower the brain's natural dopamine and opioid levels, making physical symptoms feel more intense.</p>
          <p className="font-medium text-slate-200">Fear-Avoidance and the Cycle of Disability</p>
          <p>Fear-avoidance occurs when a patient avoids exertion because they believe any increase in symptoms is further brain damage. This creates a self-perpetuating cycle:</p>
          <div className="space-y-1.5 pl-2">
            <p><span className="font-medium text-slate-200">Symptom Anticipation:</span> Fear causes avoidance even without current symptoms.</p>
            <p><span className="font-medium text-slate-200">Deconditioning:</span> Lack of activity leads to cardiovascular and autonomic deconditioning.</p>
            <p><span className="font-medium text-slate-200">Chronic Sensitivity:</span> Prolonged avoidance prevents the brain from "re-calibrating" to normal stimuli.</p>
          </div>
          <p>The Fear Avoidance after Concussion Tool (FACT) identifies at-risk patients. Management uses "Graded Exposure Therapy" (GET) — controlled, incremental exposure to feared activities.</p>
        </div>
      ),
    },
    {
      key: "rts",
      title: "Return-to-Sport & Return-to-Learn",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p className="font-medium text-slate-200">Stepwise Return-to-Sport (RTS)</p>
          <p>Each step represents a minimum of 24 hours of successful participation without significant symptom increase.</p>
          <div className="space-y-1.5">
            {[
              { step: 1, activity: "Symptom-limited activity", goal: "Gradual re-introduction of daily activities" },
              { step: 2, activity: "Light aerobic exercise", goal: "Walking or bike for 15–20 min; no resistance training" },
              { step: 3, activity: "Sport-specific exercise", goal: "Running drills; no risk of head impact" },
              { step: 4, activity: "Non-contact training drills", goal: "Complex drills, multi-plane movement, resistance training" },
              { step: 5, activity: "Full-contact practice", goal: "Normal training after medical clearance" },
              { step: 6, activity: "Competition", goal: "Full, unrestricted return to play" },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-2 p-2 rounded-md bg-muted/50">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-bold text-primary">{s.step}</span>
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-200">{s.activity}</div>
                  <div className="text-[11px]">{s.goal}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs">A key change in 2022/2024 updates: medical clearance is now recommended before Step 4 (non-contact training), whereas previous guidelines recommended clearance before Step 5.</p>
          <p className="font-medium text-slate-200">Return-to-Learn (RTL) for Students</p>
          <p>Academic reintegration is the primary priority — students should achieve full RTL before returning to competitive sport:</p>
          <div className="space-y-1 pl-2 text-xs">
            <p>1. <span className="font-medium text-slate-200">Initial Rest:</span> 24–48 hours with reduced screen time</p>
            <p>2. <span className="font-medium text-slate-200">Return to Environment:</span> Half-days, prioritizing presence over performance</p>
            <p>3. <span className="font-medium text-slate-200">Return to Workload:</span> Gradual homework introduction; temporary academic accommodations</p>
            <p>4. <span className="font-medium text-slate-200">Full Participation:</span> Full workload without accommodations; must be tolerated before heavy training</p>
          </div>
        </div>
      ),
    },
    {
      key: "vision",
      title: "Vision & Vestibular Rehabilitation",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>Oculomotor issues appear in up to 82% of concussed patients. One of the most prevalent conditions is convergence insufficiency (CI), where the eyes have difficulty turning inward to focus on near objects.</p>
          <p>The CONCUSS trial demonstrated that specialized office-based vision therapy (OBVAM) is highly effective, showing significantly better outcomes than a "wait and see" approach.</p>
          <p>Vestibular therapy helps patients with dizziness or balance problems by retraining the brain to integrate signals from the inner ear and the eyes.</p>
          <p>A holistic approach identifies and treats specific "sub-types" of concussion symptoms involving the vestibular system, ocular system, cervical spine, or metabolic/autonomic systems.</p>
        </div>
      ),
    },
    {
      key: "nutrition",
      title: "Nutritional Support for the Recovering Brain",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>Specific nutrients can support the brain's metabolic needs and dampen the inflammatory response following injury.</p>
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Nutrient</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Relevance</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Dosing</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2">Omega-3 Fatty Acids</td><td className="py-2 px-2">Reduce neuroinflammation, support membrane repair</td><td className="py-2 px-2">2–4g/day EPA+DHA</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Creatine Monohydrate</td><td className="py-2 px-2">Buffers ATP levels, supports energy homeostasis</td><td className="py-2 px-2">5g/day (20g/day load x4 days)</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Magnesium</td><td className="py-2 px-2">Blocks excitotoxicity, reduces headache</td><td className="py-2 px-2">400mg/day bioavailable form</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Vitamin D</td><td className="py-2 px-2">Immune modulation; deficiency prolongs recovery</td><td className="py-2 px-2">Target serum 50+ ng/mL</td></tr>
                <tr><td className="py-2 px-2">Riboflavin (B2)</td><td className="py-2 px-2">Supports mitochondrial energy production</td><td className="py-2 px-2">400mg/day for 14 days</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      key: "fatigue",
      title: "Sleep Hygiene & Fatigue Management",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>Cognitive fatigue and sleep disturbances are among the most debilitating concussion symptoms. Poor sleep prevents the brain from clearing metabolic waste via the glymphatic system, prolonging the energy crisis.</p>
          <p className="font-medium text-slate-200">The Four Ps of Energy Management</p>
          <div className="space-y-1.5">
            {[
              { p: "Plan", desc: "Schedule demanding tasks for times when energy is highest." },
              { p: "Prioritize", desc: "Focus on essential activities, let go of the non-essential." },
              { p: "Pace", desc: "Take frequent, scheduled breaks before symptoms flare up." },
              { p: "Position", desc: "Perform tasks in ergonomically supportive ways to minimize neck strain and visual load." },
            ].map((item) => (
              <div key={item.p} className="flex gap-2 items-start p-2 rounded-md bg-muted/50">
                <div className="w-5 h-5 rounded-full bg-emerald-500/100/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-bold text-emerald-400">{item.p[0]}</span>
                </div>
                <div>
                  <span className="font-medium text-slate-200 text-xs">{item.p}:</span>{" "}
                  <span className="text-xs">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      key: "conclusion",
      title: "Setting Realistic Expectations",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>"No symptoms" is merely the beginning of the recovery conversation, not the end. The persistence of physiological stress in the brain, long after clinical symptoms have vanished, necessitates a cautious, stepwise approach.</p>
          <p className="font-medium text-slate-200">Recovery is optimized when it is:</p>
          <div className="space-y-1.5 pl-2">
            <p><span className="font-medium text-slate-200">Active:</span> Starting light movement early to prevent deconditioning and autonomic dysfunction.</p>
            <p><span className="font-medium text-slate-200">Holistic:</span> Addressing ocular, vestibular, and cervical systems alongside metabolic and nutritional needs.</p>
            <p><span className="font-medium text-slate-200">Resilient:</span> Actively countering fear-avoidance and the nocebo effect through education and graded exposure.</p>
            <p><span className="font-medium text-slate-200">Monitored:</span> Guided by a healthcare professional using objective measures to supplement subjective reporting.</p>
          </div>
          <p>The transition from a passive victim of injury to an active participant in rehabilitation is the hallmark of modern concussion care.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-3">
      <Button variant="ghost" size="sm" onClick={onBack} className="mb-1" data-testid="button-back-simple-3">
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Overview
      </Button>

      <Card className="p-4 space-y-2">
        <h2 className="text-lg font-bold">Clinical Deep Dive</h2>
        <p className="text-xs text-white/60 leading-relaxed">
          The Evolving Clinical Landscape of Concussion Recovery: A Multidisciplinary Analysis of Active Rehabilitation, Physiological Homeostasis, and Psychological Resilience.
        </p>
      </Card>

      {sections.map((section) => (
        <Card key={section.key} className="overflow-hidden" data-testid={`section-l3-${section.key}`}>
          <button
            className="w-full flex items-center justify-between gap-2 px-4 py-3 text-left"
            onClick={() => toggle(section.key)}
            data-testid={`button-toggle-l3-${section.key}`}
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
          <p>Amsterdam 2022 Consensus Statement on Concussion in Sport — BJSM</p>
          <p>The Neurometabolic Cascade of Concussion — PMC, NIH</p>
          <p>Second Impact Syndrome — StatPearls, NCBI Bookshelf</p>
          <p>Buffalo Concussion Treadmill Test — Complete Concussions</p>
          <p>Nocebo Effect in Concussion Recovery — Complete Concussions</p>
          <p>Fear Avoidance after Concussion Tool (FACT) — PMC</p>
          <p>Mitigating Traumatic Brain Injury: Supplementation and Dietary Protocols — PMC</p>
        </div>
      </Card>
    </div>
  );
}

export default function Lesson3({ view, onViewChange }: { view: LessonView; onViewChange: (v: LessonView) => void }) {
  if (view === "deep") {
    return <DeepDiveView onBack={() => onViewChange("simple")} />;
  }
  return <SimpleView onShowDeepDive={() => onViewChange("deep")} />;
}
