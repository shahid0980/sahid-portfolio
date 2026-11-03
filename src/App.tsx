/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { GitHubSection } from './components/GitHubSection';
import { EducationCertifications } from './components/EducationCertifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import ChatBot from './components/ChatBot';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  useEffect(() => {
    // Sync class on document root
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.body.className = 'bg-[#0b0f19] text-slate-100 antialiased selection:bg-teal-500/30 selection:text-teal-200';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.body.className = 'bg-slate-50 text-slate-900 antialiased selection:bg-teal-500/20 selection:text-teal-900';
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${isDarkMode ? 'bg-[#0b0f19] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>

      {/* Sticky Top Navigation */}
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          isDarkMode={isDarkMode}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* About Section */}
        <AboutSection
          isDarkMode={isDarkMode}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Grouped Skills Cards Section */}
        <SkillsSection
          isDarkMode={isDarkMode}
        />

        {/* Vertical Experience Timeline */}
        <ExperienceTimeline
          isDarkMode={isDarkMode}
        />

        {/* Selected Work (3 Cards) */}
        {/* <SelectedWorkSection
          isDarkMode={isDarkMode}
        /> */}

        {/* Dynamic GitHub Repos Section */}
        <GitHubSection
          isDarkMode={isDarkMode}
        />

        {/* Education & Certifications */}
        <EducationCertifications
          isDarkMode={isDarkMode}
        />

        {/* Contact Section (Direct links, No form tag) */}
        <ContactSection
          isDarkMode={isDarkMode}
        />
      </main>

      {/* Footer */}
      <Footer
        isDarkMode={isDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Résumé Modal with Print/PDF Export */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        isDarkMode={isDarkMode}
      />

      <ChatBot />
    </div>
  );
}
