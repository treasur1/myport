import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, TrendingUp, CheckCircle2, Layers, Clock, Wrench, ArrowRight } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onBookCall: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose, onBookCall }) => {
  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#050505]/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-4xl rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden my-8 text-left"
        >
          {/* Header Image Banner */}
          <div className="relative h-56 sm:h-72 overflow-hidden bg-[#050505]">
            <img
              src={caseStudy.thumbnail}
              alt={caseStudy.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
            
            <button
              onClick={onClose}
              id="close-casestudy-modal-btn"
              className="absolute top-4 right-4 p-2 rounded-full bg-[#050505]/80 hover:bg-[#050505] text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500/20 text-orange-300 border border-orange-500/30 mb-2 inline-block">
                {caseStudy.category} Case Study
              </span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                {caseStudy.title}
              </h2>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Top Stat Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#050505] border border-zinc-800 text-center sm:text-left">
              <div>
                <span className="text-xs text-zinc-400 font-medium block">{caseStudy.heroMetricLabel}</span>
                <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                  {caseStudy.heroMetric}
                </span>
              </div>
              {caseStudy.secondaryMetrics.map((m, idx) => (
                <div key={idx} className="border-t sm:border-t-0 sm:border-l border-zinc-800 pt-3 sm:pt-0 sm:pl-4">
                  <span className="text-xs text-zinc-400 font-medium block">{m.label}</span>
                  <span className="text-xl font-bold text-white">{m.value}</span>
                </div>
              ))}
            </div>

            {/* Client Context */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#050505]/50 border border-zinc-800 text-xs text-zinc-300">
              <div>
                <span className="text-zinc-400">Client: </span>
                <strong className="text-white font-semibold">{caseStudy.clientName}</strong> ({caseStudy.clientRole})
              </div>
              <div>
                <span className="text-zinc-400">Industry: </span>
                <strong className="text-orange-400 font-semibold">{caseStudy.clientIndustry}</strong>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-400">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{caseStudy.timeline}</span>
              </div>
            </div>

            {/* Challenge vs Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20">
                <h3 className="text-sm font-bold text-rose-400 mb-2 flex items-center gap-2">
                  <X className="w-4 h-4" /> The Initial Challenge
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-orange-500/5 border border-orange-500/20">
                <h3 className="text-sm font-bold text-orange-400 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Treasure's Growth Strategy
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Funnel Step-by-Step Architecture */}
            <div>
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-orange-400" />
                <span>Funnel Architecture Executed</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {caseStudy.funnelSteps.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#050505]/80 border border-zinc-800 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block mb-1">
                        Step {idx + 1}
                      </span>
                      <h4 className="text-xs font-bold text-white mb-1">{step.step}</h4>
                      <p className="text-[11px] text-zinc-400 line-clamp-3 mb-3">{step.description}</p>
                    </div>
                    <span className="inline-block px-2 py-1 rounded bg-orange-500/10 text-orange-300 font-mono text-[10px] font-bold w-fit">
                      {step.conversionRate}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Results Achieved */}
            <div>
              <h3 className="text-base font-bold text-white mb-3">Key Measurable Outcomes</h3>
              <div className="space-y-2">
                {caseStudy.results.map((res, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#050505]/60 border border-zinc-800/80 text-xs sm:text-sm text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Used */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-bold text-zinc-400 flex items-center gap-1 mr-2">
                <Wrench className="w-3.5 h-3.5 text-amber-400" /> Stack & Tools:
              </span>
              {caseStudy.toolsUsed.map((tool, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 text-xs font-mono">
                  {tool}
                </span>
              ))}
            </div>

            {/* Bottom CTA to Book Similar Campaign */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-950/50 via-zinc-900 to-zinc-900 border border-orange-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-white mb-1">Want similar growth for your brand?</h4>
                <p className="text-xs text-zinc-400">Book a strategy call to map out a custom growth funnel.</p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onBookCall();
                }}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-orange-500/20 hover:scale-105 transition-all shrink-0"
              >
                <span>Book Growth Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
