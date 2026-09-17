import { useState } from 'react';
import Sidebar from './components/Sidebar';
import SectionContent from './components/SectionContent';
import Framework from './components/Framework';
import Principles from './components/Principles';
import { sections } from './data/content';
import { useTheme } from './context/ThemeContext';

export default function App() {
  const [activeSection, setActiveSection] = useState('career-story');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme } = useTheme();

  const renderContent = () => {
    if (activeSection === 'framework') {
      return <Framework />;
    }
    if (activeSection === 'principles') {
      return <Principles />;
    }
    const section = sections.find((s) => s.id === activeSection);
    if (section) {
      return <SectionContent section={section} />;
    }
    return null;
  };

  return (
    <div className={`flex min-h-screen ${
      theme === 'dark' ? 'bg-[#191919] text-[#e6e6e6]' : 'bg-white text-[#37352f]'
    }`}>
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <main className="flex-1 min-h-screen">
        <div className="p-6 lg:p-10 pt-16 lg:pt-10">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
