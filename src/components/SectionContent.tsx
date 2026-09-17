import { InterviewSection } from '../data/content';
import Timer from './Timer';
import { MessageCircle, Clock } from 'lucide-react';

interface SectionContentProps {
  section: InterviewSection;
}

export default function SectionContent({ section }: SectionContentProps) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-2">
          <Clock className="w-4 h-4" />
          <span>Target: {section.target}</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">{section.title}</h2>
        <div className="flex items-start gap-3 bg-slate-800/50 border border-slate-700 rounded-xl p-4">
          <MessageCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
          <p className="text-lg text-slate-200 italic">{section.question}</p>
        </div>
      </div>

      {/* Timer */}
      <Timer targetTime={section.target} />

      {/* Content */}
      <div className="space-y-5">
        {section.content.map((block, index) => {
          if (block.type === 'text') {
            return (
              <div
                key={index}
                className="text-slate-300 leading-relaxed text-[15px]"
                dangerouslySetInnerHTML={{ __html: formatMarkdown(block.value as string) }}
              />
            );
          }
          if (block.type === 'highlight') {
            return (
              <div
                key={index}
                className="bg-blue-600/10 border border-blue-500/30 rounded-xl p-5 text-blue-100 leading-relaxed text-[15px]"
                dangerouslySetInnerHTML={{ __html: formatMarkdown(block.value as string) }}
              />
            );
          }
          if (block.type === 'quote') {
            return (
              <blockquote
                key={index}
                className="border-l-4 border-emerald-500 pl-4 py-2 text-slate-300 italic"
                dangerouslySetInnerHTML={{ __html: formatMarkdown(block.value as string) }}
              />
            );
          }
          if (block.type === 'list') {
            const items = block.value as string[];
            return (
              <ul key={index} className="list-disc list-inside space-y-2 text-slate-300">
                {items.map((item, i) => (
                  <li key={i} className="text-[15px] leading-relaxed">
                    <span dangerouslySetInnerHTML={{ __html: formatMarkdown(item) }} />
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
        <div className="mt-8 bg-amber-500/10 border border-amber-500/30 rounded-xl p-5">
          <h4 className="text-amber-400 font-semibold text-sm uppercase tracking-wide mb-3">
            Important Principles
          </h4>
          <ul className="space-y-2">
            {section.keyPoints.map((point, i) => (
              <li key={i} className="text-amber-100/80 text-sm leading-relaxed flex items-start gap-2">
                <span className="text-amber-400 mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function formatMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}
