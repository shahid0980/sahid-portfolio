import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  GraduationCap, 
  Award, 
  Briefcase, 
  FileText 
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, SKILL_CATEGORIES, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, isDarkMode }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
${PERSONAL_INFO.name}
${PERSONAL_INFO.headline}
Location: ${PERSONAL_INFO.location}
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone}
LinkedIn: ${PERSONAL_INFO.linkedin}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.bio}

CORE SKILLS
${SKILL_CATEGORIES.map(c => `• ${c.category}: ${c.skills.join(', ')}`).join('\n')}

EXPERIENCE
${EXPERIENCES.map(e => `
${e.title} - ${e.company} (${e.period})
Location: ${e.location}
${e.points.map(p => ` - ${p}`).join('\n')}
Tools: ${e.tags.join(', ')}
`).join('\n')}

EDUCATION
${EDUCATION.degree} - ${EDUCATION.institution}, ${EDUCATION.location} (${EDUCATION.year})

CERTIFICATIONS
- ${CERTIFICATIONS[0].name} - ${CERTIFICATIONS[0].issuer} (Completed)
- ${CERTIFICATIONS[1].name} - ${CERTIFICATIONS[1].issuer} (In progress)
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in no-print">
      
      {/* Modal Container */}
      <div className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border shadow-2xl overflow-hidden ${
        isDarkMode ? 'bg-[#0f172a] border-slate-700 text-slate-100' : 'bg-white border-slate-300 text-slate-900'
      }`}>
        
        {/* Modal Top Bar */}
        <div className={`p-4 px-6 border-b flex items-center justify-between shrink-0 ${
          isDarkMode ? 'bg-[#0a0f1d] border-slate-800' : 'bg-slate-100 border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-teal-400" />
            <h3 className="font-bold text-base sm:text-lg">
              Résumé Preview — {PERSONAL_INFO.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-teal-400 text-slate-950 hover:bg-teal-300 transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                isDarkMode 
                  ? 'border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200' 
                  : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-700'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0 print:space-y-4 print:text-black">
          
          {/* Header */}
          <div className="border-b pb-6 border-slate-800 dark:border-slate-800 border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-teal-400 font-semibold text-base mt-1">
                  {PERSONAL_INFO.headline}
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-2 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-teal-400" />
                  <span>{PERSONAL_INFO.location}</span>
                  <span>•</span>
                  <span className="text-emerald-400 font-bold">{PERSONAL_INFO.availabilityBadge}</span>
                </div>
              </div>

              <div className="text-xs space-y-1 font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-teal-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-teal-400" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-teal-400" />
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                    linkedin.com/in/sahid-khan-073157157
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-teal-400 mb-2 font-bold">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 dark:text-slate-300 text-slate-700">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-teal-400 mb-3 font-bold">
              Technical & Operational Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.category} className="p-3 rounded-lg border border-slate-800 dark:border-slate-800 border-slate-200">
                  <span className="font-bold text-teal-400 block mb-1">{cat.category}</span>
                  <span className="text-slate-300 dark:text-slate-300 text-slate-700">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-teal-400 mb-4 font-bold">
              Work Experience
            </h2>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="border-l-2 border-teal-500/40 pl-4 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-bold text-base">{exp.title}</h3>
                    <span className="text-xs font-mono text-teal-400">{exp.period}</span>
                  </div>
                  <div className="text-xs text-slate-400">
                    {exp.company} • {exp.location}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 dark:text-slate-300 text-slate-700 pt-1">
                    {exp.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                  <div className="text-[11px] font-mono text-teal-400/90 pt-1">
                    Tools: {exp.tags.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-teal-400 mb-2 font-bold">
                Education
              </h2>
              <div className="p-4 rounded-xl border border-slate-800 dark:border-slate-800 border-slate-200 text-xs space-y-1">
                <div className="font-bold text-sm">{EDUCATION.degree}</div>
                <div className="text-slate-400">{EDUCATION.institution}, {EDUCATION.location}</div>
                <div className="text-teal-400 font-mono">Graduated: {EDUCATION.year}</div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-teal-400 mb-2 font-bold">
                Certifications
              </h2>
              <div className="p-4 rounded-xl border border-slate-800 dark:border-slate-800 border-slate-200 text-xs space-y-2">
                <div>
                  <div className="font-bold">{CERTIFICATIONS[0].name}</div>
                  <div className="text-slate-400">{CERTIFICATIONS[0].issuer} • Completed</div>
                </div>
                <div className="pt-2 border-t border-slate-800 dark:border-slate-800 border-slate-200">
                  <div className="font-bold">{CERTIFICATIONS[1].name}</div>
                  <div className="text-amber-400">{CERTIFICATIONS[1].issuer} • In progress</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
