import React, { useEffect } from 'react';
import { X, ZoomIn, ZoomOut, Download, Sparkles } from 'lucide-react';

interface ScreenshotLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | null;
  title: string;
  subtitle: string;
  tabId: string;
}

export const ScreenshotLightbox: React.FC<ScreenshotLightboxProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  subtitle,
  tabId,
}) => {
  const [zoomLevel, setZoomLevel] = React.useState<number>(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    setZoomLevel(1);
  }, [isOpen, imageUrl, tabId]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      {/* Lightbox Header */}
      <div 
        className="w-full max-w-6xl flex items-center justify-between pb-4 border-b border-slate-800 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              REAL APPLICATION SCREENSHOT • HIGH RESOLUTION INSPECTION
            </span>
          </div>
          <h3 className="text-base sm:text-xl font-bold text-white mt-0.5">{title}</h3>
          <p className="text-xs text-slate-400 hidden sm:block">{subtitle}</p>
        </div>

        <div className="flex items-center gap-2">
          {imageUrl && (
            <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-lg p-1">
              <button
                onClick={() => setZoomLevel((z) => Math.max(0.75, z - 0.25))}
                className="p-1.5 rounded hover:bg-slate-800 text-slate-300"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono px-1.5 text-slate-400">{Math.round(zoomLevel * 100)}%</span>
              <button
                onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.25))}
                className="p-1.5 rounded hover:bg-slate-800 text-slate-300"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <a
                href={imageUrl}
                download={`${tabId}-screenshot.png`}
                className="p-1.5 rounded hover:bg-slate-800 text-cyan-400 ml-1"
                title="Download Screenshot"
              >
                <Download className="w-4 h-4" />
              </a>
            </div>
          )}

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
            title="Close Lightbox (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Lightbox Content Container */}
      <div 
        className="w-full max-w-6xl flex-1 flex items-center justify-center overflow-auto my-4 rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
            className="max-h-[82vh] max-w-full object-contain rounded-lg shadow-2xl transition-transform duration-200 border border-slate-800"
          />
        ) : (
          <div className="w-full max-w-4xl p-6 sm:p-10 rounded-2xl bg-[#0b101d] border border-cyan-500/30 shadow-2xl text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white">Full-Resolution Interface View</h4>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              This preview displays the interactive layout for <strong>{title}</strong>. When you upload your live application screenshot via the "Upload Screenshot" button, it will render here in full original resolution.
            </p>
            <div className="pt-2">
              <span className="text-xs text-slate-500 font-mono">
                Press ESC or click outside to dismiss
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Footer Notice */}
      <div className="text-xs text-slate-400 font-mono flex items-center gap-2 text-center px-4">
        <span>Portfolio demonstration of an application designed and built using AI-assisted development.</span>
      </div>
    </div>
  );
};
