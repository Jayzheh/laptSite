// /Users/danlynmedou/Desktop/laptSite/lapt-site/src/App.tsx
import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  content: string;
  isActive: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isActive, onClick }) => (
  <div className="accordion-item">
    <button className={`accordion-header ${isActive ? 'active' : ''}`} onClick={onClick}>
      {title}
    </button>
    {isActive && (
      <div className="accordion-content">
        <p>{content}</p>
      </div>
    )}
  </div>
);

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h2>Settings</h2>
        <div className="accordion">
          <AccordionItem 
            title="Account Settings" 
            content="Manage your account settings here..." 
            isActive={activeSection === 'account'}
            onClick={() => toggleSection('account')}
          />
          <AccordionItem 
            title="Privacy Settings" 
            content="Adjust your privacy preferences..." 
            isActive={activeSection === 'privacy'}
            onClick={() => toggleSection('privacy')}
          />
          <AccordionItem 
            title="Notification Settings" 
            content="Configure your notification settings..." 
            isActive={activeSection === 'notifications'}
            onClick={() => toggleSection('notifications')}
          />
        </div>
      </div>
      <div className="main-content">
        <h1>Terms of Service</h1>
        <p>Your terms of service content goes here...</p>
      </div>
    </div>
  );
};

export default App;
