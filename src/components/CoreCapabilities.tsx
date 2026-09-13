import React, { useState } from 'react';
import { 
  Bot, 
  Code2, 
  Cpu, 
  BarChart3, 
  Database, 
  Terminal, 
  Calculator, 
  Briefcase, 
  Globe2, 
  Mic2, 
  Sparkles, 
  Wand2, 
  Video, 
  CheckCircle2, 
  Filter
} from 'lucide-react';
import { CORE_CAPABILITIES } from '../data/portfolioData';

export const CoreCapabilities: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'AI & Engineering',
    'Data & Analytics',
    'Finance & Operations',
    'Media & Voice',
  ];

  const getCapabilityIcon = (id: string) => {
    switch (id) {
      case 'ai-va':
        return <Bot className="w-5 h-5 text-cyan-400" />;
      case 'ai-dev':
        return <Code2 className="w-5 h-5 text-violet-400" />;
      case 'ai-auto':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'data-analytics':
        return <BarChart3 className="w-5 h-5 text-cyan-400" />;
      case 'sql':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'python-pandas':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'finance-workflows':
        return <Calculator className="w-5 h-5 text-rose-400" />;
      case 'business-ops':
        return <Briefcase className="w-5 h-5 text-cyan-400" />;
      case 'multilingual-ai':
        return <Globe2 className="w-5 h-5 text-violet-400" />;
      case 'voice-audio':
        return <Mic2 className="w-5 h-5 text-amber-400" />;
      case 'generative-ai':
        return <Sparkles className="w-5 h-5 text-fuchsia-400" />;
      case 'prompt-eng':
        return <Wand2 className="w-5 h-5 text-cyan-400" />;
      case 'digital-content':
        return <Video className="w-5 h-5 text-rose-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredCapabilities =
    activeCategory === 'All'
      ? CORE_CAPABILITIES
      : CORE_CAPABILITIES.filter((item) => item.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative border-t border-slate-900 bg-[#060911]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title & Description */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono mb-3">
              <span>Technical & Domain Repertoire</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Core Capabilities
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              A rare synthesis of 15 years in rigorous financial operations coupled with modern generative AI architecture, relational SQL engineering, and digital media automation.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 13 Professional Capability Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredCapabilities.map((item) => (
            <div
              key={item.id}
              className="group p-5 rounded-2xl bg-[#090e1c]/90 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 shadow-md hover:shadow-cyan-500/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 group-hover:border-slate-700 transition-colors">
                    {getCapabilityIcon(item.id)}
                  </div>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/60">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Capability Tag Chips */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 text-slate-400 border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
