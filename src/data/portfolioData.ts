import { ApplicationItem, CapabilityItem, DigitalContentItem, ExperienceItem, MetricCardData } from '../types';

export const PERSONAL_INFO = {
  name: 'RIA ARIYANTI, S.E.',
  brandName: 'RIA AI',
  tagline: 'Turn Limitations Into AI-Powered Solutions.',
  headline: 'AI Virtual Assistant | Accounting & Finance | Data Analytics | AI Automation | AI Application Developer',
  supportingText: 'I identify real-world limitations and turn them into practical AI-powered solutions.',
  email: 'riaariyanti.aisolutions@gmail.com',
  phone: '+62 812-2058-2081',
  phoneClean: '+6281220582081',
  location: 'Indonesia',
  availability: ['Remote', 'Freelance', 'Part-Time', 'Worldwide Opportunities'],
  aboutStatement:
    'My work starts with real problems. I analyze workflow limitations, design an AI-assisted solution, build a working application, and continuously test and improve the workflow.',
};

export const HERO_METRICS: MetricCardData[] = [
  {
    value: '15 Years',
    label: 'Finance, Accounting & Business Operations',
    sublabel: 'Solid corporate background in financial control & workflows',
  },
  {
    value: '3',
    label: 'Flagship AI Applications',
    sublabel: 'Custom end-to-end built systems solving real operational bottlenecks',
  },
  {
    value: '10,800+',
    label: 'YouTube Subscribers',
    sublabel: 'Organic audience built through consistent AI content workflows',
  },
  {
    value: '2.8M+',
    label: 'YouTube Views',
    sublabel: 'Demonstrated engagement with scalable digital video production',
  },
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Real Experience',
    desc: 'Rooted in 15 years of corporate finance, administrative oversight, and hands-on operational bottlenecks.',
    badge: 'Groundwork',
  },
  {
    step: '02',
    title: 'Problem / Limitation',
    desc: 'Isolating friction: fragmented data, language barriers, or creative prompt drift across disconnected tools.',
    badge: 'Diagnosis',
  },
  {
    step: '03',
    title: 'Analysis',
    desc: 'Deconstructing inputs, data models, logic dependencies, user requirements, and automation opportunities.',
    badge: 'Architecture',
  },
  {
    step: '04',
    title: 'AI Solution',
    desc: 'Designing specialized prompt structures, LLM pipelines, audio processing, and tailored assistance logic.',
    badge: 'Intelligence',
  },
  {
    step: '05',
    title: 'Working Application',
    desc: 'Building responsive, real-time functional software interfaces that unite workflows into a single hub.',
    badge: 'Development',
  },
  {
    step: '06',
    title: 'Testing & Improvement',
    desc: 'Iterative stress testing, VAD/audio verification, query validation, and ongoing refinement for maximum reliability.',
    badge: 'Refinement',
  },
];

