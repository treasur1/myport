import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Users, ArrowUpRight, BookOpen, Sparkles, Check, Play } from 'lucide-react';
import { COURSES_DATA } from '../data/courses';
import { Course } from '../types';
import { CourseModal } from './CourseModal';
import { SelarLogo } from './SelarLogo';

export const CoursesSection: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <section id="courses" className="py-20 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold mb-4">
            <BookOpen className="w-4 h-4 text-orange-400" />
            <span>Digital Products & Masterclasses</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Courses & Playbooks on <span className="text-orange-400">Selar</span>
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Tested marketing frameworks, sales funnel templates, and media buying playbooks built for African & global creators. Hosted on Selar with multi-currency checkout.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {COURSES_DATA.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl bg-zinc-900 border border-zinc-800/80 overflow-hidden hover:border-orange-500/50 transition-all duration-300 flex flex-col group shadow-xl"
            >
              {/* Course Demo Banner */}
              <div className="relative h-52 sm:h-60 overflow-hidden bg-[#050505]">
                <img
                  src={course.image}
                  alt={course.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent" />
                
                {course.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-extrabold bg-orange-400 text-zinc-950 shadow-md">
                    {course.badge}
                  </span>
                )}

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#050505]/80 backdrop-blur-md border border-zinc-800 text-amber-400 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    {course.rating} ({course.reviewCount})
                  </span>
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#050505]/80 backdrop-blur-md border border-zinc-800 text-zinc-300 font-medium">
                    <Users className="w-3.5 h-3.5 text-orange-400" />
                    {course.studentCount} Students
                  </span>
                </div>
              </div>

              {/* Course Info */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between text-left space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 line-clamp-2 group-hover:text-orange-400 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2 mb-4">
                    {course.subtitle}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-2 border-t border-zinc-800/80">
                    {course.keyTakeaways.slice(0, 3).map((takeaway, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA Buttons */}
                <div className="pt-4 border-t border-zinc-800/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-zinc-400 block">Price on Selar</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-black text-white">₦{course.priceNgn.toLocaleString()}</span>
                        <span className="text-xs text-zinc-400 font-medium">(${course.priceUsd})</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedCourse(course)}
                      id={`preview-course-btn-${course.id}`}
                      className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold border border-zinc-700 transition-colors"
                    >
                      View Syllabus
                    </button>
                  </div>

                  {/* Direct Buy Button to Selar */}
                  <a
                    href={course.selarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`buy-selar-btn-${course.id}`}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 hover:opacity-95 text-zinc-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 transition-all group/btn"
                  >
                    <SelarLogo size={18} showText={false} />
                    <span>Enroll on Selar Store</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Course Modal Popup */}
        <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />

      </div>
    </section>
  );
};
