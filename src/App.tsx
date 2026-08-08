/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SelarSection } from './components/SelarSection';
import { AboutSection } from './components/AboutSection';
import { CoursesSection } from './components/CoursesSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ServicesSection } from './components/ServicesSection';
import { RoiCalculator } from './components/RoiCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [preselectedService, setPreselectedService] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-orange-500 selection:text-zinc-950">
      {/* Sticky Fixed Header */}
      <Header activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Page Sections */}
      <main id="main-content">
        <Hero onNavigate={scrollToSection} />
        <SelarSection />
        <AboutSection onNavigate={scrollToSection} />
        <CoursesSection />
        <CaseStudiesSection onBookCall={() => scrollToSection('contact')} />
        <ServicesSection onSelectService={handleSelectService} />
        <RoiCalculator onBookCall={() => scrollToSection('contact')} />
        <TestimonialsSection />
        <ContactSection preselectedInquiry={preselectedService} />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
