import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  FileText,
  Linkedin,
  Github,
  Sun,
  Moon,
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, setIsDarkMode, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'github', 'education', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    // { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'GitHub', href: '#github', id: 'github' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? isDarkMode
              ? 'bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30'
              : 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-md shadow-slate-200/50'
            : isDarkMode
              ? 'bg-transparent border-b border-transparent'
              : 'bg-transparent border-b border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#hero');
              }}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="text-xl md:text-2xl font-bold tracking-tight text-white dark:text-white text-slate-900 flex items-center">
                <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>
                  Sahid Khan
                </span>
                <span className="text-teal-400 group-hover:text-cyan-300 transition-colors ml-1 font-mono">
                  //
                </span>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-teal-500/10 text-teal-300 border border-teal-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                Full Stack Dev
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.href)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all cursor-pointer ${isActive
                        ? isDarkMode
                          ? 'text-teal-300 bg-teal-500/10 border border-teal-500/20'
                          : 'text-teal-700 bg-teal-50 border border-teal-200'
                        : isDarkMode
                          ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>

            {/* Action Buttons & Socials */}
            <div className="hidden md:flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                className={`p-2 rounded-xl border transition-all cursor-pointer ${isDarkMode
                    ? 'border-slate-800 bg-slate-900/80 text-slate-300 hover:text-amber-300 hover:border-slate-700'
                    : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-indigo-600 hover:border-slate-300'
                  }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
              </button>

              {/* GitHub Link */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                title="View GitHub Profile"
                className={`p-2 rounded-xl border transition-all ${isDarkMode
                    ? 'border-slate-800 bg-slate-900/80 text-slate-300 hover:text-white hover:border-slate-700'
                    : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-slate-900 hover:border-slate-300'
                  }`}
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              {/* LinkedIn Link */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                title="View LinkedIn Profile"
                className={`p-2 rounded-xl border transition-all ${isDarkMode
                    ? 'border-slate-800 bg-slate-900/80 text-slate-300 hover:text-teal-300 hover:border-slate-700'
                    : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-teal-700 hover:border-slate-300'
                  }`}
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* Glowing Résumé Button - replicated from screenshot */}
              <button
                onClick={onOpenResume}
                className="relative group px-5 py-2 rounded-full text-sm font-semibold text-teal-300 border-2 border-teal-400/80 hover:border-teal-300 bg-teal-950/30 hover:bg-teal-500/20 shadow-[0_0_15px_rgba(20,184,166,0.45)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all cursor-pointer flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-teal-300" />
                <span>Resume</span>
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping absolute -top-1 -right-1 opacity-75" />
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg border ${isDarkMode ? 'border-slate-800 text-slate-300' : 'border-slate-200 text-slate-700'
                  }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg border ${isDarkMode ? 'border-slate-800 text-white' : 'border-slate-200 text-slate-900'
                  }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden px-4 pt-2 pb-6 border-b transition-all ${isDarkMode
                ? 'bg-[#0e1424] border-slate-800 text-white shadow-2xl'
                : 'bg-white border-slate-200 text-slate-900 shadow-xl'
              }`}
          >
            <div className="flex flex-col gap-2 pt-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${activeSection === link.id
                      ? 'bg-teal-500/20 text-teal-300'
                      : isDarkMode
                        ? 'text-slate-300 hover:bg-slate-800/60'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                >
                  {link.name}
                </button>
              ))}

              <div className="pt-4 border-t border-slate-800/40 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl text-center font-semibold text-teal-300 border-2 border-teal-400/80 bg-teal-950/40 shadow-[0_0_15px_rgba(20,184,166,0.35)] flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  View & Download Résumé
                </button>

                <div className="flex items-center justify-around pt-2">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-teal-400"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-teal-400"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
