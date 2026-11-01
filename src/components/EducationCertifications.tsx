import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Building2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

interface EducationCertificationsProps {
  isDarkMode: boolean;
}

export const EducationCertifications: React.FC<EducationCertificationsProps> = ({ isDarkMode }) => {
  const [expandedIbm, setExpandedIbm] = useState(true);

  return (
    <section 
      id="education" 
      className={`py-24 transition-colors relative border-t ${
        isDarkMode 
          ? 'bg-[#0b0f19] border-slate-800 text-white' 
          : 'bg-slate-50 border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-500/10 border border-teal-500/20 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Academic & Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Education &amp; Certification
          </h2>
          <p className={`mt-2 text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Computer Applications degree backed by hands-on data analytics and full stack engineering expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Card */}
          <div className={`lg:col-span-6 rounded-2xl p-7 sm:p-8 border transition-all ${
            isDarkMode 
              ? 'bg-[#0e1628]/85 border-slate-800 shadow-xl' 
              : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-teal-400">Formal Degree</span>
                <h3 className="text-xl font-bold">University Education</h3>
              </div>
            </div>

            <div className={`p-5 rounded-xl border mb-6 ${
              isDarkMode ? 'bg-[#090d16] border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  Degree (BCA)
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-teal-400" />
                  {EDUCATION.year}
                </span>
              </div>

              <h4 className="text-lg font-bold text-white dark:text-white text-slate-900 mb-1">
                {EDUCATION.degree}
              </h4>

              <div className="space-y-1 text-sm text-teal-400 font-medium">
                <div className="flex items-start gap-2">
                  <Building2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span className={isDarkMode ? 'text-slate-200' : 'text-slate-700'}>{EDUCATION.institution}</span>
                </div>
                <div className="text-slate-400 text-xs pl-6">{EDUCATION.location}</div>
              </div>
            </div>

            <div className="space-y-3 text-xs leading-relaxed">
              <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
                <strong>Core Computer Science Focus:</strong> Data Structures, Database Management Systems (PostgreSQL/SQL), Web Technologies, Object-Oriented Software Engineering, and Computer Networks.
              </p>
              <p className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>
                Rigorous 3-year curriculum establishing deep foundational understanding of full-stack software architecture, algorithms, and application scalability.
              </p>
            </div>
          </div>

          {/* Certification Card */}
          <div className={`lg:col-span-6 rounded-2xl p-7 sm:p-8 border transition-all ${
            isDarkMode 
              ? 'bg-[#0e1628]/85 border-slate-800 shadow-xl' 
              : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1 font-semibold">
                      <Clock className="w-3 h-3 text-amber-400" />
                      In progress
                    </span>
                    <span className="text-xs font-mono text-slate-400">Coursera (IBM)</span>
                  </div>
                  <h3 className="text-lg font-bold mt-1">
                    {CERTIFICATIONS[0].name}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setExpandedIbm(!expandedIbm)}
                className="flex items-center gap-1 text-xs font-mono text-teal-400 hover:text-teal-300 self-start sm:self-auto cursor-pointer"
              >
                <span>{expandedIbm ? 'Hide Modules' : 'View Modules'}</span>
                {expandedIbm ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            <p className={`text-xs mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}>
              Comprehensive IBM professional curriculum focusing on Python data analysis, SQL databases, data visualization, and Generative AI for data-driven applications.
            </p>

            {/* Coursework Modules */}
            {expandedIbm && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-slate-800/60">
                {CERTIFICATIONS[0].modules?.map((mod, idx) => (
                  <div 
                    key={idx} 
                    className={`p-2.5 rounded-lg border text-xs flex items-center gap-2 ${
                      isDarkMode ? 'bg-[#090d16] border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-800'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span className="line-clamp-1">{mod}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
