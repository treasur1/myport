import React from 'react';
import { ArrowUpRight, Heart, Sparkles } from 'lucide-react';
import { SelarLogo } from './SelarLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#050505] border-t border-zinc-900 py-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          
          {/* Brand Info */}
          <div className="text-center md:text-left space-y-1">
            <button
              onClick={() => onNavigate('hero')}
              className="text-lg font-black text-white tracking-tight hover:text-orange-400 transition-colors"
            >
              TREASURE EWELIKE
            </button>
            <p className="text-zinc-400">
              Growth Consultant • Meta & Google Ads Specialist • Course Creator
            </p>
          </div>

          {/* Selar Badge */}
          <div className="flex items-center gap-3">
            <a
              href="https://selar.co/m/TreasureEwelike"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-orange-500/40 text-zinc-200 transition-all group"
            >
              <SelarLogo size={18} showText={true} />
              <ArrowUpRight className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-zinc-400">
            <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">About</button>
            <button onClick={() => onNavigate('courses')} className="hover:text-orange-400 transition-colors">Courses on Selar</button>
            <button onClick={() => onNavigate('case-studies')} className="hover:text-white transition-colors">Case Studies</button>
            <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Services</button>
            <button onClick={() => onNavigate('roi-calculator')} className="hover:text-white transition-colors">ROI Calculator</button>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">Contact</button>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <p>© {new Date().getFullYear()} Treasure Ewelike. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted for high conversions with</span>
            <span className="text-orange-400 font-bold">Selar.co</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
