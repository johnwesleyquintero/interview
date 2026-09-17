import { useState } from 'react';
import Sidebar from './components/Sidebar';
import SectionContent from './components/SectionContent';
import Framework from './components/Framework';
import Principles from './components/Principles';
import { sections } from './data/content';

export default function App() {
  const [activeSection, setActiveSection] = useState('career-story');
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    <div className="flex min-h-screen bg-slate-950 text-white">
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
