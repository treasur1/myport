import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Calendar, Send, CheckCircle2, MessageSquare, ArrowUpRight, Sparkles, X } from 'lucide-react';
import { ContactFormData } from '../types';
import { SelarLogo } from './SelarLogo';

interface ContactSectionProps {
  preselectedInquiry?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedInquiry }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'Consulting / Done-for-You',
    monthlyBudget: '₦200k - ₦500k ($250 - $600)',
    message: preselectedInquiry ? `I am interested in: ${preselectedInquiry}` : '',
    preferredDate: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-[#050505]/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold mb-4">
            <Calendar className="w-4 h-4 text-orange-400" />
            <span>Book a Strategy Call & Connect</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Let’s Scale Your <span className="text-orange-400">Revenue Together</span>
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Ready to build a predictable marketing funnel or need advice on Selar courses? Send a message or schedule a growth consultation directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left items-start">
          
          {/* Left Direct Channels Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Selar Account Banner Box */}
            <div className="p-6 rounded-3xl bg-zinc-900 border border-orange-500/40 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <SelarLogo size={24} showText={true} />
                <span className="px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-300 text-[10px] font-bold">
                  Instant Access
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-white">Have a Course or Selar Store Question?</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                You can browse all course curricula, preview sample video lessons, and buy instantly on Selar with multi-currency options.
              </p>

              <a
                href="https://selar.co/m/TreasureEwelike"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-selar-direct-btn"
                className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-zinc-950 font-black text-xs flex items-center justify-center gap-2 transition-colors shadow-md shadow-orange-500/20"
              >
                <span>Visit Treasure's Selar Account</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Contact Cards */}
            <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4">
              <h3 className="text-base font-bold text-white">Direct Communication Channels</h3>

              {/* WhatsApp Direct */}
              <a
                href="https://wa.me/2348000000000?text=Hi%20Treasure,%20I%20would%20like%20to%20discuss%20a%20marketing%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#050505] hover:bg-zinc-800 border border-zinc-800 hover:border-orange-500/40 transition-all text-xs text-zinc-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">WhatsApp Direct Chat</span>
                    <span className="text-zinc-400 text-[11px]">Fastest response time (&lt; 2 hrs)</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Email Direct */}
              <a
                href="mailto:treasure.ewelike@gmail.com"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#050505] hover:bg-zinc-800 border border-zinc-800 hover:border-orange-500/40 transition-all text-xs text-zinc-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Direct Email</span>
                    <span className="text-zinc-400 text-[11px]">treasure.ewelike@gmail.com</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Office & Availability */}
            <div className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-400 space-y-2">
              <p><strong className="text-white">Location:</strong> Lagos, Nigeria • Serving Clients Globally (US, UK, Africa)</p>
              <p><strong className="text-white">Strategy Calls:</strong> Monday – Saturday via Google Meet / Zoom</p>
            </div>

          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl relative">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                Send an Inquiry or Request a Consultation
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Fill out the details below and Treasure will reach out with a custom proposal or meeting invite.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amaka Johnson"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-zinc-800 text-white text-xs focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. amaka@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-zinc-800 text-white text-xs focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1">Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-zinc-800 text-white text-xs focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1">Inquiry Type</label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as any })}
                      className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-zinc-800 text-white text-xs focus:outline-none focus:border-orange-500 transition-colors"
                    >
                      <option value="Consulting / Done-for-You">Done-for-You Funnel / Meta Ads</option>
                      <option value="Course Inquiry">Course Inquiry / Selar Question</option>
                      <option value="Selar Store Question">1-on-1 Growth Audit Session</option>
                      <option value="Speaking / Workshop">Speaking / Keynote / Corporate Workshop</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1">Estimated Ad / Marketing Budget</label>
                    <select
                      value={formData.monthlyBudget}
                      onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-zinc-800 text-white text-xs focus:outline-none focus:border-orange-500 transition-colors"
                    >
                      <option value="Under ₦200k ($250)">Under ₦200k (~$250)</option>
                      <option value="₦200k - ₦500k ($250 - $600)">₦200k - ₦500k ($250 - $600)</option>
                      <option value="₦500k - ₦2M ($600 - $2,500)">₦500k - ₦2M ($600 - $2,500)</option>
                      <option value="₦2M+ ($2,500+)">₦2M+ ($2,500+ Enterprise)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1">Preferred Consultation Date</label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-zinc-800 text-white text-xs focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">Message / Project Goals *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell Treasure about your current marketing channels, revenue goals, or course questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-zinc-800 text-white text-xs focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  id="submit-contact-form-btn"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 text-zinc-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 hover:scale-[1.01] transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message & Book Consultation</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {submitted && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-md rounded-3xl bg-zinc-900 border border-orange-500/40 p-8 text-center space-y-4 shadow-2xl"
            >
              <div className="w-16 h-16 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-black text-white">Inquiry Received!</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Thank you, <strong className="text-orange-400">{formData.fullName}</strong>. Treasure has received your message regarding <strong className="text-white">{formData.inquiryType}</strong>. You will receive an email or WhatsApp response shortly.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs"
                >
                  Close Confirmation
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
