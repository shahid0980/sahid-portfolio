import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  CheckCircle2, 
  Terminal, 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  Server, 
  Cloud, 
  Copy, 
  Check, 
  ExternalLink, 
  Briefcase 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  isDarkMode: boolean;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isDarkMode, onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'network' | 'm365' | 'tickets'>('network');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section 
      id="hero" 
      className={`relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden transition-colors ${
        isDarkMode ? 'bg-[#0b0f19] text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Background Grid & Atmospheric Neon Glows (matching reference image) */}
      <div 
        className={`absolute inset-0 pointer-events-none ${
          isDarkMode ? 'bg-grid-cyber opacity-70' : 'bg-grid-cyber-light opacity-50'
        }`} 
      />
      
      {/* Radial Glow 1 - Teal Left */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
      {/* Radial Glow 2 - Cyan Right */}
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      {/* Radial Glow 3 - Violet Bottom */}
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Kicker Tag - Replicated from Screenshot "HI, I'M ALEX CHEN" */}
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
              <span>{PERSONAL_INFO.availabilityBadge}</span>
              <span className="text-slate-500 dark:text-slate-400">|</span>
              <span className="flex items-center gap-1 text-slate-300 dark:text-slate-300">
                <MapPin className="w-3 h-3 text-teal-400" />
                Al Quoz, Dubai
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>
                IT Support Specialist
              </span>
              <span className="block mt-2 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
                Microsoft 365 & SaaS Support
              </span>
            </h1>

            {/* Bio Blurb */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mb-8 ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              IT Support and SaaS-focused technical specialist with a BCA and hands-on experience in 
              end-user troubleshooting, ticketing workflows, and cloud/SaaS applications. 
              Experienced in <strong className="text-teal-400 font-medium">Microsoft Office 365</strong>,{' '}
              <strong className="text-cyan-400 font-medium">Jira Service Management</strong>, and 
              reporting dashboards. Dedicated to fast incident turnaround and crystal-clear user handover.
            </p>

            {/* CTA Buttons - Matching screenshot's neon cyan button + dark secondary button */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              {/* Primary Glowing Button */}
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.55)] hover:shadow-[0_0_35px_rgba(20,184,166,0.7)] cursor-pointer"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              {/* Secondary Button */}
              <button
                onClick={onOpenResume}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isDarkMode
                    ? 'bg-slate-900/90 text-white border border-slate-700/80 hover:border-teal-400/80 hover:bg-slate-800 hover:shadow-[0_0_20px_rgba(20,184,166,0.25)]'
                    : 'bg-white text-slate-800 border border-slate-300 hover:border-teal-500 hover:bg-slate-50 shadow-sm'
                }`}
              >
                <Download className="w-4 h-4 text-teal-400" />
                <span>Download Résumé</span>
              </button>

              {/* Quick Copy Email button */}
              <button
                onClick={handleCopyEmail}
                className={`inline-flex items-center gap-1.5 px-4 py-3.5 rounded-full text-xs font-mono transition-all ${
                  isDarkMode
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
                    <span>sahidk0980@gmail.com</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Badges / Scanner Highlights */}
            <div className={`pt-6 border-t w-full grid grid-cols-2 sm:grid-cols-4 gap-4 ${
              isDarkMode ? 'border-slate-800/80' : 'border-slate-200'
            }`}>
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-teal-400">Target Role</span>
                <span className={`text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  IT Support / SaaS Admin
                </span>
              </div>
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-teal-400">Location</span>
                <span className={`text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  Dubai, UAE (On-Site)
                </span>
              </div>
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-teal-400">Availability</span>
                <span className={`text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  Immediate Joiner
                </span>
              </div>
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-teal-400">Education</span>
                <span className={`text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  BCA Graduate (2025)
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Replicated Tech Visual & Interactive Support Console */}
          <div className="lg:col-span-5 relative">
            
            {/* Floating Tech Badges (like in screenshot: React, Python, Go, Docker, PostgreSQL) */}
            <div className="absolute -top-6 -right-2 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1628]/95 border border-teal-500/40 text-teal-300 text-xs font-mono shadow-[0_0_15px_rgba(20,184,166,0.35)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <span>Microsoft 365</span>
            </div>

            <div className="absolute top-20 -left-6 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1628]/95 border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-[0_0_15px_rgba(6,182,212,0.35)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Jira Service Desk</span>
            </div>

            <div className="absolute top-44 -right-6 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1628]/95 border border-indigo-500/40 text-indigo-300 text-xs font-mono shadow-[0_0_15px_rgba(99,102,241,0.35)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span>Power BI & SQL</span>
            </div>

            <div className="absolute -bottom-4 right-10 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1628]/95 border border-teal-500/40 text-teal-300 text-xs font-mono shadow-[0_0_15px_rgba(20,184,166,0.35)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>TCP/IP • DNS • VPN</span>
            </div>

            {/* Glowing Main Card Container */}
            <div className={`relative rounded-2xl border transition-all duration-300 overflow-hidden shadow-2xl ${
              isDarkMode 
                ? 'bg-[#0f172a]/95 border-slate-700/80 shadow-[0_0_35px_rgba(15,23,42,0.8)]' 
                : 'bg-white border-slate-300 shadow-xl'
            }`}>
              
              {/* Console Window Header with red, yellow, green buttons */}
              <div className={`px-4 py-3 border-b flex items-center justify-between ${
                isDarkMode ? 'bg-[#090d16] border-slate-800' : 'bg-slate-100 border-slate-200'
              }`}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/90" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/90" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
                  <span className="text-[11px] font-mono text-slate-400 ml-2 hidden sm:inline">
                    it-support@dxb-terminal: ~
                  </span>
                </div>

                {/* Live System Indicator */}
                <div className="flex items-center gap-2 text-xs font-mono text-teal-400">
                  <Activity className="w-3.5 h-3.5 animate-pulse text-teal-400" />
                  <span className="text-[11px]">Dubai Node: ACTIVE</span>
                </div>
              </div>

              {/* Terminal Tabs */}
              <div className={`flex border-b text-xs font-mono ${
                isDarkMode ? 'bg-[#0b101d] border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <button
                  onClick={() => setActiveTab('network')}
                  className={`px-3.5 py-2 transition-colors cursor-pointer border-r ${
                    activeTab === 'network'
                      ? isDarkMode 
                        ? 'bg-[#11192d] text-teal-300 border-b-2 border-b-teal-400 border-r-slate-800' 
                        : 'bg-white text-teal-700 border-b-2 border-b-teal-500 border-r-slate-200 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 border-r-slate-800/40'
                  }`}
                >
                  diag-network.sh
                </button>
                <button
                  onClick={() => setActiveTab('m365')}
                  className={`px-3.5 py-2 transition-colors cursor-pointer border-r ${
                    activeTab === 'm365'
                      ? isDarkMode 
                        ? 'bg-[#11192d] text-cyan-300 border-b-2 border-b-cyan-400 border-r-slate-800' 
                        : 'bg-white text-cyan-700 border-b-2 border-b-cyan-500 border-r-slate-200 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 border-r-slate-800/40'
                  }`}
                >
                  m365-tenant.ps1
                </button>
                <button
                  onClick={() => setActiveTab('tickets')}
                  className={`px-3.5 py-2 transition-colors cursor-pointer ${
                    activeTab === 'tickets'
                      ? isDarkMode 
                        ? 'bg-[#11192d] text-indigo-300 border-b-2 border-b-indigo-400' 
                        : 'bg-white text-indigo-700 border-b-2 border-b-indigo-500 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  jira-queue.log
                </button>
              </div>

              {/* Console Body */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto min-h-[260px]">
                {activeTab === 'network' && (
                  <div className="space-y-2 text-slate-300">
                    <p className="text-slate-500 dark:text-slate-400"># Diagnostic: Verifying endpoint gateway & DNS resolution</p>
                    <p className="text-teal-400">$ ping -c 3 gateway.corp.dubai.internal</p>
                    <p className="text-slate-300">64 bytes from 10.14.0.1: icmp_seq=1 ttl=64 time=1.24 ms</p>
                    <p className="text-slate-300">64 bytes from 10.14.0.1: icmp_seq=2 ttl=64 time=1.18 ms</p>
                    <p className="text-emerald-400">✔ 0.0% packet loss — Core connectivity OK</p>
                    
                    <p className="text-teal-400 pt-1">$ nslookup outlook.office365.com</p>
                    <p className="text-slate-300">Server: 1.1.1.1 | Address: 52.96.166.130#443</p>
                    <p className="text-cyan-400">✔ DNS & Port 443 Handshake verified</p>

                    <p className="text-teal-400 pt-1">$ check-vpn-tunnel --status</p>
                    <p className="text-emerald-400">✔ WireGuard/IPsec Tunnel: CONNECTED (Al Quoz -&gt; Cloud VPC)</p>
                  </div>
                )}

                {activeTab === 'm365' && (
                  <div className="space-y-2 text-slate-300">
                    <p className="text-slate-500 dark:text-slate-400"># PowerShell: Microsoft 365 Exchange & Licensing Audit</p>
                    <p className="text-cyan-400">&gt; Connect-ExchangeOnline -UserPrincipalName admin@tenant.onmicrosoft.com</p>
                    <p className="text-emerald-400">✔ Authenticated via Modern MFA (Token valid)</p>
                    <p className="text-cyan-400 pt-1">&gt; Get-MsolUser -UserPrincipalName "user@company.ae" | Select DisplayName, IsLicensed</p>
                    <p className="text-slate-300">DisplayName: Executive Member | IsLicensed: True [M365 E3]</p>
                    <p className="text-cyan-400 pt-1">&gt; Set-Mailbox "user@company.ae" -AuditEnabled $true</p>
                    <p className="text-emerald-400">✔ Mailbox provisioned, MFA enforced, Teams license mapped.</p>
                  </div>
                )}

                {activeTab === 'tickets' && (
                  <div className="space-y-2 text-slate-300">
                    <p className="text-slate-500 dark:text-slate-400"># Jira Service Management Incident Queue</p>
                    <div className="p-2 rounded bg-slate-900/60 border border-slate-800">
                      <span className="text-emerald-400 font-semibold">[CLOSED]</span> <span className="text-slate-200">#JSM-2401: VPN handshake timeout on remote macOS</span>
                      <p className="text-slate-400 text-[11px] mt-0.5">Resolved: Re-issued client certificates & cleared DNS cache. Time to resolve: 14m</p>
                    </div>
                    <div className="p-2 rounded bg-slate-900/60 border border-slate-800">
                      <span className="text-emerald-400 font-semibold">[CLOSED]</span> <span className="text-slate-200">#JSM-2402: Power BI scheduled refresh failure (SQL credentials)</span>
                      <p className="text-slate-400 text-[11px] mt-0.5">Resolved: Re-authenticated gateway data source & updated connection string.</p>
                    </div>
                    <p className="text-teal-400 pt-1">SLA Compliance: 99.4% | CSAT Rating: 5.0 / 5.0</p>
                  </div>
                )}
              </div>

              {/* Bottom profile banner (matching circular avatar from screenshot) */}
              <div className={`p-4 border-t flex items-center justify-between ${
                isDarkMode ? 'bg-[#090d16] border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 p-0.5 shadow-[0_0_15px_rgba(20,184,166,0.5)]">
                      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center font-bold text-teal-300 text-sm">
                        SK
                      </div>
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900" />
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-white dark:text-white text-slate-900">Sahid Khan</h2>
                    <p className="text-[11px] text-teal-400">On-Site IT Support &amp; SaaS Admin</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-teal-500/10 text-teal-300 border border-teal-500/30">
                    Al Quoz, Dubai
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
