import { Card } from "@/components/ui/card";
import type { LessonView } from "./lesson1-energy-crisis";
import { Clock, Heart, BookOpen, Moon, Prohibit as Ban, Thermometer, Sun, Lamp, EyeSlash as EyeOff} from "@phosphor-icons/react";

export default function Lesson12({ view: _view, onViewChange: _onViewChange }: { view: LessonView; onViewChange: (v: LessonView) => void }) {
  return (
    <div className="space-y-4">
      <Card className="p-4 space-y-3" data-testid="card-l12-intro">
        <h2 className="text-lg font-bold" data-testid="text-l12-title">Rejuvenating Sleep Blueprint</h2>
        <p className="text-sm text-white/60 leading-relaxed">
          Sleep isn't just about rest. During sleep, tissues repair and heal, memories are consolidated, growth hormones are produced, and the body undergoes detoxification. For fighters, sleep is crucial for recovery from concussions, supporting brain healing and reducing symptoms like headaches and fatigue.
        </p>
      </Card>

      <Card className="p-4 space-y-3" data-testid="card-l12-why">
        <div className="flex items-center gap-2">
          <Heart className="w-4 h-4 text-rose-500" />
          <h3 className="text-sm font-bold">Why Sleep Matters</h3>
        </div>
        <div className="space-y-1.5">
          {[
            { label: "Cognitive Function & Reaction Time", desc: "Good sleep enhances decision-making and reaction time." },
            { label: "Muscle Recovery & Growth", desc: "Most repair processes, including protein synthesis and hormone release, occur during deep sleep." },
            { label: "Mental Health & Stress", desc: "Sleep regulates mood and stress levels — essential for the psychological pressures of combat sports." },
            { label: "Immune System Support", desc: "Quality sleep strengthens immunity, reducing illness risk and allowing consistent training." },
            { label: "Weight Management", desc: "Proper sleep regulates hunger and metabolism hormones, helping maintain weight and energy levels." },
          ].map((item) => (
            <div key={item.label} className="p-2.5 rounded-md bg-muted/50 space-y-0.5" data-testid={`item-l12-why-${item.label.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}>
              <div className="text-xs font-medium text-slate-200">{item.label}</div>
              <div className="text-[11px] text-white/60">{item.desc}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4 space-y-3 border-indigo-500/20 bg-emerald-500/100/5" data-testid="card-l12-facts">
        <div className="flex items-center gap-2">
          <Moon className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold text-emerald-400">Sleep Facts</h3>
        </div>
        <div className="space-y-2">
          <div className="p-2.5 rounded-md bg-white/5 space-y-0.5" data-testid="item-l12-fact-duration">
            <div className="text-xs font-medium text-slate-200">Optimal Sleep Duration</div>
            <div className="text-[11px] text-white/60">Aim for 7–9 hours each night. Performance — both mentally and physically — drops significantly with less than 7 hours.</div>
          </div>
          <div className="p-2.5 rounded-md bg-white/5 space-y-0.5" data-testid="item-l12-fact-risks">
            <div className="text-xs font-medium text-slate-200">Health Risks of Sleep Deprivation</div>
            <div className="text-[11px] text-white/60">Insufficient sleep is connected to increased inflammation, depression, weight gain, heart disease, and even cancer.</div>
          </div>
          <div className="p-2.5 rounded-md bg-white/5 space-y-0.5" data-testid="item-l12-fact-circadian">
            <div className="text-xs font-medium text-slate-200">Circadian Rhythm</div>
            <div className="text-[11px] text-white/60">Your body's natural sleep-wake cycle relies on hormones throughout the day. It functions best with natural light during the day and complete darkness at night.</div>
          </div>
          <div className="p-2.5 rounded-md bg-white/5 space-y-0.5" data-testid="item-l12-fact-naps">
            <div className="text-xs font-medium text-slate-200">Power of Short Naps</div>
            <div className="text-[11px] text-white/60">Brief naps (30 minutes or less) effectively reduce fatigue without disrupting nighttime sleep.</div>
          </div>
        </div>
      </Card>

      <Card className="p-4 space-y-3 border-red-500/30 bg-red-500/5" data-testid="card-l12-disruptors">
        <div className="flex items-center gap-2">
          <Ban className="w-4 h-4 text-red-500" />
          <h3 className="text-sm font-bold text-red-500">1. Avoid Sleep Disruptors</h3>
        </div>
        <div className="space-y-1.5">
          {[
            "Avoid caffeine after noon",
            "Alcohol interferes with deep, restful sleep",
            "Switch devices to airplane mode or power them off",
            "Keep devices outside of bedroom",
            "Reserve your bed for sleep only — your brain needs to see bed as your rest zone",
            "Avoid eating large meals before bed (but don't go hungry — a light, healthy snack is fine)",
            "Minimize blue light exposure in the evening",
            "Remove bright LED/white lights from your bedroom — try dim soothing lights or candles",
            "Use Night Shift on your phone and F.lux (free) on your computer",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 p-2 rounded-md bg-white/5">
              <Ban className="w-3 h-3 text-red-400 mt-0.5 flex-shrink-0" />
              <div className="text-[11px] text-white/60">{item}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4 space-y-3" data-testid="card-l12-consistent">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold">2. Be Consistent (Important!)</h3>
        </div>
        <div className="p-3 rounded-md bg-emerald-500/5 border border-blue-500/10">
          <div className="text-xs text-white/60 leading-relaxed">
            Establish a regular sleep pattern — go to bed and wake at the <span className="font-medium text-slate-200">same time every day</span>. Maintaining a regular sleep/wake cycle supports hormone production essential for recovery and energy.
          </div>
        </div>
      </Card>

      <Card className="p-4 space-y-3" data-testid="card-l12-light-exercise">
        <div className="flex items-center gap-2">
          <Sun className="w-4 h-4 text-amber-500" />
          <h3 className="text-sm font-bold">3. Natural Light & Exercise During the Day</h3>
        </div>
        <div className="space-y-1.5">
          {[
            { text: "Get sunlight right when you wake up to help your circadian rhythm", bold: true },
            { text: "Don't use sunglasses for morning sun exposure", bold: false },
            { text: "Minimum 15 minutes outdoor time between 11am–3pm daily", bold: false },
            { text: "Physical exercise during the day helps with sleep", bold: false },
            { text: "Avoid intense workouts at least 2 hours before bed — too stimulating", bold: false },
          ].map((item, i) => (
            <div key={i} className={`flex items-start gap-2 p-2 rounded-md ${item.bold ? "bg-amber-500/5 border border-amber-500/10" : "bg-muted/50"}`}>
              <Sun className="w-3 h-3 text-amber-500 mt-0.5 flex-shrink-0" />
              <div className={`text-[11px] ${item.bold ? "font-medium text-slate-200" : "text-white/60"}`}>{item.text}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4 space-y-3" data-testid="card-l12-wind-down">
        <div className="flex items-center gap-2">
          <Lamp className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold">4. Wind Down Before Bedtime</h3>
        </div>
        <div className="p-3 rounded-md bg-emerald-500/100/5 border border-orange-500/10 space-y-1">
          <div className="text-xs font-medium text-slate-200">Take minimum 60 minutes to prepare for sleep</div>
          <div className="text-[11px] text-white/60">Dim lights 60 min before bed. Turn off all screens and electronic devices 60 min before bed.</div>
        </div>
      </Card>

      <Card className="p-4 space-y-3" data-testid="card-l12-activities">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold">5. Wind-Down Activities</h3>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            "Light stretching",
            "Peaceful meditation",
            "Sitting with your thoughts",
            "Reading",
            "Writing",
            "Herbal teas",
          ].map((item) => (
            <div key={item} className="p-2 rounded-md bg-muted/50 text-center">
              <div className="text-[11px] text-white/60">{item}</div>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-white/60 italic">
          Soothing herbal teas: chamomile, lavender, lemon balm, passionflower
        </p>
      </Card>

      <Card className="p-4 space-y-3" data-testid="card-l12-darkness">
        <div className="flex items-center gap-2">
          <EyeOff className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold">6. Sleep in Total Darkness</h3>
        </div>
        <div className="space-y-2 text-[11px] text-white/60">
          <p>Your body's internal clock (circadian rhythm) is very sensitive to light. Melatonin is best secreted when you sleep in darkness — it's responsible for inducing sleep and reducing inflammation.</p>
          <div className="space-y-1.5">
            {[
              "Turn off all lights and screens in room — dim or cover digital clocks",
              "Get blackout curtains or an eye mask",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 p-2 rounded-md bg-muted/50">
                <EyeOff className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>{item}</div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-md bg-red-500/5 border border-red-500/10">
            <p className="text-[10px] text-red-500/80 italic">
              "Artificial light at night is significantly correlated for all forms of cancer including lung, breast, colorectal, and prostate cancer. Immediate measures should be taken to reduce artificial light at night." — Al-Naggar & Anil, 2016
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-4 space-y-3" data-testid="card-l12-cool">
        <div className="flex items-center gap-2">
          <Thermometer className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold">7. Sleep in Quiet and Cool</h3>
        </div>
        <div className="space-y-1.5 text-[11px] text-white/60">
          {[
            "Avoid sleeping with disruptive pets or partners",
            "Invest in earplugs if your bedroom isn't quiet",
            "Best sleep happens when your core body temperature drops slightly",
            "Exception: warm feet — slippers before bed or socks can help (especially in cold seasons)",
            "If bathing before bed — use warm water. Evaporation from your skin helps decrease core temperature",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 p-2 rounded-md bg-muted/50">
              <Thermometer className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
              <div>{item}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
