import React from 'react';
import { Briefcase, GraduationCap, Calendar, CheckCircle2, TrendingUp, Sparkles, Building2 } from 'lucide-react';
import { EXPERIENCE_LIST, EDUCATION } from '../data/portfolioData';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative border-t border-slate-900 bg-[#060912]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>Proven Background & Qualifications</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience & Education
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            A comprehensive 15-year trajectory in corporate financial supervision and reporting, channeled directly into modern AI application engineering.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Card 1: KKPP Jawa Barat */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#090e1c]/95 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                      Corporate Enterprise
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white mt-1">
                    KKPP Jawa Barat
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 shrink-0">
                  15 Years Experience
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 mb-5">
                <span className="text-[11px] font-mono text-slate-400 block uppercase">
                  Career Progression:
                </span>
                <span className="text-sm font-bold text-white flex items-center gap-2 mt-0.5">
                  <span>Admin Akuntansi</span>
                  <span className="text-cyan-400">&rarr;</span>
                  <span className="text-cyan-300">Manager Keuangan</span>
                </span>
              </div>

              <div className="space-y-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Core Responsibilities & Domain Mastery:
                </span>
                <ul className="space-y-2">
                  {[
                    'Financial administration, transaction recording, and comprehensive ledger bookkeeping.',
                    'Preparation of timely financial reporting, balance sheets, and cash flow forecasts.',
                    'Rigorous verification of supporting documentation, audit trails, and financial compliance.',
                    'High-level financial supervision and executive management reporting to directors.',
                  ].map((resp, rIdx) => (
                    <li key={rIdx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Financial Control & Governance</span>
              <span className="text-emerald-400">Demonstrated Track Record</span>
            </div>
          </div>

          {/* Card 2: RIA AI */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#090e1c]/95 border border-slate-800/90 hover:border-violet-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-violet-400" />
                    <span className="text-xs font-mono uppercase tracking-wider text-violet-400">
                      Current Practice
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white mt-1">
                    RIA AI
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/10 text-violet-300 border border-violet-500/30 shrink-0">
                  AI Solutions Studio
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 mb-5">
                <span className="text-[11px] font-mono text-slate-400 block uppercase">
                  Primary Role:
                </span>
                <span className="text-sm font-bold text-violet-300 mt-0.5 block">
                  AI Application Developer & AI Automation
                </span>
              </div>

              <div className="space-y-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Engineering Scope:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Developing practical AI-powered solutions for administration, data analysis, multilingual communication and creative workflows through AI-assisted application development, workflow automation, prompt engineering, testing and iterative improvement.
                </p>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  <span className="text-[11px] px-2.5 py-1 rounded-md bg-violet-500/10 text-violet-300 border border-violet-500/30">
                    Application Architecture
                  </span>
                  <span className="text-[11px] px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    Prompt Engineering
                  </span>
                  <span className="text-[11px] px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                    Workflow Automation
                  </span>
                  <span className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                    Iterative Testing
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>AI Product Engineering</span>
              <span className="text-cyan-400">Active Builder</span>
            </div>
          </div>
        </div>

        {/* Education Section (Mandatory from prompt) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0a0f20]/90 via-[#0d1326]/90 to-[#0a0f20]/90 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                Formal Academic Foundation
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                {EDUCATION.degree}
              </h3>
              <p className="text-sm font-semibold text-slate-200 mt-0.5">
                {EDUCATION.institution}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {EDUCATION.focus} • Rigorous quantitative, accounting, and business administration foundation.
              </p>
            </div>
          </div>

          <div className="shrink-0 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300">
            {EDUCATION.year}
          </div>
        </div>
      </div>
    </section>
  );
};
