import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Star, BookOpen, Users, ShieldCheck, ArrowUpRight, Lock } from 'lucide-react';
import { Course } from '../types';
import { SelarLogo } from './SelarLogo';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
  if (!course) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#050505]/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-3xl rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden my-8 text-left"
        >
          {/* Header Image Banner */}
          <div className="relative h-48 sm:h-64 overflow-hidden bg-[#050505]">
            <img
              src={course.image}
              alt={course.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
            
            <button
              onClick={onClose}
              id="close-course-modal-btn"
              className="absolute top-4 right-4 p-2 rounded-full bg-[#050505]/70 hover:bg-[#050505] text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {course.badge && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-orange-400 text-zinc-950 shadow-md">
                {course.badge}
              </span>
            )}
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center gap-3 text-xs text-zinc-400 mb-2">
                <span className="flex items-center gap-1 text-amber-400 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  {course.rating} ({course.reviewCount} reviews)
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-orange-400 font-medium">
                  <Users className="w-3.5 h-3.5" />
                  {course.studentCount} students enrolled
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                {course.title}
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {course.subtitle}
              </p>
            </div>

            {/* Pricing Callout & Selar Buy Button */}
            <div className="p-5 rounded-2xl bg-[#050505] border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-zinc-400 font-medium">Course Investment</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-white">₦{course.priceNgn.toLocaleString()}</span>
                  <span className="text-zinc-400 text-sm"> (~${course.priceUsd} USD)</span>
                </div>
                <p className="text-[11px] text-orange-400 font-medium mt-0.5">
                  ✓ Instant lifetime access on Selar after payment
                </p>
              </div>

              <a
                href={course.selarUrl}
                target="_blank"
                rel="noopener noreferrer"
                id={`modal-enroll-selar-${course.id}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 text-zinc-950 font-extrabold text-sm shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-[1.02] transition-all"
              >
                <SelarLogo size={18} showText={false} />
                <span>Enroll Now on Selar</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Key Takeaways */}
            <div>
              <h3 className="text-base font-bold text-white mb-3">What You Will Learn</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {course.keyTakeaways.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus Modules */}
            <div>
              <h3 className="text-base font-bold text-white mb-3 flex items-center justify-between">
                <span>Course Curriculum ({course.curriculum.length} Modules)</span>
                <span className="text-xs text-zinc-400 font-normal">Video & Worksheets</span>
              </h3>

              <div className="space-y-3">
                {course.curriculum.map((mod, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#050505]/60 border border-zinc-800">
                    <p className="text-sm font-bold text-zinc-200 mb-2">{mod.moduleTitle}</p>
                    <ul className="space-y-1.5 pl-2">
                      {mod.lessons.map((lesson, lIdx) => (
                        <li key={lIdx} className="flex items-center gap-2 text-xs text-zinc-400">
                          <BookOpen className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Audience */}
            <div className="p-4 rounded-xl bg-[#050505]/40 border border-zinc-800 text-xs text-zinc-300">
              <span className="font-bold text-white">Who this course is for: </span>
              {course.targetAudience}
            </div>

            {/* Footer Direct CTA */}
            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-zinc-400">Hosted securely on Selar.co</span>
              <a
                href={course.selarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1"
              >
                <span>Checkout on Selar Store</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
