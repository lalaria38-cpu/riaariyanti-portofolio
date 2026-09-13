import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, ShieldCheck, Mail, Upload, Camera } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
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
        console.warn('Could not read saved master logo', e);
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
        console.warn('Could not read updated logo', e);
      }
    };
    window.addEventListener('storage', handleLogoUpdate);
    window.addEventListener('ria_logo_updated', handleLogoUpdate);
    return () => {
      window.removeEventListener('storage', handleLogoUpdate);
      window.removeEventListener('ria_logo_updated', handleLogoUpdate);
    };
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setLogoSrc(result);
        try {
          localStorage.setItem('ria_master_logo', result);
          localStorage.setItem('ria_portfolio_master_logo', result);
        } catch (err) {
          console.warn('Failed to save master logo to localStorage', err);
        }
        window.dispatchEvent(new Event('ria_logo_updated'));
      }
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Applications', href: '#applications' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Digital Content', href: '#digital-content' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // detect active section
      const sections = ['home', 'about', 'applications', 'skills', 'experience', 'digital-content', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090e]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <div className="flex items-center gap-3">
          {/* Clickable RIA AI Master Logo (Circular, object-fit: contain, subtle hover overlay & glow, opens file picker) */}
          <label
            htmlFor="ria-master-logo-file-input"
            className="relative group/logo cursor-pointer flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-[#070b14] border border-slate-700/60 shadow-lg shadow-violet-500/10 hover:border-cyan-400 hover:shadow-cyan-500/30 transition-all duration-300 flex-shrink-0"
            title="Change RIA AI Logo"
          >
            {logoSrc ? (
              <img
                src={logoSrc}
                alt="RIA AI Master Logo"
                style={{ objectFit: 'contain' }}
                className="w-full h-full rounded-full object-contain p-0.5"
              />
            ) : (
              <div className="w-full h-full rounded-full flex items-center justify-center bg-slate-900/90 text-cyan-400 border border-dashed border-cyan-500/40">
                <Upload className="w-4 h-4 text-cyan-400" />
              </div>
            )}

            {/* Subtle Hover State Only: camera icon overlay that appears on hover, never permanently covers */}
            <div className="absolute inset-0 rounded-full bg-slate-950/65 opacity-0 group-hover/logo:opacity-100 flex items-center justify-center transition-opacity duration-200 backdrop-blur-[1px]">
              <Camera className="w-3.5 h-3.5 text-cyan-300 drop-shadow" />
            </div>

            <input
              id="ria-master-logo-file-input"
              type="file"
              accept="image/png,image/*"
              className="hidden"
              onChange={handleFileUpload}
              aria-label="Change RIA AI Logo"
            />
          </label>

          {/* Brand Name & Credentials */}
          <a
            href="#home"
            className="group focus:outline-none"
            title="RIA AI — RIA ARIYANTI, S.E."
          >
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                {PERSONAL_INFO.brandName}
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                PRO
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono tracking-tight block">
              {PERSONAL_INFO.name}
            </p>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Contact CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-violet-600 text-white hover:from-cyan-400 hover:to-violet-500 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all active:scale-95"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Me</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800/90 bg-[#080c16]/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl text-center text-xs font-semibold bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-md shadow-cyan-500/20"
            >
              Contact RIA AI
            </a>
            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Available for Worldwide Opportunities</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
