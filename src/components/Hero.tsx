import React from 'react';
import { 
  ArrowRight, 
  Briefcase, 
  Mail, 
  Cpu, 
  Award, 
  Sparkles, 
  Youtube, 
  Layers,
  ChevronDown
} from 'lucide-react';
import { HERO_METRICS, PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-violet-600/20 to-fuchsia-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute top-40 left-10 w-80 h-80 bg-violet-600/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0f_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Block */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Brand Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="font-semibold tracking-wide text-white">{PERSONAL_INFO.brandName}</span>
            <span className="text-slate-500">•</span>
            <span>Professional Portfolio</span>
          </div>

          {/* Primary Tagline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            Turn Limitations Into{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              AI-Powered Solutions.
            </span>
          </h1>

          {/* Owner Identity & Headline */}
          <div className="space-y-2 pt-1">
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100 font-sans">
              {PERSONAL_INFO.name}
            </div>
            <p className="text-xs sm:text-sm md:text-base font-mono text-cyan-300/90 max-w-3xl mx-auto leading-relaxed">
              {PERSONAL_INFO.headline}
            </p>
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed italic border-l-2 sm:border-l-0 border-cyan-500/40 pl-3 sm:pl-0">
            "{PERSONAL_INFO.supportingText}"
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <a
              href="#applications"
              className="px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-violet-600 text-white hover:from-cyan-400 hover:to-violet-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/35 transition-all flex items-center gap-2 group active:scale-95"
            >
              <span>View Applications</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="#experience"
              className="px-6 py-3 rounded-xl text-sm font-semibold bg-slate-900/90 text-slate-200 hover:text-white hover:bg-slate-800/90 border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4 text-violet-400" />
              <span>View Experience</span>
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl text-sm font-semibold bg-slate-900/90 text-cyan-300 hover:text-cyan-200 hover:bg-slate-800/90 border border-cyan-500/30 hover:border-cyan-500/50 transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        {/* Four Professional Metric Cards (Explicitly specified by User) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 md:mt-20">
          {HERO_METRICS.map((metric, index) => {
            const icons = [
              <Award key="0" className="w-5 h-5 text-cyan-400" />,
              <Cpu key="1" className="w-5 h-5 text-violet-400" />,
              <Youtube key="2" className="w-5 h-5 text-rose-400" />,
              <Sparkles key="3" className="w-5 h-5 text-amber-400" />,
            ];

            return (
              <div
                key={metric.label}
                className="relative group p-5 rounded-2xl bg-[#0b0f1b]/90 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                    {icons[index]}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">Metric 0{index + 1}</span>
                </div>

                <div className="mt-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mt-1">
                    {metric.label}
                  </div>
                  {metric.sublabel && (
                    <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                      {metric.sublabel}
                    </p>
                  )}
                </div>

                {/* Bottom subtle accent line */}
                <div className="mt-3 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                  <span>Verified Track Record</span>
                  <span className="text-emerald-400">Active</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subtle Scroll Down Prompt */}
        <div className="flex justify-center mt-12">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-xs text-slate-500 hover:text-cyan-400 transition-colors"
          >
            <span>Explore Methodology</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
