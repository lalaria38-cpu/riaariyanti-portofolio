export interface MetricCardData {
  value: string;
  label: string;
  sublabel?: string;
  icon?: string;
}

export interface CapabilityItem {
  id: string;
  title: string;
  category: 'AI & Engineering' | 'Data & Analytics' | 'Finance & Operations' | 'Media & Voice';
  description: string;
  tags: string[];
}

export interface CoreSystemItem {
  id: string;
  title: string;
  badge: string;
  items: string[];
}

export interface AppFeatureTab {
  id: string;
  title: string;
  shortDescription: string;
  details: string[];
  keyHighlights: { label: string; value: string }[];
  defaultMockupType:
    | 'executive'
    | 'email-priority'
    | 'sql-analysis'
    | 'accounting-finance'
    | 'data-lab'
    | 'live-call'
    | 'whatsapp'
    | 'audio'
    | 'creative-studio'
    | 'script-scene'
    | 'character-dna'
    | string;
}

export interface ApplicationItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  problem: string;
  solution: string;
  coreSystems?: CoreSystemItem[];
  tabs: AppFeatureTab[];
  myRole: string[];
  whatThisDemonstrates: string[];
  highlightBadge: string;
}

export interface ExperienceItem {
  company: string;
  period: string;
  roles: string;
  type: string;
  responsibilities: string[];
}

export interface DigitalContentItem {
  platform: 'YouTube' | 'TikTok';
  channelName: string;
  metric1: { value: string; label: string };
  metric2: { value: string; label: string };
  description: string;
  actionUrl: string;
  buttonText: string;
  accentColor: string;
}
