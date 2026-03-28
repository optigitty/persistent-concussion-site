import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { LessonView } from "./lesson1-energy-crisis";
import { Brain, Barbell as Dumbbell, Warning as AlertTriangle, CaretDown as ChevronDown, CaretUp as ChevronUp, ArrowLeft, Pulse as Activity, Heart, BookOpen, Footprints} from "@phosphor-icons/react";

const IMAGES = {
  bdnf: "https://www.frontiersin.org/files/Articles/1307507/fnhum-17-1307507-HTML/image_m/fnhum-17-1307507-g004.jpg",
  threePointRule: "https://www.cognitivefxusa.com/hs-fs/hubfs/image1-4.jpg?width=1104&height=762&name=image1-4.jpg",
  heartRateThreshold: "https://images.squarespace-cdn.com/content/v1/63813f208be08634a208db60/1678215892461-S613N26VYHXHYVSMIF4M/image-asset.png?format=2500w",
  redFlags: "https://completeconcussions.com/wp-content/uploads/2024/02/image1.png",
};

function SimpleView({ onShowDeepDive }: { onShowDeepDive: () => void }) {
  return (
    <div className="space-y-4">
      <Card className="p-4 space-y-3">
        <h2 className="text-lg font-bold">Exercise Your Way to Recovery</h2>
        <p className="text-sm text-white/60 leading-relaxed">
          Sitting in a dark room is no longer the best way to fix a concussion. Doctors used to call this "cocoon therapy," but we now know that total rest can actually slow your recovery.
        </p>
        <p className="text-sm font-medium text-slate-200">
          Modern research shows that light exercise is the fastest way to get your brain back in the fight.
        </p>
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold">The "Energy Crisis" in Your Brain</h3>
        </div>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p>A concussion is a functional injury, not a structural one. It's a glitch in how your brain uses energy. When you take a hard hit, your brain cells leak chemicals and demand a massive amount of fuel to reset.</p>
          <p>At the same time, blood flow to the brain often drops. This creates an energy crisis. Your brain wants more fuel than your body can deliver. This mismatch is why you feel "foggy" or get a pounding headache when you try to do too much.</p>
        </div>
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-green-500" />
          <h3 className="text-sm font-bold">The Brain Fertilizer (BDNF)</h3>
        </div>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p>Aerobic exercise — like walking or light cycling — acts like <span className="font-medium text-slate-200">"brain fertilizer."</span> It triggers the release of a protein called BDNF. BDNF helps your brain repair damaged connections and grow new ones.</p>
          <p>A 2025 study from Western University found that just one 20-minute session of light exercise can jumpstart this process. Athletes had faster reaction times and fewer symptoms just 24 hours after their first light workout.</p>
        </div>
        <img src={IMAGES.bdnf} alt="BDNF and exercise effects on the brain" className="w-full rounded-md" loading="lazy" />
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Heart className="w-4 h-4 text-red-500" />
          <h3 className="text-sm font-bold">How to Train During Recovery</h3>
        </div>
        <p className="text-sm text-white/60 leading-relaxed">
          You shouldn't just jump back into sparring. You need to find your <span className="font-medium text-slate-200">"symptom threshold"</span> — the heart rate where your symptoms start to get worse.
        </p>
      </Card>

      <Card className="p-4 space-y-3 border-primary/30 bg-primary/5">
        <h3 className="text-sm font-bold">The 3-Point Rule</h3>
        <p className="text-xs text-white/60 mb-2">Use this rule to manage your daily activity and exercise:</p>
        <div className="space-y-2">
          {[
            { step: 1, title: "Check your baseline", desc: "Rate your symptoms (headache, fog, etc.) from 0 to 10." },
            { step: 2, title: "Monitor the jump", desc: "You can exercise or work as long as your symptoms don't increase by more than 3 points." },
            { step: 3, title: "The 20-minute check", desc: "Your symptoms should return to your baseline within 20–30 minutes after you stop." },
          ].map((s) => (
            <div key={s.step} className="flex items-start gap-2 p-2 rounded-md bg-white/5">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[10px] font-bold text-primary">{s.step}</span>
              </div>
              <div>
                <div className="text-xs font-medium text-slate-200">{s.title}</div>
                <div className="text-[11px] text-white/60">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-white/60 italic">
          If your symptoms jump by 3 points or stay elevated for hours, you did too much. Scale back the intensity tomorrow.
        </p>
        <img src={IMAGES.threePointRule} alt="The 3-point rule for concussion recovery" className="w-full rounded-md" loading="lazy" />
      </Card>

      <Card className="p-4 space-y-3">
        <p className="text-xs text-white/60">
          For another layer of analysis, you can measure your heart rate, notice what heart rate your symptoms flare up at, and work around that:
        </p>
        <img src={IMAGES.heartRateThreshold} alt="Heart rate threshold for concussion exercise" className="w-full rounded-md" loading="lazy" />
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Footprints className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold">The Road Back to the Ring</h3>
        </div>
        <p className="text-xs text-white/60 mb-2">The 6-step protocol from the Amsterdam Consensus:</p>
        <div className="space-y-1.5">
          {[
            { step: 1, activity: "Daily Life", goal: "Basic chores and walking." },
            { step: 2, activity: "Light Cardio", goal: "Walking or stationary bike (No lifting)." },
            { step: 3, activity: "Light Drills", goal: "Running, shadowboxing (No contact)." },
            { step: 4, activity: "Heavier Drills", goal: "Heavy bag, pad work, complex movement, light strength training (No contact). At least 14 days out. Start light." },
            { step: 5, activity: "Full Practice", goal: "Technical sparring (Requires doctor's clearance). At least 30 days out." },
            { step: 6, activity: "The Fight", goal: "Unrestricted return to sparring and competition." },
          ].map((s) => (
            <div key={s.step} className="flex items-start gap-2 p-2 rounded-md bg-muted/50">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[10px] font-bold text-emerald-400">{s.step}</span>
              </div>
              <div>
                <div className="text-xs font-medium text-slate-200">{s.activity}</div>
                <div className="text-[11px] text-white/60">{s.goal}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4 space-y-3 border-red-500/30 bg-red-500/5">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-red-500" />
          <h3 className="text-sm font-bold text-red-500">When to See a Doctor Immediately</h3>
        </div>
        <p className="text-sm text-white/60 leading-relaxed">
          "Nuisance" symptoms like mild headaches or light sensitivity are normal during recovery. However, <span className="font-medium text-slate-200">Red Flags</span> mean you need an ER immediately:
        </p>
        <p className="text-[10px] text-white/60 italic">
          From: Sport Concussion Assessment Tool 6 (SCAT6), British Journal of Sports Medicine 2023.
        </p>
        <img src={IMAGES.redFlags} alt="Red flag symptoms requiring emergency evaluation" className="w-full rounded-md" loading="lazy" />
      </Card>

      <Card className="p-3 space-y-1 bg-green-500/5 border-green-500/20">
        <p className="text-xs font-medium text-slate-200">The bottom line:</p>
        <p className="text-xs text-white/60">
          Don't fear movement. Use a heart rate monitor, follow the 3-point rule, and feed your brain the oxygen it needs to heal.
        </p>
      </Card>

      <Button className="w-full" variant="secondary" onClick={onShowDeepDive} data-testid="button-show-deep-dive-7">
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
      key: "energy-crisis",
      title: "The Energy Crisis & Autonomic Dysregulation",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>When the brain experiences rapid acceleration or deceleration, axonal shearing and membrane stretching trigger a massive, unregulated release of glutamate. This initiates ionic flux where K⁺ leaks out and Ca²⁺/Na⁺ flood in, creating a state of acute hypermetabolism followed by prolonged hypometabolism.</p>
          <p>The central autonomic network (CAN) — including the brainstem, thalamus, and insula — often suffers functional impairment, resulting in "autonomic dysregulation" where the sympathetic nervous system dominates.</p>
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Mechanism</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Physiological Impact</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Clinical Manifestation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2">Ionic Flux</td><td className="py-2 px-2">K⁺ efflux, Ca²⁺ influx</td><td className="py-2 px-2">Neurochemical instability</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Glutamate Cascade</td><td className="py-2 px-2">Excitatory neurotransmitter release</td><td className="py-2 px-2">Energy crisis / metabolic debt</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Cerebrovascular Reactivity</td><td className="py-2 px-2">Sensitivity to arterial CO₂</td><td className="py-2 px-2">Symptom exacerbation during exertion</td></tr>
                <tr><td className="py-2 px-2">CAN Dysfunction</td><td className="py-2 px-2">Impaired brainstem/thalamic regulation</td><td className="py-2 px-2">Autonomic dysregulation / HRV changes</td></tr>
              </tbody>
            </table>
          </div>
          <p>In concussed patients, ventilation is often inappropriately low relative to exercise intensity, causing arterial CO₂ levels to rise. Because the injured brain is hypersensitive to CO₂, this leads to abnormal cerebral blood flow that exceeds what's needed — worsening symptoms.</p>
        </div>
      ),
    },
    {
      key: "bdnf",
      title: "Molecular Mechanisms: The Role of BDNF",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>Brain-derived neurotrophic factor (BDNF) is essential for neuronal survival and neuroplasticity. It supports the growth of new neurons and strengthening of existing synapses, allowing the brain to reorganize and bypass areas of functional impairment.</p>
          <p>After concussion, BDNF levels are typically suppressed, delaying structural repair. Preclinical studies show that voluntary aerobic exercise initiated within 7–14 days post-injury significantly enhances endogenous BDNF production in the hippocampus.</p>
          <p className="font-medium text-slate-200">Importantly, "voluntary" exercise is superior to "forced" exercise — animals forced to exercise under stress showed increased corticosterone levels that blocked BDNF benefits.</p>
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Biomarker</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Function</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Post-Concussion</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">With Exercise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2">BDNF</td><td className="py-2 px-2">Neuronal survival; synaptogenesis</td><td className="py-2 px-2">Suppressed</td><td className="py-2 px-2">Increased (up to 3x)</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Glutamate</td><td className="py-2 px-2">Primary excitatory neurotransmitter</td><td className="py-2 px-2">Massive unregulated release</td><td className="py-2 px-2">Normalized</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Catecholamines</td><td className="py-2 px-2">Sympathetic signaling</td><td className="py-2 px-2">Chronically elevated</td><td className="py-2 px-2">Regulated via ANS training</td></tr>
                <tr><td className="py-2 px-2">MCAv</td><td className="py-2 px-2">Middle cerebral artery velocity</td><td className="py-2 px-2">Dysregulated reactivity</td><td className="py-2 px-2">Increased / normalized</td></tr>
              </tbody>
            </table>
          </div>
          <p>High BDNF levels post-injury have been associated with a lower risk of intracranial bleeding and a higher likelihood of full symptom resolution within 28 days.</p>
        </div>
      ),
    },
    {
      key: "western-study",
      title: "The 2025 Western University Study",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>Published in the Journal of Sports Sciences (February 2025), this study provided definitive evidence that even a single session of moderate aerobic exercise can "jumpstart" cognitive recovery.</p>
          <p>Researchers focused on varsity athletes 3–14 days post-injury and used an "antisaccade task" — a specialized eye-movement test that measures inhibitory control and reaction time — to assess executive function.</p>
          <p className="font-medium text-slate-200">Key Findings:</p>
          <div className="space-y-1.5 pl-2">
            <p>Concussed athletes showed baseline impairments: longer reaction times and more directional errors vs. healthy controls.</p>
            <p>After a single 20-minute bout at 80% of symptom-threshold HR, athletes showed significant reduction in reaction times.</p>
            <p>Improvement in cognitive function was accompanied by a reduction in symptom severity and frequency.</p>
          </div>
          <p>This suggests that the mechanism of exercise-induced recovery is not limited to vascular benefits but includes a genuine "neuronal boost" — a transient enhancement of prefrontal executive function.</p>
        </div>
      ),
    },
    {
      key: "bctt",
      title: "The Buffalo Concussion Treadmill Test (BCTT)",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>The BCTT is the standardized protocol to identify the Heart Rate Threshold (HRt) — the specific heart rate at which symptoms begin to worsen. It uses a modified Balke protocol where speed stays constant while incline increases every minute.</p>
          <p className="font-medium text-slate-200">The Protocol:</p>
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Minute</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Stage</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Speed</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Incline</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2">0–2</td><td className="py-2 px-2">Warm-up</td><td className="py-2 px-2">2.5 mph</td><td className="py-2 px-2">0%</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">3</td><td className="py-2 px-2">Stage 1</td><td className="py-2 px-2">3.3 mph</td><td className="py-2 px-2">0%</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">4–17</td><td className="py-2 px-2">Stages 2–15</td><td className="py-2 px-2">3.3 mph</td><td className="py-2 px-2">+1%/min</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">18</td><td className="py-2 px-2">Stage 16</td><td className="py-2 px-2">3.3 mph</td><td className="py-2 px-2">15%</td></tr>
                <tr><td className="py-2 px-2">19+</td><td className="py-2 px-2">Stage 17+</td><td className="py-2 px-2">+0.4 mph/min</td><td className="py-2 px-2">15%</td></tr>
              </tbody>
            </table>
          </div>
          <p><span className="font-medium text-slate-200">Termination:</span> The test stops when symptoms increase by 3+ points over baseline, or when the patient reaches exhaustion (RPE 17–20) or age-predicted maximum HR.</p>
          <p>If the patient reaches exhaustion without a significant symptom spike, they are considered "physiologically recovered" from an autonomic standpoint.</p>
        </div>
      ),
    },
    {
      key: "fitt",
      title: "The FITT Exercise Prescription",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>The Heart Rate Threshold serves as the foundation for the "exercise dose."</p>
          <div className="space-y-2">
            {[
              { label: "Frequency", desc: "5–6 days per week. Consistency is key to desensitizing the ANS." },
              { label: "Intensity", desc: "Athletes: 90% of HRt. Deconditioned: 80% of HRt. Example: If HRt = 150 bpm, target = 135 bpm (range: 130–140)." },
              { label: "Time", desc: "Start at 20 min, gradually increase to 30 min. 5-min warm-up and cool-down." },
              { label: "Type", desc: "Rhythmic, large-muscle aerobic: walking or stationary cycling. Allows precise HR control and minimizes head impact risk." },
            ].map((item) => (
              <div key={item.label} className="p-2.5 rounded-md bg-muted/50 space-y-1">
                <div className="text-xs font-medium text-slate-200">{item.label}</div>
                <div className="text-[11px] text-white/60">{item.desc}</div>
              </div>
            ))}
          </div>
          <p className="font-medium text-slate-200">Weekly Progression</p>
          <p>Increase target HR by 5–10% every 1–2 weeks. Some clinicians use "symptom-contingent" progression: if 2 consecutive days with no symptom increase (+0), increase target HR by 5%. If symptoms increase by 3+, decrease intensity and return to previous successful stage.</p>
        </div>
      ),
    },
    {
      key: "psychology",
      title: "Psychological Resilience: Fear-Avoidance",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>One of the most significant obstacles to recovery is the "fear-avoidance model" — patients interpret symptoms as a threat to long-term health, triggering catastrophizing and hypervigilance.</p>
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Construct</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Definition</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Impact on Recovery</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2">Catastrophizing</td><td className="py-2 px-2">Viewing symptoms as permanent</td><td className="py-2 px-2">Increases perceived pain/disability</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Kinesiophobia</td><td className="py-2 px-2">Fear of movement/re-injury</td><td className="py-2 px-2">Leads to disuse and PPCS</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Cogniphobia</td><td className="py-2 px-2">Fear of cognitive exertion</td><td className="py-2 px-2">School/work withdrawal</td></tr>
                <tr><td className="py-2 px-2">Fear Avoidance</td><td className="py-2 px-2">Avoiding triggers to prevent symptoms</td><td className="py-2 px-2">Prevents desensitization</td></tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-slate-200">These psychological constructs are often better predictors of recovery duration than the initial severity of the concussion itself.</p>
          <p>Active rehabilitation counters this by reframing symptoms as "nuisances" rather than "dangers." When a patient experiences a slight headache during exercise but sees it return to baseline within 20 minutes, they learn their brain is not fragile — but adaptable.</p>
        </div>
      ),
    },
    {
      key: "two-point-rule",
      title: "The 2-Point Rule for Self-Monitoring",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>To bridge clinical supervision and home-based exercise:</p>
          <div className="space-y-1.5 pl-2">
            <p><span className="font-medium text-slate-200">Step 1 — Baseline:</span> Before any activity, rate symptoms 0–10.</p>
            <p><span className="font-medium text-slate-200">Step 2 — Monitor:</span> Continue as long as symptoms don't increase by more than 2 points over baseline.</p>
            <p><span className="font-medium text-slate-200">Step 3 — Recovery Check:</span> After stopping, symptoms should return to baseline within 20–30 minutes (max 1 hour).</p>
          </div>
          <p><span className="font-medium text-slate-200">The Over-Exertion Signal:</span> If symptoms increase by 3+ points or take several hours to return to baseline, reduce intensity next session. This is not a cause for panic — it's a signal to adjust.</p>
        </div>
      ),
    },
    {
      key: "red-flags",
      title: 'Safety: "Nuisance" vs. "Red Flag" Symptoms',
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p className="font-medium text-slate-200 text-red-500">Red Flag Symptoms (Seek ER Immediately):</p>
          <div className="space-y-1 pl-2 text-xs">
            <p>Severe or increasing headache — worst of their life or progressively worsening</p>
            <p>Neurological deficits — weakness, tingling, slurred speech, severe personality changes</p>
            <p>Visual changes — double vision, uneven pupils, loss of peripheral vision</p>
            <p>Consciousness/motor — seizures, convulsions, repeated vomiting, loss of consciousness</p>
            <p>Cervical instability — severe neck pain, especially after high-impact mechanism</p>
          </div>
          <p className="font-medium text-slate-200">Nuisance Symptoms (Safe for Progressive Exercise):</p>
          <div className="space-y-1 pl-2 text-xs">
            <p>Mild to moderate headache or head pressure</p>
            <p>Intermittent dizziness or balance "wobble"</p>
            <p>Sensitivity to bright lights or loud noises</p>
            <p>Mental fatigue, "fog," or feeling slowed down</p>
            <p>Mild irritability or emotional fluctuations</p>
          </div>
        </div>
      ),
    },
    {
      key: "rts",
      title: "The Amsterdam 2022 Return-to-Activity Protocol",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>The 6th International Consensus refined the RTS protocol to integrate aerobic rehabilitation earlier. Each stage lasts at least 24 hours.</p>
          <div className="space-y-1.5">
            {[
              { step: "1", activity: "Symptom-limited activity", desc: "Daily living: walking, simple chores" },
              { step: "2a", activity: "Light aerobic", desc: "Walking or bike at ~55% max HR" },
              { step: "2b", activity: "Moderate aerobic", desc: "Increasing to ~70% max HR" },
              { step: "3", activity: "Sport-specific exercise", desc: "Running, agility drills. No head impact" },
              { step: "4", activity: "Non-contact training", desc: "Complex drills, resistance training. Only when resting symptoms resolved" },
              { step: "5", activity: "Full-contact practice", desc: "Requires medical clearance and stress test (BCTT)" },
              { step: "6", activity: "Unrestricted return", desc: "Full game participation" },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-2 p-2 rounded-md bg-muted/50">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-bold text-primary">{s.step}</span>
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-200">{s.activity}</div>
                  <div className="text-[11px]">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      key: "wearables",
      title: "Wearable Technology & Remote Monitoring",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>Wearable heart rate monitors have revolutionized home-based concussion rehabilitation, providing objective data to follow an exercise prescription safely.</p>
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Device</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Mechanism</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Accuracy</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2">ECG (Clinical)</td><td className="py-2 px-2">Electrical Activity</td><td className="py-2 px-2">1.00 (Gold Standard)</td><td className="py-2 px-2">Initial BCTT assessment</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Chest Strap</td><td className="py-2 px-2">Electrical Sensors</td><td className="py-2 px-2">0.99</td><td className="py-2 px-2">High-intensity training/Rehab</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Apple Watch</td><td className="py-2 px-2">Optical (PPG)</td><td className="py-2 px-2">0.80–0.89</td><td className="py-2 px-2">Steady-state walking/Daily use</td></tr>
                <tr><td className="py-2 px-2">Fitbit/Xiaomi</td><td className="py-2 px-2">Optical (PPG)</td><td className="py-2 px-2">0.75–0.78</td><td className="py-2 px-2">General activity tracking</td></tr>
              </tbody>
            </table>
          </div>
          <p>Objective HR feedback helps prevent the "boom and bust" cycle — where a patient feels good, over-exerts, and suffers symptom relapse the following day.</p>
        </div>
      ),
    },
    {
      key: "conclusion",
      title: "Conclusions & Future Outlook",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>Aerobic exercise serves as a unique "biological medicine" that addresses the multidimensional nature of concussion:</p>
          <div className="space-y-1.5 pl-2">
            <p><span className="font-medium text-slate-200">BDNF:</span> Promotes structural rebuilding of neural networks.</p>
            <p><span className="font-medium text-slate-200">ANS Training:</span> Restores the heart-brain connection and normalizes cerebrovascular reactivity.</p>
            <p><span className="font-medium text-slate-200">Graded Exposure:</span> Dismantles fear-avoidance behaviors — the primary drivers of long-term disability.</p>
          </div>
          <p className="font-medium text-slate-200">The path to recovery leads through movement, not a dark room.</p>
          <p>Patients who embrace sub-threshold aerobic exercise, listen to their bodies through objective HR monitoring, and view mild symptoms as a necessary part of healing are the ones most likely to achieve a rapid and complete return to their normal daily lives.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-3">
      <Button variant="ghost" size="sm" onClick={onBack} className="mb-1" data-testid="button-back-simple-7">
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Overview
      </Button>

      <Card className="p-4 space-y-2">
        <h2 className="text-lg font-bold">Clinical Deep Dive</h2>
        <p className="text-xs text-white/60 leading-relaxed">
          Neurobiological and Clinical Perspectives on Aerobic Exercise as a Primary Intervention for Concussion Recovery.
        </p>
      </Card>

      {sections.map((section) => (
        <Card key={section.key} className="overflow-hidden" data-testid={`section-l7-${section.key}`}>
          <button
            className="w-full flex items-center justify-between gap-2 px-4 py-3 text-left"
            onClick={() => toggle(section.key)}
            data-testid={`button-toggle-l7-${section.key}`}
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
          <p>Exercise is Medicine for Concussion — PMC</p>
          <p>Concussion Recovery: The Role of BDNF — Mindeo Brain Fitness</p>
          <p>Western University Exercise Post-Concussion Study (2025) — Western News</p>
          <p>Buffalo Concussion Treadmill Test Instruction Manual — Journal of Sports Medicine</p>
          <p>The Fear-Avoidance Model and Persistent Post-Concussion Symptoms — UMass</p>
          <p>Accuracy of Wearable Heart Rate Monitors in Cardiac Rehabilitation — PMC</p>
        </div>
      </Card>
    </div>
  );
}

export default function Lesson7({ view, onViewChange }: { view: LessonView; onViewChange: (v: LessonView) => void }) {
  if (view === "deep") {
    return <DeepDiveView onBack={() => onViewChange("simple")} />;
  }
  return <SimpleView onShowDeepDive={() => onViewChange("deep")} />;
}
