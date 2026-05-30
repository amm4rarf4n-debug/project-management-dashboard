import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { Sun, Moon } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'app dark-mode' : 'app light-mode'}>
      <div className="theme-toggle">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="toggle-btn"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
      <Dashboard />
    </div>
  );
}

export default App;
