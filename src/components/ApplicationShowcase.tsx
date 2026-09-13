import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Maximize2, 
  FileCheck, 
  UserCheck, 
  Cpu, 
  Lightbulb,
  Upload,
  ExternalLink,
  Bot,
  Calculator,
  TrendingUp,
  Database
} from 'lucide-react';
import { APPLICATIONS } from '../data/portfolioData';
import { ApplicationItem, AppFeatureTab } from '../types';
import { AppMockupViewer } from './AppMockupViewer';
import { RealAppScreenshotDisplay } from './RealAppScreenshotDisplay';
import { CreativeStudioScreenshotDisplay } from './CreativeStudioScreenshotDisplay';

interface ApplicationShowcaseProps {
  onOpenLightbox: (imageUrl: string | null, title: string, subtitle: string, tabId: string) => void;
}

export const ApplicationShowcase: React.FC<ApplicationShowcaseProps> = ({ onOpenLightbox }) => {
  // State tracking active tab index for each of the 3 applications
  const [activeTabs, setActiveTabs] = useState<Record<string, string>>({
    'ria-ai-va-analytics': APPLICATIONS[0].tabs[0].id,
    'worklingo-by-ria': APPLICATIONS[1].tabs[0].id,
    'ria-ai-creative-studio': APPLICATIONS[2].tabs[0].id,
  });

  const handleTabChange = (appId: string, tabId: string) => {
    setActiveTabs((prev) => ({
      ...prev,
      [appId]: tabId,
    }));
  };

  return (
    <section id="applications" className="py-20 md:py-32 relative border-t border-slate-900 bg-[#070b14]">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-violet-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Core Software Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Flagship AI Applications
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
            Three real-world software applications engineered to resolve fragmentation in business operations, overcome cross-border language barriers, and eliminate prompt drift in generative media workflows.
          </p>
        </div>

        {/* The 3 Flagship Applications Stack */}
        <div className="space-y-24">
          {APPLICATIONS.map((app, appIdx) => {
            const currentTabId = activeTabs[app.id] || app.tabs[0].id;
            const currentTab = app.tabs.find((t) => t.id === currentTabId) || app.tabs[0];

            return (
              <div
                key={app.id}
                className="relative rounded-3xl bg-[#090e1b]/95 border border-slate-800/90 p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300 hover:border-slate-700"
              >
                {/* Application Header & Badges */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-6 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      {app.tag}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono text-violet-300 bg-violet-500/10 border border-violet-500/30">
                      {app.highlightBadge}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-slate-500">
                    Application ID: 0{appIdx + 1}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-2 mb-8">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                    {app.title}
                  </h3>
                  <p className="text-base sm:text-lg text-cyan-300/90 font-mono">
                    {app.subtitle}
                  </p>
                </div>

                {/* Problem vs. Solution Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {/* Problem Card */}
                  <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30">
                    <div className="flex items-center gap-2 text-rose-400 text-xs font-mono uppercase tracking-wider mb-2 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      Problem & Operational Limitation
                    </div>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {app.problem}
                    </p>
                  </div>

                  {/* Solution Card */}
                  <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30">
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-2 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      Engineered AI Solution
                    </div>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {app.solution}
                    </p>
                  </div>
                </div>

                {/* Four Core Systems Architecture Grid (Recruiter Overview) */}
                {app.coreSystems && app.coreSystems.length > 0 && (
                  <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-[#060a16]/90 border border-slate-800/90 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                        <Cpu className="w-4 h-4 text-cyan-400" />
                        <span>Four Core Systems Architecture</span>
                      </div>
                      <span className="text-[11px] font-mono text-cyan-400/90">
                        Virtual Assistance • Accounting & Finance • Business Operations • Data Analytics
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                      {app.coreSystems.map((sys, sysIdx) => {
                        const icons = [
                          <Bot key="bot" className="w-4 h-4 text-cyan-400" />,
                          <Calculator key="calc" className="w-4 h-4 text-emerald-400" />,
                          <TrendingUp key="trend" className="w-4 h-4 text-amber-400" />,
                          <Database key="db" className="w-4 h-4 text-violet-400" />,
                        ];
                        const borderAccents = [
                          'border-cyan-500/30 bg-cyan-950/10 hover:border-cyan-500/60',
                          'border-emerald-500/30 bg-emerald-950/10 hover:border-emerald-500/60',
                          'border-amber-500/30 bg-amber-950/10 hover:border-amber-500/60',
                          'border-violet-500/30 bg-violet-950/10 hover:border-violet-500/60',
                        ];
                        const badgeAccents = [
                          'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
                          'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
                          'bg-amber-500/10 text-amber-300 border-amber-500/30',
                          'bg-violet-500/10 text-violet-300 border-violet-500/30',
                        ];

                        return (
                          <div
                            key={sys.id}
                            className={`p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between ${borderAccents[sysIdx % borderAccents.length]}`}
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-2.5">
                                <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                                  {icons[sysIdx % icons.length]}
                                </div>
                                <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border ${badgeAccents[sysIdx % badgeAccents.length]}`}>
                                  {sys.badge}
                                </span>
                              </div>

                              <h4 className="text-sm font-bold text-white mb-2 leading-tight">
                                {sys.title}
                              </h4>

                              <ul className="space-y-1.5 text-xs text-slate-300 pt-1">
                                {sys.items.map((item, iIdx) => (
                                  <li key={iIdx} className="flex items-start gap-1.5 leading-snug">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Interactive Feature Tabs Area (Mandatory Requirement) */}
                <div className="space-y-6 pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        Interactive Feature Demonstrations:
                      </div>
                      <div className="text-sm text-slate-300 mt-0.5">
                        Select a tab below to inspect live interface telemetry, workflow data, and full-scale views.
                      </div>
                    </div>

                    {/* Interactive Tab Selectors */}
                    <div className="flex flex-wrap items-center gap-2">
                      {app.tabs.map((tab) => {
                        const isSelected = tab.id === currentTabId;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => handleTabChange(app.id, tab.id)}
                            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                              isSelected
                                ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-md shadow-cyan-500/20 border border-cyan-400/50 scale-[1.02]'
                                : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800'
                            }`}
                          >
                            <span>{tab.title}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Active Tab Description & Key Specs */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-2 p-5 rounded-2xl bg-[#0b101f]/80 border border-slate-800/80 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-bold text-white flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-cyan-400" />
                          {currentTab.title}
                        </h4>
                        <span className="text-xs font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">
                          Active Tab
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {currentTab.shortDescription}
                      </p>

                      <ul className="space-y-2 pt-1">
                        {currentTab.details.map((detail, dIdx) => (
                          <li key={dIdx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Highlights Metrics Column */}
                    <div className="p-5 rounded-2xl bg-[#0b101f]/80 border border-slate-800/80 flex flex-col justify-between gap-3">
                      <div>
                        <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block mb-2 font-semibold">
                          Tab Architecture Highlights
                        </span>
                        <div className="space-y-2.5">
                          {currentTab.keyHighlights.map((k, kIdx) => (
                            <div key={kIdx} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                              <span className="text-[10px] font-mono text-slate-400 block">{k.label}</span>
                              <span className="text-xs font-bold text-cyan-300 mt-0.5 block">{k.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="text-[11px] text-slate-500 font-mono pt-2 border-t border-slate-800/60 flex items-center justify-between">
                        <span>Workflow Integrity</span>
                        <span className="text-emerald-400 font-semibold">Validated</span>
                      </div>
                    </div>
                  </div>

                  {/* Feature Demonstration Area */}
                  <div className="pt-2">
                    {app.id === 'ria-ai-va-analytics' ? (
                      <RealAppScreenshotDisplay
                        tab={currentTab}
                        onOpenLightbox={onOpenLightbox}
                      />
                    ) : app.id === 'ria-ai-creative-studio' ? (
                      <CreativeStudioScreenshotDisplay
                        tab={currentTab}
                        onOpenLightbox={onOpenLightbox}
                      />
                    ) : (
                      <>
                        <div className="flex items-center justify-between mb-2 text-xs">
                          <span className="text-slate-400 font-mono flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-cyan-400" />
                            Live Application Interface Display ({currentTab.title})
                          </span>
                          <span className="text-cyan-400/80 text-[11px] font-mono hidden sm:inline">
                            High-Resolution Screenshot Area • Click to Expand
                          </span>
                        </div>

                        <AppMockupViewer
                          appId={app.id}
                          tab={currentTab}
                          onOpenLightbox={onOpenLightbox}
                        />
                      </>
                    )}
                  </div>
                </div>

                {/* Footer Section: "My Role" & "What This Demonstrates" (Explicitly Mandated) */}
                <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* My Role */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                      <UserCheck className="w-4 h-4 text-violet-400" />
                      <span>My Role</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {app.myRole.map((role) => (
                        <span
                          key={role}
                          className="text-xs px-2.5 py-1 rounded-lg bg-violet-500/10 text-violet-300 border border-violet-500/30 font-medium"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* What This Demonstrates */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                      <FileCheck className="w-4 h-4 text-cyan-400" />
                      <span>What This Demonstrates</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {app.whatThisDemonstrates.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
