import React, { useState, useEffect } from 'react';
import { 
  Maximize2, 
  Upload, 
  RotateCcw, 
  Sparkles, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  Mail, 
  Database, 
  Play, 
  Mic, 
  Volume2, 
  Send, 
  Globe2, 
  Film, 
  Sliders, 
  Layers, 
  Lock, 
  ArrowRight,
  FileCode2,
  Table,
  Cpu
} from 'lucide-react';
import { AppFeatureTab } from '../types';

interface AppMockupViewerProps {
  appId: string;
  tab: AppFeatureTab;
  onOpenLightbox: (imageUrl: string | null, title: string, subtitle: string, tabId: string) => void;
}

export const AppMockupViewer: React.FC<AppMockupViewerProps> = ({
  appId,
  tab,
  onOpenLightbox,
}) => {
  const storageKey = `ria_portfolio_img_${appId}_${tab.id}`;
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setCustomImage(saved);
      } else if (appId === 'ria-ai-creative-studio') {
        if (tab.id === 'creative-dashboard') {
          setCustomImage('/assets/creative-studio/ria-ai-creative-studio-home.svg');
        } else if (tab.id === 'character-dna') {
          setCustomImage('/assets/creative-studio/ria-ai-creative-studio-character.svg');
        } else {
          setCustomImage('/assets/creative-studio/ria-ai-creative-studio-storyboard.svg');
        }
      } else {
        setCustomImage(null);
      }
    } catch {
      // safe fallback
    }
  }, [storageKey]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setCustomImage(result);
        try {
          localStorage.setItem(storageKey, result);
        } catch (err) {
          console.warn('Storage full or error saving screenshot', err);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomImage(null);
    try {
      localStorage.removeItem(storageKey);
    } catch {
      // safe
    }
  };

  return (
    <div 
      className="relative w-full rounded-2xl border border-slate-800/80 bg-[#0c101c]/90 overflow-hidden shadow-2xl transition-all duration-300 group hover:border-cyan-500/40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Application Frame Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#080c16]/90 border-b border-slate-800/80 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-slate-500 ml-2 font-mono text-[11px] hidden sm:inline">
            ria-workspace://{appId}/{tab.id}.view
          </span>
        </div>

        <div className="flex items-center gap-2">
          {customImage && (
            <button
              onClick={handleReset}
              className="px-2 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 flex items-center gap-1 text-[11px] transition-colors"
              title="Reset to interactive blueprint"
            >
              <RotateCcw className="w-3 h-3 text-cyan-400" />
              <span className="hidden sm:inline">Default View</span>
            </button>
          )}

          <label className="cursor-pointer px-2.5 py-1 rounded bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5 text-[11px] font-medium transition-all">
            <Upload className="w-3 h-3 text-cyan-400" />
            <span>Upload Screenshot</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>

          <button
            onClick={() => onOpenLightbox(customImage, tab.title, tab.shortDescription, tab.id)}
            className="p-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Open in Fullscreen Lightbox"
          >
            <Maximize2 className="w-3.5 h-3.5 text-cyan-300" />
          </button>
        </div>
      </div>

      {/* Main Display Area (Prominent & Large) */}
      <div 
        onClick={() => onOpenLightbox(customImage, tab.title, tab.shortDescription, tab.id)}
        className="relative cursor-pointer min-h-[380px] sm:min-h-[440px] md:min-h-[480px] lg:min-h-[520px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#090e1a] to-[#060a12]"
      >
        {customImage ? (
          <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-4">
            <img
              src={customImage}
              alt={`${tab.title} Screenshot`}
              className="w-full h-auto max-h-[540px] object-contain rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-cyan-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/50 text-cyan-300 text-xs font-medium flex items-center gap-2 shadow-xl backdrop-blur-md">
                <Maximize2 className="w-3.5 h-3.5" />
                Click to open fullscreen lightbox
              </span>
            </div>
          </div>
        ) : (
          /* Render Dedicated Interactive Interface Blueprint for this Feature */
          <div className="w-full h-full p-4 sm:p-6 select-none">
            {renderInteractiveTabBlueprint(tab.defaultMockupType)}
          </div>
        )}

        {/* Hover Hint Overlay (bottom) */}
        {!customImage && (
          <div className="absolute bottom-3 right-4 pointer-events-none flex items-center gap-2 text-[11px] text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-800 backdrop-blur-sm">
            <Maximize2 className="w-3 h-3 text-cyan-400" />
            <span>Click view to enlarge • You can also upload your live app screenshot</span>
          </div>
        )}
      </div>
    </div>
  );
};

