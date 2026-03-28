import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { LessonView } from "./lesson1-energy-crisis";
import { Warning as AlertTriangle, CaretDown as ChevronDown, CaretUp as ChevronUp, ArrowLeft, UsersThree as Users, Pulse as Activity, BookOpen} from "@phosphor-icons/react";

const IMAGES = {
  neckForce: "https://med.stanford.edu/content/sm/news/all-news/2018/09/study-shows-how-head-neck-positioning-affects-concussion-risk/jcr%3acontent/cq%3afeaturedimage.coreimg.jpg/1736929101901/lksc.jpg",
  cervicalSpine: "https://i0.wp.com/mollandspinalcare.com/wp-content/uploads/2018/04/never-fade.png?resize=546%2C457&ssl=1",
};

function SimpleView({ onShowDeepDive }: { onShowDeepDive: () => void }) {
  return (
    <div className="space-y-4">
      <Card className="p-4 space-y-3" data-testid="card-l13-intro">
        <h2 className="text-lg font-bold" data-testid="text-l13-title">Why Your "Concussion" Might Actually Be a Neck Injury</h2>
        <p className="text-sm text-white/60 leading-relaxed">
          In boxing, we talk about "the chin" and "the brain," but we often ignore the bridge between them: the neck. Modern research shows that you cannot rattle the brain without also damaging the neck.
        </p>
        <p className="text-sm text-white/60 leading-relaxed">
          If you are struggling with "post-concussion symptoms," there is a high chance your neck — not your brain — is the primary reason you still feel like garbage.
        </p>
      </Card>

      <Card className="p-4 space-y-3 border-red-500/30 bg-red-500/5" data-testid="card-l13-weakest-link">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-red-500" />
          <h3 className="text-sm font-bold text-red-500">1. Your Neck is the Weakest Link</h3>
        </div>
        <p className="text-xs text-white/60 mb-2">
          The force required to give you a concussion is much higher than the force needed to injure your neck:
        </p>
        <div className="space-y-2">
          <div className="p-3 rounded-md bg-white/5 space-y-1" data-testid="stat-l13-neck-threshold">
            <div className="flex items-center justify-between">
              <div className="text-xs font-medium text-slate-200">Neck Injury Threshold</div>
              <div className="text-sm font-bold text-red-500" data-testid="text-l13-neck-g">4.5g</div>
            </div>
          </div>
          <div className="p-3 rounded-md bg-white/5 space-y-1" data-testid="stat-l13-concussion-threshold">
            <div className="flex items-center justify-between">
              <div className="text-xs font-medium text-slate-200">Adult Concussion Threshold</div>
              <div className="text-sm font-bold text-emerald-400" data-testid="text-l13-concussion-g">70–120g</div>
            </div>
          </div>
        </div>
        <div className="p-3 rounded-md bg-red-500/10 border border-red-500/20">
          <p className="text-xs font-medium text-red-600">
            If you took a shot hard enough to cause a concussion, you subjected your neck to 15–26x the force it can handle. It is almost physically impossible to get a concussion without also getting a "whiplash" style neck injury.
          </p>
        </div>
        <img src={IMAGES.neckForce} alt="Head-neck positioning and concussion risk" className="w-full rounded-md" loading="lazy" data-testid="img-l13-neck-force" />
      </Card>

      <Card className="p-4 space-y-3" data-testid="card-l13-symptom-trap">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-amber-500" />
          <h3 className="text-sm font-bold">2. The Symptom Trap</h3>
        </div>
        <p className="text-xs text-white/60 mb-2">
          The brain and the neck share the same "wiring" in your upper spine. A neck injury can perfectly mimic a brain injury:
        </p>
        <div className="overflow-x-auto -mx-1" data-testid="table-l13-symptom-trap">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-2 font-medium text-slate-200">Symptom</th>
                <th className="text-center py-2 px-2 font-medium text-slate-200">Brain?</th>
                <th className="text-center py-2 px-2 font-medium text-slate-200">Neck?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-muted" data-testid="row-l13-headaches"><td className="py-2 px-2">Headaches</td><td className="py-2 px-2 text-center">Yes</td><td className="py-2 px-2 text-center">Yes (Cervicogenic)</td></tr>
              <tr className="border-b border-muted" data-testid="row-l13-dizziness"><td className="py-2 px-2">Dizziness</td><td className="py-2 px-2 text-center">Yes</td><td className="py-2 px-2 text-center">Yes (Sensory Mismatch)</td></tr>
              <tr className="border-b border-muted" data-testid="row-l13-brain-fog"><td className="py-2 px-2">Brain Fog</td><td className="py-2 px-2 text-center">Yes</td><td className="py-2 px-2 text-center">Yes (Proprioceptive)</td></tr>
              <tr data-testid="row-l13-balance"><td className="py-2 px-2">Balance Issues</td><td className="py-2 px-2 text-center">Yes</td><td className="py-2 px-2 text-center">Yes</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-white/60 mt-2">
          <span className="font-medium text-slate-200">Why this happens:</span> Your neck is a massive sensor for your brain. When the joints or muscles in your upper neck (C1–C3) are injured, they send "glitchy" data to the brain, causing dizziness and that "spaced out" feeling.
        </p>
        <img src={IMAGES.cervicalSpine} alt="Cervical spine anatomy" className="w-full rounded-md" loading="lazy" data-testid="img-l13-cervical-spine" />
      </Card>

      <Card className="p-4 space-y-3" data-testid="card-l13-dark-room">
        <h3 className="text-sm font-bold">3. "Resting in a Dark Room" Doesn't Fix a Neck</h3>
        <p className="text-xs text-white/60 mb-2">
          While 24–48 hours of rest is good after a hard hit, "cocooning" for weeks won't fix a mechanical neck issue:
        </p>
        <div className="space-y-2">
          <div className="p-2.5 rounded-md bg-muted/50 space-y-1" data-testid="item-l13-guarding">
            <div className="text-xs font-medium text-slate-200">Muscle Guarding</div>
            <div className="text-[11px] text-white/60">After a hit, your neck muscles go into protective spasm. This reduces blood flow and creates "trigger points" that refer pain behind your eyes and across your forehead.</div>
          </div>
          <div className="p-2.5 rounded-md bg-muted/50 space-y-1" data-testid="item-l13-locking">
            <div className="text-xs font-medium text-slate-200">Joint Locking</div>
            <div className="text-[11px] text-white/60">The small joints in your spine (facet joints) can become inflamed or "locked," causing sharp pain and limited movement.</div>
          </div>
        </div>
      </Card>

      <Card className="p-4 space-y-3 border-green-500/30 bg-green-500/5" data-testid="card-l13-recovery">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-green-500" />
          <h3 className="text-sm font-bold text-green-600">4. Recovery: Pro Help vs. Self-Care</h3>
        </div>
        <div className="space-y-2">
          <div className="p-3 rounded-md bg-white/5 space-y-1" data-testid="item-l13-manual-therapy">
            <div className="text-xs font-medium text-slate-200">Manual Therapy (The Gold Standard)</div>
            <div className="text-[11px] text-white/60">Hands-on treatment from a professional (Physio or Chiropractor) is significantly more effective than just stretching. They use Joint Mobilization and Post-Isometric Relaxation to reset the muscles and joints.</div>
          </div>
          <div className="p-3 rounded-md bg-white/5 space-y-1" data-testid="item-l13-active-recovery">
            <div className="text-xs font-medium text-slate-200">Active Recovery — The Four P's</div>
            <div className="text-[11px] text-white/60">After the first 48 hours, move into "relative rest":</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-1.5">
              {[
                { p: "Plan", desc: "Schedule demanding tasks when energy is highest" },
                { p: "Prioritize", desc: "Focus on the most important tasks" },
                { p: "Pace", desc: "Break tasks into steps with breaks" },
                { p: "Position", desc: "Don't slouch over your phone" },
              ].map((item) => (
                <div key={item.p} className="p-2 rounded bg-green-500/5 border border-green-500/10" data-testid={`item-l13-four-p-${item.p.toLowerCase()}`}>
                  <div className="text-[11px] font-medium text-green-600">{item.p}</div>
                  <div className="text-[10px] text-white/60">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-4 space-y-2 border-primary/20 bg-primary/5" data-testid="card-l13-summary">
        <h3 className="text-sm font-bold">Summary for the Gym</h3>
        <p className="text-xs text-white/60 leading-relaxed">
          If you have persistent headaches, dizziness, or fog after a fight or hard sparring session, <span className="font-medium text-slate-200">get your neck checked by a specialist</span>. Addressing the neck is often the "missing piece" that gets fighters back to 100% and back in the ring.
        </p>
      </Card>

      <Button className="w-full" variant="secondary" onClick={onShowDeepDive} data-testid="button-show-deep-dive-13">
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
      key: "thresholds",
      title: "Biomechanical Thresholds: Brain vs. Cervical Spine",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>The brain requires 70–120g linear acceleration or 5,582–9,515 rad/s² rotational force for concussive injury. The cervical spine reaches injury threshold at just 4.5g — creating a massive disparity of approximately 16:1.</p>
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Injury</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Linear (g)</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Angular (rad/s²)</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Target</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2">Cervical Strain</td><td className="py-2 px-2">4.5g</td><td className="py-2 px-2">N/A</td><td className="py-2 px-2">Ligaments, Facet Joints</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Concussion (Adolescent)</td><td className="py-2 px-2">32–92g</td><td className="py-2 px-2">1,018–4,200</td><td className="py-2 px-2">Developing Axons</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Concussion (Adult)</td><td className="py-2 px-2">70–120g</td><td className="py-2 px-2">5,582–9,515</td><td className="py-2 px-2">Mature Axons</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Static Load Fracture</td><td className="py-2 px-2">80–125g</td><td className="py-2 px-2">N/A</td><td className="py-2 px-2">Bone/Structural</td></tr>
                <tr><td className="py-2 px-2">Subdural Hematoma</td><td className="py-2 px-2">&gt;316g</td><td className="py-2 px-2">N/A</td><td className="py-2 px-2">Bridging Veins</td></tr>
              </tbody>
            </table>
          </div>
          <p>Clinical evidence shows up to 68% of mTBI patients report neck pain within the first 72 hours, confirming that concomitant cervical injury is the rule, not the exception.</p>
        </div>
      ),
    },
    {
      key: "pathomechanical",
      title: "The Pathomechanical Sequence of Cervical Injury",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>The head (~4.5–5 kg) acts as a mass on a flexible lever (the neck). When force is applied, the injury follows four phases:</p>
          <div className="space-y-1.5">
            {[
              { n: 1, title: "Retraction Phase", desc: "Lower cervical vertebrae forced into extension, upper into flexion — creating an unnatural S-shaped curve, straining anterior ligaments and posterior joints." },
              { n: 2, title: "Extension Phase", desc: "Entire neck moves into full extension, compressing facet joints and stretching sternocleidomastoid and scalene muscles beyond physiological limits." },
              { n: 3, title: "Rebound Phase", desc: "Head snaps forward into flexion, overcompensating for extension, straining posterior musculature and capsular ligaments." },
              { n: 4, title: "Deceleration", desc: "Muscles and joints attempt to stabilize the head mass, often leading to secondary spasms and protective guarding." },
            ].map((item) => (
              <div key={item.n} className="flex items-start gap-2 p-2 rounded-md bg-muted/50" data-testid={`item-l13-phase-${item.n}`}>
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
        </div>
      ),
    },
    {
      key: "diagnostic-trap",
      title: "The Diagnostic Trap: Symptom Overlap",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p className="font-medium text-slate-200">The Trigeminocervical Nucleus</p>
          <p>Sensory information from cervical nerves C1–C3 converges with trigeminal nerve fibers (head/face sensation) in the upper cervical spinal cord. When upper neck structures are irritated, the brain misinterprets signals as originating from the head — producing "cervicogenic headaches."</p>
          <p className="font-medium text-slate-200">Sensory Mismatch and Dizziness</p>
          <p>The cervical spine has the highest density of muscle spindles and mechanoreceptors in the body. When damaged, conflicting signals from eyes, inner ears (vestibular), and neck proprioceptors create a "sensory mismatch" — manifesting as dizziness and disorientation.</p>
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Category</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Cerebrogenic</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Cervicogenic</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2">Neurological</td><td className="py-2 px-2">Headache, Dizziness</td><td className="py-2 px-2">Headache, Dizziness</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Sensory</td><td className="py-2 px-2">Blurred Vision, Light Sensitivity</td><td className="py-2 px-2">Blurred Vision, Eye Strain</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Cognitive</td><td className="py-2 px-2">Difficulty Concentrating</td><td className="py-2 px-2">"Spaced out" feeling</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Physical</td><td className="py-2 px-2">Nausea, Fatigue</td><td className="py-2 px-2">Nausea, Fatigue</td></tr>
                <tr><td className="py-2 px-2">Stability</td><td className="py-2 px-2">Balance Problems</td><td className="py-2 px-2">Unsteadiness</td></tr>
              </tbody>
            </table>
          </div>
          <p>Of the SCAT's 22 symptoms, <span className="font-medium text-slate-200">19 fail to differentiate</span> between concussion and cervical/vestibular injury. Many "Post-Concussion Syndrome" patients may actually have unresolved cervical dysfunction.</p>
        </div>
      ),
    },
    {
      key: "joint-muscle",
      title: "Joint-Related vs. Muscle-Related Dysfunction",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p className="font-medium text-slate-200">Joint-Related: Facet & Ligamentous Irritation</p>
          <p><span className="font-medium text-slate-200">Facet Joint Syndrome:</span> Impact inflames joint capsules, causing severe diffuse pain and a "locking" sensation exacerbated by movement.</p>
          <p><span className="font-medium text-slate-200">Capsular Ligament Laxity:</span> Stretched ligaments create instability that can irritate nearby nerves and vertebral arteries, causing vertigo and tinnitus.</p>
          <p><span className="font-medium text-slate-200">Upper Cervical Instability (C1–C3):</span> These joints have the most direct influence on balance and vision centers.</p>
          <p className="font-medium text-slate-200">Muscle-Related: Myofascial Guarding</p>
          <p>Myofascial issues are found in approximately <span className="font-medium text-slate-200">98%</span> of patients with neck pain post-concussion.</p>
          <p><span className="font-medium text-slate-200">Trigger Points:</span> Suboccipital muscles develop trigger points that refer pain behind the eyes and across the forehead — mimicking concussion.</p>
          <p><span className="font-medium text-slate-200">Spasm & Ischemia:</span> Protective spasms reduce blood flow, irritating nerves and creating a pain-tension cycle.</p>
          <p><span className="font-medium text-slate-200">Postural Compensation:</span> "Forward head posture" to mitigate pain further strains posterior neck muscles.</p>
        </div>
      ),
    },
    {
      key: "neck-pain-data",
      title: "Neck Pain Prevalence & Recovery Impact",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Days Post-Injury</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Neck Pain Frequency</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Rank Among Symptoms</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2">0–3 Days</td><td className="py-2 px-2">68.4%</td><td className="py-2 px-2">5th Most Common</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">8 Days</td><td className="py-2 px-2">50.6%</td><td className="py-2 px-2">4th Most Common</td></tr>
                <tr><td className="py-2 px-2">45 Days</td><td className="py-2 px-2">41.9%</td><td className="py-2 px-2">3rd Most Common</td></tr>
              </tbody>
            </table>
          </div>
          <p>Athletes with new/worsened neck pain post-concussion experienced symptoms for an average of <span className="font-medium text-slate-200">11.1 days vs. 8.8 days</span> for those without neck pain, and were significantly less likely to achieve resolution within 7 days.</p>
        </div>
      ),
    },
    {
      key: "rehab",
      title: "Rehabilitation: Manual Therapy vs. Self-Stretching",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Outcome</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Manual Therapy</th>
                  <th className="text-left py-2 px-2 font-medium text-slate-200">Self-Stretching</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted"><td className="py-2 px-2">Pain Intensity</td><td className="py-2 px-2">Significantly lower at 4 weeks</td><td className="py-2 px-2">Improved, but less</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Disability</td><td className="py-2 px-2">Significantly greater reduction</td><td className="py-2 px-2">Moderate reduction</td></tr>
                <tr className="border-b border-muted"><td className="py-2 px-2">Range of Motion</td><td className="py-2 px-2">Superior increase in extension</td><td className="py-2 px-2">Improved mobility</td></tr>
                <tr><td className="py-2 px-2">Function</td><td className="py-2 px-2">66% pain decrease; 60% gain</td><td className="py-2 px-2">37–58% improvement</td></tr>
              </tbody>
            </table>
          </div>
          <p className="font-medium text-slate-200">Key Interventions:</p>
          <p><span className="font-medium text-slate-200">Post-Isometric Relaxation (PIR):</span> Light isometric contraction followed by relaxation — superior to self-stretching for pain and disability.</p>
          <p><span className="font-medium text-slate-200">Joint Mobilization:</span> Skilled force to specific spinal segments to restore normal "glide." Upper cervical (C1–C2) mobilization is particularly effective for dizziness and headaches.</p>
          <p><span className="font-medium text-slate-200">Neuromotor Retraining:</span> Balance training with fixed gaze and cervical joint-position error testing to "re-train" the neck's sensors.</p>
          <p><span className="font-medium text-slate-200">Integrative Care:</span> Combining manual therapy with vestibular and vision exercises decreases time for medical clearance in RCTs.</p>
        </div>
      ),
    },
    {
      key: "energy-conservation",
      title: "Energy Conservation & Active Recovery",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>Modern guidelines recommend 24–48 hours of rest followed by "relative rest" and active rehabilitation — not weeks of "cocooning."</p>
          <p className="font-medium text-slate-200">The Four P's of Energy Conservation:</p>
          <div className="space-y-1.5">
            {[
              { p: "Plan", desc: "Schedule demanding tasks for when energy levels are highest." },
              { p: "Prioritize", desc: "Focus on the most important tasks and delegate others." },
              { p: "Pace", desc: "Break tasks into smaller steps and take frequent breaks." },
              { p: "Position", desc: "Use ergonomically sound postures; avoid bending the head below the chest." },
            ].map((item) => (
              <div key={item.p} className="flex items-start gap-2 p-2 rounded-md bg-muted/50" data-testid={`item-l13-deep-four-p-${item.p.toLowerCase()}`}>
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-bold text-green-600">{item.p[0]}</span>
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-200">{item.p}</div>
                  <div className="text-[11px]">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      key: "conclusion",
      title: "Conclusions & Clinical Recommendations",
      content: (
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>The neck is not merely a bystander — it is a primary participant significantly more vulnerable than the brain. With an injury threshold of 4.5g vs. 70g, the cervical spine is the "weakest link."</p>
          <p>Because of high symptom overlap, clinical evaluations must include rigorous cervical spine examination. Headaches, dizziness, and brain fog should be assessed for a cervicogenic origin — these are highly treatable through manual therapy but will not resolve with cognitive rest alone.</p>
          <p className="font-medium text-slate-200">The best outcomes are achieved through professional, hands-on intervention — specific mobilizations, muscle energy techniques, and neuromotor retraining. Integrating cervical rehabilitation into concussion care is a physiological necessity for complete recovery.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-3">
      <Button variant="ghost" size="sm" onClick={onBack} className="mb-1" data-testid="button-back-simple-13">
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Overview
      </Button>

      <Card className="p-4 space-y-2">
        <h2 className="text-lg font-bold" data-testid="text-l13-deep-dive-title">Clinical Deep Dive</h2>
        <p className="text-xs text-white/60 leading-relaxed">
          The Cervical-Cerebral Interface: Biomechanical Thresholds, Pathophysiological Convergence, and Multimodal Rehabilitation.
        </p>
      </Card>

      {sections.map((section) => (
        <Card key={section.key} className="overflow-hidden" data-testid={`section-l13-${section.key}`}>
          <button
            className="w-full flex items-center justify-between gap-2 px-4 py-3 text-left"
            onClick={() => toggle(section.key)}
            data-testid={`button-toggle-l13-${section.key}`}
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

      <Card className="p-4 space-y-2" data-testid="card-l13-works-cited">
        <div className="text-xs font-medium">Works Cited</div>
        <div className="text-[9px] text-white/60/60 leading-relaxed space-y-0.5">
          <p>How Hard is Too Hard? Forces Behind Concussive Impacts — Complete Concussions</p>
          <p>Frequency of Neck Pain in mTBI — PMC</p>
          <p>Cervical Injury Assessments for Concussion — PMC</p>
          <p>The Role of the Cervical Spine in Post-Concussion Syndrome — Concussion Alliance</p>
          <p>PIR vs Self-Stretching for Non-Specific Neck Pain — MDPI</p>
          <p>Prevalence and Influence of Neck Pain After Sport Concussion — CARE Consortium</p>
        </div>
      </Card>
    </div>
  );
}

export default function Lesson13({ view, onViewChange }: { view: LessonView; onViewChange: (v: LessonView) => void }) {
  if (view === "deep") {
    return <DeepDiveView onBack={() => onViewChange("simple")} />;
  }
  return <SimpleView onShowDeepDive={() => onViewChange("deep")} />;
}
