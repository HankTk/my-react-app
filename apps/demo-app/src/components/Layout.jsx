import React from 'react';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="ml-64">
        {children}
      </main>
    </div>
  );
};

export default Layout;