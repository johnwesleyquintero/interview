import { Brain, Target, Compass, Lightbulb } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Principles() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h2 className={`text-3xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Core Operating Principles
        </h2>
        <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          The foundational principles that guide both your interview responses and your day-to-day operations.
        </p>
      </div>

      {/* Principles Grid */}
      <div className="grid gap-6 mb-10">
        {/* Core Operating Principle */}
        <div className={`border rounded-xl p-6 ${
          isDark
            ? 'bg-gradient-to-br from-blue-900/20 to-blue-950/20 border-blue-500/20'
            : 'bg-gradient-to-br from-blue-50 to-blue-50/50 border-blue-200'
        }`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2.5 rounded-lg ${
              isDark ? 'bg-blue-500/20' : 'bg-blue-100'
            }`}>
              <Compass className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            </div>
            <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Core Operating Principle
            </h3>
          </div>
          <div className={`rounded-lg p-4 border ${
            isDark
              ? 'bg-[#1a1a1a]/50 border-[#3a3a3a]'
              : 'bg-white/70 border-gray-200'
          }`}>
            <p className={`font-medium leading-relaxed ${
              isDark ? 'text-blue-100' : 'text-blue-900'
            }`}>
              Check priorities → monitor operational health → investigate issues → resolve → communicate → document → prevent recurrence.
            </p>
          </div>
        </div>

        {/* Dynamic Interview Principle */}
        <div className={`border rounded-xl p-6 ${
          isDark
            ? 'bg-gradient-to-br from-emerald-900/20 to-emerald-950/20 border-emerald-500/20'
            : 'bg-gradient-to-br from-emerald-50 to-emerald-50/50 border-emerald-200'
        }`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2.5 rounded-lg ${
              isDark ? 'bg-emerald-500/20' : 'bg-emerald-100'
            }`}>
              <Brain className={`w-5 h-5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
            </div>
            <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Dynamic Interview Principle
            </h3>
          </div>
          <div className={`rounded-lg p-4 border ${
            isDark
              ? 'bg-[#1a1a1a]/50 border-[#3a3a3a]'
              : 'bg-white/70 border-gray-200'
          }`}>
            <p className={`font-medium leading-relaxed ${
              isDark ? 'text-emerald-100' : 'text-emerald-900'
            }`}>
              Don't memorize an answer for every question. Identify what competency the interviewer is testing, then pull the most relevant experience from your evidence.
            </p>
          </div>
        </div>

        {/* PPC Principle */}
        <div className={`border rounded-xl p-6 ${
          isDark
            ? 'bg-gradient-to-br from-amber-900/20 to-amber-950/20 border-amber-500/20'
            : 'bg-gradient-to-br from-amber-50 to-amber-50/50 border-amber-200'
        }`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2.5 rounded-lg ${
              isDark ? 'bg-amber-500/20' : 'bg-amber-100'
            }`}>
              <Lightbulb className={`w-5 h-5 ${isDark ? 'text-amber-400' : 'text-amber-600'}`} />
            </div>
            <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Important PPC Principle
            </h3>
          </div>
          <div className={`rounded-lg p-4 border ${
            isDark
              ? 'bg-[#1a1a1a]/50 border-[#3a3a3a]'
              : 'bg-white/70 border-gray-200'
          }`}>
            <p className={`font-medium leading-relaxed mb-2 ${
              isDark ? 'text-amber-100' : 'text-amber-900'
            }`}>
              PPC does not automatically cause better organic ranking.
            </p>
            <p className={`text-sm leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Instead, PPC can provide <strong className={isDark ? 'text-white' : 'text-gray-900'}>search-term, click, conversion, and product-performance data</strong> that can inform listing and SEO decisions. SEO, PPC, promotions, inventory, pricing, and conversion should therefore be viewed as interconnected parts of commercial optimization.
            </p>
          </div>
        </div>
      </div>

      {/* Practice Tips */}
      <div className={`border rounded-xl p-6 ${
        isDark
          ? 'bg-[#202020] border-[#2f2f2f]'
          : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center gap-3 mb-5">
          <div className={`p-2.5 rounded-lg ${
            isDark ? 'bg-purple-500/20' : 'bg-purple-100'
          }`}>
            <Target className={`w-5 h-5 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
          </div>
          <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Practice Tips
          </h3>
        </div>
        <div className="space-y-4">
          <TipItem
            number={1}
            color="blue"
            isDark={isDark}
            text={<>Use the <strong className={isDark ? 'text-white' : 'text-gray-900'}>timer</strong> in each section to practice staying within the target duration. Green = on track, yellow = approaching limit, red = over time.</>}
          />
          <TipItem
            number={2}
            color="emerald"
            isDark={isDark}
            text={<>Use the <strong className={isDark ? 'text-white' : 'text-gray-900'}>Framework</strong> section to understand which core response to pull for any given question. Don't memorize — route.</>}
          />
          <TipItem
            number={3}
            color="amber"
            isDark={isDark}
            text={<>Focus on <strong className={isDark ? 'text-white' : 'text-gray-900'}>bold text</strong> in each answer — these are your key talking points that interviewers listen for.</>}
          />
          <TipItem
            number={4}
            color="purple"
            isDark={isDark}
            text={<>Practice the <strong className={isDark ? 'text-white' : 'text-gray-900'}>STAR format</strong> (Situation → Task → Action → Result) for behavioral questions. The APN case is your go-to evidence.</>}
          />
          <TipItem
            number={5}
            color="rose"
            isDark={isDark}
            text={<>Remember: <strong className={isDark ? 'text-white' : 'text-gray-900'}>7 core responses</strong> can answer <strong className={isDark ? 'text-white' : 'text-gray-900'}>55+ interview questions</strong>. The router maps questions to the right response.</>}
          />
        </div>
      </div>
    </div>
  );
}

interface TipItemProps {
  number: number;
  color: string;
  isDark: boolean;
  text: React.ReactNode;
}

function TipItem({ number, color, isDark, text }: TipItemProps) {
  const colorClasses: Record<string, { bg: string; text: string }> = {
    blue: { bg: isDark ? 'bg-blue-500/20' : 'bg-blue-100', text: isDark ? 'text-blue-400' : 'text-blue-600' },
    emerald: { bg: isDark ? 'bg-emerald-500/20' : 'bg-emerald-100', text: isDark ? 'text-emerald-400' : 'text-emerald-600' },
    amber: { bg: isDark ? 'bg-amber-500/20' : 'bg-amber-100', text: isDark ? 'text-amber-400' : 'text-amber-600' },
    purple: { bg: isDark ? 'bg-purple-500/20' : 'bg-purple-100', text: isDark ? 'text-purple-400' : 'text-purple-600' },
    rose: { bg: isDark ? 'bg-rose-500/20' : 'bg-rose-100', text: isDark ? 'text-rose-400' : 'text-rose-600' },
  };

  const classes = colorClasses[color] || colorClasses.blue;

  return (
    <div className="flex items-start gap-3">
      <span className={`flex-shrink-0 w-6 h-6 rounded-full ${classes.bg} ${classes.text} flex items-center justify-center text-xs font-bold`}>
        {number}
      </span>
      <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        {text}
      </p>
    </div>
  );
}
