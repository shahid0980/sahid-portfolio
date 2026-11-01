import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  Terminal, 
  Layers, 
  TrendingUp, 
  Sparkles 
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

interface ExperienceProps {
  isDarkMode: boolean;
}

export const ExperienceTimeline: React.FC<ExperienceProps> = ({ isDarkMode }) => {
  return (
    <section 
      id="experience" 
      className={`py-24 transition-colors relative border-t ${
        isDarkMode 
          ? 'bg-[#090d16] border-slate-800 text-white' 
          : 'bg-white border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-500/10 border border-teal-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Track Record & Roles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Work Experience
          </h2>
          <p className={`mt-2 text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Professional software engineering experience spanning full-stack client web applications, mobile platforms, and technical data operations.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative">
          
          {/* Vertical Center/Left Line */}
          <div 
            className="absolute left-4 sm:left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-teal-400 via-cyan-500 to-indigo-500 opacity-60" 
          />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              return (
                <div key={exp.id} className="relative pl-12 sm:pl-20 group">
                  
                  {/* Glowing Node on Timeline */}
                  <div className={`absolute left-4 sm:left-8 -translate-x-1/2 top-1.5 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
                    exp.isLatest
                      ? 'bg-teal-400 text-slate-950 shadow-[0_0_20px_rgba(20,184,166,0.8)] ring-4 ring-teal-500/20'
                      : 'bg-slate-900 text-teal-400 border-2 border-teal-400/80 shadow-[0_0_12px_rgba(20,184,166,0.4)]'
                  }`}>
                    {exp.isLatest ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-950" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-teal-400" />
                    )}
                  </div>

                  {/* Experience Card */}
                  <div className={`rounded-2xl p-6 sm:p-8 border transition-all duration-300 group-hover:translate-x-1 ${
                    isDarkMode 
                      ? 'bg-[#0e1628]/90 border-slate-800 hover:border-teal-500/40 shadow-xl shadow-black/20' 
                      : 'bg-slate-50 border-slate-200 hover:border-teal-400 shadow-md'
                  }`}>
                    
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold tracking-tight">
                            {exp.title}
                          </h3>
                          {exp.isLatest && (
                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/40">
                              Most Recent
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-teal-400">
                          <span className="flex items-center gap-1.5">
                            <Building2 className="w-4 h-4 text-slate-400" />
                            <span className={isDarkMode ? 'text-slate-200' : 'text-slate-800'}>{exp.company}</span>
                          </span>
                          <span className="text-slate-500">•</span>
                          <span className="flex items-center gap-1 text-slate-400">
                            <MapPin className="w-3.5 h-3.5 text-teal-400" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Period Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-teal-500/10 text-teal-300 border border-teal-500/20 self-start sm:self-auto">
                        <Calendar className="w-3.5 h-3.5 text-teal-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <div className="space-y-3 mb-6 pt-3 border-t border-slate-800/40 dark:border-slate-800/40 border-slate-200">
                      {exp.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                          <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                            {pt}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      <span className="text-xs font-mono text-slate-400 mr-1">Tools & Scope:</span>
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2.5 py-1 rounded-md text-xs font-mono ${
                            isDarkMode 
                              ? 'bg-slate-900/90 text-teal-300 border border-slate-800' 
                              : 'bg-white text-teal-800 border border-slate-200 shadow-2xs'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
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
