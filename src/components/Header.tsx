import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles, PhoneCall, BookOpen } from 'lucide-react';
import { SelarLogo } from './SelarLogo';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'courses', label: 'Courses on Selar' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'services', label: 'Services' },
    { id: 'roi-calculator', label: 'ROI Calculator' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-zinc-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 group text-left focus:outline-none"
            id="brand-logo-btn"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 via-amber-500 to-orange-400 p-[1.5px] shadow-md shadow-orange-500/10 group-hover:shadow-orange-500/30 transition-all">
              <div className="w-full h-full bg-[#050505] rounded-[10px] flex items-center justify-center font-black text-orange-400 text-lg">
                TE
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-orange-400 transition-colors">
                  TREASURE EWELIKE
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  Growth Pro
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-medium tracking-wide">
                Digital Marketer & Funnel Architect
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 bg-zinc-900/60 border border-zinc-800/80 rounded-full px-3 py-1.5 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-link-${item.id}`}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/40 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1">
                    {item.id === 'courses' && <BookOpen className="w-3 h-3 text-orange-400" />}
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Selar Direct Account Link */}
            <a
              href="https://selar.co/m/TreasureEwelike"
              target="_blank"
              rel="noopener noreferrer"
              id="header-selar-link"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 hover:border-orange-500/50 shadow-sm transition-all group"
            >
              <SelarLogo size={18} showText={false} />
              <span>Selar Store</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Book Strategy Call CTA */}
            <button
              onClick={() => handleNavClick('contact')}
              id="header-book-btn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-zinc-950 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 hover:opacity-95 shadow-md shadow-orange-500/20 hover:shadow-orange-500/40 transition-all active:scale-95"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Book Strategy Call</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://selar.co/m/TreasureEwelike"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold flex items-center gap-1"
            >
              <SelarLogo size={16} showText={false} />
              <span>Selar</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-xl bg-zinc-900 text-zinc-300 border border-zinc-800 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050505]/95 backdrop-blur-xl border-b border-zinc-800 px-4 pt-3 pb-6 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? 'bg-orange-500/10 text-orange-400 border border-orange-500/30'
                      : 'text-zinc-300 hover:bg-zinc-900'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.id === 'courses' && (
                    <span className="px-2 py-0.5 rounded text-[10px] bg-orange-500/20 text-orange-300 font-semibold">
                      On Selar
                    </span>
                  )}
                </button>
              ))}

              <div className="pt-3 border-t border-zinc-800/80 flex flex-col gap-2">
                <a
                  href="https://selar.co/m/TreasureEwelike"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-sm font-bold"
                >
                  <SelarLogo size={20} showText={true} />
                  <span>Visit Store Account</span>
                  <ArrowUpRight className="w-4 h-4 text-orange-400" />
                </a>

                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 font-bold text-sm shadow-lg shadow-orange-500/20"
                >
                  Book Free Strategy Call
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
