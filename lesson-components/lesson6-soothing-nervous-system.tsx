import { Card } from "@/components/ui/card";
import type { LessonView } from "./lesson1-energy-crisis";
import { Pill, Warning as AlertTriangle, Pulse as Activity, Brain, Footprints, Wind, TreeEvergreen as TreePine, Drop as Droplets, Microphone as Mic} from "@phosphor-icons/react";

export default function Lesson6({ view: _view, onViewChange: _onViewChange }: { view: LessonView; onViewChange: (v: LessonView) => void }) {
  return (
    <div className="space-y-4">
      <Card className="p-4 space-y-3">
        <h2 className="text-lg font-bold">Soothing the Nervous System</h2>
        <p className="text-sm text-white/60 leading-relaxed">
          Balancing the Effects of Stress and Anxiety, and Increasing Stress Tolerance
        </p>
        <p className="text-sm text-white/60 leading-relaxed">
          We can pick up unnecessary amounts of stress and anxiety from excessive sympathetic nervous system activity. This can be caused by Autonomic Dysfunction (Dysautonomia) which can stem from a concussion, sparring, or a hectic high-stress lifestyle.
        </p>
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-red-500" />
          <h3 className="text-sm font-bold">Sympathetic Nervous System</h3>
        </div>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p>Your body has two modes:</p>
          <div className="space-y-1.5">
            <div className="p-2.5 rounded-md bg-red-500/5 border border-red-500/10">
              <span className="text-xs font-medium text-slate-200">Sympathetic:</span>
              <span className="text-xs text-white/60"> "Fight or Flight" — active, alert, stressed</span>
            </div>
            <div className="p-2.5 rounded-md bg-green-500/5 border border-green-500/10">
              <span className="text-xs font-medium text-slate-200">Parasympathetic:</span>
              <span className="text-xs text-white/60"> "Rest and Digest" — calm, repairing, anti-inflammatory</span>
            </div>
          </div>
          <p>Excess sympathetic activity suppresses the parasympathetic activity — the system responsible for rest, repair, and anti-inflammatory processes.</p>
        </div>
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-emerald-500/100/20 flex items-center justify-center">
            <span className="text-[8px] font-bold text-emerald-400">GI</span>
          </div>
          <h3 className="text-sm font-bold">Digestive Issues from Stress?</h3>
        </div>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p>The sympathetic nervous system directs resources (like blood flow) away from what's not essential for being active and alert.</p>
          <p>When you're in fight or flight mode, your body isn't digesting well because it's not an essential function in that state. From an evolutionary perspective, your ancestors were in fight or flight mode when hunting, and in rest and digest mode after a feast.</p>
          <p className="font-medium text-slate-200">So excessive stress and anxiety from excessive SNS activity can cause digestive issues too.</p>
        </div>
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold">The Vagus Nerve</h3>
        </div>
        <div className="space-y-2 text-sm text-white/60 leading-relaxed">
          <p>The main nerve of the parasympathetic nervous system is called the <span className="font-medium text-slate-200">vagus nerve</span>. It connects your brain to your internal organs. It makes up about 75% of the parasympathetic system's fibers.</p>
          <p>The function of your vagus nerve is described as <span className="font-medium text-slate-200">"vagal tone"</span>:</p>
          <div className="space-y-1.5">
            <div className="p-2 rounded-md bg-green-500/5 border border-green-500/10 text-xs">
              <span className="font-medium text-slate-200">High vagal tone</span> = well-functioning vagus nerve
            </div>
            <div className="p-2 rounded-md bg-red-500/5 border border-red-500/10 text-xs">
              <span className="font-medium text-slate-200">Low vagal tone</span> = poorly-functioning vagus nerve
            </div>
          </div>
        </div>
        <div className="p-3 rounded-md bg-primary/5 border border-primary/20">
          <p className="text-xs font-medium text-slate-200 mb-1.5">Higher vagal tone can:</p>
          <div className="grid grid-cols-2 gap-1 text-[11px] text-white/60">
            <span>Lower anxiety</span>
            <span>Lower blood pressure</span>
            <span>Improve stress resilience</span>
            <span>Improve digestion & mood</span>
            <span>Improve blood sugar regulation</span>
            <span>Reduce cardiovascular risk</span>
          </div>
        </div>
      </Card>

      <Card className="p-4 space-y-2">
        <h3 className="text-sm font-bold mb-3">How to Raise Your Vagal Tone</h3>

        <div className="space-y-3">
          <div className="p-3 rounded-md bg-muted/50 space-y-2">
            <div className="flex items-center gap-2">
              <Wind className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="text-xs font-medium text-slate-200">Deep, Slow Breathing & Meditation</span>
            </div>
            <div className="text-[11px] text-white/60 space-y-1">
              <p>5 minutes of silent meditation with deep breathing. Focus on expanding and breathing deep into your belly, keeping your upper chest very still.</p>
              <div className="p-2 rounded bg-white/5 border space-y-1">
                <p className="font-medium text-slate-200 text-[10px]">Option A:</p>
                <p className="font-mono">3s inhale → 1s hold → 3s exhale</p>
                <p className="font-medium text-slate-200 text-[10px] mt-1">Option B:</p>
                <p className="font-mono">3s deep inhale → 15s slow exhale</p>
              </div>
              <p className="italic">Incorporate throughout the day: after waking up, before a meeting, to wind down for bed.</p>
            </div>
          </div>

          <div className="p-3 rounded-md bg-muted/50 space-y-2">
            <div className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="text-xs font-medium text-slate-200">Cold Water Exposure</span>
            </div>
            <div className="text-[11px] text-white/60">
              <p className="mb-1">Decreases sympathetic, increases parasympathetic. Work your way up:</p>
              <div className="space-y-1 pl-2">
                <p>a) Start with splashing cold water on your face</p>
                <p>b) End your shower with 10 sec of cold water</p>
                <p>c) Hot-cold showers — alternate 1 min hot, 10–20 sec cold. Do 3–4 cycles, end in cold</p>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-md bg-muted/50 space-y-2">
            <div className="flex items-center gap-2">
              <Footprints className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span className="text-xs font-medium text-slate-200">Long Steady Walks</span>
            </div>
            <p className="text-[11px] text-white/60">
              Calm the nervous system. Getting into nature helps. Can also practice mindful walking where you pay close attention to every step — how you place and lift your foot on each step.
            </p>
          </div>

          <div className="p-3 rounded-md bg-muted/50 space-y-2">
            <div className="flex items-center gap-2">
              <TreePine className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span className="text-xs font-medium text-slate-200">Earthing / Grounding</span>
            </div>
            <p className="text-[11px] text-white/60">
              Walking on grass, sand, or dirt with bare feet daily for 10 minutes.
            </p>
          </div>

          <div className="p-3 rounded-md bg-muted/50 space-y-2">
            <div className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="text-xs font-medium text-slate-200">Gargling</span>
            </div>
            <p className="text-[11px] text-white/60">
              Powerful vagus stimulator. Gargle water or salt water for 5 minutes in the morning and/or before bed. Needs to be a deeper gargle for optimal stimulation.
            </p>
          </div>

          <div className="p-3 rounded-md bg-muted/50 space-y-2">
            <div className="flex items-center gap-2">
              <Mic className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span className="text-xs font-medium text-slate-200">Using Your Voice</span>
            </div>
            <p className="text-[11px] text-white/60">
              Laugh daily — it stimulates the diaphragm and the vagus nerve. Same for singing and chanting (like when the yogis say "ooooommm...").
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Pill className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold">Supplements to Wind Down</h3>
        </div>
        <div className="space-y-3">
          <div className="p-3 rounded-md bg-muted/50 space-y-1.5">
            <div className="text-xs font-medium text-slate-200">Magnesium</div>
            <div className="text-[11px] text-white/60 space-y-0.5">
              <p>Essential mineral that supports enzyme function for vital chemical reactions.</p>
              <p>Supports proper muscle and nerve function. Aids digestion.</p>
              <p>Acts as a natural relaxant, helping to alleviate stress and anxiety.</p>
              <p className="font-medium text-slate-200">Can improve sleep quality when taken 1–2 hours before bed.</p>
            </div>
          </div>

          <div className="p-3 rounded-md bg-muted/50 space-y-1.5">
            <div className="text-xs font-medium text-slate-200">L-Theanine</div>
            <div className="text-[11px] text-white/60 space-y-0.5">
              <p>Naturally occurring amino acid found in green tea.</p>
              <p>Structurally similar to neurotransmitters glutamate and GABA, which regulate brain function.</p>
              <p>May promote relaxation and reduce stress and anxiety.</p>
              <p className="font-medium text-slate-200">Can enhance focus, attention, and support overall sleep quality.</p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-3 space-y-1 border-amber-500/20 bg-amber-500/5">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
          <span className="text-[10px] font-medium text-amber-600 dark:text-amber-400">Disclaimer</span>
        </div>
        <p className="text-[10px] text-white/60 leading-relaxed">
          This guide is for educational purposes only and is not intended as a substitute for professional medical advice. Please consult with a healthcare professional before starting any new supplement regimen or practice, especially if you have any underlying health conditions.
        </p>
      </Card>
    </div>
  );
}
