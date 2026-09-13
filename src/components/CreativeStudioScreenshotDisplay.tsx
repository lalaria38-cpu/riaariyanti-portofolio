import React, { useState, useEffect } from 'react';
import { Maximize2, Sparkles, CheckCircle2, Film, Users, LayoutDashboard, FileCode2, PlayCircle, Download } from 'lucide-react';
import { AppFeatureTab } from '../types';

interface CreativeStudioScreenshotDisplayProps {
  tab: AppFeatureTab;
  onOpenLightbox: (imageUrl: string | null, title: string, subtitle: string, tabId: string) => void;
}

interface CreativeStudioAsset {
  id: string;
  title: string;
  shortLabel: string;
  subtitle: string;
  badge: string;
  assetPath: string;
  mappedTabId: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CREATIVE_STUDIO_ASSETS: CreativeStudioAsset[] = [
  {
    id: 'home',
    title: 'Creative Dashboard • Multi-Genre Production Hub',
    shortLabel: '1. Dashboard Hub',
    subtitle: 'Sensorik & Taktil ASMR, First Person POV, Epik & Arsip Sejarah, Informatif & Jelas Edukasi',
    badge: 'Flagship UI • Multi-Genre',
    assetPath: '/assets/creative-studio/ria-ai-creative-studio-home.svg',
    mappedTabId: 'creative-dashboard',
    icon: LayoutDashboard,
  },
  {
    id: 'character',
    title: 'Character DNA & Profile Lock • Lin Chen & Gu Yanzheng',
    shortLabel: '2. Character Profile',
    subtitle: '2 Karakter Terdaftar • 9-Point Biometric Lock, Refined Oval Face & Porcelain Skin Tone',
    badge: 'Character Continuity',
    assetPath: '/assets/creative-studio/ria-ai-creative-studio-character.svg',
    mappedTabId: 'character-dna',
    icon: Users,
  },
  {
    id: 'storyboard',
    title: 'Storyboard & 4-Frame Scene Continuity • Lin Chen & Gu Yanzheng',
    shortLabel: '3. 4-Frame Storyboard',
    subtitle: 'Frame 01 Medium Shot, Frame 02 Two Shot, Frame 03 Over-the-Shoulder, Frame 04 Low-Angle Dramatic',
    badge: 'Scene Chain Continuity',
    assetPath: '/assets/creative-studio/ria-ai-creative-studio-storyboard.svg',
    mappedTabId: 'script-scene',
    icon: Film,
  },
  {
    id: 'image-to-video',
    title: 'Image to Video Prompting & Flow Integration',
    shortLabel: '4. Prompt & Flow Lock',
    subtitle: 'Scene 05 Character Reference, Dialogue & Speaker Lock, One-Click Buka di Flow Action',
    badge: 'Prompt Compiler',
    assetPath: '/assets/creative-studio/ria-ai-creative-studio-image-to-video.svg',
    mappedTabId: 'script-scene',
    icon: FileCode2,
  },
  {
    id: 'video-result',
    title: 'Video Production Result • Final Rendered Output',
    shortLabel: '5. Rendered Video Result',
    subtitle: 'High-Rise Balcony Scene with Lin Chen & Gu Yanzheng, Night Skyline Bokeh & HD Video Player',
    badge: 'Video Production',
    assetPath: '/assets/creative-studio/ria-ai-creative-studio-video-result.svg',
    mappedTabId: 'script-scene',
    icon: PlayCircle,
  },
];

export const CreativeStudioScreenshotDisplay: React.FC<CreativeStudioScreenshotDisplayProps> = ({
  tab,
  onOpenLightbox,
}) => {
  // Determine the default asset based on the active tab
  const getInitialAssetId = (tabId: string) => {
    if (tabId === 'creative-dashboard') return 'home';
    if (tabId === 'character-dna') return 'character';
    return 'storyboard';
  };

  const [activeAssetId, setActiveAssetId] = useState<string>(() => getInitialAssetId(tab.id));

  // Whenever the parent tab changes, synchronize to the natural default asset
  useEffect(() => {
    setActiveAssetId(getInitialAssetId(tab.id));
  }, [tab.id]);

  const currentAsset =
    CREATIVE_STUDIO_ASSETS.find((a) => a.id === activeAssetId) || CREATIVE_STUDIO_ASSETS[0];

  return (
    <div className="space-y-3">
      {/* Top Header Information & 5-Screenshot Selector Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-1">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
            Static Bundled Production Screenshots (Permanent Assets)
          </span>
          <span className="text-[11px] font-mono text-slate-500 hidden md:inline">
            • 5 Verified UI Screens
          </span>
        </div>

        {/* Action badges */}
        <div className="flex items-center gap-2 text-[11px] font-mono">
          <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
            <CheckCircle2 className="w-3 h-3 text-cyan-400" />
            <span>Zero-Drift Offline Asset</span>
          </span>
          <button
            onClick={() =>
              onOpenLightbox(
                currentAsset.assetPath,
                currentAsset.title,
                currentAsset.subtitle,
                currentAsset.id
              )
            }
            className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 text-xs transition-colors"
            title="Expand Fullscreen Lightbox"
          >
            <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Fullscreen</span>
          </button>
        </div>
      </div>

      {/* 5-Screenshot Quick Switcher Chips */}
      <div className="p-2 rounded-2xl bg-[#090d1a] border border-slate-800/90 flex flex-wrap items-center gap-1.5">
        <span className="text-[11px] font-mono text-slate-400 px-2 py-1 font-medium hidden sm:inline">
          View Screen:
        </span>
        {CREATIVE_STUDIO_ASSETS.map((asset) => {
          const Icon = asset.icon;
          const isSelected = asset.id === activeAssetId;
          return (
            <button
              key={asset.id}
              onClick={() => setActiveAssetId(asset.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium flex items-center gap-1.5 transition-all duration-200 ${
                isSelected
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 border border-blue-400/40'
                  : 'bg-slate-900/80 hover:bg-slate-800/90 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-200' : 'text-slate-400'}`} />
              <span>{asset.shortLabel}</span>
              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 ml-0.5" />}
            </button>
          );
        })}
      </div>

      {/* Main High-Resolution Image Canvas Display */}
      <div
        className="relative w-full rounded-2xl border border-slate-800/90 bg-[#060914] overflow-hidden shadow-2xl group transition-all duration-300 hover:border-cyan-500/40"
      >
        {/* Mockup Browser/App Window Topbar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#0a0f1d] border-b border-slate-800/90 text-xs select-none">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-slate-400 font-mono text-[11px] ml-2">
              ria-creative-studio://workspace/{currentAsset.id}
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span className="px-2 py-0.5 rounded bg-slate-800/80 text-cyan-300 border border-slate-700">
              {currentAsset.badge}
            </span>
            <a
              href={currentAsset.assetPath}
              download={`${currentAsset.id}.svg`}
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-cyan-300 transition-colors"
              title="Download asset"
            >
              <Download className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Display Area with Click-to-Expand */}
        <div
          onClick={() =>
            onOpenLightbox(
              currentAsset.assetPath,
              currentAsset.title,
              currentAsset.subtitle,
              currentAsset.id
            )
          }
          className="relative cursor-pointer min-h-[360px] sm:min-h-[440px] md:min-h-[500px] lg:min-h-[560px] flex items-center justify-center p-2 sm:p-4 bg-gradient-to-b from-[#070b16] to-[#04060c]"
        >
          <img
            src={currentAsset.assetPath}
            alt={currentAsset.title}
            className="w-full h-auto max-h-[580px] object-contain rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]"
          />

          {/* Hover Overlay Hint */}
          <div className="absolute inset-0 bg-cyan-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
            <span className="px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/50 text-cyan-300 text-xs font-mono font-medium flex items-center gap-2 shadow-2xl backdrop-blur-md">
              <Maximize2 className="w-4 h-4 text-cyan-400" />
              Click to inspect screenshot in high resolution lightbox
            </span>
          </div>
        </div>

        {/* Bottom Metadata Caption */}
        <div className="px-4 py-3 bg-[#080d1a] border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="font-semibold text-white">{currentAsset.title}</span>
          </div>
          <span className="text-slate-400 font-mono text-[11px]">
            {currentAsset.subtitle}
          </span>
        </div>
      </div>
    </div>
  );
};
