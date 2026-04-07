import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import HackerBackground from './HackerBackground';
import CustomCursor from './CustomCursor';

const Layout = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-surface">
      <HackerBackground />
      <CustomCursor />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
