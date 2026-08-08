import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Workflow, TrendingUp, ShoppingBag, Target, CheckCircle2, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { SERVICES_DATA } from '../data/testimonials';
import { Service } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [expandedService, setExpandedService] = useState<string | null>(SERVICES_DATA[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Workflow': return <Workflow className="w-6 h-6 text-orange-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-amber-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-orange-400" />;
      case 'Target': return <Target className="w-6 h-6 text-amber-400" />;
      default: return <Sparkles className="w-6 h-6 text-orange-400" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span>Growth Consulting & Execution</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            How We Can <span className="text-orange-400">Work Together</span>
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Whether you need done-for-you paid ads management, a high-converting Selar launch funnel, or a 1-on-1 strategy audit, Treasure provides high-yield growth solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => {
            const isExpanded = expandedService === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-6 sm:p-8 rounded-3xl bg-zinc-900 border transition-all duration-300 text-left flex flex-col justify-between ${
                  isExpanded ? 'border-orange-500/60 shadow-xl shadow-orange-950/20' : 'border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#050505] border border-zinc-800 flex items-center justify-center">
                      {getIcon(service.iconName)}
                    </div>
                    {service.popular && (
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-orange-500/20 text-orange-300 border border-orange-500/30">
                        MOST REQUESTED
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 mb-4 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Expandable Deliverables */}
                  <div className="pt-4 border-t border-zinc-800 space-y-3">
                    <button
                      onClick={() => setExpandedService(isExpanded ? null : service.id)}
                      className="text-xs font-bold text-orange-400 flex items-center gap-1 hover:text-orange-300 transition-colors"
                    >
                      <span>{isExpanded ? 'Hide Key Deliverables' : 'View What’s Included'}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>

                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2 pt-2"
                      >
                        <p className="text-xs text-zinc-400 mb-2">{service.fullDesc}</p>
                        {service.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                        <div className="mt-3 p-3 rounded-xl bg-[#050505] border border-zinc-800/80 text-[11px] text-zinc-400">
                          <strong className="text-zinc-200">Ideal for: </strong>
                          {service.idealFor}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Service CTA */}
                <div className="pt-6 mt-6 border-t border-zinc-800">
                  <button
                    onClick={() => onSelectService(service.title)}
                    id={`select-service-btn-${service.id}`}
                    className="w-full py-3.5 rounded-xl bg-[#050505] hover:bg-orange-500 hover:text-zinc-950 border border-zinc-800 hover:border-orange-400 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all group"
                  >
                    <span>Inquire About {service.title.split('&')[0]}</span>
                    <ArrowRight className="w-4 h-4 text-orange-400 group-hover:text-zinc-950 group-hover:translate-x-1 transition-all" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
