import React, { useState, useEffect } from 'react';
import { ArrowUp, Sparkles, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [logoSrc, setLogoSrc] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved =
          localStorage.getItem('ria_portfolio_master_logo') ||
          localStorage.getItem('ria_master_logo');
        if (saved && saved.startsWith('data:image')) {
          return saved;
        }
      } catch (e) {
        console.warn('Could not read saved logo in footer', e);
      }
    }
    return null;
  });

  useEffect(() => {
    const handleLogoUpdate = () => {
      try {
        const saved =
          localStorage.getItem('ria_portfolio_master_logo') ||
          localStorage.getItem('ria_master_logo');
        if (saved && saved.startsWith('data:image')) {
          setLogoSrc(saved);
        }
      } catch (e) {
        console.warn(e);
      }
    };
    window.addEventListener('storage', handleLogoUpdate);
    window.addEventListener('ria_logo_updated', handleLogoUpdate);
    return () => {
      window.removeEventListener('storage', handleLogoUpdate);
      window.removeEventListener('ria_logo_updated', handleLogoUpdate);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-[#04060c] py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full overflow-hidden bg-[#070b14] border border-slate-700/60 shadow-sm flex-shrink-0">
              {logoSrc ? (
                <img
                  src={logoSrc}
                  alt="RIA AI Master Logo"
                  style={{ objectFit: 'contain' }}
                  className="w-full h-full rounded-full object-contain p-0.5"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-900 text-cyan-400">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              )}
            </div>
            <div>
              <span className="font-bold text-sm text-white">{PERSONAL_INFO.brandName}</span>
              <span className="text-slate-500 mx-1.5">•</span>
              <span className="text-slate-400 font-mono">{PERSONAL_INFO.name}</span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-300 italic">
              "{PERSONAL_INFO.tagline}"
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 font-mono text-[11px] text-center sm:text-left">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.brandName} • All rights reserved. Professional Portfolio.
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-cyan-400 transition-colors">
              {PERSONAL_INFO.email}
            </a>
            <span className="text-slate-700">•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
