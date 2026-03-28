import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { LessonView } from "./lesson1-energy-crisis";
import { Brain, Pulse as Activity, Barbell as Dumbbell, CaretDown as ChevronDown, CaretUp as ChevronUp, ArrowLeft, Lightning as Zap, BookOpen, TreeEvergreen as TreePine} from "@phosphor-icons/react";

const IMAGES = {
  autonomic: "https://images.squarespace-cdn.com/content/v1/63813f208be08634a208db60/dc5b4bfc-717d-4f7c-825a-be1074f4c935/Autonomic.nervous.system.function.and.dysfunction%40concussion.alliance.2021.web.jpg?format=2500w",
  symptoms: "https://www.cognitivefxusa.com/hubfs/symptoms-of-post-concussion-jpeg.jpeg",
};

function SimpleView({ onShowDeepDive }: { onShowDeepDive: () => void }) {
  return (
    <div className="space-y-4">
      <Card className="p-4 space-y-3">
        <h2 className="text-lg font-bold">Beyond the "Bell Ringer": How Concussion Short-Circuits Your Body & Mind</h2>
        <p className="text-sm text-white/60 leading-relaxed">
          A concussion isn't a bruise on your brain; it is an electrical and chemical short circuit.
        </p>
        <p className="text-sm text-white/60 leading-relaxed">
          While the hit happens to your head, the damage spreads to your entire body through your <span className="font-medium text-slate-200">Autonomic Nervous System (ANS)</span> — the "auto-pilot" that controls your heart, breathing, and energy levels.
        </p>
        <p className="text-sm text-white/60 leading-relaxed">
          When this system breaks, you get "post-concussion syndrome": brain fog, fatigue, and feeling like you can't get your heart rate up without getting a headache.
        </p>
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-red-500" />
          <h3 className="text-sm font-bold">1. The Fight-or-Flight Trap</h3>
        </div>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p>Your nervous system has two modes:</p>
          <div className="space-y-1 pl-2">
            <p><span className="font-medium text-slate-200">Sympathetic:</span> "Fight or Flight" (Gas pedal).</p>
            <p><span className="font-medium text-slate-200">Parasympathetic:</span> "Rest and Digest" (Brake pedal).</p>
          </div>
          <p>After a concussion, your <span className="font-medium text-slate-200">"brake pedal" fails</span>. You stay stuck in "Fight or Flight" mode. This is why your Heart Rate Variability (HRV) drops. A low HRV means your nervous system is stressed and can't recover.</p>
          <p className="font-medium text-slate-200">Research shows this imbalance lasts much longer than your actual symptoms.</p>
        </div>
        <img src={IMAGES.autonomic} alt="Autonomic nervous system function and dysfunction" className="w-full rounded-md" loading="lazy" />
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold">2. Blood Flow Problems</h3>
        </div>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p>Your brain usually keeps its own blood pressure steady. A concussion breaks this thermostat. Your brain can't buffer blood pressure changes anymore, which is why your head throbs when you stand up or train.</p>
          <p>This "plumbing" issue can last for <span className="font-medium text-slate-200">over a month</span>, even if you feel "fine."</p>
        </div>
        <img src={IMAGES.symptoms} alt="Symptoms of post-concussion syndrome" className="w-full rounded-md" loading="lazy" />
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold">3. The Vagus Nerve: Your Manual Override</h3>
        </div>
        <p className="text-sm text-white/60 leading-relaxed">
          The Vagus Nerve is the main "cable" for your rest-and-digest system. It acts like a natural fire extinguisher for brain inflammation. You can manually activate it to speed up recovery:
        </p>
        <div className="space-y-2">
          {[
            { title: "Water Gargling", desc: "Gargle water twice a day. This stimulates the nerves in your throat connected to the Vagus." },
            { title: "Cold Exposure", desc: "Splash ice water on your face or turn your shower cold for a few seconds. This triggers the \"dive reflex,\" which instantly slows your heart rate and calms the system." },
            { title: "Controlled Breathing", desc: "Use \"Box Breathing\" (4s inhale, 4s hold, 4s exhale, 4s hold). This signals to your brain that you are safe." },
          ].map((item) => (
            <div key={item.title} className="p-2.5 rounded-md bg-muted/50 space-y-1">
              <div className="text-xs font-medium text-slate-200">{item.title}</div>
              <div className="text-[11px] text-white/60">{item.desc}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Dumbbell className="w-4 h-4 text-green-500" />
          <h3 className="text-sm font-bold">4. Training Your Way Back</h3>
        </div>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p>The old advice of "sit in a dark room" is obsolete. Total rest can actually make you more depressed and sluggish.</p>
          <p><span className="font-medium text-slate-200">The new rule: Sub-threshold exercise.</span> Walk or light cycle at a pace where you can still hold a conversation. If your symptoms spike, back off. Light movement increases brain blood flow and helps reset your "auto-pilot."</p>
          <p className="text-xs italic">We get deeper into how to exercise effectively for concussion recovery in the next lesson.</p>
        </div>
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <TreePine className="w-4 h-4 text-emerald-500" />
          <h3 className="text-sm font-bold">5. Environmental Fixes</h3>
        </div>
        <div className="space-y-2">
          {[
            { title: "Nature", desc: "15 minutes in a forest or park reduces cortisol (stress hormone) by 12%." },
            { title: "Earthing", desc: "Walking barefoot on grass or sand can help lower inflammation and improve sleep." },
            { title: "Tracking", desc: "Keep a daily log of sleep, hydration, and symptoms. This helps you find your \"triggers\" so you can avoid them while you heal." },
          ].map((item) => (
            <div key={item.title} className="p-2.5 rounded-md bg-muted/50 space-y-1">
              <div className="text-xs font-medium text-slate-200">{item.title}</div>
              <div className="text-[11px] text-white/60">{item.desc}</div>
            </div>
          ))}
        </div>
      </Card>

      <Button className="w-full" variant="secondary" onClick={onShowDeepDive} data-testid="button-show-deep-dive-5">
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
      key: "neurometabolic",
      title: "The Neurometabolic Cascade & Cellular Vulnerability",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>When sudden acceleration or deceleration occurs, the brain undergoes mechanical stretching and shearing of axons (diffuse axonal injury). This initiates a rapid ionic shift: potassium efflux from neuronal cells into the extracellular space, accompanied by sodium and calcium influx.</p>
          <p>To restore homeostasis, the sodium-potassium ATPase pump must operate at an accelerated rate. Under normal conditions, approximately two-thirds of the brain's ATP is dedicated to maintaining ion gradients; after injury, this demand increases exponentially.</p>
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Metabolic Event</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Mechanism</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Consequence</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2">Ionic Flux</td><td className="py-2 px-2">K⁺ efflux, Ca²⁺ influx</td><td className="py-2 px-2">Massive depolarization, glutamate release</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">ATP Crisis</td><td className="py-2 px-2">Overactive ion pumps</td><td className="py-2 px-2">Cellular energy exhaustion</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Mitochondrial Dysfunction</td><td className="py-2 px-2">Calcium overload</td><td className="py-2 px-2">Reduced energy production (metabolic depression)</td></tr>
                <tr><td className="py-2 px-2">Cerebral Vulnerability</td><td className="py-2 px-2">Energy supply/demand mismatch</td><td className="py-2 px-2">Hypersensitivity to stress and exertion</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      key: "autonomic",
      title: "Autonomic Architecture & Dysregulation",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>The ANS is bifurcated into the sympathetic (SNS) and parasympathetic (PNS) systems, functioning in dynamic antagonism. The SNS drives "fight or flight" via catecholamines like epinephrine, while the PNS, mediated by the vagus nerve, drives "rest and digest" responses.</p>
          <p>Following concussion, this balance is disrupted: sympathetic hyperactivity with parasympathetic withdrawal. This "uncoupling" of the central autonomic network (CAN) from peripheral organs is proportional to injury severity. The brainstem — housing the nucleus tractus solitarii (NTS) and ventrolateral medullae — is particularly susceptible to shearing forces.</p>
          <p className="font-medium text-slate-200">Sympathovagal Imbalance and HRV</p>
          <p>HRV measures variation in time intervals between heartbeats. High HRV = resilient, adaptable system. Low HRV = sympathetic-dominant, stress-reactive state.</p>
          <p>In concussed populations, research consistently demonstrates significant reductions in HRV metrics. Notably, in adolescent athletes, concussion impairs cardiovagal function in a sex-dependent manner: concussed female adolescents show significantly lower seated RMSSD values (42 ± 4 ms) compared to healthy controls (61 ± 7 ms).</p>
          <p className="font-medium text-slate-200">While clinical symptoms and blood pressure may normalize within days, autonomic imbalances can persist for months.</p>
        </div>
      ),
    },
    {
      key: "hemodynamic",
      title: "Hemodynamic Disturbances & Cerebral Autoregulation",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p className="font-medium text-slate-200">Dynamic Pressure Buffering and Phase Offsets</p>
          <p>Transfer function analysis has identified specific impairments in dynamic cerebral autoregulation after sport-related concussions. A reduction in the 0.10 Hz Phase represents delayed cerebrovascular response to blood pressure oscillations.</p>
          <p>Data shows a 23% reduction in 0.10 Hz Phase at 72 hours post-injury, with an 18% reduction persisting at two weeks. Crucially, athletes were often cleared for return-to-play at a median of 14 days based on symptom resolution, despite Phase values remaining significantly impaired.</p>
          <p className="font-medium text-slate-200">Cerebrovascular Reactivity</p>
          <p>Concussion also impacts CO₂ reactivity and neurovascular coupling. When blood CO₂ rises (hypercapnia), cerebral vessels normally dilate; after concussion, this response is blunted or erratic, contributing to exercise intolerance.</p>
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Metric</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Normal Function</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Post-Concussion</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2">CBF</td><td className="py-2 px-2">Stable O₂ and glucose supply</td><td className="py-2 px-2">Global/local reductions (30+ days)</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Dynamic CA (Phase)</td><td className="py-2 px-2">Rapid pressure buffering</td><td className="py-2 px-2">18–23% reduction (delayed)</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">CO₂ Reactivity</td><td className="py-2 px-2">Dilation/constriction via CO₂</td><td className="py-2 px-2">Blunted or hypersensitive</td></tr>
                <tr><td className="py-2 px-2">Neurovascular Coupling</td><td className="py-2 px-2">Targeted flow for cognition</td><td className="py-2 px-2">Impaired localized perfusion</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      key: "vagus",
      title: "The Vagus Nerve: Nexus for Autonomic Recovery",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>The vagus nerve (CN X) is the primary highway of the PNS, innervating every major organ from the brainstem to the abdomen. It is composed of approximately 80% sensory afferent fibers (body → brain) and 20% motor efferent fibers (brain → body).</p>
          <p className="font-medium text-slate-200">The Cholinergic Anti-Inflammatory Pathway (CAP)</p>
          <p>Efferent vagal signals release acetylcholine (ACh), which binds to α7 nicotinic acetylcholine receptors on immune cells (macrophages, microglia). This inhibits pro-inflammatory cytokines like TNF-α and IL-6, reducing neuroinflammation following brain injury.</p>
          <p className="font-medium text-slate-200">Non-Invasive Vagus Nerve Stimulation (nVNS)</p>
          <p>Clinical trials of nVNS (e.g., gammaCore device) targeting the cervical vagus nerve have shown remarkable efficacy in reducing persistent post-concussion symptoms. In a study of 102 mTBI patients, nVNS significantly improved 16 of 22 symptom domains.</p>
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Symptom</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Pre-Treatment</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Change</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2">Post-traumatic Headache</td><td className="py-2 px-2">High Burden</td><td className="py-2 px-2">-0.79 ± 1.19</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Difficulty Concentrating</td><td className="py-2 px-2">High Burden</td><td className="py-2 px-2">-0.59 ± 1.25</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Dizziness</td><td className="py-2 px-2">Moderate Burden</td><td className="py-2 px-2">-0.47 ± 1.14</td></tr>
                <tr><td className="py-2 px-2">Depression/Sadness</td><td className="py-2 px-2">Moderate Burden</td><td className="py-2 px-2">-0.47 ± 1.12</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      key: "gargling",
      title: "Vocal & Pharyngeal Activation Strategies",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p className="font-medium text-slate-200">Gargling and the Parasympathetic Shift</p>
          <p>Vigorous gargling with water — preferably twice daily for 30–60 seconds — stimulates the pharyngeal branch of the vagus nerve. The mechanical vibrations activate deep muscles innervated by the recurrent laryngeal branch. This can trigger a parasympathetic response, often marked by sudden tearing of the eyes, indicating the nervous system is shifting into "rest and digest."</p>
          <p className="font-medium text-slate-200">Humming, Singing, and Chanting</p>
          <p>These are powerful neuroregulatory tools because they facilitate prolonged exhalation — a physiological signal of safety to the brainstem. Chanting, particularly the sound "Om," can deactivate the limbic center of the brain (threat detection and emotional reactivity). These practices increase HRV and activate baroreceptors in the chest.</p>
          <p className="font-medium text-slate-200">Cold Exposure and the Mammalian Dive Reflex</p>
          <p>When the face or neck is exposed to cold water, it triggers the mammalian dive reflex — immediate bradycardia (heart rate slowing) and redirection of blood flow to the brain and vital organs. Practical applications: splash ice water on face, ice pack to side of neck for 5 minutes, or end a shower with 30–60 seconds of cold water.</p>
        </div>
      ),
    },
    {
      key: "breathwork",
      title: "Breathwork & Meditation",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>The lungs and diaphragm are densely innervated by the vagus nerve. Conscious breathing allows direct modulation of physiological state in real-time.</p>
          <p className="font-medium text-slate-200">Diaphragmatic Breathing Patterns</p>
          <p>In stressful or concussed states, individuals often resort to shallow chest breathing, which perpetuates sympathetic activation. Shifting to belly breathing stimulates the vagus nerve at the diaphragm level.</p>
          <div className="space-y-1.5">
            {[
              { name: "Box Breathing", pattern: "4s inhale → 4s hold → 4s exhale → 4s hold", use: "Immediate grounding during anxiety or sensory overwhelm" },
              { name: "4-7-8 Breathing", pattern: "4s inhale → 7s hold → 8s exhale", use: "Deep relaxation and sleep promotion" },
              { name: "6-Breath-per-Minute", pattern: "4s inhale → 6s exhale", use: "Maximizes HRV and baroreflex sensitivity (resonant breathing)" },
            ].map((b) => (
              <div key={b.name} className="p-2.5 rounded-md bg-muted/50 space-y-1">
                <div className="text-xs font-medium text-slate-200">{b.name}</div>
                <div className="text-[11px] font-mono">{b.pattern}</div>
                <div className="text-[10px] text-white/60/70 italic">{b.use}</div>
              </div>
            ))}
          </div>
          <p className="font-medium text-slate-200">Mindfulness & Progressive Muscle Relaxation (PMR)</p>
          <p>Mindfulness increases gray matter in the hippocampus and prefrontal cortex — regions vulnerable to mTBI. PMR (systematic tension and release of muscle groups) helps patients identify and release tension, lowering baseline sympathetic tone and improving restorative sleep.</p>
        </div>
      ),
    },
    {
      key: "environment",
      title: "Environmental Interventions: Nature & Grounding",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p className="font-medium text-slate-200">Nature Therapy & Forest Bathing (Shinrin-yoku)</p>
          <p>As little as 10–15 minutes in a forest setting can lead to a 12% reduction in cortisol levels and a significant decrease in blood pressure and heart rate compared to urban walking. Phytoncides (forest scents) and natural sounds boost immune function, creativity, and cognitive performance.</p>
          <p>For a recovering brain, the "soft fascination" of nature provides a restorative environment that does not deplete cognitive resources.</p>
          <p className="font-medium text-slate-200">Grounding (Earthing)</p>
          <p>Direct physical contact with the Earth's surface (walking barefoot on grass, soil, or sand). The Earth carries a subtle direct current (DC) energy. Grounding has been shown to neutralize free radicals, improve blood circulation by decreasing blood viscosity, and normalize cortisol rhythms. For concussion patients, this may reduce whole-body inflammation and improve restorative sleep.</p>
          <p>Weighted blankets or lap pads can provide a similar sensory "grounding" effect for those experiencing dizziness or proprioceptive disturbances.</p>
        </div>
      ),
    },
    {
      key: "cognitive",
      title: "Cognitive & Emotional Processing: Writing & Art Therapy",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p className="font-medium text-slate-200">Symptom Tracking & Metacognition</p>
          <p>By journaling daily variables — weather, sleep, hydration, nutrition — alongside symptom intensity, patients develop the metacognitive skill to analyze their reaction to their environment. The MIME framework helps pre-simulate plans:</p>
          <div className="space-y-1 pl-2 text-xs">
            <p><span className="font-medium text-slate-200">M:</span> Make an image of the future space.</p>
            <p><span className="font-medium text-slate-200">I:</span> Imagine oneself in that space.</p>
            <p><span className="font-medium text-slate-200">M:</span> Mentally time travel through the tasks.</p>
            <p><span className="font-medium text-slate-200">E:</span> Anticipate the future emotion in that space.</p>
          </div>
          <p className="font-medium text-slate-200">Writing Strategies</p>
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Strategy</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Purpose</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Outcome</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2">Symptom Log</td><td className="py-2 px-2">Data collection</td><td className="py-2 px-2">Identifying triggers, pacing activity</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Gratitude Journal</td><td className="py-2 px-2">Positive psychology</td><td className="py-2 px-2">Activating PNS, boosting mood</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Expressive Writing</td><td className="py-2 px-2">Trauma processing</td><td className="py-2 px-2">Emotional regulation, stress release</td></tr>
                <tr><td className="py-2 px-2">MIME Journaling</td><td className="py-2 px-2">Executive planning</td><td className="py-2 px-2">Reducing cognitive load</td></tr>
              </tbody>
            </table>
          </div>
          <p>Art therapy allows patients to communicate experiences of confusion, fear, and pain that may be difficult to verbalize, reducing physiological arousal and improving emotional self-efficacy.</p>
        </div>
      ),
    },
    {
      key: "exercise",
      title: "Physical Activity & the Path to Recovery",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p className="font-medium text-slate-200">Graded Aerobic Exercise</p>
          <p>Light exercise such as walking increases blood flow to the brain and may lessen post-concussion symptoms by restoring autonomic balance. Exercise at a level where symptoms are not exacerbated — often defined as maintaining conversation without gasping.</p>
          <p>Aerobic exercise at sub-symptom levels promotes faster recovery and better sleep regulation. Conversely, "toughing it out" can slow recovery and exacerbate autonomic dysfunction.</p>
          <p className="font-medium text-slate-200">Postural Considerations & Orthostatic Tolerance</p>
          <p>Because concussions often induce orthostatic intolerance (dizziness when standing), recovery protocols must account for posture. Monitoring heart rate and blood pressure responses to standing can help tailor rehabilitation. For patients with significant postural tachycardia, beginning with seated or recumbent exercises may be necessary before progressing to upright walking.</p>
        </div>
      ),
    },
    {
      key: "synthesis",
      title: "Synthesis & Conclusion",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>The autonomic nervous system is the primary mediator of physiological disruptions following concussion. The initial neurometabolic cascade triggers ionic flux, ATP depletion, and mitochondrial dysfunction that result in systemic sympathovagal imbalance. This manifests as reduced HRV, impaired cerebral autoregulation, and global reductions in cerebral blood flow that can persist for weeks or months.</p>
          <p>The path to recovery lies in intentional regulation of this autonomic architecture:</p>
          <div className="space-y-1.5 pl-2">
            <p><span className="font-medium text-slate-200">High-tech:</span> Non-invasive vagus nerve stimulation (nVNS) for targeted neuroinflammation reduction.</p>
            <p><span className="font-medium text-slate-200">Low-tech, high-yield:</span> Diaphragmatic breathing, gargling, humming, and cold exposure to leverage vagal pathways.</p>
            <p><span className="font-medium text-slate-200">Environmental:</span> Nature exposure and grounding to reduce cortisol and inflammation.</p>
            <p><span className="font-medium text-slate-200">Cognitive-behavioral:</span> Symptom tracking and expressive writing for metacognition and emotional processing.</p>
          </div>
          <p className="font-medium text-slate-200">By viewing concussion as a systemic autonomic disorder rather than a localized brain injury, clinicians and patients can move beyond passive rest toward active, evidence-based physiological regulation.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-3">
      <Button variant="ghost" size="sm" onClick={onBack} className="mb-1" data-testid="button-back-simple-5">
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Overview
      </Button>

      <Card className="p-4 space-y-2">
        <h2 className="text-lg font-bold">Clinical Deep Dive</h2>
        <p className="text-xs text-white/60 leading-relaxed">
          The Impact of Concussive Injury on the Autonomic Nervous System: Pathophysiological Mechanisms, Hemodynamic Consequences, and Integrative Recovery Strategies.
        </p>
      </Card>

      {sections.map((section) => (
        <Card key={section.key} className="overflow-hidden" data-testid={`section-l5-${section.key}`}>
          <button
            className="w-full flex items-center justify-between gap-2 px-4 py-3 text-left"
            onClick={() => toggle(section.key)}
            data-testid={`button-toggle-l5-${section.key}`}
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
          <p>Autonomic Dysfunction after Mild Traumatic Brain Injury — PMC</p>
          <p>Pathophysiology of Concussion — Complete Concussions</p>
          <p>Autonomic Dysfunction and Exercise Intolerance in Concussion — PMC</p>
          <p>Sport-Related Concussion Alters Indices of Dynamic Cerebral Autoregulation — PMC</p>
          <p>Non-invasive Vagus Nerve Stimulation and Persistent Post-Concussion Symptoms — Frontiers in Neurology</p>
          <p>Neurological Benefits of Nature Exposure: Forest Bathing and the Brain — Lone Star Neurology</p>
          <p>Practical Applications of Grounding to Support Health — PMC</p>
        </div>
      </Card>
    </div>
  );
}

export default function Lesson5({ view, onViewChange }: { view: LessonView; onViewChange: (v: LessonView) => void }) {
  if (view === "deep") {
    return <DeepDiveView onBack={() => onViewChange("simple")} />;
  }
  return <SimpleView onShowDeepDive={() => onViewChange("deep")} />;
}
