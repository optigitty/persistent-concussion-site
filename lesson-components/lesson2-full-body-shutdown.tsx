import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { LessonView } from "./lesson1-energy-crisis";
import { Brain, Pulse as Activity, Eye, CaretDown as ChevronDown, CaretUp as ChevronUp, ArrowLeft, BookOpen, Moon, SmileySad as Frown} from "@phosphor-icons/react";

const IMAGES = {
  brainChanges: "https://images.squarespace-cdn.com/content/v1/63813f208be08634a208db60/ae7b642d-41bf-4285-b3bd-cee2fc7edfd1/changes.in.the.brain.after.a.concussion.web%40concussion.alliance.2020-2025.jpg?format=1500w",
  autonomicNervous: "https://images.squarespace-cdn.com/content/v1/63813f208be08634a208db60/dc5b4bfc-717d-4f7c-825a-be1074f4c935/Autonomic.nervous.system.function.and.dysfunction%40concussion.alliance.2021.web.jpg?format=1500w",
  gutBrain: "https://completeconcussions.com/wp-content/uploads/2024/04/image6.png",
  vestibular: "https://www.cognitivefxusa.com/hs-fs/hubfs/vestibular-therapy-for-concussion-symptoms-1.jpg?width=1104&height=922&name=vestibular-therapy-for-concussion-symptoms-1.jpg",
  sleepBrain: "https://journals.sagepub.com/cms/10.1177/00368504231189536/asset/24d4b080-0626-4cc3-917c-af0100a0961a/assets/images/large/10.1177_00368504231189536-fig1.jpg",
  hormones: "https://www.cognitivefxusa.com/hs-fs/hubfs/post-traumatic-brain-injury-hormone-dysregulation-3.jpg?width=1800&name=post-traumatic-brain-injury-hormone-dysregulation-3.jpg",
};

