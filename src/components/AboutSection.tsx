import React from 'react';
import { motion } from 'motion/react';
import { Target, Award, ShieldCheck, Zap, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { SelarLogo } from './SelarLogo';

interface AboutSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="py-20 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Left Column Image & Badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 p-3 shadow-2xl">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#050505]">
                <img
                  src="/src/assets/images/treasure_portrait_1786169929089.jpg"
                  alt="Treasure Ewelike"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              </div>
            </div>

            {/* Overlaid Selar Creator Badge */}
            <div className="absolute -bottom-4 -right-4 sm:-right-6 p-4 rounded-2xl bg-zinc-900/90 backdrop-blur-xl border border-orange-500/30 shadow-2xl flex items-center gap-3">
              <SelarLogo size={28} showText={false} />
              <div>
                <span className="text-[10px] text-zinc-400 block font-medium">Selar Verified Partner</span>
                <span className="text-xs font-black text-white">1,200+ Active Students</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column Text Story */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold">
              <Award className="w-4 h-4 text-orange-400" />
              <span>Meet Treasure Ewelike</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Data-Driven Growth Marketer & <span className="text-orange-400">Selar Product Specialist</span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              I’m Treasure Ewelike, a performance marketer and growth strategist with over 5 years of experience engineering high-converting sales funnels, paid media campaigns, and digital product launches across West Africa and international markets.
            </p>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              My core obsession is turning cold traffic into repeat, high-ticket buyers. Through my courses hosted on <strong className="text-orange-400">Selar.co</strong>, I’ve empowered over 1,200 entrepreneurs, media buyers, and creators to package their knowledge, automate digital storefronts, and achieve sustainable 7-figure sales pipelines.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                <div className="flex items-center gap-2 font-bold text-white text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  <span>Full-Funnel Architecture</span>
                </div>
                <p className="text-xs text-zinc-400">VSL copywriting, opt-in pages, and automated WhatsApp/Email follow-up drips.</p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                <div className="flex items-center gap-2 font-bold text-white text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  <span>Paid Media Scaling</span>
                </div>
                <p className="text-xs text-zinc-400">Meta (FB/IG) and Google Ads media buying with 4.2x average campaign ROAS.</p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                <div className="flex items-center gap-2 font-bold text-white text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  <span>Selar Store Monetization</span>
                </div>
                <p className="text-xs text-zinc-400">Multi-currency checkout, order bumps, and affiliate network setup on Selar.</p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                <div className="flex items-center gap-2 font-bold text-white text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  <span>Conversion Optimization</span>
                </div>
                <p className="text-xs text-zinc-400">A/B testing ad creative and checkout pages to eliminate friction.</p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://selar.co/m/TreasureEwelike"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-zinc-950 font-black text-xs sm:text-sm transition-colors shadow-md shadow-orange-500/20"
              >
                <SelarLogo size={18} showText={false} />
                <span>Visit Selar Account</span>
              </a>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs sm:text-sm border border-zinc-800 transition-colors"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="w-4 h-4 text-orange-400" />
              </button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
