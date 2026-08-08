import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck, CreditCard, Globe, Zap, Users, Download } from 'lucide-react';
import { SelarLogo } from './SelarLogo';

export const SelarSection: React.FC = () => {
  return (
    <section className="py-12 bg-[#050505]/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Box */}
        <div className="relative rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-orange-950/40 border border-orange-500/30 p-6 sm:p-10 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 blur-3xl pointer-events-none rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <SelarLogo size={32} showText={true} />
                <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold border border-orange-500/30">
                  Official Store Profile
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Access Treasure’s Digital Products & Masterclasses on Selar
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                Selar is Africa’s premier digital product storefront enabling seamless global transactions. Whether you are paying in <strong className="text-orange-400">NGN, USD, GHS, KES, ZAR, or GBP</strong>, Selar provides instant, secure automated product access immediately after checkout.
              </p>

              {/* Selar Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                <div className="flex items-center gap-2 text-zinc-300 text-xs font-medium">
                  <CreditCard className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Multi-Currency Cards & Transfer</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300 text-xs font-medium">
                  <Zap className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Instant Automated Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300 text-xs font-medium">
                  <Globe className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Global Access (Africa, US, UK)</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300 text-xs font-medium">
                  <Users className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>1,200+ Verified Students</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300 text-xs font-medium">
                  <Download className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>LMS & Mobile Friendly</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300 text-xs font-medium">
                  <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Secure Paystack & Flutterwave</span>
                </div>
              </div>

              <a
                href="https://selar.co/m/TreasureEwelike"
                target="_blank"
                rel="noopener noreferrer"
                id="selar-store-main-link"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 text-zinc-950 font-bold text-sm sm:text-base shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-[1.01] transition-all group"
              >
                <span>Visit Treasure's Selar Account</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Right Selar Card Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm p-6 rounded-2xl bg-[#050505]/90 border border-zinc-800 shadow-xl text-center relative group">
                <div className="w-20 h-20 mx-auto rounded-full p-1 bg-gradient-to-tr from-orange-400 to-amber-400 mb-4">
                  <img
                    src="/src/assets/images/treasure_portrait_1786169929089.jpg"
                    alt="Treasure Ewelike Selar Profile"
                    referrerPolicy="no-referrer"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Treasure Ewelike</h3>
                <p className="text-xs text-zinc-400 mb-3">Selar Verified Creator Profile</p>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-semibold mb-6">
                  <span>⭐⭐⭐⭐⭐ 4.9 Rating</span>
                  <span className="text-zinc-400">• 4 Courses Listed</span>
                </div>

                <div className="space-y-2 text-left bg-zinc-900/80 p-3 rounded-xl border border-zinc-800/80 text-xs text-zinc-300 mb-6">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Selar Store URL:</span>
                    <span className="text-orange-400 font-mono">selar.co/m/TreasureEwelike</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Supported Currencies:</span>
                    <span className="text-white font-medium">NGN, USD, GHS, KES, GBP</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Customer Support:</span>
                    <span className="text-white font-medium">24/7 Auto & Direct Email</span>
                  </div>
                </div>

                <a
                  href="https://selar.co/m/TreasureEwelike"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Open Store in Selar</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
