import React, { useState, useEffect, useCallback } from 'react';
import { Maximize2, Upload, Sparkles, CheckCircle2, RefreshCw } from 'lucide-react';
import { AppFeatureTab } from '../types';

interface RealAppScreenshotDisplayProps {
  tab: AppFeatureTab;
  onOpenLightbox: (imageUrl: string | null, title: string, subtitle: string, tabId: string) => void;
}

export const RealAppScreenshotDisplay: React.FC<RealAppScreenshotDisplayProps> = ({
  tab,
  onOpenLightbox,
}) => {
  const primaryStorageKey = `ria_portfolio_img_ria-ai-va-analytics_${tab.id}`;
  const [screenshotUrl, setScreenshotUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Strategy to locate the uploaded screenshot across localStorage keys or static paths
  const findScreenshot = useCallback(() => {
    setIsLoading(true);

    // 1. Check primary key stored during UI upload
    try {
      const primarySaved = localStorage.getItem(primaryStorageKey);
      if (primarySaved && primarySaved.startsWith('data:image')) {
        setScreenshotUrl(primarySaved);
        setIsLoading(false);
        return;
      }
    } catch (e) {
      console.warn('Could not read from primary storageKey', e);
    }

    // 2. Check alternative common localStorage keys
    try {
      const candidateKeys = [
        `ria_portfolio_img_ria-ai-va-analytics_${tab.id}`,
        `ria_screenshot_${tab.id}`,
        `screenshot_${tab.id}`,
        tab.id,
      ];

      // Backward compatibility aliases
      if (tab.id === 'virtual-assistant') {
        candidateKeys.push(
          'ria_portfolio_img_ria-ai-va-analytics_va-email-priority',
          'ria_screenshot_va-email-priority',
          'va-email-priority',
          'ria_va_virtual-assistant'
        );
      } else if (tab.id === 'business-operations' || tab.id === 'executive-business-analytics') {
        candidateKeys.push(
          'ria_portfolio_img_ria-ai-va-analytics_business-operations',
          'ria_portfolio_img_ria-ai-va-analytics_executive-business-analytics',
          'ria_portfolio_img_ria-ai-va-analytics_executive-dashboard',
          'ria_screenshot_executive-dashboard',
          'ria_screenshot_business-operations',
          'executive-dashboard',
          'business-operations'
        );
      } else if (tab.id === 'data-analytics' || tab.id === 'data-analyst-lab') {
        candidateKeys.push(
          'ria_portfolio_img_ria-ai-va-analytics_data-analytics',
          'ria_portfolio_img_ria-ai-va-analytics_data-analyst-lab',
          'ria_portfolio_img_ria-ai-va-analytics_sql-data-analysis',
          'ria_screenshot_sql-data-analysis',
          'ria_screenshot_data-analytics',
          'sql-data-analysis',
          'data-analyst-lab',
          'data-analytics'
        );
      } else if (tab.id === 'accounting-finance') {
        candidateKeys.push(
          'ria_screenshot_accounting',
          'ria_screenshot_finance',
          'ria_screenshot_general-journal',
          'ria_screenshot_accounting-finance',
          'accounting-finance',
          'accounting'
        );
      }

      for (const k of candidateKeys) {
        const item = localStorage.getItem(k);
        if (item && item.startsWith('data:image')) {
          setScreenshotUrl(item);
          setIsLoading(false);
          return;
        }
      }

      // Scan all localStorage keys for matching keyword
      const keyword = tab.id.includes('accounting') || tab.id.includes('finance')
        ? 'accounting'
        : tab.id.includes('operation') || tab.id.includes('executive') || tab.id.includes('business')
        ? 'executive'
        : tab.id.includes('virtual') || tab.id.includes('va') || tab.id.includes('priority') || tab.id.includes('email')
        ? 'priority'
        : 'sql';

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.toLowerCase().includes(keyword)) {
          const val = localStorage.getItem(key);
          if (val && val.startsWith('data:image')) {
            setScreenshotUrl(val);
            setIsLoading(false);
            return;
          }
        }
      }
    } catch (e) {
      console.warn('Error scanning localStorage for screenshots', e);
    }

    // 3. Check public static URLs if hosted
    const staticCandidates: string[] = [];
    if (tab.id === 'virtual-assistant') {
      staticCandidates.push(
        '/assets/virtual-assistant.png',
        '/virtual-assistant.png',
        '/assets/va-email-priority.png',
        '/va-email-priority.png',
        '/assets/virtual-assistant.jpg',
        '/assets/va.png'
      );
    } else if (tab.id === 'accounting-finance') {
      staticCandidates.push(
        '/assets/accounting-finance.png',
        '/accounting-finance.png',
        '/assets/accounting.png',
        '/accounting.png',
        '/assets/general-journal.png',
        '/assets/finance.png',
        '/assets/accounting-finance.jpg'
      );
    } else if (tab.id === 'business-operations' || tab.id === 'executive-business-analytics') {
      staticCandidates.push(
        '/assets/business-operations.png',
        '/business-operations.png',
        '/assets/executive-business-analytics.png',
        '/executive-business-analytics.png',
        '/assets/executive-dashboard.png',
        '/executive-dashboard.png',
        '/assets/executive-dashboard.jpg',
        '/assets/dashboard.png'
      );
    } else if (tab.id === 'data-analytics' || tab.id === 'data-analyst-lab') {
      staticCandidates.push(
        '/assets/data-analytics.png',
        '/data-analytics.png',
        '/assets/data-analyst-lab.png',
        '/data-analyst-lab.png',
        '/assets/sql-data-analysis.png',
        '/sql-data-analysis.png',
        '/assets/sql-data-analysis.jpg',
        '/assets/sql-analysis.png'
      );
    }

    // Test static paths sequentially
    let candidateIndex = 0;
    const testNextCandidate = () => {
      if (candidateIndex >= staticCandidates.length) {
        setScreenshotUrl(null);
        setIsLoading(false);
        return;
      }
      const candidate = staticCandidates[candidateIndex++];
      const testImg = new Image();
      testImg.onload = () => {
        setScreenshotUrl(candidate);
        setIsLoading(false);
      };
      testImg.onerror = () => {
        testNextCandidate();
      };
      testImg.src = candidate;
    };

    testNextCandidate();
  }, [primaryStorageKey, tab.id]);

  useEffect(() => {
    findScreenshot();
  }, [findScreenshot]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setScreenshotUrl(result);
        try {
          localStorage.setItem(primaryStorageKey, result);
        } catch (err) {
          console.warn('Failed to cache screenshot in localStorage', err);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleContainerClick = () => {
    if (screenshotUrl) {
      onOpenLightbox(
        screenshotUrl,
        tab.title,
        'Real Application Screenshot • RIA AI Virtual Assistant & Business Analytics',
        tab.id
      );
    }
  };

  return (
    <div className="w-full space-y-3">
      {/* Top Header Label: REAL APPLICATION SCREENSHOT + Click to enlarge */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-1 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-[11px] font-bold tracking-wider uppercase">
            REAL APPLICATION SCREENSHOT
          </span>
          <span className="text-slate-400 font-medium hidden sm:inline">
            • {tab.title}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {screenshotUrl && (
            <button
              onClick={handleContainerClick}
              className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Click to enlarge</span>
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Discreet replacement button if user wants to swap or refresh screenshot */}
          <label className="cursor-pointer px-2 py-1 rounded bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 flex items-center gap-1 text-[11px] font-mono transition-colors">
            <Upload className="w-3 h-3 text-cyan-400" />
            <span>{screenshotUrl ? 'Replace Screenshot' : 'Upload Screenshot'}</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>
        </div>
      </div>

      {/* Main Display Area (NO fake browser frame, NO generated replacement mockup, pure real screenshot) */}
      <div
        onClick={handleContainerClick}
        className={`relative w-full rounded-2xl border border-slate-800/90 bg-[#060913] overflow-hidden transition-all duration-300 ${
          screenshotUrl
            ? 'cursor-pointer hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/10 group'
            : 'p-8 sm:p-12'
        }`}
      >
        {isLoading ? (
          <div className="min-h-[380px] sm:min-h-[460px] flex flex-col items-center justify-center gap-3 text-slate-400">
            <div className="w-6 h-6 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
            <span className="text-xs font-mono">Loading real application screenshot...</span>
          </div>
        ) : screenshotUrl ? (
          <div className="relative w-full flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 bg-[#070b16]">
            {/* Real Screenshot Image (Preserves true aspect ratio, large, no cropping) */}
            <img
              src={screenshotUrl}
              alt={`${tab.title} - Real Application Screenshot`}
              className="w-full h-auto max-h-[750px] object-contain rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.008]"
              loading="eager"
            />

            {/* Click to enlarge overlay cue on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-center pb-6 pointer-events-none">
              <div className="px-4 py-2 rounded-full bg-slate-950/90 border border-cyan-500/50 text-cyan-300 text-xs font-mono font-semibold flex items-center gap-2 shadow-2xl backdrop-blur-md">
                <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Click to enlarge full resolution interface</span>
              </div>
            </div>
          </div>
        ) : (
          /* Honest fallback upload prompt if localStorage was cleared or in a clean session */
          <div className="min-h-[340px] flex flex-col items-center justify-center text-center space-y-4 max-w-lg mx-auto">
            <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Upload className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block mb-1">
                Real Application Screenshot
              </span>
              <h4 className="text-base font-bold text-white">
                Select {tab.title} Screenshot
              </h4>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Please attach or select your uploaded screenshot for <strong>{tab.title}</strong>. It will be mapped directly to this tab and rendered at native resolution.
              </p>
            </div>

            <label className="cursor-pointer px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white text-xs font-semibold shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-2 cursor-pointer active:scale-95">
              <Upload className="w-4 h-4" />
              <span>Select {tab.title} Image</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
          </div>
        )}
      </div>

      {/* Mandatory Disclaimer & Context Footnote */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1 text-[11px] font-mono text-slate-500">
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>Real application screenshot evidence • Captured from working software</span>
        </div>
        <div className="text-slate-400 italic">
          Portfolio demonstration of an application designed and built using AI-assisted development.
        </div>
      </div>
    </div>
  );
};
