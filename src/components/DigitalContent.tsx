import React from 'react';
import { Youtube, ExternalLink, Sparkles, TrendingUp, Play, Heart, Users } from 'lucide-react';
import { DIGITAL_CONTENT } from '../data/portfolioData';

export const DigitalContent: React.FC = () => {
  return (
    <section id="digital-content" className="py-20 md:py-28 relative border-t border-slate-900 bg-[#070b14]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-rose-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-rose-400" />
            <span>Audience Reach & Media Execution</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Digital Content & Proven Results
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Real audience metrics generated through structured end-to-end creative workflows, algorithmic content planning, and continuous audience engagement analysis.
          </p>
        </div>

        {/* Two Premium Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: YouTube (RIA AI Music) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0e1222]/90 to-[#090d1a]/95 border border-rose-500/30 hover:border-rose-500/60 transition-all duration-300 shadow-2xl flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/30 shadow-lg shadow-rose-500/10">
                    <Youtube className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-rose-400 uppercase tracking-wider block">
                      Video Publishing & Channel Architecture
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
                      {DIGITAL_CONTENT[0].channelName}
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-mono bg-rose-500/10 text-rose-300 border border-rose-500/30">
                  YouTube
                </span>
              </div>

              {/* Proven Metric Indicators */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 group-hover:border-rose-500/30 transition-colors">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <Users className="w-3.5 h-3.5 text-rose-400" />
                    <span>Subscribers</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">
                    {DIGITAL_CONTENT[0].metric1.value}
                  </div>
                  <div className="text-[10px] text-emerald-400 font-mono mt-0.5">Organic Community</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 group-hover:border-rose-500/30 transition-colors">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <Play className="w-3.5 h-3.5 text-rose-400" />
                    <span>Total Views</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-rose-300">
                    {DIGITAL_CONTENT[0].metric2.value}
                  </div>
                  <div className="text-[10px] text-rose-400/90 font-mono mt-0.5">High Retention Plays</div>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Production Scope & Workflow:
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {DIGITAL_CONTENT[0].description}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Verified Channel Metric
              </span>

              <a
                href={DIGITAL_CONTENT[0].actionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/25 transition-all flex items-center gap-2 group-hover:translate-x-0.5"
              >
                <span>{DIGITAL_CONTENT[0].buttonText}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: TikTok (RIA AI DramaKita) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0e1222]/90 to-[#090d1a]/95 border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 shadow-2xl flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                      Short-Form Viral Narrative Lab
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
                      {DIGITAL_CONTENT[1].channelName}
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  TikTok
                </span>
              </div>

              {/* Proven Metric Indicators */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <Users className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Followers</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">
                    {DIGITAL_CONTENT[1].metric1.value}
                  </div>
                  <div className="text-[10px] text-emerald-400 font-mono mt-0.5">Active Follow Base</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <Heart className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Total Likes</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-cyan-300">
                    {DIGITAL_CONTENT[1].metric2.value}
                  </div>
                  <div className="text-[10px] text-cyan-400/90 font-mono mt-0.5">Verified Engagement</div>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Production Scope & Workflow:
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {DIGITAL_CONTENT[1].description}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Verified Social Platform
              </span>

              <a
                href={DIGITAL_CONTENT[1].actionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-2 group-hover:translate-x-0.5"
              >
                <span>{DIGITAL_CONTENT[1].buttonText}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
