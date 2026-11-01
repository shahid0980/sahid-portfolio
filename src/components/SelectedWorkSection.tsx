import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  ChevronRight, 
  Sparkles, 
  Terminal, 
  Database, 
  BarChart, 
  CheckCircle, 
  Info,
  X
} from 'lucide-react';
import { SELECTED_WORK } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectsProps {
  isDarkMode: boolean;
}

export const SelectedWorkSection: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section 
      id="projects" 
      className={`py-24 transition-colors relative border-t ${
        isDarkMode 
          ? 'bg-[#0b0f19] border-slate-800 text-white' 
          : 'bg-slate-50 border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Practical Implementations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Selected Work
          </h2>
          <p className={`mt-2 text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Representative cases demonstrating reporting automation, data integrity reconciliation, and end-user system recovery.
          </p>
        </div>

        {/* Notice for Sahid to easily replace placeholders */}
        <div className={`mb-10 p-4 rounded-xl border flex items-center gap-3 max-w-3xl mx-auto ${
          isDarkMode 
            ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' 
            : 'bg-amber-50 border-amber-200 text-amber-900'
        }`}>
          <Info className="w-5 h-5 shrink-0" />
          <p className="text-xs sm:text-sm leading-relaxed">
            <strong>Template placeholders enabled:</strong> These 3 projects reflect your experience from Fi Horizon and freelance client troubleshooting. You can customize the details anytime.
          </p>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SELECTED_WORK.map((proj) => (
            <div
              key={proj.id}
              className={`rounded-2xl border flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 overflow-hidden ${
                isDarkMode 
                  ? 'bg-[#0e1628]/85 border-slate-800/90 hover:border-teal-400/60 shadow-xl hover:shadow-[0_0_25px_rgba(20,184,166,0.2)]' 
                  : 'bg-white border-slate-200 hover:border-teal-500 shadow-md hover:shadow-xl'
              }`}
            >
              <div className="p-6 sm:p-7 flex-1">
                {/* Category & Placeholder Banner */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-teal-500/10 text-teal-300 border border-teal-500/25">
                    {proj.category}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    [Placeholder]
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold mb-3 leading-snug group-hover:text-teal-400 transition-colors">
                  {proj.title}
                </h3>

                {/* Summary */}
                <p className={`text-xs leading-relaxed mb-5 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {proj.summary}
                </p>

                {/* Problem & Solution Mini Specs */}
                <div className={`p-3.5 rounded-xl border text-xs space-y-2.5 mb-5 ${
                  isDarkMode ? 'bg-[#0a0f1d] border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div>
                    <span className="font-semibold text-rose-400 block mb-0.5">Problem Solved:</span>
                    <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>{proj.problem}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-teal-400 block mb-0.5">Solution & Tech:</span>
                    <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>{proj.solution}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                        isDarkMode 
                          ? 'bg-slate-900 text-slate-300 border border-slate-800' 
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className={`p-4 border-t flex items-center justify-between ${
                isDarkMode ? 'bg-[#090d16] border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="text-xs font-semibold text-teal-400 hover:text-teal-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>View Case Breakdown</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <a
                  href={proj.githubUrl || 'https://github.com/shahid0980'}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1"
                  title="View on GitHub"
                >
                  <span>Codebase</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Deep Dive Case Breakdown */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
            <div className={`w-full max-w-2xl rounded-2xl border p-6 sm:p-8 max-h-[90vh] overflow-y-auto ${
              isDarkMode 
                ? 'bg-[#0e1628] border-slate-700 text-white shadow-2xl' 
                : 'bg-white border-slate-300 text-slate-900 shadow-2xl'
            }`}>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="px-2.5 py-1 rounded text-xs font-mono bg-teal-500/20 text-teal-300 border border-teal-500/30">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold mt-2">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-5 text-sm pt-4 border-t border-slate-800">
                <div>
                  <h4 className="font-semibold text-teal-400 mb-1">Executive Summary</h4>
                  <p className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>
                    {selectedProject.summary}
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${
                  isDarkMode ? 'bg-[#0a0f1d] border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <h4 className="font-semibold text-rose-400 mb-1">Challenge & Context</h4>
                  <p className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>
                    {selectedProject.problem}
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${
                  isDarkMode ? 'bg-[#0a0f1d] border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <h4 className="font-semibold text-cyan-400 mb-1">Implemented Solution</h4>
                  <p className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>
                    {selectedProject.solution}
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${
                  isDarkMode ? 'bg-[#0a0f1d] border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <h4 className="font-semibold text-emerald-400 mb-1">Business Impact & Operational Value</h4>
                  <p className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>
                    {selectedProject.impact}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-400 mb-2 font-mono text-xs uppercase">Technologies Deployed</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-teal-500/10 text-teal-300 border border-teal-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 rounded-full text-xs font-bold bg-teal-400 text-slate-950 hover:bg-teal-300 cursor-pointer"
                  >
                    Close Breakdown
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
