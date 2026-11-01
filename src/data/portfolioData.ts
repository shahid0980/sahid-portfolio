import { SkillCategory, ExperienceItem, ProjectItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Sahid Khan',
  headline: 'IT Support Specialist | Microsoft 365 & SaaS Support',
  subheading: 'Supporting users, stabilizing systems & powering cloud workflows.',
  location: 'Al Quoz, Dubai, UAE',
  availabilityBadge: 'Available to join immediately, on-site',
  bio: 'IT Support and SaaS-focused technical specialist with a BCA and hands-on experience in end-user troubleshooting, ticketing workflows, and cloud/SaaS applications. Experienced in Microsoft Office 365, Jira Service Management, and CRM-style reporting and dashboards. Comfortable with network troubleshooting, documentation, and supporting both technical and non-technical users. Familiar with AI tools such as ChatGPT and Claude.',
  email: 'sahidk0980@gmail.com',
  phone: '+971 56 373 0390',
  whatsappUrl: 'https://wa.me/971563730390',
  linkedin: 'https://www.linkedin.com/in/sahid-khan-073157157/',
  github: 'https://github.com/shahid0980',
  githubUsername: 'shahid0980',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'End-User IT Support',
    icon: 'Headphones',
    description: 'First-response resolution, incident handling, and user documentation.',
    skills: [
      'Troubleshooting',
      'Incident Lifecycle',
      'Ticketing (Jira Service Management)',
      'Technical Documentation',
      'User Handover Guides',
    ],
  },
  {
    category: 'Microsoft 365',
    icon: 'Cloud',
    description: 'Enterprise productivity suite, user setup & troubleshooting.',
    skills: [
      'Microsoft Office 365',
    ],
  },
  {
    category: 'SaaS & Cloud',
    icon: 'Layers',
    description: 'Cloud service reliability, application connectivity, and endpoints.',
    skills: [
      'SaaS business applications',
      'Cloud database instances',
      'REST API troubleshooting',
      'GitHub',
    ],
  },
  {
    category: 'Networking',
    icon: 'Network',
    description: 'Network protocol diagnostics, routing checks, and secure access.',
    skills: [
      'TCP/IP',
      'DNS',
      'DHCP',
      'HTTP/HTTPS',
      'VPN and Port Connectivity',
    ],
  },
  {
    category: 'Dashboards & Reporting',
    icon: 'BarChart3',
    description: 'Data transformation, discrepancy reconciliation, and business BI.',
    skills: [
      'Power BI',
      'Advanced Excel (PivotTables, XLOOKUP)',
      'SQL (MySQL, PostgreSQL)',
    ],
  },
  {
    category: 'Automation',
    icon: 'Cpu',
    description: 'Scripting repetitive business processes and data extraction.',
    skills: [
      'Python (Pandas, NumPy)',
      'Excel Macros/VBA',
    ],
  },
  {
    category: 'AI Tools',
    icon: 'Sparkles',
    description: 'Accelerating documentation, troubleshooting, and daily productivity.',
    skills: [
      'ChatGPT',
      'Claude (business and productivity use)',
    ],
  },
  {
    category: 'Languages',
    icon: 'Globe',
    description: 'Multilingual communication for diverse Dubai business environments.',
    skills: [
      'English',
      'Hindi',
      'Urdu',
      'Odia',
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    title: 'Account Analyst',
    company: 'Fi Horizon Pvt. Ltd. (Real Estate)',
    location: 'India',
    period: 'Jul 2025 – Jul 2026',
    isLatest: true,
    points: [
      'Supported internal teams by resolving data and reporting queries quickly, keeping reports accurate and on time.',
      'Designed Power BI dashboards and prepared daily and periodic reports for business users.',
      'Extracted, validated and reconciled records using SQL and Excel, resolving discrepancies independently.',
      'Built Python (Pandas) scripts to automate recurring tasks, reducing manual effort.',
    ],
    tags: ['Power BI', 'SQL', 'Advanced Excel', 'Python (Pandas)', 'Reporting & Analysis'],
  },
  {
    id: 'exp-2',
    title: 'Freelance Technical Support & Full Stack Developer',
    company: 'Independent',
    location: 'Project-based',
    period: 'Project-based',
    isLatest: false,
    points: [
      'Provided tier-2/tier-3 support to clients and end-users after deployment, with a customer-service focus.',
      'Diagnosed and resolved connectivity, API routing, host configuration and network issues across client environments.',
      'Configured and maintained cloud and local database instances, including backups and schema maintenance.',
      'Wrote system setup documentation and technical handover guides for non-technical users.',
      'Used GitHub for issue tracking and coordination with clients and external collaborators.',
    ],
    tags: ['Tier-2/3 Support', 'API Routing & Network', 'Cloud Databases', 'Technical Documentation', 'GitHub'],
  },
];

