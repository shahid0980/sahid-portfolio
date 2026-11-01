import React from 'react';
import { 
  ArrowUp, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  Heart 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  isDarkMode: boolean;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ isDarkMode, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t py-14 transition-colors ${
      isDarkMode 
        ? 'bg-[#080c14] border-slate-800 text-slate-400' 
        : 'bg-slate-100 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-800/60 dark:border-slate-800/60 border-slate-200">
          
          {/* Logo & Headline */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl font-bold tracking-tight text-white dark:text-white text-slate-900">
                Sahid Khan
              </span>
              <span className="text-teal-400 font-mono font-bold">//</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              Full Stack Developer • React, Next.js, TypeScript, Node.js &amp; AI-Assisted Workflows • Al Quoz, Dubai, UAE.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Selected Work</a>
            <a href="#github" className="hover:text-teal-400 transition-colors">GitHub</a>
            <a href="#education" className="hover:text-teal-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
            <button
              onClick={onOpenResume}
              className="text-teal-400 hover:underline cursor-pointer font-semibold"
            >
              Download Résumé
            </button>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl border border-slate-800 hover:border-teal-500/50 hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl border border-slate-800 hover:border-teal-500/50 hover:text-white transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl border border-slate-800 hover:border-teal-500/50 hover:text-white transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/30 hover:bg-teal-400 hover:text-slate-950 transition-all cursor-pointer ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Sahid Khan. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Dubai, UAE • Ready to contribute from day one</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