function SimpleView({ onShowDeepDive }: { onShowDeepDive: () => void }) {
  return (
    <div className="space-y-4">
      <Card className="p-4 space-y-3">
        <h2 className="text-lg font-bold">Concussion: The Full-Body Shutdown</h2>
        <p className="text-sm text-white/60 leading-relaxed">
          A concussion isn't just a "ding" in your brain. It is a full-body system disruption. When you take a hard shot, the damage triggers a chain reaction that affects your nervous system, your stomach, your sleep, and your hormones.
        </p>
        <p className="text-xs text-white/60">
          Understanding this "whole-body" crash is the only way to recover properly and get back in the ring safely.
        </p>
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold">1. The Energy Crisis in Your Brain</h3>
        </div>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p>When your head snaps back or rotates, your brain cells stretch and leak. They dump out important chemicals and suck in things they don't need (like calcium).</p>
          <p>This creates an "energy crisis." Your brain works overtime to fix the leaks, burning through all its fuel. Once that fuel is gone, your brain enters a "low-power mode" that can last for weeks. This is why you feel "foggy" and slow.</p>
        </div>
        <img src={IMAGES.brainChanges} alt="Changes in the brain after a concussion" className="w-full rounded-md" loading="lazy" />
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-red-500" />
          <h3 className="text-sm font-bold">2. The "Sympathetic Storm"</h3>
        </div>
        <p className="text-sm text-white/60 leading-relaxed">
          Your nervous system has a "gas pedal" (stress) and a "brake" (rest). A concussion gets the gas pedal stuck to the floor. This is called a "sympathetic storm."
        </p>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p><span className="font-medium text-slate-200">Heart Rate Variability (HRV):</span> This measures how well your body handles stress. After a hit, your HRV usually drops. This means your "brakes" aren't working, and your body is stuck in a permanent state of fight-or-flight.</p>
          <p><span className="font-medium text-slate-200">Blood Flow:</span> Your brain loses its ability to control blood pressure. If you jump back into hard training too early, your brain can't protect itself from pressure spikes, which can cause permanent damage.</p>
        </div>
        <img src={IMAGES.autonomicNervous} alt="Autonomic nervous system function and dysfunction" className="w-full rounded-md" loading="lazy" />
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
            <span className="text-[8px] font-bold text-green-500">GI</span>
          </div>
          <h3 className="text-sm font-bold">3. The "Leaky Gut" Connection</h3>
        </div>
        <p className="text-sm text-white/60 leading-relaxed">
          Within hours of a hit, the stress on your brain actually opens up the lining of your stomach. This is often called "leaky gut."
        </p>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p>Bad bacteria and toxins leak from your gut into your bloodstream. Once these toxins enter the bloodstream, they trigger a systemic immune response that can breach the blood-brain barrier, leading to:</p>
          <p><span className="font-medium text-slate-200">Neuroinflammation:</span> Activation of the brain's immune cells (microglia).</p>
          <p><span className="font-medium text-slate-200">Secondary Injury:</span> Inflammation that persists long after the physical impact has passed.</p>
        </div>
        <div className="p-3 rounded-md bg-amber-500/10 border border-amber-500/20 space-y-1">
          <p className="text-xs font-medium text-slate-200">Why Diet Matters</p>
          <p className="text-[11px] text-white/60"><span className="font-medium text-slate-200">Sugar:</span> Spikes blood glucose, which can worsen metabolic dysfunction in a brain already struggling for energy.</p>
          <p className="text-[11px] text-white/60"><span className="font-medium text-slate-200">Gut Health:</span> Poor nutrition prevents the gut lining from repairing itself, keeping the "leak" open and the brain inflamed.</p>
        </div>
        <img src={IMAGES.gutBrain} alt="Gut-brain connection after concussion" className="w-full rounded-md" loading="lazy" />
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold">4. The Triad: Eyes, Ears, and Neck</h3>
        </div>
        <p className="text-sm text-white/60 leading-relaxed">
          Recovery usually fails because fighters only treat their heads. You have to treat the "Triad":
        </p>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p><span className="font-medium text-slate-200">Eyes:</span> Your eyes might lose the ability to track moving objects.</p>
          <p><span className="font-medium text-slate-200">Ears:</span> Your inner ear (vestibular system) gets "out of sync" with your eyes.</p>
          <p><span className="font-medium text-slate-200">Neck:</span> It takes 70g of force to cause a concussion, but only 4.5g to cause whiplash. If you have a concussion, you have a neck injury. An injured neck sends "bad data" to your brain, making you feel dizzy and off-balance.</p>
        </div>
        <img src={IMAGES.vestibular} alt="Vestibular therapy for concussion" className="w-full rounded-md" loading="lazy" />
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Moon className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold">5. The Sleep Crash</h3>
        </div>
        <p className="text-sm text-white/60 leading-relaxed">
          A concussion damages the "master clock" in your brain that controls sleep.
        </p>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p><span className="font-medium text-slate-200">Melatonin:</span> Your body stops producing melatonin at the right time, making it impossible to fall asleep.</p>
          <p><span className="font-medium text-slate-200">Waste Clearing:</span> Your brain only cleans out "trash" (toxins) while you sleep. If you aren't sleeping, your brain stays "dirty" and inflamed.</p>
        </div>
        <img src={IMAGES.sleepBrain} alt="Sleep and brain recovery" className="w-full rounded-md" loading="lazy" />
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold">6. The Hidden Hormone Drop</h3>
        </div>
        <p className="text-sm text-white/60 leading-relaxed">
          The pituitary gland (the "master gland") sits in a fragile spot in your skull. When your brain moves, the stalks of this gland can stretch or tear.
        </p>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p>About 25% of fighters end up with "hidden" hormone issues months after a hit. This can lead to:</p>
          <div className="space-y-1 pl-3">
            <p>Lower testosterone/libido.</p>
            <p>Muscle loss and constant fatigue.</p>
            <p>Deep depression that feels like it came out of nowhere.</p>
          </div>
        </div>
        <img src={IMAGES.hormones} alt="Post-traumatic hormone dysregulation" className="w-full rounded-md" loading="lazy" />
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Frown className="w-4 h-4 text-amber-500" />
          <h3 className="text-sm font-bold">7. The Emotional "Brakes"</h3>
        </div>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p>The "amygdala" is the part of your brain that handles fear and anger. Usually, your "front brain" keeps it under control. A concussion disrupts the wires between them.</p>
          <p>This is why concussed fighters often feel "snappy," irritable, or suddenly anxious. It's not a personality flaw; it's a disruption in your brain's wiring.</p>
        </div>
      </Card>

      <Card className="p-4 space-y-2 bg-primary/5 border-primary/20">
        <p className="text-sm font-medium">How to Recover: The Fighter's Protocol</p>
        <p className="text-xs text-white/60 leading-relaxed">
          In the following lessons we will address each cause and its related symptoms with appropriate treatment to get back to your healthy and resilient self ASAP!
        </p>
        <p className="text-xs text-white/60 leading-relaxed font-medium">
          But remember: patience is key. Rushing back into intense training and sparring too soon after a concussion can do WAY more harm than good.
        </p>
      </Card>

      <Button className="w-full" variant="secondary" onClick={onShowDeepDive} data-testid="button-show-deep-dive-2">
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
      title: "The Neurometabolic Cascade & Systemic Injury",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>A concussion is initiated by biomechanical forces — acceleration, deceleration, and rotational inertia — which cause the brain to move within the skull. These forces result in the stretching and shearing of axons, particularly in deep brain regions and white matter tracts.</p>
          <p>At the cellular level, the physical deformation of neurons leads to widespread depolarization and the indiscriminate release of excitatory neurotransmitters, primarily glutamate. This results in massive ionic imbalances, triggering a state of cellular hypermetabolism followed by mitochondrial dysfunction and a prolonged period of hypometabolism.</p>
          <p>The primary injury initiates a cascade of systemic alterations referred to as extracranial multiorgan dysfunction (MODS). Research indicates that over 68% of moderate to severe TBI patients develop MODS within 72 hours, affecting the pulmonary, circulatory, renal, and coagulation systems.</p>
          <p>Even in mild TBI, glial cells (microglia and astrocytes) become activated and release damage-associated molecular patterns (DAMPs) into the systemic circulation, initiating widespread inflammatory signaling.</p>
        </div>
      ),
    },
    {
      key: "autonomic",
      title: "Autonomic Nervous System Dysregulation",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p className="font-medium text-slate-200">Heart Rate Variability (HRV)</p>
          <p>HRV serves as a sensitive, objective marker of the balance between the sympathetic (SNS) and parasympathetic (PNS) nervous systems. Concussion frequently results in a "sympathetic storm" — an overactive SNS and withdrawal of vagal tone.</p>
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">HRV Parameter</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Concussion Finding</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Implication</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2">NN Interval</td><td className="py-2 px-2">Reduced</td><td className="py-2 px-2">Heightened physiological stress</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">RMSSD</td><td className="py-2 px-2">Significant decrease</td><td className="py-2 px-2">Loss of parasympathetic control</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">SDNN</td><td className="py-2 px-2">Persistent reduction</td><td className="py-2 px-2">Reduced autonomic flexibility</td></tr>
                <tr><td className="py-2 px-2">LF/HF Ratio</td><td className="py-2 px-2">Increased</td><td className="py-2 px-2">Sympathetic dominance</td></tr>
              </tbody>
            </table>
          </div>
          <p>Longitudinal studies indicate that athletes with multiple concussions exhibit significantly impaired cardio-autonomic recovery after exercise, suggesting that concussion may permanently alter the bidirectional feedback loops between the brain and the cardiac system.</p>
          <p className="font-medium text-slate-200">Cerebral Blood Flow & Autoregulation Failure</p>
          <p>Concussion disrupts cerebral autoregulation (CA) — the brain can no longer effectively buffer blood pressure oscillations. Reductions in both global and regional cerebral blood flow persist for over 30 days post-injury, far exceeding the typical 7–10 day clinical symptom window.</p>
          <p>Symptoms like "brain fog," dizziness, and orthostatic intolerance are often manifestations of this impaired baroreflex efficiency and inefficient cerebral perfusion.</p>
        </div>
      ),
    },
    {
      key: "gutbrain",
      title: "The Gut-Brain-Microbiome Axis",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p className="font-medium text-slate-200">Mechanisms of the "Leaky Gut"</p>
          <p>Within hours of a concussion, the sympathetic "storm" and catecholamine release disrupt the intestinal barrier, leading to increased mucosal permeability. This allows inflammatory molecules, toxins, and bacteria to escape the intestinal lumen and enter the bloodstream.</p>
          <p>The feedback loop includes:</p>
          <div className="space-y-1.5 pl-2">
            <p><span className="font-medium text-slate-200">Vagal Dysfunction:</span> The vagus nerve normally provides anti-inflammatory signaling (the cholinergic anti-inflammatory pathway). TBI reduces vagal tone, allowing pro-inflammatory cytokines to proliferate.</p>
            <p><span className="font-medium text-slate-200">Systemic Inflammation:</span> DAMPs and intestinal toxins trigger Systemic Immune Response Syndrome (SIRS).</p>
            <p><span className="font-medium text-slate-200">BBB Compromise:</span> Circulating inflammatory mediators breach the blood-brain barrier, exacerbating neuroinflammation.</p>
          </div>
          <p className="font-medium text-slate-200">Dysbiosis and Neuroactive Metabolites</p>
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Component</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Post-Concussion</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Brain Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2">SCFAs</td><td className="py-2 px-2">Reduced</td><td className="py-2 px-2">Increased neuroinflammation, brain fog</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Microbial Diversity</td><td className="py-2 px-2">Reduced</td><td className="py-2 px-2">Lower cognition, mood instability</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Vagus Signaling</td><td className="py-2 px-2">Impaired</td><td className="py-2 px-2">Loss of brain inflammation control</td></tr>
                <tr><td className="py-2 px-2">Enteric Serotonin</td><td className="py-2 px-2">Reduced</td><td className="py-2 px-2">Anxiety, depression, emotional lability</td></tr>
              </tbody>
            </table>
          </div>
          <p>Early enteral nutrition and probiotic supplementation can mitigate these effects, potentially improving neurological recovery by restoring gut-microbiota-brain homeostasis.</p>
        </div>
      ),
    },
    {
      key: "sleep",
      title: "Sleep Architecture & Circadian Disruption",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>Sleep disturbances are reported by 40% to 65% of mTBI patients and are major predictors of poor long-term prognosis.</p>
          <p className="font-medium text-slate-200">Damage to the Suprachiasmatic Nucleus (SCN)</p>
          <p>The SCN, located in the anterior hypothalamus, is the body's primary pacemaker. It is largely composed of inhibitory GABAergic interneurons, which are preferentially affected by mechanical brain trauma. Injury disrupts melatonin secretion from the pineal gland.</p>
          <div className="space-y-1.5 pl-2">
            <p><span className="font-medium text-slate-200">Melatonin Misalignment:</span> Concussed patients exhibit abnormal dim-light melatonin onset (DLMO), causing a mismatch between internal rhythms and the environmental cycle.</p>
            <p><span className="font-medium text-slate-200">Process S Impairment:</span> The homeostatic drive for sleep is altered, leading to difficulties falling or staying asleep.</p>
            <p><span className="font-medium text-slate-200">Neural Circuitry Damage:</span> Shearing forces impact thalamo-cortical circuits and the reticular activating system, reducing REM sleep critical for memory consolidation.</p>
          </div>
          <p className="font-medium text-slate-200">Post-Traumatic Sleep Disorders</p>
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Disorder</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Pathophysiology</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Presentation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2">Delayed Sleep Phase</td><td className="py-2 px-2">Melatonin rhythm shift</td><td className="py-2 px-2">Can't sleep until early morning</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Irregular Sleep-Wake</td><td className="py-2 px-2">Loss of 24-hour rhythm</td><td className="py-2 px-2">Multiple short sleep episodes</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Post-Traumatic Hypersomnia</td><td className="py-2 px-2">Excessive homeostatic drive</td><td className="py-2 px-2">10+ hours sleep, still tired</td></tr>
                <tr><td className="py-2 px-2">Sleep Apnea</td><td className="py-2 px-2">Brainstem dysregulation</td><td className="py-2 px-2">Snoring, unrefreshing sleep</td></tr>
              </tbody>
            </table>
          </div>
          <p>Untreated sleep disorders create a "vicious cycle" where the lack of restorative sleep prevents the brain from clearing metabolic waste through the glymphatic system.</p>
        </div>
      ),
    },
    {
      key: "triad",
      title: "The Visual, Vestibular & Cervical Triad",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>Functional recovery depends heavily on three interconnected systems: the eyes (visual), the inner ear (vestibular), and the neck (cervical). Dizziness and visual disturbances occur in up to 90% of acute concussion cases.</p>
          <p className="font-medium text-slate-200">Vestibulo-Ocular Dysfunction</p>
          <div className="space-y-1.5 pl-2">
            <p><span className="font-medium text-slate-200">VOR (Vestibulo-Ocular Reflex):</span> Ensures clear vision during head motion. Damage leads to blurred vision, motion sensitivity, and vertigo.</p>
            <p><span className="font-medium text-slate-200">COR (Cervico-Ocular Reflex):</span> Uses neck proprioceptive input to stabilize the eyes. Often upregulated to compensate for a failing VOR.</p>
          </div>
          <p className="font-medium text-slate-200">Cervicogenic Post-Concussion Disorder</p>
          <p>The forces required to cause a concussion (~70–100g) are significantly higher than those for cervical strain (~4.5g). Consequently, almost all concussions involve a concomitant neck injury, characterized by:</p>
          <div className="space-y-1.5 pl-2">
            <p>Reduced cervical rotation (often only 20–40 degrees)</p>
            <p>Impaired joint position sense</p>
            <p>Headaches triggered by neck movements</p>
          </div>
          <p>Successful rehabilitation requires first addressing cervical spine limitations and BPPV before initiating complex vision and vestibular exercises.</p>
        </div>
      ),
    },
    {
      key: "endocrine",
      title: "Neuro-Endocrine Disruption & Hypopituitarism",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>The pituitary gland is supplied by long and short hypophyseal portal vessels that are highly susceptible to mechanical shearing. Post-traumatic hypopituitarism (PTHP) affects an estimated 25% to 50% of TBI patients.</p>
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Axis</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Hormone</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Deficiency Symptoms</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2">Somatotropic</td><td className="py-2 px-2">Growth Hormone</td><td className="py-2 px-2">Fatigue, muscle loss, depression, cognitive decline</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Adrenocortical</td><td className="py-2 px-2">ACTH / Cortisol</td><td className="py-2 px-2">Poor stress tolerance, low BP, lethargy</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Gonadotropic</td><td className="py-2 px-2">LH / FSH</td><td className="py-2 px-2">Reduced libido, mood swings, bone density loss</td></tr>
                <tr><td className="py-2 px-2">Thyrotropic</td><td className="py-2 px-2">TSH / Thyroxine</td><td className="py-2 px-2">Cold intolerance, weight gain, cognitive slowing</td></tr>
              </tbody>
            </table>
          </div>
          <p>PTHP is "occult" — symptoms often emerge months or years after the initial injury, leading to frequent misdiagnosis as depression or PTSD.</p>
        </div>
      ),
    },
    {
      key: "psychological",
      title: "Psychological & Mental Health Sequelae",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>Approximately 20% of patients experience significant mental health symptoms, including anxiety, depression, and social withdrawal.</p>
          <p className="font-medium text-slate-200">Amygdala Hyper-Responsivity and Decoupling</p>
          <p>In a healthy state, the amygdala is governed by top-down inhibitory control from the prefrontal cortex. Concussion disrupts this in two ways:</p>
          <div className="space-y-1.5 pl-2">
            <p><span className="font-medium text-slate-200">Hypo-Frontal Connectivity:</span> Decreased connectivity between the amygdala and the ventromedial prefrontal cortex, reducing the brain's ability to "down-regulate" emotional responses.</p>
            <p><span className="font-medium text-slate-200">Hyper-Posterior Connectivity:</span> Increased connectivity with posterior networks, reflecting maladaptive neural resource recruitment.</p>
          </div>
          <p>This explains "emotional lability" — sudden outbursts of anger or tearfulness — and the higher risk for PTSD. Genetic risk factors also interact with the physical injury to predict post-traumatic anxiety severity.</p>
        </div>
      ),
    },
    {
      key: "management",
      title: "Multi-Systemic Management Framework",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>The complexity of post-concussion syndrome necessitates a biopsychosocial management strategy that addresses the "vicious cycles" of multi-organ failure.</p>
          <p className="font-medium text-slate-200">Primary Regulatory Stabilization</p>
          <div className="space-y-1.5">
            {[
              { label: "Autonomic Stabilization", desc: "Resonant frequency breathing (~6 breaths/min) to increase vagal tone and HRV." },
              { label: "Subthreshold Exercise", desc: "Graded aerobic exercise at 80% of symptom-exacerbation heart rate to promote autonomic stability and increase cerebral blood flow." },
              { label: "Nutritional Support", desc: "Anti-inflammatory diet and probiotics to address the gut-brain axis and reduce systemic inflammation." },
              { label: "Hormonal Surveillance", desc: "Routine screening for GH and ACTH deficiencies in patients who fail to recover within the typical 3-month window." },
            ].map((item) => (
              <div key={item.label} className="flex gap-2 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-slate-200 text-xs">{item.label}:</span>{" "}
                  <span className="text-xs">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <p>By viewing concussion not as a simple "hit to the head" but as a systemic regulatory collapse, clinicians can provide more accurate diagnoses and targeted therapies. "Regulating the regulators" is the key to successful concussion recovery.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-3">
      <Button variant="ghost" size="sm" onClick={onBack} className="mb-1" data-testid="button-back-simple-2">
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Overview
      </Button>

      <Card className="p-4 space-y-2">
        <h2 className="text-lg font-bold">Clinical Deep Dive</h2>
        <p className="text-xs text-white/60 leading-relaxed">
          The Systemic Pathophysiology of Concussion: A Multisystemic Analysis of Extra-Cerebral Regulatory Failure.
        </p>
      </Card>

      {sections.map((section) => (
        <Card key={section.key} className="overflow-hidden" data-testid={`section-l2-${section.key}`}>
          <button
            className="w-full flex items-center justify-between gap-2 px-4 py-3 text-left"
            onClick={() => toggle(section.key)}
            data-testid={`button-toggle-l2-${section.key}`}
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
          <p>The Immune System's Role in Mild Traumatic Brain Injury — PMC</p>
          <p>Early Autonomic Dysfunction in Traumatic Brain Injury — MDPI</p>
          <p>Brain-gut axis dysfunction in TBI pathogenesis — PMC</p>
          <p>Sleep, Sleep Disorders, and Circadian Health following mTBI — PMC</p>
          <p>Cervical Injury Assessments for Concussion Evaluation — PMC</p>
          <p>Concussion and the Autonomic, Immune, and Endocrine Systems — MDPI</p>
          <p>Sport-Related Concussion Alters Dynamic Cerebral Autoregulation — PMC</p>
        </div>
      </Card>
    </div>
  );
}

export default function Lesson2({ view, onViewChange }: { view: LessonView; onViewChange: (v: LessonView) => void }) {
  if (view === "deep") {
    return <DeepDiveView onBack={() => onViewChange("simple")} />;
  }
  return <SimpleView onShowDeepDive={() => onViewChange("deep")} />;
}