export const CORE_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'ai-va',
    title: 'AI Virtual Assistance',
    category: 'AI & Engineering',
    description: 'Executive email triage, structured action task extraction, automated follow-ups, and calendar coordination.',
    tags: ['Triage', 'Executive Support', 'Task Extraction'],
  },
  {
    id: 'ai-dev',
    title: 'AI Application Development',
    category: 'AI & Engineering',
    description: 'Engineering responsive AI-assisted applications connecting UI frontends with intelligent logic and real-time processing.',
    tags: ['Full Lifecycle', 'App Architecture', 'Interface Design'],
  },
  {
    id: 'ai-auto',
    title: 'AI Automation',
    category: 'AI & Engineering',
    description: 'Eliminating repetitive human operational tasks through orchestrated multi-step agent and prompt pipelines.',
    tags: ['Pipelines', 'Workflow Optimization', 'Zero Friction'],
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    category: 'Data & Analytics',
    description: 'Transforming raw operational metrics into actionable executive dashboards, trend charts, and KPIs.',
    tags: ['Executive KPIs', 'Trend Analysis', 'Decision Support'],
  },
  {
    id: 'sql',
    title: 'SQL',
    category: 'Data & Analytics',
    description: 'Writing relational database queries for vendor analysis, transaction frequency, volume nominals, and data extraction.',
    tags: ['Relational DB', 'Aggregation', 'Query Optimization'],
  },
  {
    id: 'python-pandas',
    title: 'Python / Pandas',
    category: 'Data & Analytics',
    description: 'Data transformation, cleaning, CSV/tabular wrangling, pattern extraction, and operational scripting.',
    tags: ['Data Wrangling', 'Scripting', 'Tabular Processing'],
  },
  {
    id: 'finance-workflows',
    title: 'Finance & Accounting Workflows',
    category: 'Finance & Operations',
    description: '15 years of transaction recording, bookkeeping, financial reporting, cash flow reconciliation, and supervision.',
    tags: ['General Ledger', 'Cash Flow', 'Audit Trail', 'Compliance'],
  },
  {
    id: 'business-ops',
    title: 'Business Operations',
    category: 'Finance & Operations',
    description: 'Streamlining cross-functional communications, vendor relationships, supporting documentation, and team management.',
    tags: ['SOP Design', 'Vendor Management', 'Governance'],
  },
  {
    id: 'multilingual-ai',
    title: 'Multilingual AI',
    category: 'Media & Voice',
    description: 'Architecting cross-language workflows supporting 130+ languages for instant meeting, text, and voice translation.',
    tags: ['130+ Languages', 'Localization', 'Real-Time Sync'],
  },
  {
    id: 'voice-audio',
    title: 'Voice & Audio Workflows',
    category: 'Media & Voice',
    description: 'Text-to-speech synthesis, Voice Activity Detection (VAD), speaker inputs, and media audio transcription.',
    tags: ['TTS', 'VAD Logic', 'Audio Ingest', 'Voice Notes'],
  },
  {
    id: 'generative-ai',
    title: 'Generative AI',
    category: 'AI & Engineering',
    description: 'Multimodal model utilization spanning text synthesis, image generation, character styling, and scene pipelines.',
    tags: ['Multimodal', 'Diffusion', 'LLM Integration'],
  },
  {
    id: 'prompt-eng',
    title: 'Prompt Engineering',
    category: 'AI & Engineering',
    description: 'Precise system prompt architecture, few-shot guardrails, character identity anchoring, and structured output formatting.',
    tags: ['System Prompts', 'Guardrails', 'Structured Outputs'],
  },
  {
    id: 'digital-content',
    title: 'Digital Content Production',
    category: 'Media & Voice',
    description: 'Proven end-to-end channel creation, ideation, audiovisual rendering, editing, and publishing (2.8M+ YouTube views).',
    tags: ['YouTube (2.8M+ Views)', 'TikTok', 'Video Editing'],
  },
];

