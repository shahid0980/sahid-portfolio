import React, { useState } from 'react';
import { 
  Layout, 
  Smartphone, 
  Server, 
  Database, 
  Sparkles, 
  GitBranch, 
  SearchCheck, 
  BarChart3, 
  Globe, 
  Search, 
  Check, 
  Copy, 
  SlidersHorizontal,
  Code2
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface SkillsProps {
  isDarkMode: boolean;
}

const iconMap: Record<string, React.ElementType> = {
  Layout,
  Smartphone,
  Server,
  Database,
  Sparkles,
  GitBranch,
  SearchCheck,
  BarChart3,
  Globe,
};

export const SkillsSection: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedSummary, setCopiedSummary] = useState(false);

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (selectedCategory !== 'All' && cat.category !== selectedCategory) {
      return false;
    }
    if (!searchTerm.trim()) return true;

    const term = searchTerm.toLowerCase();
    const matchesCat = cat.category.toLowerCase().includes(term);
    const matchesSkill = cat.skills.some((s) => s.toLowerCase().includes(term));
    return matchesCat || matchesSkill;
  });

  const handleCopySkills = () => {
    const text = SKILL_CATEGORIES.map((c) => `${c.category}: ${c.skills.join(', ')}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2200);
  };

  return (
    <section 
      id="skills" 
      className={`py-24 transition-colors relative border-t ${
        isDarkMode 
          ? 'bg-[#0b0f19] border-slate-800 text-white' 
          : 'bg-slate-50 border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Full Stack Engineering &amp; AI Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Core Skills &amp; Technical Stack
            </h2>
            <p className={`mt-2 text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} max-w-2xl`}>
              Directly aligned with modern web &amp; mobile development standards, from React/Next.js and Node.js to AI-assisted workflows and DevOps.
            </p>
          </div>

          {/* ATS Copy Button for Recruiters */}
          <button
            onClick={handleCopySkills}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono transition-all self-start md:self-auto cursor-pointer ${
              isDarkMode 
                ? 'bg-slate-900/90 text-teal-300 border border-slate-700/80 hover:border-teal-400/80' 
                : 'bg-white text-teal-800 border border-slate-300 hover:border-teal-500 shadow-sm'
            }`}
            title="Copy full skills text for ATS or Job Matching"
          >
            {copiedSummary ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-sans font-medium">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-teal-400" />
                <span className="font-sans font-medium">Copy Skills for ATS / Recruiter</span>
              </>
            )}
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-10">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-teal-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(20,184,166,0.4)]'
                    : isDarkMode
                      ? 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. Next.js, Prisma, Expo)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-xl text-xs transition-all border outline-none ${
                isDarkMode 
                  ? 'bg-slate-900/90 border-slate-800 text-white placeholder-slate-500 focus:border-teal-400' 
                  : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-teal-500 shadow-sm'
              }`}
            />
          </div>

        </div>

        {/* Grouped Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => {
            const Icon = iconMap[group.icon] || Code2;
            const isAiGroup = group.category === 'AI-Assisted Development';
            return (
              <div
                key={group.category}
                className={`rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                  isAiGroup && isDarkMode
                    ? 'bg-gradient-to-br from-[#0e1628] to-[#161c36] border-indigo-500/40 shadow-[0_0_20px_rgba(99,102,241,0.15)]'
                    : isDarkMode 
                      ? 'bg-[#0e1628]/80 border-slate-800/90 hover:border-teal-500/50 hover:shadow-[0_0_25px_rgba(20,184,166,0.15)]' 
                      : 'bg-white border-slate-200 hover:border-teal-400 hover:shadow-lg'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl border group-hover:scale-110 transition-transform ${
                      isAiGroup
                        ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                        : 'bg-teal-500/10 text-teal-400 border-teal-500/20'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base leading-tight">
                        {group.category}
                      </h3>
                      {isAiGroup && (
                        <span className="text-[10px] font-mono text-indigo-400 font-semibold uppercase">
                          AI-First Workflow
                        </span>
                      )}
                    </div>
                  </div>

                  <p className={`text-xs mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} leading-relaxed`}>
                    {group.description}
                  </p>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/40 dark:border-slate-800/40 border-slate-100">
                    {group.skills.map((skill) => {
                      const isHighlighted = searchTerm && skill.toLowerCase().includes(searchTerm.toLowerCase());
                      return (
                        <span
                          key={skill}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            isHighlighted
                              ? 'bg-teal-400 text-slate-950 font-bold scale-105 shadow-[0_0_10px_rgba(20,184,166,0.5)]'
                              : isAiGroup
                                ? isDarkMode
                                  ? 'bg-indigo-950/40 text-indigo-200 border border-indigo-500/30 hover:border-indigo-400'
                                  : 'bg-indigo-50 text-indigo-800 border border-indigo-200'
                                : isDarkMode
                                  ? 'bg-slate-900/90 text-slate-200 border border-slate-800/80 hover:border-teal-500/40 hover:text-teal-300'
                                  : 'bg-slate-100 text-slate-800 border border-slate-200 hover:border-teal-400 hover:text-teal-700'
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${isAiGroup ? 'bg-indigo-400' : 'bg-teal-400'}`} />
                          <span>{skill}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/30 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{group.skills.length} items</span>
                  <span className={isAiGroup ? 'text-indigo-400' : 'text-teal-400'}>Resume Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-sm">No skills found matching "{searchTerm}".</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="mt-3 text-xs text-teal-400 underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
