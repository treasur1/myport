import React from 'react';
import { Shield, MessageCircle, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import { Currency, GenderCategory } from '../types';
import { WHATSAPP_NUMBER, WHATSAPP_FORMATTED } from '../data/jerseys';

interface FooterProps {
  currency: Currency;
  onToggleCurrency: (currency: Currency) => void;
  onSelectCategory: (gender: GenderCategory) => void;
  onOpenSizeGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currency,
  onToggleCurrency,
  onSelectCategory,
  onOpenSizeGuide,
}) => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-left">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-lime-400 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-lime-400 fill-lime-400/20" />
                </div>
              </div>
              <span className="font-athletic text-3xl font-black tracking-wider text-white">
                FLUXX <span className="text-lime-400">FC</span>
              </span>
            </div>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Your #1 destination for premium quality matchday and fan football jerseys. Men's kits, women's fits, kids full sets, and iconic vintage retros with custom player name & number heat-pressed vinyl printing.
            </p>

            <div className="flex items-center gap-2">
              <span className="text-[11px] text-zinc-500">Active Currency:</span>
              <button
                onClick={() => onToggleCurrency(currency === 'NGN' ? 'USD' : 'NGN')}
                className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-lime-400 font-bold text-xs hover:border-lime-500 transition-colors"
              >
                {currency === 'NGN' ? '₦ Nigerian Naira (NGN)' : '$ US Dollar (USD)'}
              </button>
            </div>
          </div>

          {/* Col 2: Shop by Gender */}
          <div className="space-y-3">
            <h4 className="font-athletic text-base font-bold text-white uppercase tracking-wider">
              SHOP JERSEYS
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('mens');
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className="hover:text-lime-400 transition-colors"
                >
                  Men's Club & National Kits
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('womens');
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className="hover:text-lime-400 transition-colors"
                >
                  Women's Tailored Kits
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('kids');
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className="hover:text-lime-400 transition-colors"
                >
                  Kids Full Sets (Top + Shorts)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('unisex');
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className="hover:text-lime-400 transition-colors"
                >
                  Unisex & Retro Classics
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Care & Guides */}
          <div className="space-y-3">
            <h4 className="font-athletic text-base font-bold text-white uppercase tracking-wider">
              HELP & GUIDES
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenSizeGuide}
                  className="hover:text-lime-400 transition-colors underline"
                >
                  Size Chart & Measurements
                </button>
              </li>
              <li>
                <span className="text-zinc-500">Custom Nameset Vinyl Printing</span>
              </li>
              <li>
                <span className="text-zinc-500">Sleeve Badges & UCL Patches</span>
              </li>
              <li>
                <span className="text-zinc-500">Care & Washing Instructions</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct WhatsApp Order */}
          <div className="space-y-3">
            <h4 className="font-athletic text-base font-bold text-white uppercase tracking-wider">
              ORDER & INQUIRIES
            </h4>
            <div className="space-y-2.5">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold hover:bg-emerald-500/20 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {WHATSAPP_FORMATTED}</span>
              </a>

              <p className="text-[11px] text-zinc-500 leading-relaxed">
                Response Time: &lt; 15 mins for stock checks, video proofs, and dispatch info.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>© {new Date().getFullYear()} FLUXX FC. All rights reserved. Premium Football Apparel.</p>
          <div className="flex items-center gap-4">
            <span>Fast Dispatch Worldwide</span>
            <span>•</span>
            <span className="text-zinc-400">WhatsApp: 2349015010957</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
