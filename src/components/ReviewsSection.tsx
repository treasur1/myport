import React from 'react';
import { Star, CheckCircle, MessageSquare } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/jerseys';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs font-bold">
            <MessageSquare className="w-4 h-4 text-lime-400" />
            <span>VERIFIED FAN REVIEWS</span>
          </div>

          <h2 className="font-athletic text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            WHAT OUR <span className="text-lime-400">SUPPORTERS</span> ARE SAYING
          </h2>

          <p className="text-zinc-400 text-xs sm:text-sm">
            Read real feedback from jersey collectors, matchday fans, and parents who buy from FLUXX FC.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between text-left space-y-4 shadow-xl"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-zinc-500 font-medium">{t.date}</span>
                </div>

                {/* Jersey Bought tag */}
                <div className="text-[10px] font-bold text-lime-400 bg-lime-400/10 px-2.5 py-1 rounded-md mb-3 border border-lime-500/20 truncate">
                  Ordered: {t.jerseyBought}
                </div>

                {/* Comment */}
                <p className="text-xs text-zinc-300 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              {/* User info */}
              <div className="pt-4 border-t border-zinc-800 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-zinc-700"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <h4 className="text-xs font-bold text-white">{t.name}</h4>
                    <CheckCircle className="w-3 h-3 text-emerald-400 fill-emerald-400/20" />
                  </div>
                  <span className="text-[10px] text-zinc-500">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
