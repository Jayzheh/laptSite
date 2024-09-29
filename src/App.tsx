// /Users/danlynmedou/Desktop/laptSite/lapt-site/src/App.tsx
import React, { useState } from 'react';
import logo from './logo.png'; // Make sure to add a logo file

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
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
        {content}
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
      <header>
        <img src={logo} alt="LAPT Logo" className="logo" />
        <h1>LAPT</h1>
      </header>
      <div className="sidebar">
        <h2>Settings</h2>
        <div className="accordion">
          <AccordionItem 
            title="Account Settings" 
            content={
              <div>
                <h3>Password Management</h3>
                <p>Change your password regularly to ensure account security. We recommend using a strong, unique password for your LAPT account.</p>
                <button>Change Password</button>
              </div>
            }
            isActive={activeSection === 'account'}
            onClick={() => toggleSection('account')}
          />
          <AccordionItem 
            title="Privacy Settings" 
            content={
              <div>
                <h3>Data Sharing Options</h3>
                <p>You have the option to share your data with our partners. This helps us improve our services and may provide you with personalized experiences.</p>
                <label>
                  <input type="checkbox" /> Allow data sharing
                </label>
              </div>
            }
            isActive={activeSection === 'privacy'}
            onClick={() => toggleSection('privacy')}
          />
          <AccordionItem 
            title="Notification Settings" 
            content="Configure your notification preferences here..."
            isActive={activeSection === 'notifications'}
            onClick={() => toggleSection('notifications')}
          />
        </div>
      </div>
      <div className="main-content">
        <h2>Terms of Service</h2>
        <p>Welcome to LAPT. By using our services, you agree to these terms:</p>
        <ul>
          <li>You must be at least 13 years old to use LAPT.</li>
          <li>You are responsible for maintaining the security of your account.</li>
          <li>We respect your privacy and will protect your personal information as described in our Privacy Policy.</li>
          <li>You agree not to use LAPT for any illegal or unauthorized purpose.</li>
          <li>We reserve the right to modify or terminate the service for any reason, without notice, at any time.</li>
        </ul>
        <p>For the full Terms of Service, please visit our website.</p>
      </div>
    </div>
  );
};

export default App;

