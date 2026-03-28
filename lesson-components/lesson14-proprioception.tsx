import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { LessonView } from "./lesson1-energy-crisis";
import { Warning as AlertTriangle, CaretDown as ChevronDown, CaretUp as ChevronUp, ArrowLeft, Eye, Timer, ArrowClockwise as RefreshCw, BookOpen} from "@phosphor-icons/react";

const IMAGES = {
  symptomThreshold: "https://www.cognitivefxusa.com/hs-fs/hubfs/image1-4.jpg?width=1104&height=762&name=image1-4.jpg",
  vestibularTherapy: "https://www.cognitivefxusa.com/hs-fs/hubfs/vestibular-therapy-for-concussion-symptoms-2.jpg?width=1104&height=922&name=vestibular-therapy-for-concussion-symptoms-2.jpg",
};

function SimpleView({ onShowDeepDive }: { onShowDeepDive: () => void }) {
  return (
    <div className="space-y-4">
      <Card className="p-4 space-y-3" data-testid="card-l14-intro">
        <h2 className="text-lg font-bold" data-testid="text-l14-title">Fixing Your Proprioception: A Fighter's Guide to Concussion Recovery</h2>
      </Card>

      <Card className="p-4 space-y-3 border-amber-500/30 bg-amber-500/5" data-testid="card-l14-glitch">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-500" />
          <h3 className="text-sm font-bold text-amber-600">1. The Glitch: Why You Feel Off</h3>
        </div>
        <p className="text-xs text-white/60 leading-relaxed">
          A concussion causes a "sensory mismatch." Your inner ear (vestibular system) might tell your brain you are moving, while your eyes say you are still. This conflict sends an error message to your brain, causing dizziness and nausea.
        </p>
        <div className="p-3 rounded-md bg-white/5" data-testid="item-l14-convergence">
          <div className="text-xs font-medium text-slate-200">Convergence Insufficiency (CI)</div>
          <div className="text-[11px] text-white/60 mt-1">The most common issue for fighters. This happens when your eyes can't work together to focus on an object moving toward your nose. If you can't track a punch coming at your face, you can't defend it.</div>
        </div>
      </Card>

      <Card className="p-4 space-y-3" data-testid="card-l14-voms">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold">2. The Tool: VOMS Screening</h3>
        </div>
        <p className="text-xs text-white/60 mb-2">
          Vestibular/Ocular-Motor Screening — doctors use VOMS to test you, but you can use these same movements to train your brain back to health:
        </p>
        <div className="space-y-1.5">
          {[
            { name: "Smooth Pursuits", desc: "Tracking a finger moving slowly left, right, up, and down" },
            { name: "Saccades", desc: "Quickly jumping your eyes between two points" },
            { name: "NPC (Focus)", desc: "Moving a target toward your nose until you see double" },
            { name: "VOR (Gaze Stability)", desc: "Keeping your eyes locked on a target while shaking your head 'no' or 'yes'" },
          ].map((item) => (
            <div key={item.name} className="p-2.5 rounded-md bg-muted/50" data-testid={`item-l14-voms-${item.name.split(" ")[0].toLowerCase()}`}>
              <div className="text-xs font-medium text-slate-200">{item.name}</div>
              <div className="text-[11px] text-white/60">{item.desc}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4 space-y-3 border-green-500/30 bg-green-500/5" data-testid="card-l14-strategy">
        <div className="flex items-center gap-2">
          <RefreshCw className="w-4 h-4 text-green-500" />
          <h3 className="text-sm font-bold text-green-600">3. The Strategy: Expose and Recover</h3>
        </div>
        <p className="text-xs text-white/60 mb-2">
          Recovery isn't about avoiding symptoms; it's about challenging them:
        </p>
        <div className="space-y-2">
          <div className="p-3 rounded-md bg-white/5" data-testid="item-l14-3-point-rule">
            <div className="text-xs font-medium text-slate-200">The 3-Point Rule</div>
            <div className="text-[11px] text-white/60 mt-1">Use a scale of 1–10 for your symptoms (headache, dizziness, nausea). Do your drills until your symptoms increase by 3 points.</div>
          </div>
          <div className="p-3 rounded-md bg-white/5" data-testid="item-l14-stop-reset">
            <div className="text-xs font-medium text-slate-200">Stop and Reset</div>
            <div className="text-[11px] text-white/60 mt-1">Once you hit that increase, stop. Wait for the symptoms to return to baseline.</div>
          </div>
          <div className="p-3 rounded-md bg-white/5" data-testid="item-l14-goal">
            <div className="text-xs font-medium text-slate-200">The Goal</div>
            <div className="text-[11px] text-white/60 mt-1">Over time, your brain adapts. You'll be able to move faster and longer before the symptoms kick in.</div>
          </div>
        </div>
        <img src={IMAGES.symptomThreshold} alt="Symptom threshold training chart" className="w-full rounded-md" loading="lazy" data-testid="img-l14-symptom-threshold" />
      </Card>

      <Card className="p-4 space-y-3 border-purple-500/30 bg-emerald-500/100/5" data-testid="card-l14-frequency">
        <div className="flex items-center gap-2">
          <Timer className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold text-emerald-400">4. The Secret: Frequency is King</h3>
        </div>
        <p className="text-xs text-white/60 mb-2">
          In boxing, you don't learn to slip a jab by doing it for two hours once a week. You do it every day. Brain recovery is the same.
        </p>
        <div className="space-y-2">
          <div className="p-3 rounded-md bg-red-500/5 border border-red-500/10" data-testid="item-l14-massed">
            <div className="text-xs font-medium text-red-500">Massed Practice (Bad)</div>
            <div className="text-[11px] text-white/60 mt-1">Doing one long 30-minute session. This fries your brain and causes a massive "crash."</div>
          </div>
          <div className="p-3 rounded-md bg-green-500/5 border border-green-500/10" data-testid="item-l14-distributed">
            <div className="text-xs font-medium text-green-600">Distributed Practice (Good)</div>
            <div className="text-[11px] text-white/60 mt-1">Doing 5 minutes of drills, 6 times a day. Frequent "reminders" tell your brain to recalibrate and heal faster.</div>
          </div>
        </div>
      </Card>

      <Card className="p-4 space-y-3" data-testid="card-l14-call-pro">
        <h3 className="text-sm font-bold">5. When to Call a Pro</h3>
        <p className="text-xs text-white/60 mb-2">
          If you aren't seeing progress after 4 weeks, you might have a specific mechanical issue:
        </p>
        <div className="space-y-2">
          <div className="p-2.5 rounded-md bg-muted/50" data-testid="item-l14-crystals">
            <div className="text-xs font-medium text-slate-200">The "Crystals" (BPPV)</div>
            <div className="text-[11px] text-white/60 mt-1">If you get intense spinning (vertigo) when you roll over in bed, tiny "crystals" in your ear may be knocked loose. A PT needs to physically move them back.</div>
          </div>
          <div className="p-2.5 rounded-md bg-muted/50" data-testid="item-l14-neck">
            <div className="text-xs font-medium text-slate-200">The Neck</div>
            <div className="text-[11px] text-white/60 mt-1">A blow to the head is usually a blow to the neck. If your neck is stiff or "noisy," it sends bad signals to your brain, causing dizziness.</div>
          </div>
          <div className="p-2.5 rounded-md bg-muted/50" data-testid="item-l14-vision">
            <div className="text-xs font-medium text-slate-200">Vision Specialists</div>
            <div className="text-[11px] text-white/60 mt-1">If you still see double, you may need a Neuro-Optometrist for specialized glasses or prism lenses.</div>
          </div>
        </div>
        <img src={IMAGES.vestibularTherapy} alt="Vestibular therapy illustration" className="w-full rounded-md" loading="lazy" data-testid="img-l14-vestibular-therapy" />
      </Card>

      <Card className="p-4 space-y-2 border-primary/20 bg-primary/5" data-testid="card-l14-summary">
        <h3 className="text-sm font-bold">Summary for the Gym</h3>
        <p className="text-xs text-white/60 leading-relaxed">
          Don't just wait in the dark or simply rest until you feel better. Use short, frequent bursts of VOMS movements to tell your brain the "glitch" is over. Push yourself just enough to trigger a small symptom flare, then let it settle. <span className="font-medium text-slate-200">That is how you build resilience and get back in the ring.</span>
        </p>
      </Card>

      <Button className="w-full" variant="secondary" onClick={onShowDeepDive} data-testid="button-show-deep-dive-14">
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
      key: "pathophysiology",
      title: "Pathophysiology of Sensory-Motor Disruption",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>A concussion triggers a cascade of neurometabolic events — ionic shifts, altered glucose metabolism, and impaired axonal transport — affecting gaze stability, balance, and binocular coordination. Visual and vestibular dysfunctions manifest in upwards of <span className="font-medium text-slate-200">80% of concussed individuals</span>.</p>
          <p className="font-medium text-slate-200">The Vestibular Axis</p>
          <p>Post-concussive vestibular dysfunction involves both peripheral (inner ear, vestibular nerves) and central (brainstem, cerebellum, cortex) impairments. 7T MRI research shows persisting symptoms are frequently associated with injury to the inferior vestibular nerve.</p>
          <p>Central dysfunction compromises the brain's ability to integrate signals from vestibular, visual, and somatosensory systems — creating a "sensory mismatch" where conflicting information about body orientation produces dizziness and nausea.</p>
          <p className="font-medium text-slate-200">Convergence Insufficiency (CI)</p>
          <p>CI affects approximately <span className="font-medium text-slate-200">45–49%</span> of the post-concussion population. The vergence system involves a wide-reaching network including the primary visual cortex, parietal cortex, frontal eye fields (FEF), and the supraoculomotor area (SOA) in the midbrain — making it particularly susceptible to diffuse shearing forces.</p>
          <div className="overflow-x-auto -mx-1" data-testid="table-l14-pathophysiology">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Component</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Structure</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Deficit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted" data-testid="row-l14-vestibular"><td className="py-2 px-2">Vestibular</td><td className="py-2 px-2">Semicircular canals, Vestibular nerve</td><td className="py-2 px-2">Impaired VOR, postural instability</td></tr>
                <tr className="border-b border-muted" data-testid="row-l14-oculomotor"><td className="py-2 px-2">Oculomotor</td><td className="py-2 px-2">Frontal eye fields, midbrain (SOA)</td><td className="py-2 px-2">Saccadic latency, poor smooth pursuits</td></tr>
                <tr className="border-b border-muted" data-testid="row-l14-vergence"><td className="py-2 px-2">Vergence</td><td className="py-2 px-2">Parietal cortex, extra-striate cortex</td><td className="py-2 px-2">Convergence insufficiency (CI)</td></tr>
                <tr data-testid="row-l14-integrative"><td className="py-2 px-2">Integrative Centers</td><td className="py-2 px-2">Cerebellum, vestibular nuclei</td><td className="py-2 px-2">Motion sensitivity, sensory re-weighting</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      key: "voms-assessment",
      title: "VOMS: Assessment & Self-Monitoring",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>VOMS evaluates five domains using baseline symptoms — headache, dizziness, nausea, and fogginess (HDNF) — on a 0–10 scale. A change of <span className="font-medium text-slate-200">2+ points</span> in any symptom following a sub-test indicates neurological stress in that system.</p>
          <div className="overflow-x-auto -mx-1" data-testid="table-l14-voms-domains">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Domain</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Technique</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2">Smooth Pursuits</td><td className="py-2 px-2">Tracking target 1.5 ft L/R, up/down</td><td className="py-2 px-2">Cortical tracking pathways</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Saccades</td><td className="py-2 px-2">Rapidly shifting gaze between 2 targets 3 ft apart</td><td className="py-2 px-2">Brainstem & cerebellar coordination</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">NPC</td><td className="py-2 px-2">Moving target toward nose until double vision</td><td className="py-2 px-2">Binocular fusion & midbrain function</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">VOR</td><td className="py-2 px-2">Maintaining gaze on fixed target while rotating head</td><td className="py-2 px-2">Gaze stability during movement</td></tr>
                <tr><td className="py-2 px-2">VMS</td><td className="py-2 px-2">Rotating head and trunk together while focusing on thumb</td><td className="py-2 px-2">Visual-vestibular inhibition</td></tr>
              </tbody>
            </table>
          </div>
          <p>NPC is measured in centimeters — a distance greater than 5–6 cm from the nose is classified as receded. VOMS is more sensitive than traditional balance tests (BESS) in identifying concussion, and vestibular-ocular symptoms are the most accurate predictors of prolonged recovery.</p>
        </div>
      ),
    },
    {
      key: "active-rehab",
      title: "Active Rehabilitation: Expose & Recover",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>VOMS movements used for assessment also serve as the primary vehicle for rehabilitation — the "expose and recover" model where controlled exposure to symptom-triggering stimuli facilitates neural adaptation.</p>
          <p className="font-medium text-slate-200">Symptom-Threshold Training</p>
          <p>Exercises are performed at a "sub-symptom threshold" — engaging until a mild symptom increase (e.g., 2-point increase on HDNF scale). This transient flare-up is acceptable and necessary for recovery. Prolonged rest can lead to deconditioning and increased sensitivity.</p>
          <p className="font-medium text-slate-200">Neuroplasticity Mechanisms</p>
          <div className="space-y-1.5">
            {[
              { name: "Adaptation", desc: "Long-term changes in neuronal response. The VOR is 're-calibrated' through repetitive head movements while maintaining gaze on a target." },
              { name: "Habituation", desc: "Reduction in symptoms through repeated exposure. The brain gradually learns to ignore 'false' error signals, decreasing perceived dizziness." },
              { name: "Substitution", desc: "When a system is too damaged, the brain utilizes other sensory inputs. E.g., relying more on visual cues and proprioception from neck/feet for balance." },
            ].map((item) => (
              <div key={item.name} className="p-2 rounded-md bg-muted/50" data-testid={`item-l14-mechanism-${item.name.toLowerCase()}`}>
                <div className="text-xs font-medium text-slate-200">{item.name}</div>
                <div className="text-[11px]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      key: "frequency",
      title: "The Frequency Imperative: Distributed vs. Massed Practice",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>The frequency of exercise is often more important than the duration or intensity. Rehabilitation movements must be performed frequently throughout the day rather than in one isolated block.</p>
          <div className="overflow-x-auto -mx-1" data-testid="table-l14-practice">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Schedule</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Frequency</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Mechanism</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Resilience</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted" data-testid="row-l14-massed"><td className="py-2 px-2">Massed</td><td className="py-2 px-2">1x/day (long)</td><td className="py-2 px-2">Fatigue, overload</td><td className="py-2 px-2 text-red-500 font-medium">Low</td></tr>
                <tr data-testid="row-l14-distributed"><td className="py-2 px-2">Distributed</td><td className="py-2 px-2">6x/day (short)</td><td className="py-2 px-2">Synaptic consolidation, BDNF</td><td className="py-2 px-2 text-green-600 font-medium">High</td></tr>
              </tbody>
            </table>
          </div>
          <p>Distributed practice — 5–10 minutes, five to six times a day — aligns with memory consolidation and neural adaptation. This consistent signal triggers up-regulation of <span className="font-medium text-slate-200">Brain-Derived Neurotrophic Factor (BDNF)</span>, essential for neuron growth and synaptic repair.</p>
          <p>If performed only once daily, the CNS interprets dizziness as a random event and reverts to its dysfunctional baseline. Frequent repetition forces constant re-calibration.</p>
        </div>
      ),
    },
    {
      key: "improving-scores",
      title: "Improving VOMS Scores & Functional Metrics",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p className="font-medium text-slate-200">Convergence Insufficiency Remediation</p>
          <p>The <span className="font-medium text-slate-200">Brock string</span> — a string with colored beads — allows patients to practice shifting focus between near and far points. Office-based vergence/accommodative therapy (OBVAM) can significantly improve NPC distance within 12–16 sessions. Goal: a "break" point less than 6 cm.</p>
          <p className="font-medium text-slate-200">Progressive Gaze Stability & Balance Training</p>
          <p>Improving VOR scores involves increasing head rotation speed toward the 180 bpm metronome target. Progression strategies:</p>
          <div className="space-y-1.5">
            {[
              { name: "Change the Surface", desc: "Move from firm floor to foam pad or balance board — reduce proprioceptive input, force the brain to rely on the vestibular system." },
              { name: "Alter Visual Input", desc: "Perform exercises in front of a busy background (visual noise) or with eyes closed during balance tasks." },
              { name: "Dual-Tasking", desc: "Add cognitive challenges — counting backwards by sevens or naming items in a category while performing VOMS movements." },
            ].map((item) => (
              <div key={item.name} className="p-2 rounded-md bg-muted/50" data-testid={`item-l14-progression-${item.name.split(" ")[1]?.toLowerCase() || item.name.toLowerCase()}`}>
                <div className="text-xs font-medium text-slate-200">{item.name}</div>
                <div className="text-[11px]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      key: "professional",
      title: "Professional Assessment & Intervention",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p className="font-medium text-slate-200">BPPV: The "Crystal" Issue</p>
          <p>Calcium carbonate crystals (otoconia) in the utricle can be dislodged and enter the semicircular canals, causing intense perceived rotation. BPPV cannot be cured through habituation — it requires <span className="font-medium text-slate-200">canalith repositioning maneuvers</span> (Dix-Hallpike for diagnosis, Epley maneuver for treatment). Post-traumatic BPPV is more resistant, often requiring multiple sessions.</p>
          <p className="font-medium text-slate-200">Neuro-Optometric Care</p>
          <p>If visual symptoms persist beyond 4–6 weeks, a neuro-optometrist may prescribe:</p>
          <div className="space-y-1.5">
            {[
              { name: "Prism Lenses", desc: "Alter how light enters the eye to compensate for binocular misalignment, providing immediate relief for dizziness and poor balance." },
              { name: "Binasal Occlusion", desc: "Small tape on inner glasses reduces visual stress from 'overactive' peripheral vision common after concussion." },
              { name: "Vision Therapy", desc: "Intensive programs using tools like the Marsden ball to rehabilitate eye tracking, depth perception, and visual-spatial awareness." },
            ].map((item) => (
              <div key={item.name} className="p-2 rounded-md bg-muted/50" data-testid={`item-l14-neuro-opt-${item.name.split(" ")[0].toLowerCase()}`}>
                <div className="text-xs font-medium text-slate-200">{item.name}</div>
                <div className="text-[11px]">{item.desc}</div>
              </div>
            ))}
          </div>
          <p className="font-medium text-slate-200">The Cervical Spine</p>
          <p>The neck is densely populated with proprioceptors. A blow to the head often includes whiplash, leading to cervical joint restrictions or muscle trigger points that send "noisy" signals. Hands-on work to restore neck mobility is essential for vestibular recovery.</p>
        </div>
      ),
    },
    {
      key: "conclusion",
      title: "Conclusions & Integrative Summary",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>Recovery of visual and vestibular systems requires a shift from passive rest to active, high-frequency rehabilitation. The VOMS protocol serves as both a diagnostic baseline and a therapeutic regimen.</p>
          <p>By engaging in movements multiple times a day, patients utilize <span className="font-medium text-slate-200">adaptation and habituation</span> to re-calibrate neural reflexes. Mild symptom flare-ups are a sign of progress — building long-term resilience.</p>
          <p>Persistence of symptoms beyond 4 weeks demands professional evaluation to rule out BPPV or complex oculomotor disorders. A combination of frequent, self-directed VOMS training and specialized professional intervention provides the most effective pathway for restoring functional stability.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-3">
      <Button variant="ghost" size="sm" onClick={onBack} className="mb-1" data-testid="button-back-simple-14">
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Overview
      </Button>

      <Card className="p-4 space-y-2">
        <h2 className="text-lg font-bold" data-testid="text-l14-deep-dive-title">Clinical Deep Dive</h2>
        <p className="text-xs text-white/60 leading-relaxed">
          Clinical Management and Neuro-Physiological Rehabilitation of Visual and Vestibular Dysfunction in Post-Concussive Syndrome.
        </p>
      </Card>

      {sections.map((section) => (
        <Card key={section.key} className="overflow-hidden" data-testid={`section-l14-${section.key}`}>
          <button
            className="w-full flex items-center justify-between gap-2 px-4 py-3 text-left"
            onClick={() => toggle(section.key)}
            data-testid={`button-toggle-l14-${section.key}`}
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

      <Card className="p-4 space-y-2" data-testid="card-l14-works-cited">
        <div className="text-xs font-medium">Works Cited</div>
        <div className="text-[9px] text-white/60/60 leading-relaxed space-y-0.5">
          <p>Sub-Symptom Threshold Balance Training — MDPI</p>
          <p>Vergence/Accommodative Rehabilitation of CI — PubMed Central</p>
          <p>Active Recovery from Concussion — PMC</p>
          <p>Exercise is Medicine for Concussion — PMC</p>
          <p>Vestibular Dysfunction and Inferior Vestibular Nerve — PMC</p>
          <p>BPPV and Traumatic Brain Injury — PMC</p>
          <p>VOMS Concussion Diagnosis — UPMC</p>
          <p>Massed vs. Distributed Practice — Fiveable</p>
        </div>
      </Card>
    </div>
  );
}

export default function Lesson14({ view, onViewChange }: { view: LessonView; onViewChange: (v: LessonView) => void }) {
  if (view === "deep") {
    return <DeepDiveView onBack={() => onViewChange("simple")} />;
  }
  return <SimpleView onShowDeepDive={() => onViewChange("deep")} />;
}
