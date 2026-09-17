import { InterviewSection } from '../data/content';
import Timer from './Timer';
import { MessageCircle, Clock, ArrowRight, Wrench, BarChart3 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SectionContentProps {
  section: InterviewSection;
}

export default function SectionContent({ section }: SectionContentProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className={`flex items-center gap-2 text-sm font-medium mb-2 ${
          isDark ? 'text-blue-400' : 'text-blue-600'
        }`}>
          <Clock className="w-4 h-4" />
          <span>Target: {section.target}</span>
        </div>
        <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {section.title}
        </h2>
        <div className={`flex items-start gap-3 border rounded-xl p-4 ${
          isDark
            ? 'bg-[#2f2f2f]/50 border-[#3a3a3a]'
            : 'bg-gray-50 border-gray-200'
        }`}>
          <MessageCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
            isDark ? 'text-emerald-400' : 'text-emerald-600'
          }`} />
          <p className={`text-lg italic ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
            {section.question}
          </p>
        </div>
      </div>

      {/* Also Answers — NEW */}
      {section.alsoAnswers && section.alsoAnswers.length > 0 && (
        <div className={`mb-6 border rounded-xl p-4 ${
          isDark
            ? 'bg-purple-900/15 border-purple-500/25'
            : 'bg-purple-50 border-purple-200'
        }`}>
          <div className="flex items-center gap-2 mb-3">
            <ArrowRight className={`w-4 h-4 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
            <h4 className={`text-sm font-semibold uppercase tracking-wide ${
              isDark ? 'text-purple-400' : 'text-purple-700'
            }`}>
              Also answers these questions
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {section.alsoAnswers.map((q, i) => (
              <span
                key={i}
                className={`text-xs px-2.5 py-1.5 rounded-md border ${
                  isDark
                    ? 'bg-purple-500/10 border-purple-500/20 text-purple-300'
                    : 'bg-white border-purple-200 text-purple-700'
                }`}
              >
                {q}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Tools & Metrics — NEW */}
      {(section.tools || section.metrics) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {section.tools && section.tools.length > 0 && (
            <div className={`border rounded-xl p-4 ${
              isDark ? 'bg-[#2f2f2f]/50 border-[#3a3a3a]' : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                <Wrench className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <h4 className={`text-xs font-semibold uppercase tracking-wide ${
                  isDark ? 'text-emerald-400' : 'text-emerald-700'
                }`}>
                  Tools Mentioned
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {section.tools.map((tool, i) => (
                  <span
                    key={i}
                    className={`text-xs px-2 py-1 rounded-md ${
                      isDark
                        ? 'bg-emerald-500/10 text-emerald-300'
                        : 'bg-emerald-100 text-emerald-700'
                    }`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
          {section.metrics && section.metrics.length > 0 && (
            <div className={`border rounded-xl p-4 ${
              isDark ? 'bg-[#2f2f2f]/50 border-[#3a3a3a]' : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className={`w-4 h-4 ${isDark ? 'text-amber-400' : 'text-amber-600'}`} />
                <h4 className={`text-xs font-semibold uppercase tracking-wide ${
                  isDark ? 'text-amber-400' : 'text-amber-700'
                }`}>
                  Key Metrics
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {section.metrics.map((metric, i) => (
                  <span
                    key={i}
                    className={`text-xs px-2 py-1 rounded-md ${
                      isDark
                        ? 'bg-amber-500/10 text-amber-300'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Timer */}
      <Timer targetTime={section.target} />

      {/* Content */}
      <div className="space-y-5">
        {section.content.map((block, index) => {
          if (block.type === 'text') {
            return (
              <div
                key={index}
                className={`leading-relaxed text-[15px] ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
                dangerouslySetInnerHTML={{ __html: formatMarkdown(block.value as string, isDark) }}
              />
            );
          }
          if (block.type === 'highlight') {
            return (
              <div
                key={index}
                className={`border rounded-xl p-5 leading-relaxed text-[15px] ${
                  isDark
                    ? 'bg-blue-900/20 border-blue-500/30 text-blue-100'
                    : 'bg-blue-50 border-blue-200 text-blue-900'
                }`}
                dangerouslySetInnerHTML={{ __html: formatMarkdown(block.value as string, isDark) }}
              />
            );
          }
          if (block.type === 'quote') {
            return (
              <blockquote
                key={index}
                className={`border-l-4 pl-4 py-2 italic ${
                  isDark
                    ? 'border-emerald-500 text-gray-300'
                    : 'border-emerald-500 text-gray-700'
                }`}
                dangerouslySetInnerHTML={{ __html: formatMarkdown(block.value as string, isDark) }}
              />
            );
          }
          if (block.type === 'list') {
            const items = block.value as string[];
            return (
              <ul key={index} className={`list-disc list-inside space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {items.map((item, i) => (
                  <li key={i} className="text-[15px] leading-relaxed">
                    <span dangerouslySetInnerHTML={{ __html: formatMarkdown(item, isDark) }} />
                  </li>
                ))}
              </ul>
            );
          }
          return null;
        })}
      </div>

      {/* Key Points */}
      {section.keyPoints && section.keyPoints.length > 0 && (
        <div className={`mt-8 border rounded-xl p-5 ${
          isDark
            ? 'bg-amber-900/20 border-amber-500/30'
            : 'bg-amber-50 border-amber-200'
        }`}>
          <h4 className={`font-semibold text-sm uppercase tracking-wide mb-3 ${
            isDark ? 'text-amber-400' : 'text-amber-700'
          }`}>
            Important Principles
          </h4>
          <ul className="space-y-2">
            {section.keyPoints.map((point, i) => (
              <li key={i} className={`text-sm leading-relaxed flex items-start gap-2 ${
                isDark ? 'text-amber-100/80' : 'text-amber-800'
              }`}>
                <span className={isDark ? 'text-amber-400 mt-1' : 'text-amber-600 mt-1'}>•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function formatMarkdown(text: string, isDark: boolean): string {
  const boldClass = isDark ? 'text-white font-semibold' : 'text-gray-900 font-semibold';
  return text
    .replace(/\*\*(.+?)\*\*/g, `<strong class="${boldClass}">$1</strong>`)
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}
