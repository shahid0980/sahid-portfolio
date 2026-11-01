import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Linkedin, 
  Github, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink, 
  ShieldCheck,
  CalendarCheck,
  Code2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  isDarkMode: boolean;
}

export const ContactSection: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section 
      id="contact" 
      className={`py-24 transition-colors relative border-t ${
        isDarkMode 
          ? 'bg-[#090d16] border-slate-800 text-white' 
          : 'bg-white border-slate-200 text-slate-900'
      }`}
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card with glowing border */}
        <div className={`rounded-3xl p-8 sm:p-12 border transition-all ${
          isDarkMode 
            ? 'bg-[#0e1628]/95 border-teal-500/40 shadow-[0_0_40px_rgba(20,184,166,0.15)]' 
            : 'bg-slate-50 border-teal-500/30 shadow-xl'
        }`}>
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-500/15 border border-teal-500/30 mb-4">
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Available for Immediate Placement in UAE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Let's Build Something Amazing Together
            </h2>

            <p className={`text-base sm:text-lg leading-relaxed ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Looking for a Full Stack Developer in Dubai who can deliver fast, SEO-optimized web and mobile applications with modern React, Next.js, and an AI-first workflow? I am ready to contribute from day one.
            </p>
          </div>

          {/* Contact Direct Channels Grid (NO <form> TAG) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            
            {/* Email Channel */}
            <div className={`p-6 rounded-2xl border flex flex-col justify-between transition-all group ${
              isDarkMode 
                ? 'bg-[#090d16] border-slate-800 hover:border-teal-500/50' 
                : 'bg-white border-slate-200 hover:border-teal-400 shadow-sm'
            }`}>
              <div>
                <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 w-fit mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase text-slate-400">Direct Email</span>
                <p className="font-bold text-sm sm:text-base text-white dark:text-white text-slate-900 mt-1 break-all">
                  {PERSONAL_INFO.email}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center gap-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex-1 py-2 rounded-lg text-xs font-bold text-center bg-teal-400 text-slate-950 hover:bg-teal-300 transition-colors"
                >
                  Send Email
                </a>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-2 rounded-lg border border-slate-700 text-slate-400 hover:text-white cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone & Direct Call */}
            <div className={`p-6 rounded-2xl border flex flex-col justify-between transition-all group ${
              isDarkMode 
                ? 'bg-[#090d16] border-slate-800 hover:border-cyan-500/50' 
                : 'bg-white border-slate-200 hover:border-cyan-400 shadow-sm'
            }`}>
              <div>
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 w-fit mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase text-slate-400">Direct Call (UAE)</span>
                <p className="font-bold text-base text-white dark:text-white text-slate-900 mt-1">
                  {PERSONAL_INFO.phone}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center gap-2">
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex-1 py-2 rounded-lg text-xs font-bold text-center bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-colors"
                >
                  Call Now
                </a>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 rounded-lg border border-slate-700 text-slate-400 hover:text-white cursor-pointer"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* WhatsApp */}
            <div className={`p-6 rounded-2xl border flex flex-col justify-between transition-all group ${
              isDarkMode 
                ? 'bg-[#090d16] border-slate-800 hover:border-emerald-500/50' 
                : 'bg-white border-slate-200 hover:border-emerald-400 shadow-sm'
            }`}>
              <div>
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit mb-4">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase text-slate-400">Instant Chat</span>
                <p className="font-bold text-base text-white dark:text-white text-slate-900 mt-1">
                  WhatsApp Direct
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60">
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full block py-2 rounded-lg text-xs font-bold text-center bg-emerald-500 hover:bg-emerald-400 text-white transition-colors"
                >
                  Open WhatsApp Chat
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className={`p-6 rounded-2xl border flex flex-col justify-between transition-all group ${
              isDarkMode 
                ? 'bg-[#090d16] border-slate-800 hover:border-indigo-500/50' 
                : 'bg-white border-slate-200 hover:border-indigo-400 shadow-sm'
            }`}>
              <div>
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 w-fit mb-4">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase text-slate-400">Professional Network</span>
                <p className="font-bold text-base text-white dark:text-white text-slate-900 mt-1">
                  LinkedIn Profile
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold text-center bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                >
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Location & Relocation Readiness strip */}
          <div className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
            isDarkMode ? 'bg-[#090d16] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">Location &amp; Work Readiness</div>
                <div className="font-bold text-sm">Al Quoz, Dubai, UAE • Available for On-Site or Hybrid roles</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Ready to Join Immediately
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-teal-500/10 text-teal-300 border border-teal-500/30">
                <Code2 className="w-3.5 h-3.5 text-teal-400" />
                React • Next.js • Node.js
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
