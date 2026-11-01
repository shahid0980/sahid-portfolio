import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Star, 
  GitFork, 
  Clock, 
  ExternalLink, 
  AlertCircle, 
  RotateCw, 
  Layers, 
  Code2, 
  Users, 
  BookOpen, 
  Check 
} from 'lucide-react';
import { GithubRepo, GithubProfile } from '../types';
import { FALLBACK_REPOS, PERSONAL_INFO } from '../data/portfolioData';

// Pin-style option: If names are provided, show those repos first, in that order.
export const PINNED_REPOS: string[] = [];

interface GitHubProps {
  isDarkMode: boolean;
}

const GITHUB_USERNAME = 'shahid0980';
const CACHE_KEY_REPOS = `gh_repos_${GITHUB_USERNAME}`;
const CACHE_KEY_PROFILE = `gh_profile_${GITHUB_USERNAME}`;
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes

// Color mapping for common programming languages
const languageColors: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  SQL: '#e38c00',
  Shell: '#89e051',
  PowerShell: '#012456',
  Java: '#b07219',
  'C++': '#f34b7d',
  'C#': '#178600',
  Go: '#00ADD8',
  Rust: '#dea584',
  PHP: '#4F5D95',
  'Power BI / DAX': '#f2c811',
};

// Relative time formatter helper
function formatRelativeTime(dateString: string): string {
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffSeconds < 60) return 'Just now';
    const diffMinutes = Math.floor(diffSeconds / 60);
    if (diffMinutes < 60) return `${diffMinutes}m ago`;
    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `${diffDays}d ago`;
    const diffWeeks = Math.floor(diffDays / 7);
    if (diffWeeks < 5) return `${diffWeeks} ${diffWeeks === 1 ? 'week' : 'weeks'} ago`;
    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths < 12) return `${diffMonths} ${diffMonths === 1 ? 'month' : 'months'} ago`;
    const diffYears = Math.floor(diffDays / 365);
    return `${diffYears} ${diffYears === 1 ? 'year' : 'years'} ago`;
  } catch {
    return 'Recently';
  }
}

