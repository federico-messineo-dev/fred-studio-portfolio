import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/chi-sono' },
    { name: t('nav.services'), path: '/servizi' },
    { name: t('nav.portfolio'), path: '/portfolio' },
    { name: t('nav.contact'), path: '/contatti' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-brand/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="font-display font-black tracking-tighter text-white text-xl">
          FRED<span className="text-brand">.</span>STUDIO
        </Link>
        
        <div className="hidden md:flex gap-8 items-center font-mono text-[10px] tracking-widest uppercase">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`transition-colors ${location.pathname === link.path ? 'text-brand' : 'text-white/60 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLanguage(language === 'it' ? 'en' : 'it')}
            className="flex items-center gap-2 font-mono text-[10px] text-brand border border-brand/30 px-3 py-1.5 hover:bg-brand/10 transition-all"
          >
            <Globe size={12} />
            {language.toUpperCase()}
          </button>
          <Link 
            to="/contatti" 
            className="hidden sm:block bg-brand text-black font-mono text-[10px] font-bold tracking-widest uppercase px-4 py-2 hover:bg-white transition-all"
          >
            START_PROJECT
          </Link>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface border-b border-brand/10 p-6 flex flex-col gap-4 font-mono text-xs tracking-widest uppercase"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className={location.pathname === link.path ? 'text-brand' : 'text-white'}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
