import { useTheme } from '../context/ThemeContext';
import { 
  BookOpen, 
  Wrench, 
  BarChart3, 
  MessageSquare, 
  AlertCircle, 
  HelpCircle,
  Lightbulb,
  Target,
  CheckCircle2,
  XCircle
} from 'lucide-react';

export default function AdditionalInsights() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h2 className={`text-3xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Additional Insights
        </h2>
        <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Everything you must know beyond the STAR cases — terminology, tools, metrics, processes, and how to deliver your answers like a pro.
        </p>
      </div>

      {/* Amazon Terminology */}
      <Section 
        icon={<BookOpen className="w-5 h-5" />}
        title="Essential Amazon Terminology"
        color="blue"
        isDark={isDark}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <TermItem term="ASIN" definition="Amazon Standard Identification Number — unique product identifier" isDark={isDark} />
          <TermItem term="SKU" definition="Stock Keeping Unit — your internal product identifier" isDark={isDark} />
          <TermItem term="FBA" definition="Fulfillment by Amazon — Amazon handles storage, packing, shipping" isDark={isDark} />
          <TermItem term="FBM" definition="Fulfillment by Merchant — you handle storage and shipping" isDark={isDark} />
          <TermItem term="Buy Box" definition="The 'Add to Cart' button — critical for sales" isDark={isDark} />
          <TermItem term="ACOS" definition="Advertising Cost of Sales — ad spend ÷ ad revenue × 100" isDark={isDark} />
          <TermItem term="TACOS" definition="Total ACOS — ad spend ÷ total revenue × 100" isDark={isDark} />
          <TermItem term="ROAS" definition="Return on Ad Spend — ad revenue ÷ ad spend" isDark={isDark} />
          <TermItem term="BSR" definition="Best Sellers Rank — product's rank in its category" isDark={isDark} />
          <TermItem term="A9" definition="Amazon's search algorithm — determines product ranking" isDark={isDark} />
          <TermItem term="VOC" definition="Voice of the Customer — dashboard showing customer experience metrics" isDark={isDark} />
          <TermItem term="PPC" definition="Pay-Per-Click — Amazon's advertising model" isDark={isDark} />
          <TermItem term="Sponsored Products" definition="Keyword-targeted ads for individual products" isDark={isDark} />
          <TermItem term="Sponsored Brands" definition="Headline ads featuring your brand logo and multiple products" isDark={isDark} />
          <TermItem term="Sponsored Display" definition="Audience and product-targeted ads on and off Amazon" isDark={isDark} />
          <TermItem term="A+ Content" definition="Enhanced brand content with images and rich text" isDark={isDark} />
          <TermItem term="Brand Registry" definition="Amazon program for brand owners — unlocks A+, Brand Analytics, etc." isDark={isDark} />
          <TermItem term="Variation" definition="Parent-child relationship for product variations (size, color, etc.)" isDark={isDark} />
          <TermItem term="Flat File" definition="Bulk upload template (Excel) for creating/editing listings" isDark={isDark} />
          <TermItem term="Suppressed Listing" definition="Listing hidden from search due to policy violations or missing info" isDark={isDark} />
          <TermItem term="Stranded Inventory" definition="FBA inventory not linked to an active listing" isDark={isDark} />
          <TermItem term="Account Health" definition="Dashboard showing policy violations, late shipment rate, etc." isDark={isDark} />
        </div>
      </Section>

      {/* Tools You Must Know */}
      <Section 
        icon={<Wrench className="w-5 h-5" />}
        title="Tools You Must Know"
        color="emerald"
        isDark={isDark}
      >
        <div className="space-y-4">
          <ToolItem 
            name="Helium 10" 
            tools={['Cerebro — Reverse ASIN lookup', 'Magnet — Keyword research', 'Frankenstein — Remove duplicates', 'Scribbles — Listing optimization tracker', 'Listing Analyzer — Audit tool']}
            isDark={isDark}
          />
          <ToolItem 
            name="Jungle Scout" 
            tools={['Keyword Scout — Keyword research', 'Supplier Database — Find manufacturers', 'Sales Analytics — Track performance']}
            isDark={isDark}
          />
          <ToolItem 
            name="Keepa" 
            tools={['Price history tracking', 'BSR history', 'Sales rank charts', 'Deal tracking']}
            isDark={isDark}
          />
          <ToolItem 
            name="Amazon Brand Analytics" 
            tools={['Top Search Terms', 'Click & Conversion', 'Repeat Purchase Behavior', 'Market Basket Analysis', 'Item Comparison']}
            isDark={isDark}
          />
          <ToolItem 
            name="Google Sheets / Excel" 
            tools={['Replenishment planning', 'PPC performance tracking', 'Inventory forecasting', 'Data analysis with pivot tables', 'VLOOKUP for matching data']}
            isDark={isDark}
          />
          <ToolItem 
            name="Asana / Trello / ClickUp" 
            tools={['Task management', 'Project tracking', 'Team collaboration', 'SOP documentation']}
            isDark={isDark}
          />
        </div>
      </Section>

      {/* Key Metrics & KPIs */}
      <Section 
        icon={<BarChart3 className="w-5 h-5" />}
        title="Key Metrics & KPIs"
        color="amber"
        isDark={isDark}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MetricGroup 
            title="Sales & Conversion"
            metrics={[
              { name: 'Unit Session Percentage', desc: 'Units ordered ÷ sessions × 100 (conversion rate)' },
              { name: 'Session', desc: 'Unique visits to your product page (24hr window)' },
              { name: 'Page Views', desc: 'Total views including repeat visits' },
              { name: 'Average Selling Price', desc: 'Total revenue ÷ units sold' },
            ]}
            isDark={isDark}
          />
          <MetricGroup 
            title="Advertising"
            metrics={[
              { name: 'ACOS', desc: 'Ad spend ÷ ad sales × 100 (target: 15-30%)' },
              { name: 'TACOS', desc: 'Ad spend ÷ total sales × 100 (target: 8-15%)' },
              { name: 'ROAS', desc: 'Ad sales ÷ ad spend (target: 3-5x)' },
              { name: 'CTR', desc: 'Click-through rate — clicks ÷ impressions' },
            ]}
            isDark={isDark}
          />
          <MetricGroup 
            title="Inventory"
            metrics={[
              { name: 'IPI Score', desc: 'Inventory Performance Index (target: 400+)' },
              { name: 'Days of Supply', desc: 'Current inventory ÷ daily sales velocity' },
              { name: 'Sell-Through Rate', desc: 'Units sold ÷ units received × 100' },
              { name: 'Stranded Inventory %', desc: 'Stranded units ÷ total FBA units' },
            ]}
            isDark={isDark}
          />
          <MetricGroup 
            title="Account Health"
            metrics={[
              { name: 'Order Defect Rate', desc: 'Must be < 1%' },
              { name: 'Late Shipment Rate', desc: 'Must be < 4% (FBM only)' },
              { name: 'Pre-Fulfillment Cancel Rate', desc: 'Must be < 2.5%' },
              { name: 'Valid Tracking Rate', desc: 'Must be > 95% (FBM only)' },
            ]}
            isDark={isDark}
          />
        </div>
      </Section>

      {/* Common Processes */}
      <Section 
        icon={<MessageSquare className="w-5 h-5" />}
        title="Common Amazon Processes"
        color="purple"
        isDark={isDark}
      >
        <div className="space-y-3">
          <ProcessItem 
            title="Creating a New Listing"
            steps={['Gather product info (title, bullets, description, images)', 'Research keywords (Helium 10, Amazon Search Box)', 'Write optimized title, bullets, backend terms', 'Upload images (main + 6-8 supporting)', 'Create A+ Content if brand registered', 'Set up PPC campaigns for launch']}
            isDark={isDark}
          />
          <ProcessItem 
            title="Handling a Suppressed Listing"
            steps={['Check Seller Central → Manage Inventory for suppression reason', 'Review Voice of the Customer dashboard', 'Identify the issue (missing info, policy violation, etc.)', 'Fix the issue or gather evidence to appeal', 'Open case with Seller Support if needed', 'Monitor for reinstatement']}
            isDark={isDark}
          />
          <ProcessItem 
            title="Inventory Replenishment"
            steps={['Check current stock levels and sales velocity', 'Calculate days of supply', 'Factor in lead time (manufacturing + shipping)', 'Account for upcoming promotions', 'Create shipment plan in Seller Central', 'Send to warehouse for prep and shipping']}
            isDark={isDark}
          />
          <ProcessItem 
            title="PPC Campaign Setup"
            steps={['Research keywords (Cerebro, Magnet)', 'Create automatic campaign for discovery', 'Create manual campaigns (exact, phrase, broad)', 'Set bids based on keyword relevance and competition', 'Monitor search term reports weekly', 'Optimize bids and pause underperformers']}
            isDark={isDark}
          />
          <ProcessItem 
            title="Handling Negative Reviews"
            steps={['Check if review violates Amazon policy', 'Use "Report abuse" if applicable', 'Contact customer via Buyer-Seller Messaging (if appropriate)', 'Request review removal if product was defective', 'Respond publicly if allowed', 'Improve product/listing to prevent future issues']}
            isDark={isDark}
          />
        </div>
      </Section>

      {/* Interview Delivery Tips */}
      <Section 
        icon={<Lightbulb className="w-5 h-5" />}
        title="How to Deliver Your Answers"
        color="rose"
        isDark={isDark}
      >
        <div className="space-y-4">
          <DeliveryTip 
            title="Structure Your STAR Answers"
            tip="Always follow Situation → Task → Action → Result. Spend 20% on situation, 10% on task, 50% on action, 20% on result."
            isDark={isDark}
          />
          <DeliveryTip 
            title="Use Specific Numbers"
            tip="Don't say 'sales improved' — say 'sales increased 340% in 90 days'. Numbers make you credible."
            isDark={isDark}
          />
          <DeliveryTip 
            title="Name Your Tools"
            tip="Don't say 'I used a keyword tool' — say 'I used Helium 10 Cerebro to reverse-ASIN competitors'. Specificity shows expertise."
            isDark={isDark}
          />
          <DeliveryTip 
            title="Show Your Process"
            tip="Walk them through your thinking: 'First I checked X, then I analyzed Y, then I decided Z'. This shows systematic approach."
            isDark={isDark}
          />
          <DeliveryTip 
            title="Connect to Business Impact"
            tip="Always tie your work back to revenue, cost savings, or efficiency gains. 'This reduced returns by 60%, saving $X per month.'"
            isDark={isDark}
          />
          <DeliveryTip 
            title="Pause Before Answering"
            tip="Take 2-3 seconds to think before answering. It shows confidence and gives you time to structure your response."
            isDark={isDark}
          />
          <DeliveryTip 
            title="Ask Clarifying Questions"
            tip="If a question is vague, ask: 'Are you asking about a specific scenario or my general approach?' This shows you think before acting."
            isDark={isDark}
          />
          <DeliveryTip 
            title="End with the Result"
            tip="Always finish with the outcome. Don't trail off. 'The result was X, and I learned Y.' Strong finish = strong impression."
            isDark={isDark}
          />
        </div>
      </Section>

      {/* Questions to Ask */}
      <Section 
        icon={<HelpCircle className="w-5 h-5" />}
        title="Questions to Ask the Interviewer"
        color="cyan"
        isDark={isDark}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <QuestionItem question="What does a typical day look like for someone in this role?" isDark={isDark} />
          <QuestionItem question="What are the biggest challenges the team is currently facing?" isDark={isDark} />
          <QuestionItem question="How do you measure success in this position?" isDark={isDark} />
          <QuestionItem question="What tools and systems does the team currently use?" isDark={isDark} />
          <QuestionItem question="How is the team structured? Who would I be working with most closely?" isDark={isDark} />
          <QuestionItem question="What does the onboarding process look like?" isDark={isDark} />
          <QuestionItem question="What are the opportunities for growth and advancement?" isDark={isDark} />
          <QuestionItem question="How does the company approach training and professional development?" isDark={isDark} />
        </div>
      </Section>

      {/* Red Flags to Avoid */}
      <Section 
        icon={<AlertCircle className="w-5 h-5" />}
        title="Red Flags to Avoid"
        color="red"
        isDark={isDark}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <RedFlag flag="Speaking negatively about previous employers or clients" isDark={isDark} />
          <RedFlag flag="Giving vague answers without specific examples" isDark={isDark} />
          <RedFlag flag="Saying 'I don't know' without offering to learn" isDark={isDark} />
          <RedFlag flag="Focusing only on tasks, not results or impact" isDark={isDark} />
          <RedFlag flag="Not asking any questions at the end" isDark={isDark} />
          <RedFlag flag="Appearing uninterested or unprepared" isDark={isDark} />
          <RedFlag flag="Interrupting the interviewer" isDark={isDark} />
          <RedFlag flag="Rambling without structure (use STAR!)" isDark={isDark} />
        </div>
      </Section>

      {/* Do's and Don'ts */}
      <Section 
        icon={<Target className="w-5 h-5" />}
        title="Interview Do's and Don'ts"
        color="indigo"
        isDark={isDark}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className={`text-sm font-semibold uppercase tracking-wide mb-3 flex items-center gap-2 ${
              isDark ? 'text-emerald-400' : 'text-emerald-700'
            }`}>
              <CheckCircle2 className="w-4 h-4" />
              Do's
            </h4>
            <ul className="space-y-2">
              <DoItem item="Research the company before the interview" isDark={isDark} />
              <DoItem item="Prepare 3-5 STAR stories" isDark={isDark} />
              <DoItem item="Practice answers out loud" isDark={isDark} />
              <DoItem item="Use specific numbers and metrics" isDark={isDark} />
              <DoItem item="Show enthusiasm for the role" isDark={isDark} />
              <DoItem item="Ask thoughtful questions" isDark={isDark} />
              <DoItem item="Send a thank-you email within 24 hours" isDark={isDark} />
            </ul>
          </div>
          <div>
            <h4 className={`text-sm font-semibold uppercase tracking-wide mb-3 flex items-center gap-2 ${
              isDark ? 'text-red-400' : 'text-red-700'
            }`}>
              <XCircle className="w-4 h-4" />
              Don'ts
            </h4>
            <ul className="space-y-2">
              <DontItem item="Memorize scripts word-for-word" isDark={isDark} />
              <DontItem item="Badmouth previous employers" isDark={isDark} />
              <DontItem item="Give one-word answers" isDark={isDark} />
              <DontItem item="Lie about experience or skills" isDark={isDark} />
              <DontItem item="Forget to ask questions" isDark={isDark} />
              <DontItem item="Rush through answers" isDark={isDark} />
              <DontItem item="Forget to follow up" isDark={isDark} />
            </ul>
          </div>
        </div>
      </Section>

      {/* Final Tip */}
      <div className={`mt-10 border rounded-xl p-6 ${
        isDark
          ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/20'
          : 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200'
      }`}>
        <div className="flex items-start gap-3">
          <div className={`p-2 rounded-lg ${isDark ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
            <Lightbulb className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
          </div>
          <div>
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              The Golden Rule
            </h3>
            <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <strong className={isDark ? 'text-white' : 'text-gray-900'}>Don't just answer the question — demonstrate how you think.</strong> Interviewers aren't just looking for the right answer; they're looking for how you approach problems, make decisions, and communicate. Show them your process, your logic, and your results. That's what separates good candidates from great ones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Components
interface SectionProps {
  icon: React.ReactNode;
  title: string;
  color: string;
  isDark: boolean;
  children: React.ReactNode;
}

function Section({ icon, title, color, isDark, children }: SectionProps) {
  const colorClasses: Record<string, { border: string; icon: string }> = {
    blue: { border: isDark ? 'border-blue-500/20' : 'border-blue-200', icon: isDark ? 'text-blue-400 bg-blue-500/20' : 'text-blue-600 bg-blue-100' },
    emerald: { border: isDark ? 'border-emerald-500/20' : 'border-emerald-200', icon: isDark ? 'text-emerald-400 bg-emerald-500/20' : 'text-emerald-600 bg-emerald-100' },
    amber: { border: isDark ? 'border-amber-500/20' : 'border-amber-200', icon: isDark ? 'text-amber-400 bg-amber-500/20' : 'text-amber-600 bg-amber-100' },
    purple: { border: isDark ? 'border-purple-500/20' : 'border-purple-200', icon: isDark ? 'text-purple-400 bg-purple-500/20' : 'text-purple-600 bg-purple-100' },
    rose: { border: isDark ? 'border-rose-500/20' : 'border-rose-200', icon: isDark ? 'text-rose-400 bg-rose-500/20' : 'text-rose-600 bg-rose-100' },
    cyan: { border: isDark ? 'border-cyan-500/20' : 'border-cyan-200', icon: isDark ? 'text-cyan-400 bg-cyan-500/20' : 'text-cyan-600 bg-cyan-100' },
    red: { border: isDark ? 'border-red-500/20' : 'border-red-200', icon: isDark ? 'text-red-400 bg-red-500/20' : 'text-red-600 bg-red-100' },
    indigo: { border: isDark ? 'border-indigo-500/20' : 'border-indigo-200', icon: isDark ? 'text-indigo-400 bg-indigo-500/20' : 'text-indigo-600 bg-indigo-100' },
  };

  const classes = colorClasses[color] || colorClasses.blue;

  return (
    <div className={`mb-8 border rounded-xl p-6 ${classes.border} ${isDark ? 'bg-[#202020]/50' : 'bg-white'}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-lg ${classes.icon}`}>
          {icon}
        </div>
        <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

function TermItem({ term, definition, isDark }: { term: string; definition: string; isDark: boolean }) {
  return (
    <div className={`p-3 rounded-lg ${isDark ? 'bg-[#2f2f2f]' : 'bg-gray-50'}`}>
      <div className={`text-sm font-semibold mb-1 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
        {term}
      </div>
      <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        {definition}
      </div>
    </div>
  );
}

function ToolItem({ name, tools, isDark }: { name: string; tools: string[]; isDark: boolean }) {
  return (
    <div className={`p-4 rounded-lg border ${isDark ? 'bg-[#2f2f2f] border-[#3a3a3a]' : 'bg-gray-50 border-gray-200'}`}>
      <h4 className={`text-sm font-semibold mb-2 ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
        {name}
      </h4>
      <ul className="space-y-1">
        {tools.map((tool, i) => (
          <li key={i} className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            • {tool}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MetricGroup({ title, metrics, isDark }: { title: string; metrics: { name: string; desc: string }[]; isDark: boolean }) {
  return (
    <div className={`p-4 rounded-lg border ${isDark ? 'bg-[#2f2f2f] border-[#3a3a3a]' : 'bg-gray-50 border-gray-200'}`}>
      <h4 className={`text-sm font-semibold mb-2 ${isDark ? 'text-amber-400' : 'text-amber-700'}`}>
        {title}
      </h4>
      <div className="space-y-2">
        {metrics.map((metric, i) => (
          <div key={i}>
            <div className={`text-xs font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {metric.name}
            </div>
            <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {metric.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProcessItem({ title, steps, isDark }: { title: string; steps: string[]; isDark: boolean }) {
  return (
    <div className={`p-4 rounded-lg border ${isDark ? 'bg-[#2f2f2f] border-[#3a3a3a]' : 'bg-gray-50 border-gray-200'}`}>
      <h4 className={`text-sm font-semibold mb-2 ${isDark ? 'text-purple-400' : 'text-purple-700'}`}>
        {title}
      </h4>
      <ol className="space-y-1">
        {steps.map((step, i) => (
          <li key={i} className={`text-xs flex items-start gap-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
              isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'
            }`}>
              {i + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function DeliveryTip({ title, tip, isDark }: { title: string; tip: string; isDark: boolean }) {
  return (
    <div className={`p-4 rounded-lg border ${isDark ? 'bg-[#2f2f2f] border-[#3a3a3a]' : 'bg-gray-50 border-gray-200'}`}>
      <h4 className={`text-sm font-semibold mb-1 ${isDark ? 'text-rose-400' : 'text-rose-700'}`}>
        {title}
      </h4>
      <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        {tip}
      </p>
    </div>
  );
}

function QuestionItem({ question, isDark }: { question: string; isDark: boolean }) {
  return (
    <div className={`p-3 rounded-lg text-sm ${isDark ? 'bg-[#2f2f2f] text-cyan-300' : 'bg-gray-50 text-cyan-700'}`}>
      "{question}"
    </div>
  );
}

function RedFlag({ flag, isDark }: { flag: string; isDark: boolean }) {
  return (
    <div className={`p-3 rounded-lg text-sm flex items-start gap-2 ${isDark ? 'bg-red-900/20 text-red-300' : 'bg-red-50 text-red-700'}`}>
      <XCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
      <span>{flag}</span>
    </div>
  );
}

function DoItem({ item, isDark }: { item: string; isDark: boolean }) {
  return (
    <li className={`text-sm flex items-start gap-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
      <span>{item}</span>
    </li>
  );
}

function DontItem({ item, isDark }: { item: string; isDark: boolean }) {
  return (
    <li className={`text-sm flex items-start gap-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
      <XCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isDark ? 'text-red-400' : 'text-red-600'}`} />
      <span>{item}</span>
    </li>
  );
}
