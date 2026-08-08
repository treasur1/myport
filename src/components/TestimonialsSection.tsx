import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, Quote, MessageSquare, Award } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { SelarLogo } from './SelarLogo';

export const TestimonialsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filtered = activeFilter === 'All'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter((item) => item.type === activeFilter);

  return (
    <section id="testimonials" className="py-20 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold mb-4">
            <MessageSquare className="w-4 h-4 text-orange-400" />
            <span>Wall of Proof & Student Success</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            What Clients & <span className="text-orange-400">Selar Students</span> Say
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Real feedback from business founders, media buyers, and creators who transformed their revenue with Treasure's courses and growth consulting.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 mb-12">
          {['All', 'Course Student', 'Consulting Client'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === tab
                  ? 'bg-orange-500 text-zinc-950 shadow-md shadow-orange-500/20'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/40 transition-all flex flex-col justify-between text-left relative group shadow-xl"
            >
              <div>
                {/* Top Row: Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  {item.verifiedSelarBuyer ? (
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-[10px] font-bold">
                      <SelarLogo size={14} showText={false} />
                      <span>Verified Selar Student</span>
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300 text-[10px] font-bold">
                      {item.type}
                    </span>
                  )}
                </div>

                {/* Content */}
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{item.content}"
                </p>
              </div>

              {/* Bottom Client Info */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover border border-zinc-700"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.name}</h4>
                    <p className="text-xs text-zinc-400">{item.role} • <strong className="text-zinc-300">{item.company}</strong></p>
                  </div>
                </div>

                {item.metricsHighlight && (
                  <span className="hidden sm:inline-block px-3 py-1 rounded-lg bg-orange-500/10 text-orange-300 border border-orange-500/20 text-xs font-bold">
                    {item.metricsHighlight}
                  </span>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
