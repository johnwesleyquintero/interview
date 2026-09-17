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
  Sun,
  Moon,
  Sparkles,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (id: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const navItems = [
  { id: 'career-story', label: 'Career Story', icon: User },
  { id: 'day-to-day', label: 'Day-to-Day', icon: Calendar },
  { id: 'star-apn', label: 'STAR — Success', icon: AlertTriangle },
  { id: 'star-failure', label: 'STAR — Failure', icon: AlertTriangle },
  { id: 'star-listing', label: 'STAR — Listing Audit', icon: AlertTriangle },
  { id: 'fba-walkthrough', label: 'FBA Walkthrough', icon: Package },
  { id: 'commercial-optimization', label: 'Commercial Opt.', icon: TrendingUp },
  { id: 'framework', label: 'Response Framework', icon: LayoutGrid },
  { id: 'principles', label: 'Core Principles', icon: Brain },
  { id: 'insights', label: 'Additional Insights', icon: Sparkles },
];

export default function Sidebar({ activeSection, onSectionChange, isOpen, onToggle }: SidebarProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={onToggle}
        className={`lg:hidden fixed top-4 left-4 z-50 p-2.5 rounded-lg shadow-lg border ${
          theme === 'dark'
            ? 'bg-[#202020] border-[#2f2f2f] text-white'
            : 'bg-white border-gray-200 text-gray-700'
        }`}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-72 border-r z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${
          theme === 'dark'
            ? 'bg-[#202020] border-[#2f2f2f]'
            : 'bg-[#f7f6f3] border-gray-200'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className={`p-6 border-b ${theme === 'dark' ? 'border-[#2f2f2f]' : 'border-gray-200'}`}>
            <div className="flex items-center justify-between">
              <div>
                <h1 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Interview Prep
                </h1>
                <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Dynamic Build — 99% Coverage
                </p>
              </div>
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-md transition-all hover:scale-110 ${
                  theme === 'dark'
                    ? 'bg-[#2f2f2f] hover:bg-[#3a3a3a] text-yellow-400'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                }`}
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-3 px-3">
            <div className="space-y-0.5">
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
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                      isActive
                        ? theme === 'dark'
                          ? 'bg-[#2f2f2f] text-white'
                          : 'bg-gray-200/70 text-gray-900'
                        : theme === 'dark'
                        ? 'text-gray-400 hover:text-white hover:bg-[#2f2f2f]/60'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
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
          <div className={`p-4 border-t ${theme === 'dark' ? 'border-[#2f2f2f]' : 'border-gray-200'}`}>
            <div className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
              <p className={`font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                Architecture
              </p>
              <p className="mt-1">Core KBs → Specialized Bridge → Router</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
