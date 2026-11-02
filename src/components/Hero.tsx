import React, { useState } from 'react';
import {
  ArrowRight,
  Download,
  MapPin,
  Sparkles,
  Code2,
  Copy,
  Check,
  Activity,
  Smartphone,
  Database,
  Layers,
  Cpu
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  isDarkMode: boolean;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isDarkMode, onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'frontend' | 'backend' | 'ai'>('frontend');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="hero"
      className={`relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden transition-colors ${isDarkMode ? 'bg-[#0b0f19] text-white' : 'bg-slate-50 text-slate-900'
        }`}
    >
      {/* Background Grid & Atmospheric Neon Glows */}
      <div
        className={`absolute inset-0 pointer-events-none ${isDarkMode ? 'bg-grid-cyber opacity-70' : 'bg-grid-cyber-light opacity-50'
          }`}
      />

      {/* Radial Glows matching screenshot */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headline, Summary & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Kicker Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.35)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>HI, I'M SAHID KHAN</span>
            </div>

            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Based in the UAE • Ready to contribute from day one</span>
              <span className="text-slate-500 dark:text-slate-400">|</span>
              <span className="flex items-center gap-1 text-slate-300 dark:text-slate-300">
                <MapPin className="w-3 h-3 text-teal-400" />
                Al Quoz, Dubai
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5">
              <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>
                Full Stack Developer
              </span>
              <span className="block mt-2 bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                React •JavaScript • Python • Node.js
              </span>
            </h1>

            {/* Resume Summary / Bio */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mb-8 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
              Full Stack Developer with a BCA degree who designs, builds and deploys fast, SEO-optimized web and mobile applications using{' '}
              <strong className="text-teal-400 font-semibold">React, Next.js, TypeScript, Node.js, Python</strong> and{' '}
              <strong className="text-cyan-400 font-semibold">PostgreSQL</strong>. Experienced in delivering production platforms from UI and database to domain, hosting, and performance optimization with an <strong className="text-indigo-400 font-semibold">AI-first workflow</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              {/* Primary Glowing Button */}
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.55)] hover:shadow-[0_0_35px_rgba(20,184,166,0.7)] cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              {/* Secondary Resume Button */}
              <button
                onClick={onOpenResume}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${isDarkMode
                  ? 'bg-slate-900/90 text-white border border-slate-700/80 hover:border-teal-400/80 hover:bg-slate-800 hover:shadow-[0_0_20px_rgba(20,184,166,0.25)]'
                  : 'bg-white text-slate-800 border border-slate-300 hover:border-teal-500 hover:bg-slate-50 shadow-sm'
                  }`}
              >
                <Download className="w-4 h-4 text-teal-400" />
                <span>View Résumé</span>
              </button>

              {/* Quick Copy Email */}
              <button
                onClick={handleCopyEmail}
                className={`inline-flex items-center gap-1.5 px-4 py-3.5 rounded-full text-xs font-mono transition-all ${isDarkMode
                  ? 'text-slate-400 hover:text-white bg-slate-900/40 border border-slate-800 hover:border-slate-700'
                  : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
                  }`}
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>{PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Fast Stats Bar */}
            <div className={`pt-6 border-t w-full grid grid-cols-2 sm:grid-cols-4 gap-4 ${isDarkMode ? 'border-slate-800/80' : 'border-slate-200'
              }`}>
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-teal-400">Role</span>
                <span className={`text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  Full Stack Developer
                </span>
              </div>
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-teal-400">Location</span>
                <span className={`text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  Dubai, UAE (On-Site/Hybrid)
                </span>
              </div>
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-teal-400">Workflow</span>
                <span className={`text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  AI-Assisted Engineering
                </span>
              </div>
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-teal-400">Education</span>
                <span className={`text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  BCA (2022–2025)
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code & Architecture Studio */}
          <div className="lg:col-span-5 relative">

            {/* Floating Tech Badges */}
            <div className="absolute -top-6 -right-2 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1628]/95 border border-teal-500/40 text-teal-300 text-xs font-mono shadow-[0_0_15px_rgba(20,184,166,0.35)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <span>React & Next.js</span>
            </div>

            <div className="absolute top-20 -left-6 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1628]/95 border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-[0_0_15px_rgba(6,182,212,0.35)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>TypeScript & Node</span>
            </div>

            <div className="absolute top-44 -right-6 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1628]/95 border border-indigo-500/40 text-indigo-300 text-xs font-mono shadow-[0_0_15px_rgba(99,102,241,0.35)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span>PostgreSQL & Prisma</span>
            </div>

            <div className="absolute -bottom-4 right-10 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1628]/95 border border-emerald-500/40 text-emerald-300 text-xs font-mono shadow-[0_0_15px_rgba(16,185,129,0.35)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>React Native / Expo</span>
            </div>

            {/* Glowing Main Studio Card */}
            <div className={`relative rounded-2xl border transition-all duration-300 overflow-hidden shadow-2xl ${isDarkMode
              ? 'bg-[#0f172a]/95 border-slate-700/80 shadow-[0_0_35px_rgba(15,23,42,0.8)]'
              : 'bg-white border-slate-300 shadow-xl'
              }`}>

              {/* Studio Window Bar */}
              <div className={`px-4 py-3 border-b flex items-center justify-between ${isDarkMode ? 'bg-[#090d16] border-slate-800' : 'bg-slate-100 border-slate-200'
                }`}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/90" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/90" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
                  <span className="text-[11px] font-mono text-slate-400 ml-2 hidden sm:inline">
                    sahid-dev@dubai: ~/workspace
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-teal-400">
                  <Activity className="w-3.5 h-3.5 animate-pulse text-teal-400" />
                  <span className="text-[11px]">Production Live</span>
                </div>
              </div>

              {/* Code Editor Tabs */}
              <div className={`flex border-b text-xs font-mono ${isDarkMode ? 'bg-[#0b101d] border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                <button
                  onClick={() => setActiveTab('frontend')}
                  className={`px-3.5 py-2 transition-colors cursor-pointer border-r ${activeTab === 'frontend'
                    ? isDarkMode
                      ? 'bg-[#11192d] text-teal-300 border-b-2 border-b-teal-400 border-r-slate-800'
                      : 'bg-white text-teal-700 border-b-2 border-b-teal-500 border-r-slate-200 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 border-r-slate-800/40'
                    }`}
                >
                  fihorizon-page.tsx
                </button>
                <button
                  onClick={() => setActiveTab('backend')}
                  className={`px-3.5 py-2 transition-colors cursor-pointer border-r ${activeTab === 'backend'
                    ? isDarkMode
                      ? 'bg-[#11192d] text-cyan-300 border-b-2 border-b-cyan-400 border-r-slate-800'
                      : 'bg-white text-cyan-700 border-b-2 border-b-cyan-500 border-r-slate-200 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 border-r-slate-800/40'
                    }`}
                >
                  api-server.ts
                </button>
                <button
                  onClick={() => setActiveTab('ai')}
                  className={`px-3.5 py-2 transition-colors cursor-pointer ${activeTab === 'ai'
                    ? isDarkMode
                      ? 'bg-[#11192d] text-indigo-300 border-b-2 border-b-indigo-400'
                      : 'bg-white text-indigo-700 border-b-2 border-b-indigo-500 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                    }`}
                >
                  ai-pipeline.config
                </button>
              </div>

              {/* Code Snippet Display */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto min-h-[260px]">
                {activeTab === 'frontend' && (
                  <div className="space-y-1.5 text-slate-300">
                    <p className="text-slate-500">// Next.js + Tailwind + Framer Motion UI Component</p>
                    <p><span className="text-indigo-400">export default function</span> <span className="text-teal-300">FiHorizonHero</span>() &#123;</p>
                    <p className="pl-4"><span className="text-cyan-400">const</span> &#123; isLoaded &#125; = <span className="text-yellow-300">usePageReady</span>();</p>
                    <p className="pl-4"><span className="text-indigo-400">return</span> (</p>
                    <p className="pl-8">&lt;<span className="text-teal-400">motion.div</span> <span className="text-cyan-300">initial</span>=&#123;&#123; opacity: 0, y: 15 &#125;&#125;</p>
                    <p className="pl-12"><span className="text-cyan-300">animate</span>=&#123;&#123; opacity: 1, y: 0 &#125;&#125;</p>
                    <p className="pl-12"><span className="text-cyan-300">className</span>=<span className="text-emerald-300">"grid grid-cols-1 md:grid-cols-2 gap-8"</span>&gt;</p>
                    <p className="pl-12">&lt;<span className="text-teal-400">RealEstateListing</span> <span className="text-cyan-300">domain</span>=<span className="text-emerald-300">"fihorizon.in"</span> /&gt;</p>
                    <p className="pl-8">&lt;/<span className="text-teal-400">motion.div</span>&gt;</p>
                    <p className="pl-4">);</p>
                    <p>&#125;</p>
                    <p className="text-emerald-400 pt-1">✔ Core Web Vitals score: 98/100 • SEO Optimized</p>
                  </div>
                )}

                {activeTab === 'backend' && (
                  <div className="space-y-1.5 text-slate-300">
                    <p className="text-slate-500">// Node.js Express + Prisma ORM + PostgreSQL Service</p>
                    <p><span className="text-indigo-400">import</span> &#123; PrismaClient &#125; <span className="text-indigo-400">from</span> <span className="text-emerald-300">'@prisma/client'</span>;</p>
                    <p><span className="text-cyan-400">const</span> prisma = <span className="text-indigo-400">new</span> <span className="text-yellow-300">PrismaClient</span>();</p>
                    <p><span className="text-cyan-400">router</span>.<span className="text-yellow-300">post</span>(<span className="text-emerald-300">'/api/leads'</span>, <span className="text-indigo-400">async</span> (req, res) =&gt; &#123;</p>
                    <p className="pl-4"><span className="text-cyan-400">const</span> lead = <span className="text-indigo-400">await</span> prisma.propertyLead.<span className="text-yellow-300">create</span>(&#123;</p>
                    <p className="pl-8">data: &#123; email: req.body.email, status: <span className="text-emerald-300">'VERIFIED'</span> &#125;</p>
                    <p className="pl-4">&#125;);</p>
                    <p className="pl-4"><span className="text-indigo-400">return</span> res.status(201).json(&#123; success: <span className="text-teal-300">true</span>, lead &#125;);</p>
                    <p>&#125;);</p>
                    <p className="text-emerald-400 pt-1">✔ Connection pool active • JWT secured</p>
                  </div>
                )}

                {activeTab === 'ai' && (
                  <div className="space-y-1.5 text-slate-300">
                    <p className="text-slate-500"># AI-First Engineering Workflow Protocol</p>
                    <p className="text-teal-400">1. Prompt Engineering &amp; Architecture Outline</p>
                    <p className="text-slate-400">   Generated initial boilerplate for REST endpoints and typed schemas.</p>
                    <p className="text-teal-400">2. Refactoring, Debugging &amp; Test Writing</p>
                    <p className="text-slate-400">   AI assisted unit test generation across edge cases and route validation.</p>
                    <p className="text-teal-400">3. Human Review &amp; Security Validation</p>
                    <p className="text-emerald-400">   ✔ 100% manual code review for performance, auth, and query safety.</p>
                  </div>
                )}
              </div>

              {/* Bottom profile banner */}
              <div className={`p-4 border-t flex items-center justify-between ${isDarkMode ? 'bg-[#090d16] border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-teal-400 via-cyan-400 to-indigo-500 p-0.5 shadow-[0_0_15px_rgba(20,184,166,0.5)]">
                      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center font-bold text-teal-300 text-sm">
                        SK
                      </div>
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900" />
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-white dark:text-white text-slate-900">Sahid Khan</h2>
                    <p className="text-[11px] text-teal-400">Full Stack Web &amp; Mobile Developer</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 rounded text-[11px] font-mono bg-teal-500/10 text-teal-300 border border-teal-500/30">
                    UAE Ready
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
