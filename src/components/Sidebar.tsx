import {
  User,
  Calendar,
  AlertTriangle,
  Package,
  TrendingUp,
  LayoutGrid,
  Brain,
  Menu,
  X,
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (id: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const navItems = [
  { id: 'career-story', label: 'Career Story', icon: User },
  { id: 'day-to-day', label: 'Day-to-Day', icon: Calendar },
  { id: 'star-apn', label: 'STAR — APN Case', icon: AlertTriangle },
  { id: 'fba-walkthrough', label: 'FBA Walkthrough', icon: Package },
  { id: 'commercial-optimization', label: 'Commercial Opt.', icon: TrendingUp },
  { id: 'framework', label: 'Response Framework', icon: LayoutGrid },
  { id: 'principles', label: 'Core Principles', icon: Brain },
];

export default function Sidebar({ activeSection, onSectionChange, isOpen, onToggle }: SidebarProps) {
  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed top-4 left-4 z-50 p-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white shadow-lg"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-slate-900 border-r border-slate-800 z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-slate-800">
            <h1 className="text-lg font-bold text-white">Interview Prep</h1>
            <p className="text-sm text-slate-400 mt-1">Dynamic Build — 99% Coverage</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4 px-3">
            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSectionChange(item.id);
                      onToggle();
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-slate-800">
            <div className="text-xs text-slate-500">
              <p className="font-medium text-slate-400">Architecture</p>
              <p className="mt-1">Core KBs → Specialized Bridge → Router</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
