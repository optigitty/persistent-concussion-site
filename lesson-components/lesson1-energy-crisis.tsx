import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Lightning as Zap, Heart, Warning as AlertTriangle, Clock, CaretDown as ChevronDown, CaretUp as ChevronUp, ArrowLeft, BookOpen} from "@phosphor-icons/react";

const IMAGES = {
  brainDeformation: "https://images.squarespace-cdn.com/content/v1/63813f208be08634a208db60/8bf361ae-db47-47e1-956e-9fb076217589/brain.deformation.head.movement.web%40Concussion_Alliance.jpg?format=1500w",
  brainChanges: "https://images.squarespace-cdn.com/content/v1/63813f208be08634a208db60/ae7b642d-41bf-4285-b3bd-cee2fc7edfd1/changes.in.the.brain.after.a.concussion.web%40concussion.alliance.2020-2025.jpg?format=1500w",
  recoveryTimeline: "https://completeconcussions.com/wp-content/uploads/2024/07/image2.png",
  neurons: "https://images.squarespace-cdn.com/content/v1/63813f208be08634a208db60/ae0d22bd-e255-4ebd-855e-313b04f44973/brain.neurons.axons%40Concussion.Alliance.png?format=1500w",
  axonDamage: "https://images.squarespace-cdn.com/content/v1/63813f208be08634a208db60/08f63cc7-3b21-49c4-97e6-eb19be6b8c99/brain.deformation.axons.damaged+.web%40concussion.alliance.2020-2025.jpg?format=1500w",
};