export const APPLICATIONS: ApplicationItem[] = [
  {
    id: 'ria-ai-va-analytics',
    title: 'RIA AI Virtual Assistant & Business Analytics',
    subtitle: 'AI-Powered Virtual Assistance, Accounting, Finance, Business Operations & Data Analytics Workspace',
    tag: 'Flagship Application 01',
    highlightBadge: 'Virtual Assistance, Accounting, Finance & Analytics',
    problem:
      'Business operations often become fragmented across emails, administrative tasks, invoices, accounting records, financial reports and raw datasets. This makes it harder to prioritize work, maintain accurate financial records and turn business data into useful decisions.',
    solution:
      'RIA AI Virtual Assistant & Business Analytics brings Virtual Assistance, Business Operations, Accounting, Finance and Data Analytics into one AI-assisted workspace.',
    coreSystems: [
      {
        id: 'va-ops',
        title: 'VIRTUAL ASSISTANT',
        badge: 'Core Area 01',
        items: [
          'Smart Inbox & Triage',
          'Email prioritization P1–P4',
          'Automated Follow-ups',
          'Action Tasks Extraction',
          'Deadlines & Reminders',
          'Executive Calendar Coordination',
        ],
      },
      {
        id: 'acc-fin',
        title: 'ACCOUNTING & FINANCE',
        badge: 'Core Area 02',
        items: [
          'General Journal / Jurnal Umum',
          'General Ledger / Buku Besar',
          'Chart of Accounts (CoA)',
          'Financial Transaction Recording',
          'Invoice Workflows',
          'Multi-Currency Workflows',
          'Financial Reporting',
          'Cash Flow Monitoring',
        ],
      },
      {
        id: 'biz-operations',
        title: 'BUSINESS OPERATIONS',
        badge: 'Core Area 03',
        items: [
          'Administrative Workflows',
          'Business Operations Support',
          'Executive KPI Telemetry',
          'Revenue, Expense & Margin Tracking',
          'Overdue Invoice Monitoring',
          'AI-assisted Business Insights',
        ],
      },
      {
        id: 'data-analytics',
        title: 'DATA ANALYTICS',
        badge: 'Core Area 04',
        items: [
          'Data Analyst Lab Workbench',
          'SQL Analysis & Query Execution',
          'Python / Pandas Data Cleaning',
          'Excel / CSV Data Ingestion & Parsing',
          'Dynamic Data Visualization',
          'One-click CSV Export & Reporting',
        ],
      },
    ],
    tabs: [
      {
        id: 'virtual-assistant',
        title: 'Virtual Assistant',
        shortDescription: 'Smart Inbox, email priority P1–P4, follow-ups, action tasks, deadlines and administrative workflows.',
        details: [
          'Smart Inbox managing communications and administrative operations with automated classification.',
          'Email prioritization matrix P1 (Critical) through P4 (Low) for rapid executive response.',
          'Automated Follow-ups tracking pending stakeholder conversations and unanswered threads.',
          'Action Tasks & Deadlines extraction converting emails into calendar-ready operational to-dos.',
          'Administrative workflows and day-to-day business operations support integrated into one flow.',
        ],
        keyHighlights: [
          { label: 'Priority Matrix', value: 'P1 Critical → P4 Low' },
          { label: 'Task Extraction', value: 'Action Tasks & Deadlines' },
          { label: 'Operations', value: 'Smart Inbox & Follow-ups' },
        ],
        defaultMockupType: 'email-priority',
      },
      {
        id: 'accounting-finance',
        title: 'Accounting & Finance',
        shortDescription: 'Primary accounting workspace: General Journal, General Ledger, Chart of Accounts (CoA), invoice workflows, multi-currency and financial reporting.',
        details: [
          'General Journal / Jurnal Umum: Systematic debit/credit double-entry journalizing with balance verification.',
          'General Ledger / Buku Besar: Real-time ledger posting with continuous account balances and audit records.',
          'Chart of Accounts (CoA): Structured financial classification across Assets, Liabilities, Equity, Revenue, and Expenses.',
          'Financial Transaction Recording & Invoice Workflows: End-to-end invoice generation, billing settlement, and transactional tracking.',
          'Multi-Currency Workflows: Multi-currency exchange rate handling and international transaction reconciliation.',
          'Financial Reporting & Cash Flow Monitoring: Balance sheets, income statements, cash flow runway, and receivables tracking.',
        ],
        keyHighlights: [
          { label: 'Core Accounting', value: 'General Journal & Ledger' },
          { label: 'Ledger Engine', value: 'Chart of Accounts (CoA)' },
          { label: 'Financial Control', value: 'Invoices & Multi-Currency' },
        ],
        defaultMockupType: 'accounting-finance',
      },
      {
        id: 'business-operations',
        title: 'Business Operations',
        shortDescription: 'Executive KPI overview, revenue, expenses, cash flow, overdue invoices, and AI business insights.',
        details: [
          'Executive KPI overview displaying Revenue, Expenses, and Net Cash Flow in real time.',
          'Overdue invoice tracking and visual alert statuses for accounts receivable and cash preservation.',
          'Variance telemetry mapping month-over-month burn rate, profit margins, and operational runway.',
          'AI-assisted business insights interpreting operational patterns and recommending executive actions.',
        ],
        keyHighlights: [
          { label: 'Financial Health', value: 'Revenue, Expenses & Cash Flow' },
          { label: 'Receivables Guard', value: 'Overdue Invoices Tracking' },
          { label: 'Intelligence', value: 'AI Business Insights' },
        ],
        defaultMockupType: 'executive',
      },
      {
        id: 'data-analytics',
        title: 'Data Analytics',
        shortDescription: 'Data Analyst Lab: SQL analysis, Python/Pandas, Excel/CSV workflows, data cleaning, visualization and business insights.',
        details: [
          'Data Analyst Lab workbench for relational SQL queries, table inspections, and vendor analytics.',
          'Python / Pandas scripting workflows for data wrangling, cleaning, and complex transformations.',
          'Excel and CSV dataset ingestion, validation, and multi-file operational data analysis.',
          'Dynamic data visualization workflows with statistical charts, CSV export, and business insights.',
        ],
        keyHighlights: [
          { label: 'Query Engine', value: 'Interactive SQL Analysis' },
          { label: 'Data Science', value: 'Python / Pandas Workflows' },
          { label: 'Data Lab', value: 'Excel / CSV & Visualizations' },
        ],
        defaultMockupType: 'sql-analysis',
      },
    ],
    myRole: [
      'Virtual Assistance & Ops Design',
      'Accounting & Financial System Architecture',
      'AI-assisted Application Development',
      'Prompt & Workflow Engineering',
      'Data Analytics & SQL Modeling',
      'Testing & Refinement',
    ],
    whatThisDemonstrates: [
      'Virtual Assistance',
      'Business Operations',
      'Accounting Workflows',
      'Financial Management',
      'Data Analytics',
      'SQL',
      'Python / Pandas',
      'AI Automation',
      'AI-assisted Application Development',
    ],
  },
  {
    id: 'worklingo-by-ria',
    title: 'WorkLingo by Ria',
    subtitle: 'Real-Time Multilingual AI Communication System',
    tag: 'Flagship Application 02',
    highlightBadge: '130+ Languages Real-Time Translation',
    problem:
      'Language barriers can make international calls, meetings, messaging and voice-note communication difficult.',
    solution:
      'A multilingual AI communication workflow designed for live conversation assistance, translation, text-to-speech, voice-note preparation and audio/media translation.',
    tabs: [
      {
        id: 'live-call-meeting',
        title: 'Live Call & Meeting',
        shortDescription: 'Real-time bidirectional speech subtitle and audio assistance for cross-border conferencing.',
        details: [
          'Universal communication workflow connecting WhatsApp, Telegram, Zoom and Google Meet.',
          'Live transcription with instant target language translation and audio overlay.',
          'Voice Activity Detection (VAD) tuned to eliminate background noise and latency.',
          'Full coverage across 130+ global languages as displayed by the application.',
        ],
        keyHighlights: [
          { label: 'Platform Support', value: 'Zoom, Meet, WhatsApp, Telegram' },
          { label: 'Language Scale', value: '130+ Global Languages' },
          { label: 'Latency', value: 'Real-time Streaming Translation' },
        ],
        defaultMockupType: 'live-call',
      },
      {
        id: 'whatsapp-text-voice',
        title: 'WhatsApp Text & Voice Note',
        shortDescription: 'Frictionless two-way messaging with native audio voice-note preparation.',
        details: [
          'Source message input with automatic language detection.',
          'Immediate translated output formatted in natural, culturally nuanced phrasing.',
          'Direct send workflow for both translated text and synthesized voice-note audio.',
          'Voice-note preparation engine producing natural intonations in the target tongue.',
        ],
        keyHighlights: [
          { label: 'Pipeline', value: 'Source → Translation → TTS Voice Note' },
          { label: 'Audio Engine', value: 'Natural Speech Synthesis' },
          { label: 'Dispatch', value: 'Direct Messenger Integration' },
        ],
        defaultMockupType: 'whatsapp',
      },
      {
        id: 'audio-media-translation',
        title: 'Audio & Media Translation',
        shortDescription: 'Multi-input audio translation hub for recorded files, direct mic, and system audio.',
        details: [
          'MP3 and multi-format audio file translation with automatic speaker diarization.',
          'System audio capture for translating webinars, podcasts, and recorded video streams on the fly.',
          'Live microphone / speaker input workflow for spontaneous in-person or desktop translation.',
          'Media translation workflows producing synchronized subtitle files and localized audio tracks.',
        ],
        keyHighlights: [
          { label: 'Input Channels', value: 'MP3, System Audio, Live Mic' },
          { label: 'Media Output', value: 'Transcripts, Subtitles & Localized Audio' },
          { label: 'Processing', value: 'High-accuracy Acoustic Modeling' },
        ],
        defaultMockupType: 'audio',
      },
    ],
    myRole: [
      'Workflow Design',
      'AI-assisted Development',
      'Language Logic Testing',
      'Audio/VAD Workflow Testing',
      'Translation Testing',
      'Voice-Note Workflow Design',
    ],
    whatThisDemonstrates: [
      'Multilingual AI',
      'Voice AI',
      'Translation Workflows',
      'Audio Processing',
      'AI Automation',
    ],
  },
  {
    id: 'ria-ai-creative-studio',
    title: 'RIA AI Creative Studio',
    subtitle: 'Idea → Character → Image → Motion',
    tag: 'Flagship Application 03',
    highlightBadge: 'AI Storytelling & Character Consistency',
    problem:
      'AI content production can suffer from inconsistent characters, prompt drift, fragmented workflows and broken scene continuity.',
    solution:
      'A structured AI creative workspace for ideation, scene planning, character consistency, image generation workflow and motion/video preparation.',
    tabs: [
      {
        id: 'creative-dashboard',
        title: 'Creative Dashboard',
        shortDescription: 'Multi-genre production hub tailored for rapid narrative and commercial formats.',
        details: [
          'Dedicated creative pipelines for Drama, UGC (User Generated Content), Lipsync, and ASMR.',
          'Specialized cultural & thematic tracks: POV, Sejarah (History), Edukasi (Education), and Kesehatan (Health).',
          'Asset library managing generated backgrounds, voiceovers, character states, and prompt presets.',
          'Project status overview monitoring generation queues from concept to final cut.',
        ],
        keyHighlights: [
          { label: 'Genre Presets', value: 'Drama, UGC, POV, Sejarah, Edukasi' },
          { label: 'Asset Central', value: 'Prompts, Images, Motion Clips' },
          { label: 'Workflow', value: 'End-to-End Content Orchestration' },
        ],
        defaultMockupType: 'creative-studio',
      },
      {
        id: 'script-scene',
        title: 'Script & Scene',
        shortDescription: 'Project-based storytelling workspace binding script beats to storyboard frames.',
        details: [
          'Title selection and premise generator with tone and target audience calibration.',
          'Scene planning breakdown outlining lighting, camera angle, action beats, and dialogue.',
          'Project-based storytelling workflow linking scene prompts in sequential chains.',
          'Direct prompt generation for visual render engines with automated continuity tags.',
        ],
        keyHighlights: [
          { label: 'Story Engine', value: 'Scene-Chain Storyboarding' },
          { label: 'Prompt Compiler', value: 'Context-Aware Continuity Tags' },
          { label: 'Production', value: 'Script-to-Frame Sync' },
        ],
        defaultMockupType: 'script-scene',
      },
      {
        id: 'character-dna',
        title: 'Character DNA / Identity Lock',
        shortDescription: 'Persistent 9-point biometric and style specification system eliminating prompt drift.',
        details: [
          'Face Identity & Facial Details specifications for pinpoint facial feature preservation.',
          'Skin Tone, Body Shape, Body Proportions, and Relative Height anchoring across all camera angles.',
          'Hair / Hijab styling parameters and distinctive Physical Traits enforcement.',
          'Reference Image binding ensuring seed consistency across disparate generation prompts.',
          'Reusable Character DNA library allowing identical characters to recur seamlessly across multi-episode projects.',
        ],
        keyHighlights: [
          { label: 'Identity Lock', value: '9-Point Biometric & Style Spec' },
          { label: 'Reusability', value: 'Cross-Scene Character Consistency' },
          { label: 'Artifact', value: 'Locked Seed & Seed-Image Anchor' },
        ],
        defaultMockupType: 'character-dna',
      },
    ],
    myRole: [
      'Creative Workflow Design',
      'Prompt Architecture',
      'Character Consistency System Design',
      'Scene-Chain Logic',
      'AI-assisted Application Development',
      'Generation Testing',
    ],
    whatThisDemonstrates: [
      'Generative AI',
      'Creative Automation',
      'Prompt Engineering',
      'Character Consistency',
      'Storyboard Workflow',
    ],
  },
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    company: 'KKPP Jawa Barat',
    period: '15 Years',
    roles: 'Admin Akuntansi → Manager Keuangan',
    type: 'Finance, Accounting & Operations',
    responsibilities: [
      'Financial administration, transaction recording, and comprehensive ledger bookkeeping.',
      'Preparation of authoritative financial reporting, variance analysis, and cash flow forecasting.',
      'Supervision of all supporting documentation, compliance audits, and regulatory requirements.',
      'Executive financial supervision, cross-departmental budgeting, and management reporting to leadership.',
    ],
  },
  {
    company: 'RIA AI',
    period: 'Current / Founder & Builder',
    roles: 'AI Application Developer & AI Automation',
    type: 'AI Applications, Automation & Solutions',
    responsibilities: [
      'Developing practical AI-powered solutions for administration, data analysis, multilingual communication, and creative workflows.',
      'Leading AI-assisted application development, architecture design, and prompt engineering.',
      'Implementing robust workflow automation to eliminate manual business bottlenecks.',
      'Conducting rigorous testing, user scenario evaluation, and iterative improvements for production readiness.',
    ],
  },
];

