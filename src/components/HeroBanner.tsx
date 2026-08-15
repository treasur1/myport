import React from 'react';
import { Sparkles, ShieldCheck, Truck, Flame, ArrowRight, MessageCircle } from 'lucide-react';
import { Currency, GenderCategory } from '../types';
import { WHATSAPP_NUMBER } from '../data/jerseys';

interface HeroBannerProps {
  currency: Currency;
  onSelectCategory: (gender: GenderCategory) => void;
  onScrollToCatalog: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  currency,
  onSelectCategory,
  onScrollToCatalog,
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-[#09090b] border-b border-zinc-800">
      
      {/* Background Glows and Grid */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text & CTA */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-lime-500/30 text-xs font-semibold text-zinc-200">
              <Flame className="w-4 h-4 text-lime-400 animate-bounce" />
              <span>2024/25 Match Kits • Authentic & Fan Versions</span>
              <span className="bg-lime-400/20 text-lime-300 px-2 py-0.5 rounded-full text-[10px] font-bold">
                NEW DROPS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-athletic text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[0.95]">
              WEAR THE PASSION. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-300 to-teal-400">
                UNBEATABLE QUALITY.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-zinc-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Premium club, national team, and retro football jerseys for <strong className="text-white">Men</strong>, <strong className="text-white">Women</strong>, <strong className="text-white">Kids (Full Sets)</strong>, and <strong className="text-white">Unisex</strong>. Custom heat-pressed player name & number printing with instant checkout to WhatsApp.
            </p>

            {/* Quick Category Buttons */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-xs font-bold text-zinc-400 flex items-center mr-1">Shop by:</span>
              <button
                onClick={() => {
                  onSelectCategory('mens');
                  onScrollToCatalog();
                }}
                className="px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-lime-400 text-xs font-bold text-white transition-all"
              >
                Men's Kits
              </button>
              <button
                onClick={() => {
                  onSelectCategory('womens');
                  onScrollToCatalog();
                }}
                className="px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-lime-400 text-xs font-bold text-white transition-all"
              >
                Women's Fit
              </button>
              <button
                onClick={() => {
                  onSelectCategory('kids');
                  onScrollToCatalog();
                }}
                className="px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-lime-400 text-xs font-bold text-white transition-all"
              >
                Kids Full Sets
              </button>
              <button
                onClick={() => {
                  onSelectCategory('unisex');
                  onScrollToCatalog();
                }}
                className="px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-lime-400 text-xs font-bold text-white transition-all"
              >
                Unisex & Retro
              </button>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onScrollToCatalog}
                id="explore-jerseys-btn"
                className="px-6 py-4 rounded-xl bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-400 hover:from-lime-300 hover:to-emerald-300 text-black font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-lime-400/25 hover:scale-[1.02] transition-all"
              >
                <span>Browse All Jersey Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20FLUXX%20FC!%20I'm%20looking%20for%20a%20specific%20football%20jersey.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-emerald-500/50 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat Direct on WhatsApp</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-zinc-800 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-lime-400 shrink-0" />
                <span className="leading-tight"><strong className="text-zinc-200">100% Quality</strong> Breathable Fabric</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-lime-400 shrink-0" />
                <span className="leading-tight"><strong className="text-zinc-200">Custom Namesets</strong> & Match Badges</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-lime-400 shrink-0" />
                <span className="leading-tight"><strong className="text-zinc-200">Fast Dispatch</strong> Nationwide & Global</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              
              {/* Main Feature Kit Card */}
              <div className="rounded-3xl bg-zinc-900 border border-zinc-700 p-4 sm:p-5 shadow-2xl relative overflow-hidden group">
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-black">
                  <img
                    src="https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=1000&auto=format&fit=crop"
                    alt="Real Madrid 24/25 Jersey"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
                  
                  {/* Floating Tags */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-black bg-lime-400 text-black shadow-md">
                    24/25 MATCH KIT
                  </span>
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold bg-black/70 backdrop-blur-md text-zinc-200 border border-zinc-700">
                    PLAYER ISSUE & FAN
                  </span>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[11px] text-lime-400 font-bold tracking-wider uppercase block">
                      Featured Drop
                    </span>
                    <h3 className="font-athletic text-2xl text-white font-black tracking-wide">
                      REAL MADRID 24/25 HOME KIT
                    </h3>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-zinc-300">Mbappé #9 • Vini Jr #7 • Bellingham #5</span>
                      <span className="text-base font-black text-lime-400 font-display">
                        {currency === 'NGN' ? '₦22,000' : '$15.00'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom interactive feature ribbon */}
                <div className="mt-3.5 p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-zinc-300 font-medium">Instant WhatsApp Order Verification</span>
                  </div>
                  <span className="text-lime-400 font-mono font-bold text-[11px]">2349015010957</span>
                </div>
              </div>

              {/* Floating Mini Retro Badge */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 p-3 rounded-2xl bg-zinc-900 border border-lime-500/40 shadow-xl items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-lime-400/20 text-lime-400 font-black flex items-center justify-center text-sm font-athletic">
                  1994
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-none">NIGERIA RETRO</p>
                  <p className="text-[10px] text-zinc-400">Yekini & Okocha #10</p>
                </div>
              </div>

              {/* Floating Mini Kids Badge */}
              <div className="hidden sm:flex absolute -top-4 -right-4 p-3 rounded-2xl bg-zinc-900 border border-zinc-700 shadow-xl items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 font-black flex items-center justify-center text-xs font-athletic">
                  SET
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-none">KIDS FULL SETS</p>
                  <p className="text-[10px] text-zinc-400">Top + Shorts included</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
