// /Users/danlynmedou/Desktop/laptSite/lapt-site/src/App.tsx
import React, { useState } from 'react';
import logo from './logo.png';
import './App.css';

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isActive, onClick }) => (
  <div className={`accordion-item ${isActive ? 'active' : ''}`}>
    <button className="accordion-header" onClick={onClick}>
      {title}
    </button>
    {isActive && <div className="accordion-content">{content}</div>}
  </div>
);

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <img src={logo} alt="LAPT Logo" className="app-logo" />
        <h1>LAPT: Your Smart Travel Companion</h1>
      </header>
      <main className="app-main">
        <aside className="app-sidebar">
          <h2>Account Settings</h2>
          <div className="accordion">
            <AccordionItem 
              title="Data Sharing Options" 
              content={
                <div>
                  <p>LAPT offers a unique opportunity to reduce your travel costs by sharing your data. Here's how it works:</p>
                  <ul>
                    <li>Opt-in to share your travel patterns and preferences</li>
                    <li>We anonymize your data and share it with our partners</li>
                    <li>You earn credits that can be used for ticket discounts</li>
                  </ul>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                  <span>Enable Data Sharing</span>
                </div>
              }
              isActive={activeSection === 'data'}
              onClick={() => toggleSection('data')}
            />
            <AccordionItem 
              title="Notification Preferences" 
              content={
                <div>
                  <p>Stay informed about your travels:</p>
                  <label><input type="checkbox" /> Price alerts</label>
                  <label><input type="checkbox" /> Schedule changes</label>
                  <label><input type="checkbox" /> Travel tips</label>
                </div>
              }
              isActive={activeSection === 'notifications'}
              onClick={() => toggleSection('notifications')}
            />
            <AccordionItem 
              title="Account Security" 
              content={
                <div>
                  <p>Protect your account and travel information:</p>
                  <button className="btn">Change Password</button>
                  <button className="btn">Enable Two-Factor Authentication</button>
                </div>
              }
              isActive={activeSection === 'security'}
              onClick={() => toggleSection('security')}
            />
          </div>
        </aside>
        <section className="app-content">
          <h2>Welcome to LAPT</h2>
          <p>LAPT is your smart travel companion for train and bus journeys. We're committed to making your travel experience seamless, affordable, and rewarding.</p>
          <h3>Key Features:</h3>
          <ul>
            <li>Real-time schedules and updates for trains and buses</li>
            <li>Easy ticket booking with the best available prices</li>
            <li>Unique data-sharing option to earn discounts on your travels</li>
            <li>Personalized travel recommendations based on your preferences</li>
          </ul>
          <h3>How Data Sharing Works:</h3>
          <p>By opting into our data sharing program, you can significantly reduce your travel costs. We anonymize and aggregate your travel data, which helps transportation companies optimize their services. In return, you earn credits for discounts on future tickets.</p>
          <p>Your privacy and data security are our top priorities. You have full control over what data you share and can opt-out at any time.</p>
        </section>
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 LAPT. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
      </footer>
    </div>
  );
};

export default App;