export const GitHubSection: React.FC<GitHubProps> = ({ isDarkMode }) => {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRateLimited, setIsRateLimited] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');
  const [availableLanguages, setAvailableLanguages] = useState<string[]>(['All']);

  const fetchData = async (forceRefresh = false) => {
    setIsLoading(true);
    setIsRateLimited(false);
    setErrorMessage(null);

    // 1. Try cache if not forced
    if (!forceRefresh) {
      try {
        const cachedRepos = sessionStorage.getItem(CACHE_KEY_REPOS);
        const cachedProfile = sessionStorage.getItem(CACHE_KEY_PROFILE);
        const cachedTime = sessionStorage.getItem(`${CACHE_KEY_REPOS}_time`);

        if (cachedRepos && cachedProfile && cachedTime) {
          const age = Date.now() - parseInt(cachedTime, 10);
          if (age < CACHE_TTL_MS) {
            const parsedRepos: GithubRepo[] = JSON.parse(cachedRepos);
            const parsedProfile: GithubProfile = JSON.parse(cachedProfile);
            setRepos(parsedRepos);
            setProfile(parsedProfile);
            extractLanguages(parsedRepos);
            setIsLoading(false);
            return;
          }
        }
      } catch (err) {
        // Ignore sessionStorage read failure
        console.warn('SessionStorage read error:', err);
      }
    }

    // 2. Fetch runtime from GitHub API
    try {
      const [profileRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`),
      ]);

      if (profileRes.status === 403 || reposRes.status === 403) {
        throw new Error('GitHub API rate limit reached. Displaying offline projects.');
      }

      if (!profileRes.ok || !reposRes.ok) {
        throw new Error(`Failed to load GitHub activity (${reposRes.status}).`);
      }

      const profileData: GithubProfile = await profileRes.json();
      const rawRepos: GithubRepo[] = await reposRes.json();

      // Filter out forks and archived repos
      let cleanRepos = rawRepos.filter((r) => !r.fork && !r.archived);

      // Sort by updated_at descending
      cleanRepos.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

      // If PINNED_REPOS is specified, prioritize those
      if (PINNED_REPOS.length > 0) {
        cleanRepos.sort((a, b) => {
          const indexA = PINNED_REPOS.indexOf(a.name);
          const indexB = PINNED_REPOS.indexOf(b.name);
          if (indexA !== -1 && indexB !== -1) return indexA - indexB;
          if (indexA !== -1) return -1;
          if (indexB !== -1) return 1;
          return 0;
        });
      }

      // If user has fewer than 3 repos, fill with clearly marked fallbacks so section is rich
      if (cleanRepos.length === 0) {
        cleanRepos = FALLBACK_REPOS;
      }

      setProfile(profileData);
      setRepos(cleanRepos);
      extractLanguages(cleanRepos);

      // Cache in sessionStorage for 10 minutes
      try {
        sessionStorage.setItem(CACHE_KEY_REPOS, JSON.stringify(cleanRepos));
        sessionStorage.setItem(CACHE_KEY_PROFILE, JSON.stringify(profileData));
        sessionStorage.setItem(`${CACHE_KEY_REPOS}_time`, Date.now().toString());
      } catch (err) {
        console.warn('SessionStorage write error:', err);
      }

    } catch (err: any) {
      console.warn('GitHub API error:', err);
      setIsRateLimited(true);
      setErrorMessage(err.message || 'Unable to fetch recent repos from GitHub.');
      // Use fallback repos and fallback profile
      setRepos(FALLBACK_REPOS);
      extractLanguages(FALLBACK_REPOS);
      setProfile({
        login: GITHUB_USERNAME,
        name: PERSONAL_INFO.name,
        avatar_url: 'https://github.com/identicons/shahid0980.png',
        html_url: PERSONAL_INFO.github,
        public_repos: 3,
        followers: 1,
        bio: 'IT Support & Technical Specialist | Microsoft 365, Automation & Cloud Workflows',
        location: 'Dubai, UAE',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const extractLanguages = (repositoryList: GithubRepo[]) => {
    const langs = new Set<string>();
    repositoryList.forEach((r) => {
      if (r.language) langs.add(r.language);
    });
    setAvailableLanguages(['All', ...Array.from(langs)]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter repos by language
  const filteredRepos = repos.filter((r) => {
    if (selectedLanguage === 'All') return true;
    return r.language === selectedLanguage;
  });

  // Top 6 repos to show
  const displayRepos = filteredRepos.slice(0, 6);

  return (
    <section 
      id="github" 
      className={`py-24 transition-colors relative border-t ${
        isDarkMode 
          ? 'bg-[#090d16] border-slate-800 text-white' 
          : 'bg-white border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-500/10 border border-teal-500/20 mb-3">
              <Github className="w-3.5 h-3.5" />
              <span>Live Code & Automations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              GitHub Repositories
            </h2>
            <p className={`mt-2 text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} max-w-2xl`}>
              Direct runtime integration with <code className="text-teal-400 font-mono">@{GITHUB_USERNAME}</code> showing active scripts, troubleshooting tools, and open-source utilities.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => fetchData(true)}
              disabled={isLoading}
              className={`p-2.5 rounded-xl border text-xs transition-all cursor-pointer ${
                isDarkMode 
                  ? 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white hover:border-teal-400' 
                  : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-slate-900'
              }`}
              title="Refresh from GitHub API"
            >
              <RotateCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-teal-400' : ''}`} />
            </button>

            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-teal-400 text-slate-950 hover:bg-teal-300 shadow-[0_0_15px_rgba(20,184,166,0.35)] transition-all cursor-pointer"
            >
              <span>View All on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Profile Strip (Avatar, Repos, Followers) */}
        {profile && (
          <div className={`p-4 sm:p-5 rounded-2xl border mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all ${
            isDarkMode 
              ? 'bg-[#0e1628]/90 border-slate-800 shadow-lg' 
              : 'bg-slate-50 border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center gap-4">
              <img
                src={profile.avatar_url}
                alt={`${GITHUB_USERNAME} avatar`}
                className="w-14 h-14 rounded-full border-2 border-teal-400/80 shadow-[0_0_15px_rgba(20,184,166,0.4)] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://github.com/identicons/shahid0980.png';
                }}
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-base sm:text-lg">
                    {profile.name || GITHUB_USERNAME}
                  </h3>
                  <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-teal-400 hover:underline"
                  >
                    @{GITHUB_USERNAME}
                  </a>
                </div>
                <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} mt-0.5 line-clamp-1`}>
                  {profile.bio || 'IT Support & Technical Specialist'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs font-mono">
              <div className="text-center sm:text-right">
                <span className="block text-slate-400 text-[10px] uppercase">Public Repos</span>
                <span className="font-bold text-base text-teal-400">{profile.public_repos || repos.length}</span>
              </div>
              <div className="text-center sm:text-right">
                <span className="block text-slate-400 text-[10px] uppercase">Followers</span>
                <span className="font-bold text-base text-cyan-400">{profile.followers || 0}</span>
              </div>
              <div className="text-center sm:text-right">
                <span className="block text-slate-400 text-[10px] uppercase">Cache Status</span>
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400">
                  <Check className="w-3 h-3" /> Synced
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Rate-Limit / Fallback notice */}
        {isRateLimited && (
          <div className={`p-4 rounded-xl border mb-8 flex items-start gap-3 ${
            isDarkMode ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' : 'bg-amber-50 border-amber-200 text-amber-800'
          }`}>
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <p className="font-semibold">GitHub API Notice: {errorMessage}</p>
              <p className="mt-1 opacity-90">
                Displaying curated fallback project repositories marked with <code>[Replace with real repo]</code>. You can also view live repositories directly on GitHub.
              </p>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs font-bold underline"
              >
                Open @{GITHUB_USERNAME} on GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

        {/* Language Filter Row */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <span className="text-xs font-mono text-slate-400 mr-1 flex items-center gap-1">
            <Code2 className="w-3.5 h-3.5" /> Filter:
          </span>
          {availableLanguages.map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedLanguage === lang
                  ? 'bg-teal-400 text-slate-950 font-bold shadow-[0_0_12px_rgba(20,184,166,0.35)]'
                  : isDarkMode
                    ? 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Loading Skeletons */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className={`rounded-2xl p-6 border animate-pulse ${
                  isDarkMode ? 'bg-[#0e1628]/60 border-slate-800' : 'bg-slate-100 border-slate-200'
                }`}
              >
                <div className="h-5 bg-slate-700/50 rounded w-2/3 mb-4" />
                <div className="h-3 bg-slate-700/30 rounded w-full mb-2" />
                <div className="h-3 bg-slate-700/30 rounded w-4/5 mb-6" />
                <div className="flex items-center justify-between pt-4 border-t border-slate-800/40">
                  <div className="h-3 bg-slate-700/40 rounded w-20" />
                  <div className="h-3 bg-slate-700/40 rounded w-16" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Repository Cards (Responsive: 3 cols desktop, 2 cols tablet, 1 col mobile) */}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayRepos.map((repo) => {
              const langColor = repo.language ? languageColors[repo.language] || '#06b6d4' : '#94a3b8';
              return (
                <div
                  key={repo.id}
                  className={`rounded-2xl p-6 border flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 ${
                    isDarkMode 
                      ? 'bg-[#0e1628]/85 border-slate-800/90 hover:border-teal-500/50 shadow-lg hover:shadow-[0_0_20px_rgba(20,184,166,0.18)]' 
                      : 'bg-slate-50 border-slate-200 hover:border-teal-400 hover:shadow-lg'
                  }`}
                >
                  <div>
                    {/* Header: Repo Name + Link */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-base font-bold tracking-tight text-white dark:text-white text-slate-900 group-hover:text-teal-400 transition-colors flex items-center gap-1.5 break-all"
                      >
                        <BookOpen className="w-4 h-4 text-teal-400 shrink-0" />
                        <span>{repo.name}</span>
                      </a>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1 rounded text-slate-400 hover:text-white shrink-0"
                        title="View repository on GitHub"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Placeholder indicator if fallback */}
                    {repo.isPlaceholder && (
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
                        [Replace with real repo]
                      </span>
                    )}

                    {/* Description */}
                    <p className={`text-xs leading-relaxed mb-4 line-clamp-3 ${
                      isDarkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {repo.description || 'No description yet.'}
                    </p>

                    {/* Topic Tags */}
                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {repo.topics.slice(0, 3).map((topic) => (
                          <span
                            key={topic}
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                              isDarkMode 
                                ? 'bg-teal-500/10 text-teal-300 border border-teal-500/20' 
                                : 'bg-teal-50 text-teal-700 border border-teal-200'
                            }`}
                          >
                            #{topic}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Meta Footer */}
                  <div className="pt-4 border-t border-slate-800/40 dark:border-slate-800/40 border-slate-200 flex items-center justify-between text-xs font-mono text-slate-400">
                    {/* Primary Language with Colored Dot */}
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: langColor }}
                      />
                      <span>{repo.language || 'Documentation'}</span>
                    </div>

                    {/* Stars, Forks & Relative Time */}
                    <div className="flex items-center gap-3">
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1" title={`${repo.stargazers_count} stars`}>
                          <Star className="w-3.5 h-3.5 text-amber-400" />
                          <span>{repo.stargazers_count}</span>
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1" title={`${repo.forks_count} forks`}>
                          <GitFork className="w-3.5 h-3.5" />
                          <span>{repo.forks_count}</span>
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-[11px]" title="Last updated">
                        <Clock className="w-3 h-3 text-slate-500" />
                        <span>{formatRelativeTime(repo.updated_at)}</span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
