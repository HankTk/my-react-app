import React from 'react';
import Navigation from './Navigation';
import SettingsDrawer from './SettingsDrawer';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navigation />
      <main className="main-content">
        {children}
      </main>
      <SettingsDrawer />
    </div>
  );
};

export default Layout;