export const DIGITAL_CONTENT: DigitalContentItem[] = [
  {
    platform: 'YouTube',
    channelName: 'RIA AI Music',
    metric1: { value: '10,800+', label: 'Subscribers' },
    metric2: { value: '2.8M+', label: 'Total Views' },
    description:
      'YouTube content ideation, visual/video production, editing, publishing, channel management and performance evaluation.',
    actionUrl: 'https://www.youtube.com/@riaaimusic-f1u',
    buttonText: 'Visit YouTube',
    accentColor: 'from-red-500/20 to-rose-500/10 border-rose-500/30 text-rose-400',
  },
  {
    platform: 'TikTok',
    channelName: 'RIA AI (DramaKita)',
    metric1: { value: '11,700+', label: 'Followers' },
    metric2: { value: '17,800+', label: 'Likes' },
    description:
      'Short-video content creation including idea development, production, editing, publishing and audience response evaluation.',
    actionUrl: 'https://www.tiktok.com/@dramakitaoficial',
    buttonText: 'Visit TikTok',
    accentColor: 'from-cyan-500/20 to-violet-500/10 border-cyan-500/30 text-cyan-400',
  },
];

export const EDUCATION = {
  degree: 'Bachelor’s Degree (S.E. / Sarjana Ekonomi)',
  institution: 'Universitas Sangga Buana (STIE YPKP) Bandung, West Java, Indonesia',
  year: 'Graduated 1998',
  focus: 'Economics & Accounting Foundation',
};
