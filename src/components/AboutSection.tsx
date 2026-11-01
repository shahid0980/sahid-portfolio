import React from 'react';
import { 
  UserCheck, 
  MapPin, 
  Clock, 
  GraduationCap, 
  Languages, 
  Headphones, 
  ShieldCheck, 
  CheckCircle,
  FileText,
  Mail,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  isDarkMode: boolean;
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutProps> = ({ isDarkMode, onOpenResume }) => {
  const highlights = [
    {
      title: 'Immediate On-Site Availability',
      desc: 'Based in Al Quoz, Dubai, UAE with full mobility to join immediately on-site.',
      icon: Clock,
      color: 'text-emerald-400',
      border: 'border-emerald-500/30',
      bg: 'bg-emerald-500/10',
    },
    {
      title: 'End-User Empathy & Clarity',
      desc: 'Calm, patient troubleshooting for non-technical executives and team members alike.',
      icon: Headphones,
      color: 'text-teal-400',
      border: 'border-teal-500/30',
      bg: 'bg-teal-500/10',
    },
    {
      title: 'Process & Documentation',
      desc: 'Author of clear setup runbooks, user handover guides, and structured ticketing workflows.',
      icon: FileText,
      color: 'text-cyan-400',
      border: 'border-cyan-500/30',
      bg: 'bg-cyan-500/10',
    },
    {
      title: 'Data & Dashboard Fluency',
      desc: 'BCA background combined with Power BI, SQL, and Python (Pandas) automation capabilities.',
      icon: GraduationCap,
      color: 'text-indigo-400',
      border: 'border-indigo-500/30',
      bg: 'bg-indigo-500/10',
    },
  ];

  const languages = [
    { name: 'English', level: 'Professional Working Proficiency' },
    { name: 'Hindi', level: 'Native / Bilingual' },
    { name: 'Urdu', level: 'Fluent' },
    { name: 'Odia', level: 'Native' },
  ];

  return (
    <section 
      id="about" 
      className={`py-24 transition-colors relative border-t ${
        isDarkMode 
          ? 'bg-[#090d16] border-slate-800 text-white' 
          : 'bg-white border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-500/10 border border-teal-500/20 mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Profile & Value Proposition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            About Sahid Khan
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Built for fast scanning: here is how I bring technical stability, cloud efficiency, and responsive user care to your Dubai team.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Bio Card */}
          <div className={`lg:col-span-7 rounded-2xl p-8 border transition-all ${
            isDarkMode 
              ? 'bg-[#0e1628]/80 border-slate-800 shadow-xl' 
              : 'bg-slate-50 border-slate-200 shadow-sm'
          }`}>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-teal-400">#</span>
              <span>Professional Summary</span>
            </h3>

            <p className={`text-base leading-relaxed mb-6 ${
              isDarkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {PERSONAL_INFO.bio}
            </p>

            <div className={`p-4 rounded-xl border mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
              isDarkMode ? 'bg-[#0b101d] border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Current Location</div>
                  <div className="font-semibold text-sm">{PERSONAL_INFO.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Available Immediately
                </span>
              </div>
            </div>

            {/* Language Fluency */}
            <div>
              <h4 className="text-sm font-semibold mb-3 flex items-center gap-2 text-slate-400 font-mono uppercase tracking-wider">
                <Languages className="w-4 h-4 text-teal-400" />
                <span>Languages (Dubai Business Environment)</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      isDarkMode 
                        ? 'bg-slate-900/60 border-slate-800 hover:border-teal-500/40' 
                        : 'bg-white border-slate-200 hover:border-teal-400'
                    }`}
                  >
                    <div className="font-bold text-sm text-teal-400">{lang.name}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{lang.level}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions in About */}
            <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-all shadow-[0_0_15px_rgba(20,184,166,0.4)]"
              >
                Reach Out in Dubai
              </a>
              <button
                onClick={onOpenResume}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold border transition-all ${
                  isDarkMode 
                    ? 'border-slate-700 bg-slate-900 text-slate-200 hover:border-teal-400 hover:text-white' 
                    : 'border-slate-300 bg-white text-slate-800 hover:border-teal-500'
                }`}
              >
                View Full Résumé
              </button>
            </div>
          </div>

          {/* Right Highlights Column */}
          <div className="lg:col-span-5 space-y-4">
            {highlights.map((h, idx) => {
              const Icon = h.icon;
              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all duration-300 hover:translate-x-1 ${
                    isDarkMode 
                      ? 'bg-[#0e1628]/60 border-slate-800 hover:border-slate-700' 
                      : 'bg-slate-50/80 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${h.bg} ${h.color} border ${h.border} shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1">{h.title}</h4>
                      <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {h.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
