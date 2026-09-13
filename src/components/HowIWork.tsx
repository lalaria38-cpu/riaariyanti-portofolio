import React from 'react';
import { ArrowRight, CheckCircle2, Cog, Lightbulb, Search, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { WORKFLOW_STEPS, PERSONAL_INFO } from '../data/portfolioData';

export const HowIWork: React.FC = () => {
  const stepIcons = [
    <ShieldCheck key="0" className="w-5 h-5 text-cyan-400" />,
    <Search key="1" className="w-5 h-5 text-rose-400" />,
    <Lightbulb key="2" className="w-5 h-5 text-amber-400" />,
    <Sparkles key="3" className="w-5 h-5 text-violet-400" />,
    <Layers key="4" className="w-5 h-5 text-cyan-400" />,
    <CheckCircle2 key="5" className="w-5 h-5 text-emerald-400" />,
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-slate-900 bg-[#080c16]/70">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-violet-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <span>About • Engineering Methodology</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Work: Turning Friction Into Functional Code
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal">
            "{PERSONAL_INFO.aboutStatement}"
          </p>
        </div>

        {/* Process Flow Diagram (Responsive Grid with Step Progression) */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 -translate-y-8 bg-gradient-to-r from-cyan-500/30 via-violet-500/40 to-emerald-500/40 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {WORKFLOW_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="relative group p-4 rounded-2xl bg-[#0b101e]/90 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-cyan-500/10"
              >
                <div>
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                      {step.step}
                    </span>
                    <span className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                      {stepIcons[idx]}
                    </span>
                  </div>

                  <span className="text-[10px] uppercase tracking-wider font-mono text-violet-400 block mb-1">
                    {step.badge}
                  </span>

                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Step Progression Indicator */}
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                  <span>Phase {step.step}</span>
                  {idx < 5 ? (
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400/70" />
                  ) : (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Operational Philosophy Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0d1326]/90 to-slate-900/90 border border-slate-800/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-3xl">
            <div className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
              15 Years Corporate Operations + Modern AI Architecture
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Pragmatic AI Built From The Inside Out
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Unlike theoretical prompt experiments, every system I build is grounded in real accounting rigor, executive deadline pressure, and administrative compliance. The result is software that solves genuine operational bottlenecks rather than creating extra overhead.
            </p>
          </div>

          <a
            href="#applications"
            className="shrink-0 px-4 py-2.5 rounded-xl text-xs font-semibold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5 transition-colors"
          >
            <span>See Working Applications</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
