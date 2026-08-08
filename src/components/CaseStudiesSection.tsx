import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, ArrowRight, Target, BarChart3, ChevronRight } from 'lucide-react';
import { CASE_STUDIES_DATA } from '../data/caseStudies';
import { CaseStudy } from '../types';
import { CaseStudyModal } from './CaseStudyModal';

interface CaseStudiesSectionProps {
  onBookCall: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onBookCall }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const categories = ['All', 'E-commerce', 'Info-Products', 'Lead Generation'];

  const filteredStudies = activeCategory === 'All'
    ? CASE_STUDIES_DATA
    : CASE_STUDIES_DATA.filter((study) => study.category === activeCategory);

  return (
    <section id="case-studies" className="py-20 bg-[#050505]/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold mb-4">
            <BarChart3 className="w-4 h-4 text-orange-400" />
            <span>Proven Track Record & Client Proof</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Growth & Revenue <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">Case Studies</span>
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Real data from real campaigns. Here is how Treasure engineered multi-million Naira sales funnels, scaled paid ad accounts, and launched top-charting courses on Selar.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 shadow-md shadow-orange-500/20'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl"
            >
              <div>
                {/* Image & Metric Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-[#050505]">
                  <img
                    src={study.thumbnail}
                    alt={study.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />

                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-extrabold bg-[#050505]/80 backdrop-blur-md text-orange-400 border border-orange-500/30">
                    {study.category}
                  </span>

                  <div className="absolute bottom-3 left-4 right-4 p-3 rounded-xl bg-[#050505]/90 backdrop-blur-md border border-zinc-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-400 block">{study.heroMetricLabel}</span>
                      <span className="text-xl font-black text-orange-400">{study.heroMetric}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-zinc-400 block">{study.secondaryMetrics[0]?.label}</span>
                      <span className="text-sm font-bold text-white">{study.secondaryMetrics[0]?.value}</span>
                    </div>
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-6 text-left">
                  <p className="text-xs text-zinc-400 mb-1 font-medium">
                    {study.clientName} • {study.clientIndustry}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-orange-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-xs text-zinc-300 line-clamp-3 leading-relaxed mb-4">
                    {study.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-6 pb-6 pt-0">
                <button
                  onClick={() => setSelectedCaseStudy(study)}
                  id={`read-casestudy-btn-${study.id}`}
                  className="w-full py-3 rounded-xl bg-[#050505] hover:bg-zinc-800 border border-zinc-800 hover:border-orange-500/40 text-zinc-200 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all group/btn"
                >
                  <span>Read Strategy & Funnel Teardown</span>
                  <ChevronRight className="w-4 h-4 text-orange-400 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Modal Detail View */}
        <CaseStudyModal
          caseStudy={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
          onBookCall={onBookCall}
        />

      </div>
    </section>
  );
};