export const SELECTED_WORK: ProjectItem[] = [
  {
    id: 'proj-1',
    title: '[Replace with real project] Enterprise Power BI Reporting & Reconciliation Dashboard',
    category: 'Dashboards & Reporting',
    badge: 'Fi Horizon Pvt. Ltd.',
    summary: 'Centralized business intelligence dashboard extracting and reconciling real estate operational metrics with automated discrepancy checks.',
    problem: 'Business users and management faced manual data reconciliation delays and recurring report formatting errors across multiple property transaction records.',
    solution: 'Designed and deployed interactive Power BI dashboards integrated with SQL databases and Excel data feeds, adding automated verification formulas to eliminate mismatches.',
    impact: 'Streamlined periodic and daily report generation, ensuring 100% on-time report delivery and empowering non-technical stakeholders with self-serve visual analytics.',
    tags: ['Power BI', 'SQL', 'Excel XLOOKUP', 'Data Reconciliation'],
    githubUrl: 'https://github.com/shahid0980',
  },
  {
    id: 'proj-2',
    title: '[Replace with real project] Python & Pandas Workflow Automation Scripts',
    category: 'Automation & Scripting',
    badge: 'Automation Utility',
    summary: 'Automated recurring data ingestion, cleansing, and multi-sheet report generation to eliminate repetitive manual Excel workloads.',
    problem: 'Internal operational teams spent multiple hours daily manually copying, validating, and formatting transaction records from disparate raw sources.',
    solution: 'Engineered Python scripts using Pandas and NumPy to ingest raw exports, validate integrity against schema rules, and generate formatted output workbooks automatically.',
    impact: 'Cut repetitive manual reconciliation time significantly and eliminated human entry errors across recurring reporting cycles.',
    tags: ['Python', 'Pandas', 'NumPy', 'Task Automation', 'Excel Macros'],
    githubUrl: 'https://github.com/shahid0980',
  },
  {
    id: 'proj-3',
    title: '[Replace with real project] Client Cloud Database & REST API Troubleshooting Suite',
    category: 'Tier-2/3 Technical Support',
    badge: 'Freelance Support',
    summary: 'Multi-environment technical diagnostics and user handover documentation for client web platforms and hosted databases.',
    problem: 'Clients experienced intermittent REST API routing dropouts, host connection timeouts, and post-deployment database backup gaps.',
    solution: 'Diagnosed connectivity, DNS/HTTP headers, and port reachability; restructured database backup routines; authored comprehensive step-by-step handover guides for non-technical admins.',
    impact: 'Restored service reliability, decreased client ticket escalations, and established reliable documentation for administrative operations.',
    tags: ['REST API Diagnostics', 'Cloud Databases', 'TCP/IP & DNS', 'User Handover Guides', 'GitHub'],
    githubUrl: 'https://github.com/shahid0980',
  },
];

export const EDUCATION = {
  degree: 'Bachelor of Computer Applications (BCA)',
  institution: 'Utkal University',
  location: 'Odisha, India',
  year: '2025',
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: 'IBM Data Analytics Professional Certificate',
    issuer: 'Coursera (IBM)',
    status: 'Completed',
    modules: [
      'Data Analytics',
      'Excel for Data Analysis',
      'Data Visualization and Dashboards (Excel and Cognos)',
      'Python for Data Science/AI',
      'Databases and SQL with Python',
      'Data Analysis with Python',
      'Data Visualization with Python',
      'Generative AI for Data Analytics',
    ],
  },
  {
    name: 'Microsoft Dynamics 365 Course',
    issuer: 'Udemy',
    status: 'In progress',
    modules: [
      'Customer Engagement & CRM core modules',
      'Business Process Flows & Role-based security',
      'SaaS administration & entity management',
    ],
  },
];

// Fallback GitHub repos when API is rate-limited or offline
export const FALLBACK_REPOS = [
  {
    id: 101,
    name: 'powerbi-realestate-analytics',
    full_name: 'shahid0980/powerbi-realestate-analytics',
    html_url: 'https://github.com/shahid0980',
    description: '[Replace with real repo] Interactive Power BI dashboards and SQL query templates for automated periodic real estate analytics and reconciliation.',
    fork: false,
    archived: false,
    language: 'Power BI / DAX',
    stargazers_count: 3,
    forks_count: 1,
    updated_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
    topics: ['powerbi', 'sql-queries', 'data-reconciliation', 'dashboards'],
    isPlaceholder: true,
  },
  {
    id: 102,
    name: 'python-pandas-report-automator',
    full_name: 'shahid0980/python-pandas-report-automator',
    html_url: 'https://github.com/shahid0980',
    description: '[Replace with real repo] Python scripts leveraging Pandas and NumPy to automate recurring data extraction, validation, and multi-sheet reporting.',
    fork: false,
    archived: false,
    language: 'Python',
    stargazers_count: 4,
    forks_count: 2,
    updated_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 12).toISOString(),
    topics: ['python', 'pandas', 'automation', 'data-cleaning'],
    isPlaceholder: true,
  },
  {
    id: 103,
    name: 'it-support-troubleshooting-toolkit',
    full_name: 'shahid0980/it-support-troubleshooting-toolkit',
    html_url: 'https://github.com/shahid0980',
    description: '[Replace with real repo] Operational checklists, network diagnostic scripts, and handover documentation templates for SaaS and end-user support.',
    fork: false,
    archived: false,
    language: 'Shell / PowerShell',
    stargazers_count: 2,
    forks_count: 0,
    updated_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 21).toISOString(),
    topics: ['it-support', 'networking', 'documentation', 'm365'],
    isPlaceholder: true,
  },
];
