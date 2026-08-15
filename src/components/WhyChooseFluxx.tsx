import React from 'react';
import { ShieldCheck, Sparkles, Truck, MessageCircle, Clock, Award } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_FORMATTED } from '../data/jerseys';

export const WhyChooseFluxx: React.FC = () => {
  const perks = [
    {
      icon: Award,
      title: '100% Match-Grade Quality',
      desc: 'Engineered with authentic breathable jacquard knit, heat-applied silicone crests, and original sponsor graphics that never peel.',
      color: 'text-lime-400',
      bg: 'bg-lime-400/10 border-lime-400/20'
    },
    {
      icon: Sparkles,
      title: 'Precision Vinyl Namesets',
      desc: 'Official club player font styling and sleeve patches (Champions League, Premier League gold badges, La Liga).',
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10 border-emerald-400/20'
    },
    {
      icon: Truck,
      title: 'Fast Dispatch & Tracking',
      desc: 'Same-day / next-day delivery in Lagos and express interstate courier across all Nigerian states, plus worldwide international DHL shipping.',
      color: 'text-teal-400',
      bg: 'bg-teal-400/10 border-teal-400/20'
    },
    {
      icon: MessageCircle,
      title: 'Direct WhatsApp Support',
      desc: `Speak directly with a kit specialist on WhatsApp (${WHATSAPP_FORMATTED}) for video confirmations and custom requests.`,
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10 border-emerald-400/20'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-zinc-950 border-t border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-lime-500/30 text-lime-400 text-xs font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>THE FLUXX FC STANDARD</span>
          </div>

          <h2 className="font-athletic text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            WHY OVER 5,000+ FOOTBALL LOVERS CHOOSE <span className="text-lime-400">FLUXX FC</span>
          </h2>

          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
            We don’t just sell jerseys — we deliver the exact look, feel, and championship pride of your favorite club and players straight to your doorstep.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all text-left space-y-4 shadow-lg group"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${perk.bg} ${perk.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-athletic text-xl font-bold text-white tracking-wide">
                  {perk.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quick WhatsApp Banner CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-lime-950/40 border border-lime-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <h3 className="font-athletic text-2xl sm:text-3xl font-black text-white">
              NEED A JERSEY NOT LISTED ON THE STORE?
            </h3>
            <p className="text-xs text-zinc-400">
              We source custom retro jerseys, basketball jerseys, and training tracksuits on demand.
            </p>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20FLUXX%20FC,%20I'm%20looking%20for%20a%20special%20jersey%20request.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-extrabold text-xs sm:text-sm flex items-center gap-2 shrink-0 transition-all shadow-lg shadow-lime-400/20"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Chat with Kit Specialist ({WHATSAPP_FORMATTED})</span>
          </a>
        </div>

      </div>
    </section>
  );
};
