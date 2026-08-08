import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, TrendingUp, CheckCircle2, ShieldCheck, Calculator, Sparkles, Award } from 'lucide-react';
import { SelarLogo } from './SelarLogo';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Glow Effects & Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-[#050505] to-[#050505] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`, 
          backgroundSize: '24px 24px' 
        }} 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold mb-6 w-fit backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
              <span>Digital Marketer • Funnel Architect • Course Creator</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6">
              Scaling Revenue with <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                High-Converting Funnels
              </span>{' '}
              & Data-Driven Ads.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Hi, I’m <strong className="text-white font-semibold">TREASURE EWELIKE</strong>. I help e-commerce brands, high-ticket consultants, and knowledge creators build predictable sales systems and scale revenue on Meta, Google & Selar.co.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={() => onNavigate('case-studies')}
                id="hero-case-studies-btn"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 text-zinc-950 font-bold text-sm sm:text-base shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://selar.co/m/TreasureEwelike"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-selar-btn"
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-white font-bold text-sm sm:text-base border border-zinc-700/80 hover:border-orange-500/50 shadow-md transition-all group"
              >
                <SelarLogo size={22} showText={false} />
                <span>Selar Account & Courses</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-orange-500/20 text-orange-300 font-bold">
                  Selar.co ↗
                </span>
              </a>

              <button
                onClick={() => onNavigate('roi-calculator')}
                id="hero-calculator-btn"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-zinc-900/50 hover:bg-zinc-800/80 text-zinc-300 hover:text-white font-medium text-xs sm:text-sm border border-zinc-800 hover:border-zinc-700 transition-all"
              >
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>Calculate Your Funnel ROI</span>
              </button>
            </div>

            {/* Quick Trust Signals */}
            <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-zinc-300 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>1,200+ Selar Students</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Meta & Google Certified</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300 text-xs sm:text-sm col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Verified Selar Seller ⭐ 4.9</span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Image Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              
              {/* Image Frame Card */}
              <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 p-2 shadow-2xl shadow-orange-950/20 group">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#050505]">
                  <img
                    src="/src/assets/images/treasure_portrait_1786169929089.jpg"
                    alt="Treasure Ewelike - Digital Marketer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
                  
                  {/* Portrait Overlay Tag */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#050505]/80 backdrop-blur-md border border-zinc-800/90 shadow-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-bold text-sm">Treasure Ewelike</span>
                      <span className="flex items-center gap-1 text-orange-400 text-xs font-bold bg-orange-500/10 px-2 py-0.5 rounded-md border border-orange-500/20">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Verified Expert
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400">
                      Growth Consultant • Multi-Currency Funnel Specialist
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge 1 - Selar Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 sm:-left-6 p-3 sm:p-4 rounded-2xl bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 shadow-xl flex items-center gap-3 z-10"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400">
                  <SelarLogo size={24} showText={false} />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-xs text-zinc-400 font-medium">
                    <span>Selar Creator</span>
                    <div className="flex text-amber-400">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span className="text-[11px] font-bold text-zinc-200 ml-0.5">4.9</span>
                    </div>
                  </div>
                  <p className="text-sm font-extrabold text-white">Top Creator on Selar</p>
                </div>
              </motion.div>

              {/* Floating Stat Badge 2 - ROAS Metric */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-4 sm:-right-6 p-3 sm:p-4 rounded-2xl bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 shadow-xl flex items-center gap-3 z-10"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-medium">Avg. Client ROAS</p>
                  <p className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                    4.2x ROAS
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Global Impact Numbers Bar */}
        <div className="mt-16 pt-10 border-t border-zinc-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 hover:border-orange-500/30 transition-all text-center md:text-left">
              <p className="text-2xl sm:text-3xl font-black text-white mb-1">₦250M+</p>
              <p className="text-xs text-zinc-400 font-medium">Client Revenue Tracked ($300k+)</p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 hover:border-orange-500/30 transition-all text-center md:text-left">
              <p className="text-2xl sm:text-3xl font-black text-orange-400 mb-1">4.2x</p>
              <p className="text-xs text-zinc-400 font-medium">Average Return On Ad Spend</p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 hover:border-orange-500/30 transition-all text-center md:text-left">
              <p className="text-2xl sm:text-3xl font-black text-amber-400 mb-1">1,200+</p>
              <p className="text-xs text-zinc-400 font-medium">Students Enrolled on Selar</p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 hover:border-orange-500/30 transition-all text-center md:text-left">
              <p className="text-2xl sm:text-3xl font-black text-white mb-1">85+</p>
              <p className="text-xs text-zinc-400 font-medium">Successful Funnel Launches</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
