import { frameworkTable, promoQuestions } from '../data/content';
import { LayoutGrid, ArrowRight } from 'lucide-react';

export default function Framework() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">Interview Response Framework</h2>
        <p className="text-slate-400 leading-relaxed">
          The goal is <strong className="text-white">not to memorize dozens of answers</strong>. Use the core responses dynamically and adapt them to the question being asked.
        </p>
      </div>

      {/* Main Framework Table */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <LayoutGrid className="w-5 h-5 text-blue-400" />
          Question → Response Router
        </h3>
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 divide-y divide-slate-700">
            {frameworkTable.map((entry, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-2 md:gap-4 px-5 py-3.5 hover:bg-slate-700/30 transition-colors"
              >
                <span className="text-slate-300 text-sm">{entry.question}</span>
                <ArrowRight className="w-4 h-4 text-slate-600 hidden md:block" />
                <span className="text-blue-400 text-sm font-medium md:text-right">
                  {entry.response}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Promotion Questions Table */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <LayoutGrid className="w-5 h-5 text-emerald-400" />
          SEO + PPC + Promotions Coverage
        </h3>
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 divide-y divide-slate-700">
            {promoQuestions.map((entry, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-2 md:gap-4 px-5 py-3.5 hover:bg-slate-700/30 transition-colors"
              >
                <span className="text-slate-300 text-sm">{entry.question}</span>
                <ArrowRight className="w-4 h-4 text-slate-600 hidden md:block" />
                <span className="text-emerald-400 text-sm font-medium md:text-right">
                  {entry.response}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Architecture */}
      <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Architecture</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="px-2.5 py-1 bg-blue-500/20 text-blue-400 rounded-md text-xs font-medium border border-blue-500/30">
              Core KBs
            </span>
            <span className="text-slate-300 text-sm">
              Career Story + Day-to-Day Operations + Evidence
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-400 rounded-md text-xs font-medium border border-emerald-500/30">
              Bridge
            </span>
            <span className="text-slate-300 text-sm">
              SEO + PPC + Promotions
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="px-2.5 py-1 bg-amber-500/20 text-amber-400 rounded-md text-xs font-medium border border-amber-500/30">
              Router
            </span>
            <span className="text-slate-300 text-sm">
              Identify competency → select relevant KB → compose natural answer
            </span>
          </div>
        </div>
        <div className="mt-5 pt-4 border-t border-slate-700">
          <p className="text-sm text-slate-400 italic">
            The objective is <strong className="text-white">maximum interview coverage with minimum memorization</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
