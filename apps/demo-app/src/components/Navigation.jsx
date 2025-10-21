import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/button', label: 'AxButton', icon: '🔘' },
    { path: '/label', label: 'AxLabel', icon: '🏷️' },
    { path: '/input', label: 'AxInput', icon: '📝' },
    { path: '/card', label: 'AxCard', icon: '🃏' },
    { path: '/modal', label: 'AxModal', icon: '🪟' },
    { path: '/chart', label: 'AxChart', icon: '📊' },
    { path: '/table', label: 'AxDataTable', icon: '📋' },
    { path: '/css-variables', label: 'CSS Variables', icon: '🎨' },
  ];

  return (
    <nav className="navigation">
      <div className="navigation-header">
        <h2>Ax Component Library</h2>
        <p>React UI Components</p>
      </div>
      
      <ul className="navigation-list">
        {navItems.map((item) => (
          <li key={item.path} className="navigation-item">
            <Link
              to={item.path}
              className={`navigation-link ${
                location.pathname === item.path ? 'active' : ''
              }`}
            >
              <div className="navigation-icon">{item.icon}</div>
              <div className="navigation-label">{item.label}</div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;