import { Brain, Target, Compass, Lightbulb } from 'lucide-react';

export default function Principles() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">Core Operating Principles</h2>
        <p className="text-slate-400 leading-relaxed">
          The foundational principles that guide both your interview responses and your day-to-day operations.
        </p>
      </div>

      {/* Principles Grid */}
      <div className="grid gap-6 mb-10">
        {/* Core Operating Principle */}
        <div className="bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-500/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-blue-500/20 rounded-lg">
              <Compass className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">Core Operating Principle</h3>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
            <p className="text-blue-100 font-medium leading-relaxed">
              Check priorities → monitor operational health → investigate issues → resolve → communicate → document → prevent recurrence.
            </p>
          </div>
        </div>

        {/* Dynamic Interview Principle */}
        <div className="bg-gradient-to-br from-emerald-600/10 to-emerald-800/10 border border-emerald-500/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-emerald-500/20 rounded-lg">
              <Brain className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">Dynamic Interview Principle</h3>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
            <p className="text-emerald-100 font-medium leading-relaxed">
              Don't memorize an answer for every question. Identify what competency the interviewer is testing, then pull the most relevant experience from your evidence.
            </p>
          </div>
        </div>

        {/* PPC Principle */}
        <div className="bg-gradient-to-br from-amber-600/10 to-amber-800/10 border border-amber-500/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-amber-500/20 rounded-lg">
              <Lightbulb className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">Important PPC Principle</h3>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
            <p className="text-amber-100 font-medium leading-relaxed mb-2">
              PPC does not automatically cause better organic ranking.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Instead, PPC can provide <strong className="text-white">search-term, click, conversion, and product-performance data</strong> that can inform listing and SEO decisions. SEO, PPC, promotions, inventory, pricing, and conversion should therefore be viewed as interconnected parts of commercial optimization.
            </p>
          </div>
        </div>
      </div>

      {/* Practice Tips */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 bg-purple-500/20 rounded-lg">
            <Target className="w-5 h-5 text-purple-400" />
          </div>
          <h3 className="text-lg font-semibold text-white">Practice Tips</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">1</span>
            <p className="text-slate-300 text-sm leading-relaxed">
              Use the <strong className="text-white">timer</strong> in each section to practice staying within the target duration. Green = on track, yellow = approaching limit, red = over time.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">2</span>
            <p className="text-slate-300 text-sm leading-relaxed">
              Use the <strong className="text-white">Framework</strong> section to understand which core response to pull for any given question. Don't memorize — route.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold">3</span>
            <p className="text-slate-300 text-sm leading-relaxed">
              Focus on <strong className="text-white">bold text</strong> in each answer — these are your key talking points that interviewers listen for.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold">4</span>
            <p className="text-slate-300 text-sm leading-relaxed">
              Practice the <strong className="text-white">STAR format</strong> (Situation → Task → Action → Result) for behavioral questions. The APN case is your go-to evidence.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs font-bold">5</span>
            <p className="text-slate-300 text-sm leading-relaxed">
              Remember: <strong className="text-white">5 core responses</strong> can answer <strong className="text-white">20+ interview questions</strong>. The router maps questions to the right response.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