function SimpleView({ onShowDeepDive }: { onShowDeepDive: () => void }) {
  return (
    <div className="space-y-4">
      <Card className="p-4 space-y-3">
        <h2 className="text-lg font-bold">Concussion: The "Energy Crisis" in Your Brain</h2>
        <p className="text-sm text-white/60 leading-relaxed">
          A concussion is more than just getting your "bell rung." It is a brain injury caused by a physical blow that creates a metabolic crisis inside your skull. Each year, roughly 70 million people worldwide suffer from this injury.
        </p>
        <p className="text-xs text-white/60">
          Based on the latest medical consensus from the 2022 Amsterdam Conference on Concussion in Sport.
        </p>
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-yellow-500" />
          <h3 className="text-sm font-bold">1. The Physics of the Hit</h3>
        </div>
        <p className="text-sm text-white/60 leading-relaxed">
          You don't need to be knocked out to have a concussion. In fact, fewer than 10% of concussions involve a loss of consciousness.
        </p>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p>
            <span className="font-medium text-slate-200">Linear vs. Rotational:</span> While a straight jab can cause damage, hooks and overhands that create rotation are often worse. They stretch and can tear the delicate wiring (axons) in your brain.
          </p>
          <p>
            <span className="font-medium text-slate-200">The Leak:</span> The force of a punch creates tiny "pores" in your brain cell membranes. This causes vital chemicals to leak out and dangerous ones to rush in.
          </p>
        </div>
        <img src={IMAGES.brainDeformation} alt="Brain deformation during head movement" className="w-full rounded-md" loading="lazy" />
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold">2. The "Energy Crisis"</h3>
        </div>
        <p className="text-sm text-white/60 leading-relaxed">
          After a hard hit, your brain enters a state of emergency:
        </p>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p><span className="font-medium text-slate-200">The Power Drain:</span> Your brain cells work overtime to fix the chemical leaks. They demand massive amounts of energy (glucose).</p>
          <p><span className="font-medium text-slate-200">The Clogged Pipe:</span> While the demand for energy goes up, blood flow to the brain actually goes down. This "uncoupling" creates a massive energy shortage.</p>
          <p><span className="font-medium text-slate-200">The Vulnerability Window:</span> During this crisis, your brain is extremely fragile. A second hit now can lead to permanent damage or even death (Second Impact Syndrome).</p>
        </div>
        <img src={IMAGES.brainChanges} alt="Changes in the brain after a concussion" className="w-full rounded-md" loading="lazy" />
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-red-500" />
          <h3 className="text-sm font-bold">3. The "Invisible" Injury</h3>
        </div>
        <p className="text-sm text-white/60 leading-relaxed">
          One of the most dangerous myths in boxing is that a clean CT or MRI scan means you are fine.
        </p>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p>Standard hospital scans look for bleeding or structural breaks.</p>
          <p>A concussion is a <span className="font-medium text-slate-200">functional</span> problem, not a structural one. It's like a software crash, not a broken screen. You cannot see a concussion on a standard MRI.</p>
        </div>
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Heart className="w-4 h-4 text-green-500" />
          <h3 className="text-sm font-bold">4. Recovery: The 11 R's</h3>
        </div>
        <p className="text-sm text-white/60 leading-relaxed">
          The medical community uses the "11 R's" to manage recovery. For a fighter, these are the most critical:
        </p>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p><span className="font-medium text-slate-200">Recognize & Remove:</span> If you show signs of confusion, poor balance, or "glassy eyes," you must be pulled from the gym immediately.</p>
          <p><span className="font-medium text-slate-200">Rest:</span> You need "relative rest" for the first 24–48 hours. This means no screens and no training.</p>
          <p><span className="font-medium text-slate-200">Rehab:</span> If dizziness or neck pain lasts, specific neck and balance exercises can speed up your return.</p>
          <p><span className="font-medium text-slate-200">Return to Play:</span> Gradually return to sport when symptoms are clear and when the athlete is out of the "vulnerability window."</p>
        </div>
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold">5. Long-Term Risks</h3>
        </div>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p><span className="font-medium text-slate-200">CTE:</span> Research suggests that repetitive hits — even "sub-concussive" ones that don't cause symptoms — are the main risk factor for long-term brain disease.</p>
          <p><span className="font-medium text-slate-200">Healing Time:</span> Your symptoms might vanish in 7–14 days, but your brain chemistry often takes 30 days or more to fully normalize. Don't rush back just because you "feel fine."</p>
        </div>
        <img src={IMAGES.recoveryTimeline} alt="Concussion recovery timeline" className="w-full rounded-md" loading="lazy" />
      </Card>

      <Button className="w-full" variant="secondary" onClick={onShowDeepDive} data-testid="button-show-deep-dive">
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
      key: "definition",
      title: "Definition & Overview",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>The conceptualization of concussion has undergone a radical transformation over the past two decades, transitioning from a misunderstood "transient" event to a complex, multifaceted traumatic brain injury (TBI) characterized by a profound neurometabolic cascade and functional disruption.</p>
          <p>A concussion is formally defined as a traumatically induced transient disturbance of brain function caused by biomechanical forces. Unlike more severe forms of TBI, such as contusions or intracranial hemorrhages, a hallmark of concussion is the absence of macroscopic neural damage on standard structural neuroimaging, such as computed tomography (CT) or conventional magnetic resonance imaging (MRI).</p>
          <p>The latest Amsterdam definition clarifies that sport-related concussion (SRC) initiates a neurotransmitter and metabolic cascade, involving potential axonal injury, alterations in cerebral blood flow, and neuroinflammation, with symptoms that may evolve over minutes or hours and typically resolve within days but can persist in a significant minority of cases.</p>
        </div>
      ),
    },
    {
      key: "biomechanics",
      title: "Biomechanical Mechanisms",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>The etiology of concussion is rooted in the transmission of biomechanical forces to the brain, which can occur through a direct blow to the head, neck, or body. These forces result in an impulsive load being transmitted to the intracranial contents, leading to rapid acceleration, deceleration, or rotational movement of the brain within the skull.</p>
          <p>While linear forces (straight-line impacts) can cause focal injuries, rotational forces (angular acceleration) are particularly implicated in concussive pathophysiology because they induce shearing and stretching of the delicate white matter tracts and axons.</p>
          <p>The physics of concussion involves the concept of <span className="font-medium text-slate-200">mechanoporation</span>, where the mechanical stretching of the neuronal lipid bilayer creates sublethal defects or pores in the cell membrane. These defects disrupt the membrane's integrity, leading to an immediate and chaotic flux of ions and the indiscriminate release of neurotransmitters.</p>
          <p>It is important to note that loss of consciousness (LOC) is not a prerequisite for a concussion diagnosis, occurring in fewer than 10% of cases.</p>
        </div>
      ),
    },
    {
      key: "neurometabolic",
      title: "The Neurometabolic Cascade",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p className="font-medium text-slate-200">Ionic Flux and Glutamate Excitotoxicity</p>
          <p>Immediately following the biomechanical insult, mechanoporation of cell membranes leads to a massive efflux of potassium into the extracellular space and a corresponding influx of sodium and calcium into the neuron. This ionic shift results in abrupt neuronal depolarization and the hyperacute release of the excitatory neurotransmitter glutamate.</p>
          <p className="font-medium text-slate-200">The Energy Crisis and Metabolic Uncoupling</p>
          <p>In a desperate effort to restore ionic and cellular homeostasis, the neuron's ATP-requiring membrane ionic pumps shift into overdrive. This massive demand for ATP triggers a state of hyperglycolysis, where the brain rapidly consumes glucose. Paradoxically, this surge in energy demand occurs while cerebral blood flow (CBF) is often reduced, creating a profound metabolic crisis.</p>
          <p className="font-medium text-slate-200">Mitochondrial Dysfunction and Oxidative Stress</p>
          <p>The influx of calcium is particularly problematic. The cell sequesters excess calcium into the mitochondria, but accumulation impairs oxidative metabolism, producing reactive oxygen species (free radicals) and shifting the brain into a state of metabolic depression lasting 7–10 days in adults.</p>
          <p className="font-medium text-slate-200">Microstructural and Axonal Injury</p>
          <p>Biomechanical stretching can cause neurofilament side-arms to collapse, leading to a loss of structural integrity in the axons. Microtubule disruption further interferes with axonal transport, potentially isolating the synapse and diminishing neurotransmission.</p>
          <img src={IMAGES.neurons} alt="Brain neurons and axons" className="w-full rounded-md" loading="lazy" />
          <img src={IMAGES.axonDamage} alt="Axon damage from brain deformation" className="w-full rounded-md" loading="lazy" />
        </div>
      ),
    },
    {
      key: "classification",
      title: "TBI Classification",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>TBI is categorized into mild, moderate, and severe based on acute indicators of neurological function: the Glasgow Coma Scale (GCS), duration of Loss of Consciousness (LOC), and duration of Post-Traumatic Amnesia (PTA).</p>
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Severity</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">GCS</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">LOC</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">PTA</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2 font-medium text-slate-200">Mild</td><td className="py-2 px-2">13–15</td><td className="py-2 px-2">0–30 min</td><td className="py-2 px-2">0–24 hrs</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2 font-medium text-slate-200">Moderate</td><td className="py-2 px-2">9–12</td><td className="py-2 px-2">30 min – 24 hrs</td><td className="py-2 px-2">1–7 days</td></tr>
                <tr><td className="py-2 px-2 font-medium text-slate-200">Severe</td><td className="py-2 px-2">3–8</td><td className="py-2 px-2">&gt; 24 hrs</td><td className="py-2 px-2">&gt; 7 days</td></tr>
              </tbody>
            </table>
          </div>
          <p>"Complicated mTBI" occurs when a patient meets mild criteria (GCS 13–15) but exhibits intracranial abnormalities on CT or MRI. These cases are often managed more like a moderate TBI.</p>
        </div>
      ),
    },
    {
      key: "symptoms",
      title: "Symptom Clusters (SCAT6)",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>The SCAT6 utilizes a 22-item graded symptom checklist. Symptoms cluster into distinct factors:</p>
          <div className="space-y-2">
            {[
              { cluster: "Migraine/Somatic", symptoms: "Headache, pressure in head, neck pain, nausea, light/noise sensitivity", path: "Ionic flux, trigeminal system activation, cervical spine injury" },
              { cluster: "Cognitive-Fatigue", symptoms: "Feeling slowed down, 'in a fog,' difficulty concentrating/remembering, fatigue, confusion", path: "Cellular energy crisis and impaired neural processing speed" },
              { cluster: "Affective", symptoms: "More emotional, irritability, sadness, nervous/anxious", path: "Direct neural disruption or secondary reactions to functional limitations" },
              { cluster: "Sleep", symptoms: "Drowsiness, trouble falling asleep, sleeping more/less than usual", path: "Disturbed sleep-wake cycles delaying metabolic recovery" },
            ].map((c) => (
              <div key={c.cluster} className="p-2.5 rounded-md bg-muted/50 space-y-1">
                <div className="text-xs font-medium text-slate-200">{c.cluster}</div>
                <div className="text-[11px]">{c.symptoms}</div>
                <div className="text-[10px] text-white/60/70 italic">{c.path}</div>
              </div>
            ))}
          </div>
          <p>While headache is the most common symptom, fatigue and forgetfulness are the most frequent persistent complaints.</p>
        </div>
      ),
    },
    {
      key: "phases",
      title: "The 4 Phases of Concussion",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          {[
            { phase: "Phase 1: Acute (0–72 Hours)", desc: "Characterized by the initial metabolic crisis. Focus on immediate safety — 'Recognize' and 'Remove.' Instead of strict rest, 24–48 hours of relative rest is recommended, followed by gradual light physical activity." },
            { phase: "Phase 2: Subacute (72 Hours – 14 Days)", desc: "The energy crisis stabilizes but the brain remains metabolically imbalanced. Most adults recover clinically within this window, though physiological recovery often lags behind symptom resolution." },
            { phase: "Phase 3: Recovery (14 Days – 4 Weeks)", desc: "Involves structured Return-to-Learn and Return-to-Sport progression. Recovery means symptom resolution at rest AND during maximal exertion." },
            { phase: "Phase 4: Persistent (Beyond 4 Weeks)", desc: "Symptoms lasting beyond 4 weeks are now called 'persisting symptoms after concussion' (PSaC). The etiology becomes multifactorial — neurovascular, psychological, cervicogenic, and vestibular contributions." },
          ].map((p) => (
            <div key={p.phase} className="p-2.5 rounded-md bg-muted/50 space-y-1">
              <div className="text-xs font-medium text-slate-200">{p.phase}</div>
              <div className="text-[11px]">{p.desc}</div>
            </div>
          ))}
        </div>
      ),
    },
    {
      key: "11rs",
      title: "The 11 R's (Amsterdam 2022)",
      content: (
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          {[
            { r: "Recognize", desc: "Know the mechanisms, signs, and 24 symptoms." },
            { r: "Reduce", desc: "Implement rule changes, equipment mandates, and neuromuscular training." },
            { r: "Remove", desc: "Immediately remove any athlete with a suspected concussion from play." },
            { r: "Re-evaluate", desc: "Formal clinical assessment using SCAT6 or SCOAT6." },
            { r: "Rest & Exercise", desc: "Relative rest for 24–48 hours, then symptom-limited physical activity." },
            { r: "Refer", desc: "Identify patients needing specialized care (symptoms >4 weeks, complex comorbidities)." },
            { r: "Rehab", desc: "Targeted treatments like cervicovestibular rehabilitation for dizziness and neck pain." },
            { r: "Recovery", desc: "Assess recovery through objective measures and symptom resolution at rest and exertion." },
            { r: "Return to School/Learn/Sport", desc: "Prioritize return to school, then stepwise return to sport when symptom-free." },
            { r: "Reconsider", desc: "Evaluate long-term effects of repeated head impacts on quality of life." },
            { r: "Retire", desc: "Establish criteria for permanent discontinuation when risks outweigh benefits." },
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
      ),
    },
    {
      key: "rts",
      title: "Return-to-Sport Strategy",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>The Return-to-Sport (RTS) strategy is a graduated progression. Each step typically takes 24 hours. If symptoms return, drop back to the previous step.</p>
          <div className="space-y-1.5">
            {[
              { step: 1, activity: "Symptom-limited activity", goal: "Gradual return to daily activities" },
              { step: 2, activity: "Light aerobic exercise", goal: "Increase heart rate (walking, cycling)" },
              { step: 3, activity: "Sport-specific exercise", goal: "Add movement without head impact" },
              { step: 4, activity: "Non-contact training drills", goal: "Increase coordination and cognitive load" },
              { step: 5, activity: "Full contact practice", goal: "Restore confidence, assess function" },
              { step: 6, activity: "Return to play", goal: "Unrestricted competition" },
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
        </div>
      ),
    },
    {
      key: "neuroimaging",
      title: "Advanced Neuroimaging",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p className="font-medium text-slate-200">Diffusion Tensor Imaging (DTI)</p>
          <p>DTI measures water molecule diffusion to map white matter tract health. In healthy axons, water moves primarily in one direction (high Fractional Anisotropy). After concussion, reduced FA and increased Mean Diffusivity indicate damage to myelin, axonal membranes, or axonal density.</p>
          <p className="font-medium text-slate-200">Functional MRI (fMRI)</p>
          <p>fMRI reveals abnormal activation patterns in frontal attention networks and the default mode network (DMN). These "functional reorganizations" explain why patients can have normal structural scans but struggle with focus and memory.</p>
          <p className="font-medium text-slate-200">Magnetic Resonance Spectroscopy (MRS)</p>
          <p>MRS measures brain metabolites, notably N-acetylaspartate (NAA), a marker of neuronal health. NAA drops ~18% after concussion. While clinical symptoms may resolve in 10–14 days, NAA levels often don't normalize until 30 days, confirming a "temporal window of metabolic brain vulnerability."</p>
        </div>
      ),
    },
    {
      key: "longterm",
      title: "Long-Term Risks & CTE",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p className="font-medium text-slate-200">Chronic Traumatic Encephalopathy (CTE)</p>
          <p>CTE is a neurodegenerative disease associated with repetitive head impacts. Research suggests that repetitive subconcussive blows — rather than isolated concussions — are the primary risk factor. A definitive diagnosis currently requires post-mortem examination.</p>
          <p className="font-medium text-slate-200">Second Impact Syndrome</p>
          <p>A rare but often fatal event where a second concussion occurs before the brain has recovered from the first, leading to rapid, uncontrollable brain swelling. This is why no athlete should return to contact sports while symptomatic.</p>
          <p className="font-medium text-slate-200">Future Directions</p>
          <p>Research is focused on identifying objective biomarkers — blood proteins or advanced imaging metrics — that can pinpoint the exact moment of physiological recovery. Until validated, management relies on multimodal assessment combining symptoms, cognitive testing, and physical examination.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-3">
      <Button variant="ghost" size="sm" onClick={onBack} className="mb-1" data-testid="button-back-simple">
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Overview
      </Button>

      <Card className="p-4 space-y-2">
        <h2 className="text-lg font-bold">Clinical Deep Dive</h2>
        <p className="text-xs text-white/60 leading-relaxed">
          Clinical and Pathophysiological Foundations of Concussion: A Comprehensive Global Consensus Analysis. Based on the 6th International Conference on Concussion in Sport, Amsterdam 2022.
        </p>
      </Card>

      {sections.map((section) => (
        <Card key={section.key} className="overflow-hidden" data-testid={`section-${section.key}`}>
          <button
            className="w-full flex items-center justify-between gap-2 px-4 py-3 text-left"
            onClick={() => toggle(section.key)}
            data-testid={`button-toggle-${section.key}`}
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
          <p>6th International Conference on Concussion in Sport, Amsterdam 2022 — British Journal of Sports Medicine</p>
          <p>Concussion - StatPearls - NCBI Bookshelf</p>
          <p>The Neurometabolic Cascade of Concussion — PMC, NIH</p>
          <p>Sport Concussion Assessment Tool 6 (SCAT6) — BJSM</p>
          <p>Functional Neuroimaging in Traumatic Brain Injury — Frontiers in Neurology</p>
          <p>Classification of Traumatic Brain Injury — ACNR Journal</p>
          <p>Temporal window of metabolic brain vulnerability to concussion — PubMed</p>
        </div>
      </Card>
    </div>
  );
}

export type LessonView = "simple" | "deep";

export default function Lesson1({ view, onViewChange }: { view: LessonView; onViewChange: (v: LessonView) => void }) {
  if (view === "deep") {
    return <DeepDiveView onBack={() => onViewChange("simple")} />;
  }
  return <SimpleView onShowDeepDive={() => onViewChange("deep")} />;
}