/* Dedicated Rich Interactive UI Mockup Renderers based on Tab Type */
function renderInteractiveTabBlueprint(type: AppFeatureTab['defaultMockupType']) {
  switch (type) {
    case 'executive':
      return (
        <div className="space-y-4 font-sans text-slate-200">
          {/* Executive KPI Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
            <div>
              <div className="text-[11px] uppercase tracking-wider text-cyan-400 font-mono flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Executive Financial Cockpit • Real-Time Synchronization
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                Financial Operations & Cash Flow Telemetry
              </h4>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-xs font-mono">
                Solvency: Optimal (98.4%)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-violet-500/10 text-violet-300 border border-violet-500/30 text-xs font-mono">
                FY26 Q3
              </span>
            </div>
          </div>

          {/* KPI Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80">
              <div className="text-xs text-slate-400 flex items-center justify-between">
                <span>Revenue (YTD)</span>
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white mt-1">IDR 4.82B</div>
              <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                <span>+14.2% MoM growth</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80">
              <div className="text-xs text-slate-400 flex items-center justify-between">
                <span>Operating Expenses</span>
                <span className="text-[11px] font-mono text-amber-400">Budgeted</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white mt-1">IDR 2.45B</div>
              <div className="text-[11px] text-slate-400 mt-1">Controlled under 51% ceiling</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80">
              <div className="text-xs text-slate-400 flex items-center justify-between">
                <span>Net Cash Flow</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-cyan-300 mt-1">+ IDR 2.37B</div>
              <div className="text-[11px] text-cyan-400/90 mt-1">Liquid reserves stable</div>
            </div>
          </div>

          {/* Overdue Invoices Alert Section */}
          <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-rose-500/20 text-rose-400">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-rose-200">
                  Overdue Invoice Indicators (3 Critical)
                </div>
                <div className="text-[11px] text-slate-400">
                  Vendor PT Cipta Kreasi (42 days overdue) • Total IDR 84,500,000 flagged for immediate review
                </div>
              </div>
            </div>
            <button className="text-xs px-3 py-1.5 rounded-lg bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 border border-rose-500/40 transition-colors">
              Review Aging Schedule
            </button>
          </div>

          {/* AI Insight Workspace */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-violet-950/30 via-slate-900/80 to-cyan-950/30 border border-violet-500/30">
            <div className="flex items-center gap-2 text-violet-300 text-xs font-semibold mb-1.5">
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span>AI Executive Insight Workspace</span>
              <span className="ml-auto text-[10px] font-mono text-slate-400">Model: Finance Reasoning Engine</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              "Working capital velocity increased 8% following automated invoice reconciliation. Recommendation: Accelerate vendor reconciliation for Q3 tax reporting before the 15th to capture early settlement discounts."
            </p>
          </div>
        </div>
      );

    case 'email-priority':
      return (
        <div className="space-y-4 font-sans text-slate-200">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-cyan-400 font-mono">
                Virtual Assistant • Priority Classification Engine
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                Inbox Triage, Action Tasks & Deadlines
              </h4>
            </div>
            <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-mono">
              Auto-Classified: 28 items today
            </span>
          </div>

          {/* Priority Queue items */}
          <div className="space-y-2.5">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-rose-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-start gap-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-400 border border-rose-500/40 shrink-0">
                  P1 CRITICAL
                </span>
                <div>
                  <div className="text-xs font-semibold text-white">Board Meeting Budget Revision Sign-off</div>
                  <div className="text-[11px] text-slate-400">From: Direksi Keuangan • Action: Submit signed reconciliation report</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:self-center text-xs font-mono text-rose-400">
                <span>Deadline: Today 17:00</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-amber-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-start gap-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/40 shrink-0">
                  P2 HIGH
                </span>
                <div>
                  <div className="text-xs font-semibold text-white">Vendor Contract Renewal: Cloud Infrastructure</div>
                  <div className="text-[11px] text-slate-400">From: Procurement Office • Action: Review proposed 12-month SLA terms</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                <span>Deadline: Tomorrow 12:00</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-start gap-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shrink-0">
                  P3 NORMAL
                </span>
                <div>
                  <div className="text-xs font-semibold text-slate-200">Monthly Payroll Tax Clearance Notification</div>
                  <div className="text-[11px] text-slate-400">From: Tax Dept • Action: Archive confirmation receipt in e-filing</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span>Deadline: Friday</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-start gap-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-700/40 text-slate-400 border border-slate-700/60 shrink-0">
                  P4 LOW
                </span>
                <div>
                  <div className="text-xs font-semibold text-slate-300">Software Product Release Notes & Webinar Digest</div>
                  <div className="text-[11px] text-slate-500">From: Vendor Newsletter • Action: Informational digest only</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                <span>No action required</span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-cyan-950/20 border border-cyan-500/30 flex items-center justify-between text-xs">
            <span className="text-slate-300">
              ⚡ <strong>AI Follow-up Extraction:</strong> 4 pending outbound threads have passed 48h without reply.
            </span>
            <span className="text-cyan-300 font-semibold cursor-pointer hover:underline">Draft follow-ups &rarr;</span>
          </div>
        </div>
      );

    case 'sql-analysis':
      return (
        <div className="space-y-4 font-mono text-slate-200">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-cyan-400 font-sans">
                SQL Data Analysis • Query Workbench & Vendor Nominal Extraction
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white font-sans mt-0.5">
                Relational Vendor Analysis & Transaction Frequency
              </h4>
            </div>
            <button className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-sans flex items-center gap-1.5">
              <Table className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          </div>

          {/* SQL Editor Frame */}
          <div className="p-3.5 rounded-xl bg-[#080d1a] border border-slate-800 text-xs leading-relaxed">
            <div className="flex items-center justify-between text-[11px] text-slate-500 pb-2 mb-2 border-b border-slate-800/60 font-sans">
              <span className="flex items-center gap-1 text-cyan-400">
                <FileCode2 className="w-3.5 h-3.5" /> query_vendor_nominal_frequency.sql
              </span>
              <span>Executed in 18ms</span>
            </div>
            <pre className="text-slate-300 overflow-x-auto text-[11.5px]">
              <span className="text-violet-400">SELECT</span> v.vendor_name, v.category,<br/>
              &nbsp;&nbsp;<span className="text-cyan-400">COUNT</span>(t.id) <span className="text-violet-400">AS</span> transaction_frequency,<br/>
              &nbsp;&nbsp;<span className="text-cyan-400">SUM</span>(t.nominal_value) <span className="text-violet-400">AS</span> total_nominal_idr,<br/>
              &nbsp;&nbsp;<span className="text-cyan-400">AVG</span>(t.settlement_days) <span className="text-violet-400">AS</span> avg_settlement_time<br/>
              <span className="text-violet-400">FROM</span> vendors v<br/>
              <span className="text-violet-400">JOIN</span> transactions t <span className="text-violet-400">ON</span> v.id = t.vendor_id<br/>
              <span className="text-violet-400">GROUP BY</span> v.vendor_name, v.category<br/>
              <span className="text-violet-400">ORDER BY</span> total_nominal_idr <span className="text-violet-400">DESC</span> <span className="text-violet-400">LIMIT</span> 4;
            </pre>
          </div>

          {/* Results Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 font-sans text-xs">
            <table className="w-full text-left">
              <thead className="bg-slate-800/60 text-slate-400 border-b border-slate-800 text-[11px] uppercase font-mono">
                <tr>
                  <th className="p-2.5">Vendor Name</th>
                  <th className="p-2.5">Category</th>
                  <th className="p-2.5 text-right">Tx Frequency</th>
                  <th className="p-2.5 text-right">Total Nominal (IDR)</th>
                  <th className="p-2.5 text-right">Avg Settlement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-200">
                <tr className="hover:bg-slate-800/30">
                  <td className="p-2.5 font-medium text-white">PT Logistik Prima Nusantara</td>
                  <td className="p-2.5 text-slate-400">Freight & Supply</td>
                  <td className="p-2.5 text-right font-mono text-cyan-400">42 tx</td>
                  <td className="p-2.5 text-right font-mono font-semibold">1,240,500,000</td>
                  <td className="p-2.5 text-right text-emerald-400">14 days</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="p-2.5 font-medium text-white">PT Teknologi Solusi Digital</td>
                  <td className="p-2.5 text-slate-400">SaaS & Infrastructure</td>
                  <td className="p-2.5 text-right font-mono text-cyan-400">18 tx</td>
                  <td className="p-2.5 text-right font-mono font-semibold">680,200,000</td>
                  <td className="p-2.5 text-right text-emerald-400">7 days</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="p-2.5 font-medium text-white">CV Mandiri Mitra Usaha</td>
                  <td className="p-2.5 text-slate-400">Stationery & Consumables</td>
                  <td className="p-2.5 text-right font-mono text-cyan-400">67 tx</td>
                  <td className="p-2.5 text-right font-mono font-semibold">312,800,000</td>
                  <td className="p-2.5 text-right text-emerald-400">30 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );

    case 'live-call':
      return (
        <div className="space-y-4 font-sans text-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-cyan-400 font-mono">
                WorkLingo • Real-Time Conference Subtitle & Translation
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                Live Call & Meeting Bridge (Zoom, Meet, WhatsApp, Telegram)
              </h4>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-mono flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
                130+ Languages Active
              </span>
            </div>
          </div>

          {/* Active Call Simulator */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/30 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                <span>Live Audio Stream: Zoom Meeting #849-210-994</span>
              </span>
              <span className="font-mono text-emerald-400">VAD: Voice Detected (42ms Latency)</span>
            </div>

            {/* Conversation Bubbles */}
            <div className="space-y-3 pt-1">
              <div className="p-3 rounded-lg bg-slate-800/70 border border-slate-700/60">
                <div className="text-[11px] text-cyan-300 font-semibold mb-1 flex items-center justify-between">
                  <span>Speaker (English - Tokyo Client):</span>
                  <span className="text-slate-500 text-[10px]">Original Audio</span>
                </div>
                <p className="text-xs text-slate-300 italic">
                  "Could you verify the Q3 delivery schedule and confirm whether customs clearance is already settled?"
                </p>
              </div>

              <div className="p-3 rounded-lg bg-gradient-to-r from-violet-950/40 to-cyan-950/40 border border-cyan-500/40">
                <div className="text-[11px] text-emerald-300 font-semibold mb-1 flex items-center justify-between">
                  <span>AI Real-time Translation (Indonesian):</span>
                  <span className="text-cyan-400 text-[10px] font-mono">TTS Audio Generated</span>
                </div>
                <p className="text-xs text-white font-medium">
                  "Bisakah Anda memverifikasi jadwal pengiriman Q3 dan memastikan apakah bea cukai sudah selesai diproses?"
                </p>
              </div>
            </div>

            {/* Supported platforms bar */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] text-slate-400">
              <span className="text-slate-500">Connected Hubs:</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">WhatsApp Desktop</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">Telegram Call</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">Google Meet</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">Zoom Rooms</span>
            </div>
          </div>
        </div>
      );

    case 'whatsapp':
      return (
        <div className="space-y-4 font-sans text-slate-200">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-cyan-400 font-mono">
                WorkLingo • Messaging & Voice Synthesis
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                WhatsApp Text & Voice Note Dispatch Engine
              </h4>
            </div>
            <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-xs font-mono">
              WhatsApp Linked
            </span>
          </div>

          {/* Translation Pipeline Mockup */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Source Message */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="font-semibold text-slate-300">Source Message (Indonesian)</span>
                <span className="text-[10px] text-slate-500">Auto-detected</span>
              </div>
              <div className="p-3 rounded-lg bg-[#070b14] border border-slate-800 text-xs text-slate-300 min-h-[90px]">
                "Halo Pak Tanaka, laporan keuangan dan rekonsiliasi vendor sudah kami siapkan. Kami siap kirimkan dokumen lengkapnya hari ini pukul 14.00."
              </div>
            </div>

            {/* Translated Output */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/40">
              <div className="flex items-center justify-between text-xs text-cyan-400 mb-2">
                <span className="font-semibold text-cyan-300">Target Output (Japanese / 日本語)</span>
                <span className="text-[10px] text-cyan-400">Nuanced Business Keigo</span>
              </div>
              <div className="p-3 rounded-lg bg-[#070b14] border border-cyan-500/30 text-xs text-white min-h-[90px]">
                "田中様、お世話になっております。財務報告書および取引先の照合が完了いたしました。本日14時に全書類をご送付させていただきます。"
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                <Volume2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-200">Prepare Translated Voice Note (TTS)</div>
                <div className="text-[11px] text-slate-400">Natural native pronunciation & pitch synthesis ready</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1.5 transition-colors">
                <Play className="w-3.5 h-3.5 text-cyan-400" />
                <span>Preview Audio (0:14)</span>
              </button>
              <button className="px-3.5 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-xs flex items-center gap-1.5 hover:bg-emerald-400 transition-colors">
                <Send className="w-3.5 h-3.5" />
                <span>Send via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      );

    case 'audio':
      return (
        <div className="space-y-4 font-sans text-slate-200">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-cyan-400 font-mono">
                WorkLingo • Audio & Media Translation Pipeline
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                MP3 Translation, System Audio Capture & Mic Streams
              </h4>
            </div>
            <span className="px-2.5 py-1 rounded bg-violet-500/10 text-violet-300 border border-violet-500/30 text-xs font-mono">
              Acoustic Diarization V2
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
              <div className="p-2 w-fit rounded-lg bg-violet-500/20 text-violet-400 mb-2">
                <Mic className="w-4 h-4" />
              </div>
              <div className="text-xs font-semibold text-white">System Audio Capture</div>
              <div className="text-[11px] text-slate-400 mt-1">
                Direct loopback capturing webinars, browser audio, and system sound.
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
              <div className="p-2 w-fit rounded-lg bg-cyan-500/20 text-cyan-400 mb-2">
                <Play className="w-4 h-4" />
              </div>
              <div className="text-xs font-semibold text-white">MP3 / Media Translation</div>
              <div className="text-[11px] text-slate-400 mt-1">
                Batch processing recorded podcasts, interviews, and corporate video files.
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
              <div className="p-2 w-fit rounded-lg bg-emerald-500/20 text-emerald-400 mb-2">
                <Globe2 className="w-4 h-4" />
              </div>
              <div className="text-xs font-semibold text-white">Speaker Input Workflow</div>
              <div className="text-[11px] text-slate-400 mt-1">
                Spontaneous face-to-face simultaneous translation with speaker isolation.
              </div>
            </div>
          </div>

          {/* Audio Track Visualizer Mockup */}
          <div className="p-3.5 rounded-xl bg-[#080d1a] border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span>international_client_briefing.mp3 (4:12)</span>
              <span className="text-emerald-400 font-mono">Transcribed 100% • 130+ Target Languages Ready</span>
            </div>
            {/* Waveform bars */}
            <div className="flex items-center gap-1 h-12 py-2 px-1">
              {[35, 60, 40, 80, 95, 45, 20, 65, 85, 90, 70, 40, 60, 80, 50, 30, 75, 90, 60, 45, 80, 95, 30, 20, 50, 70, 85, 40, 60, 75, 90, 45, 30].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className={`flex-1 rounded-full ${
                    i < 20 ? 'bg-cyan-400/80' : 'bg-slate-700/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      );

    case 'creative-studio':
      return (
        <div className="space-y-4 font-sans text-slate-200">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-violet-400 font-mono">
                RIA AI Creative Studio • Multi-Genre Production
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                Production Pipelines: Idea → Character → Image → Motion
              </h4>
            </div>
            <span className="px-2.5 py-1 rounded bg-violet-500/10 text-violet-300 border border-violet-500/30 text-xs font-mono">
              Active Project: Drama Series
            </span>
          </div>

          {/* Content Workflow Genre Chips (Mandatory from prompt) */}
          <div>
            <div className="text-xs text-slate-400 mb-2 font-medium">
              Supported Creative Production Workflows:
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'Drama', desc: 'Narrative series' },
                { name: 'UGC', desc: 'Social conversions' },
                { name: 'Lipsync', desc: 'Voice-to-lip' },
                { name: 'ASMR', desc: 'Sensory audio' },
                { name: 'POV', desc: 'Immersive first-person' },
                { name: 'Sejarah', desc: 'Historical epics' },
                { name: 'Edukasi', desc: 'Educational explainers' },
                { name: 'Kesehatan', desc: 'Health & wellness' },
              ].map((genre) => (
                <div
                  key={genre.name}
                  className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-xs flex items-center gap-1.5 hover:border-violet-500/60 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  <span className="font-semibold text-white">{genre.name}</span>
                  <span className="text-[10px] text-slate-500">({genre.desc})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Queue Board */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 pt-2">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <span className="text-xs text-slate-400 block">1. Ideation</span>
              <span className="text-sm font-bold text-white mt-1 block">Logline & Synopsis</span>
              <span className="text-[10px] text-emerald-400">Completed</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <span className="text-xs text-slate-400 block">2. Character DNA</span>
              <span className="text-sm font-bold text-violet-300 mt-1 block">Identity Locked</span>
              <span className="text-[10px] text-violet-400">9-Point Biometric</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-cyan-500/40 text-center">
              <span className="text-xs text-cyan-400 block">3. Image Render</span>
              <span className="text-sm font-bold text-white mt-1 block">Scene Storyboards</span>
              <span className="text-[10px] text-cyan-400">Rendering (12/12)</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <span className="text-xs text-slate-400 block">4. Motion Prep</span>
              <span className="text-sm font-bold text-slate-300 mt-1 block">Video Generation</span>
              <span className="text-[10px] text-slate-500">Queued</span>
            </div>
          </div>
        </div>
      );

    case 'script-scene':
      return (
        <div className="space-y-4 font-sans text-slate-200">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-violet-400 font-mono">
                Script & Scene Engine • Project-Based Storytelling
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                Sequential Scene Planning & Continuity Logic
              </h4>
            </div>
            <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-mono">
              Scene Chain: 6 Acts
            </span>
          </div>

          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase">Selected Project Title:</span>
                <div className="text-sm font-bold text-white">"Langkah Sunyi: Rahasia Ruang Keuangan" (Drama Misteri)</div>
                <div className="text-xs text-slate-400 mt-0.5">Genre: Drama / Investigasi • Target: Episodic Short Video Format</div>
              </div>
              <span className="px-3 py-1 rounded-md bg-violet-500/20 text-violet-300 border border-violet-500/40 text-xs">
                Context Continuity Enabled
              </span>
            </div>

            {/* Scene Beats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-[#090d18] border border-slate-800 text-xs space-y-1.5">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span className="font-bold text-violet-300">SCENE 01 • Malam Hari / Ruang Arsip</span>
                  <span className="font-mono text-slate-500">Camera: Low-angle tracking</span>
                </div>
                <p className="text-slate-300">
                  Karakter utama membuka brankas tua di tengah lampu temaram. Ekspresi waspada saat menemukan dokumen bertanda tangan rahasia.
                </p>
                <div className="text-[10px] text-cyan-400 font-mono pt-1">
                  Prompt Tag: [Character_DNA_Rina] [Lighting: Cinematic Chiaroscuro] [Lens: 35mm f/1.8]
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#090d18] border border-slate-800 text-xs space-y-1.5">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span className="font-bold text-violet-300">SCENE 02 • Lorong Kantor / Pertemuan</span>
                  <span className="font-mono text-slate-500">Camera: Over-the-shoulder shot</span>
                </div>
                <p className="text-slate-300">
                  Karakter berpapasan dengan manajer audit. Tatapan mata intens tanpa dialog. Transisi tegang mempertahankan identitas fisik karakter.
                </p>
                <div className="text-[10px] text-cyan-400 font-mono pt-1">
                  Prompt Tag: [Character_DNA_Rina] [Face_Consistency_Lock: 100%] [Shot: OTS Medium]
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'character-dna':
      return (
        <div className="space-y-4 font-sans text-slate-200">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-violet-400 font-mono">
                Character DNA System • Identity Lock Architecture
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                9-Point Biometric & Style Consistency System
              </h4>
            </div>
            <span className="px-2.5 py-1 rounded bg-violet-500/10 text-violet-300 border border-violet-500/30 text-xs font-mono flex items-center gap-1">
              <Lock className="w-3 h-3 text-violet-400" />
              Identity Locked
            </span>
          </div>

          <div className="p-3 rounded-lg bg-violet-950/20 border border-violet-500/30 text-xs text-slate-300">
            💡 <strong>Cross-Scene Reusability:</strong> Character DNA profiles can be saved and reused across multiple episodes or scenes to eliminate prompt drift and preserve face identity.
          </div>

          {/* 9 Biometric Points Grid as specified */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] uppercase font-mono text-slate-500 block">1. Face Identity</span>
              <span className="text-slate-200 font-semibold">Structured Facial Geometry</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] uppercase font-mono text-slate-500 block">2. Facial Details</span>
              <span className="text-slate-200 font-semibold">Natural Eye Shape & Bridge</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] uppercase font-mono text-slate-500 block">3. Skin Tone</span>
              <span className="text-slate-200 font-semibold">Warm Neutral Olive Tone</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] uppercase font-mono text-slate-500 block">4. Body Shape</span>
              <span className="text-slate-200 font-semibold">Natural Slender Frame</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] uppercase font-mono text-slate-500 block">5. Body Proportions</span>
              <span className="text-slate-200 font-semibold">1:7.5 Anatomical Scale</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] uppercase font-mono text-slate-500 block">6. Relative Height</span>
              <span className="text-slate-200 font-semibold">162 cm (Constant Reference)</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] uppercase font-mono text-slate-500 block">7. Hair / Hijab</span>
              <span className="text-slate-200 font-semibold">Neat Silk Chiffon Hijab</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] uppercase font-mono text-slate-500 block">8. Physical Traits</span>
              <span className="text-slate-200 font-semibold">Expressive Corporate Persona</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-cyan-500/40">
              <span className="text-[10px] uppercase font-mono text-cyan-400 block">9. Reference Image</span>
              <span className="text-cyan-300 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Seed #8829-Locked
              </span>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="p-8 text-center text-slate-400">
          Interactive view rendering...
        </div>
      );
  }
}
