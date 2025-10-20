import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
    { path: '/table', label: 'AxTable', icon: '📋' },
  ];

  return (
    <nav className="w-64 bg-card border-r border-border h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6 border-b border-border">
        <h2 className="text-xl font-bold text-foreground">Ax Component Library</h2>
        <p className="text-sm text-muted-foreground">React UI Components</p>
      </div>
      
      <ul className="p-4 space-y-2">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;