import { frameworkTable, promoQuestions } from '../data/content';
import { LayoutGrid, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Framework() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h2 className={`text-3xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Interview Response Framework
        </h2>
        <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          The goal is <strong className={isDark ? 'text-white' : 'text-gray-900'}>not to memorize dozens of answers</strong>. Use the core responses dynamically and adapt them to the question being asked.
        </p>
      </div>

      {/* Main Framework Table */}
      <div className="mb-10">
        <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          <LayoutGrid className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
          Question → Response Router
        </h3>
        <div className={`border rounded-xl overflow-hidden ${
          isDark ? 'bg-[#202020] border-[#2f2f2f]' : 'bg-white border-gray-200'
        }`}>
          <div className={`grid grid-cols-1 ${isDark ? 'divide-[#2f2f2f]' : 'divide-gray-100'}`}>
            {frameworkTable.map((entry, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-2 md:gap-4 px-5 py-3.5 transition-colors ${
                  isDark ? 'hover:bg-[#2f2f2f]/60' : 'hover:bg-gray-50'
                }`}
              >
                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {entry.question}
                </span>
                <ArrowRight className={`w-4 h-4 hidden md:block ${isDark ? 'text-gray-600' : 'text-gray-300'}`} />
                <span className={`text-sm font-medium md:text-right ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {entry.response}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Promotion Questions Table */}
      <div className="mb-10">
        <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          <LayoutGrid className={`w-5 h-5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
          SEO + PPC + Promotions Coverage
        </h3>
        <div className={`border rounded-xl overflow-hidden ${
          isDark ? 'bg-[#202020] border-[#2f2f2f]' : 'bg-white border-gray-200'
        }`}>
          <div className={`grid grid-cols-1 ${isDark ? 'divide-[#2f2f2f]' : 'divide-gray-100'}`}>
            {promoQuestions.map((entry, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-2 md:gap-4 px-5 py-3.5 transition-colors ${
                  isDark ? 'hover:bg-[#2f2f2f]/60' : 'hover:bg-gray-50'
                }`}
              >
                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {entry.question}
                </span>
                <ArrowRight className={`w-4 h-4 hidden md:block ${isDark ? 'text-gray-600' : 'text-gray-300'}`} />
                <span className={`text-sm font-medium md:text-right ${
                  isDark ? 'text-emerald-400' : 'text-emerald-600'
                }`}>
                  {entry.response}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Architecture */}
      <div className={`border rounded-xl p-6 ${
        isDark
          ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/20'
          : 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200'
      }`}>
        <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Architecture
        </h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className={`px-2.5 py-1 rounded-md text-xs font-medium border ${
              isDark
                ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                : 'bg-blue-100 text-blue-700 border-blue-200'
            }`}>
              Core KBs
            </span>
            <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Career Story + Day-to-Day Operations + Evidence
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className={`px-2.5 py-1 rounded-md text-xs font-medium border ${
              isDark
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                : 'bg-emerald-100 text-emerald-700 border-emerald-200'
            }`}>
              Bridge
            </span>
            <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              SEO + PPC + Promotions
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className={`px-2.5 py-1 rounded-md text-xs font-medium border ${
              isDark
                ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                : 'bg-amber-100 text-amber-700 border-amber-200'
            }`}>
              Router
            </span>
            <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Identify competency → select relevant KB → compose natural answer
            </span>
          </div>
        </div>
        <div className={`mt-5 pt-4 border-t ${isDark ? 'border-[#3a3a3a]' : 'border-gray-200'}`}>
          <p className={`text-sm italic ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            The objective is <strong className={isDark ? 'text-white' : 'text-gray-900'}>maximum interview coverage with minimum memorization</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
