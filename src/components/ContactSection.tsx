import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe2, 
  Copy, 
  Check, 
  Send, 
  MessageSquare, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryWorkflow, setInquiryWorkflow] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link with pre-filled content
    const subject = encodeURIComponent(`Portfolio Inquiry from ${inquiryName || 'Client'}: ${inquiryWorkflow || 'AI Solution'}`);
    const body = encodeURIComponent(
      `Hello Ria,\n\nMy name: ${inquiryName}\nMy email: ${inquiryEmail}\nWorkflow limitation: ${inquiryWorkflow}\n\nDetails:\n${inquiryMessage}\n\nLooking forward to hearing from you!`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative border-t border-slate-900 bg-[#050810]">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-600/10 via-violet-600/15 to-cyan-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Strong Final CTA Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0d142a]/95 via-[#090e1f]/95 to-[#0b1226]/95 border border-cyan-500/30 p-8 sm:p-12 lg:p-16 mb-16 shadow-2xl text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-600/10 blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Let's Build Practical Solutions</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              “Have a workflow limitation that AI could solve?”
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Whether you need to streamline financial operations, eliminate cross-language communication bottlenecks, or build consistent generative AI pipelines, I am ready to design and deploy your solution.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20for%20RIA%20AI`}
                className="px-8 py-4 rounded-xl text-sm sm:text-base font-bold bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-600 text-white hover:from-cyan-400 hover:to-violet-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/35 transition-all flex items-center gap-2 group active:scale-95"
              >
                <span>Contact RIA AI</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`https://wa.me/${PERSONAL_INFO.phoneClean.replace('+', '')}?text=Hello%20Ria%20Ariyanti,%20I%20reviewed%20your%20RIA%20AI%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl text-sm sm:text-base font-semibold bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 shadow-lg shadow-emerald-500/10 transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Credentials & Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090e1c]/90 border border-slate-800 space-y-6 shadow-xl">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  Principal Contact
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  {PERSONAL_INFO.headline}
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">
                        Direct Email
                      </span>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 transition-colors truncate block"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copiedType === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone / WhatsApp Item */}
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">
                        Phone & WhatsApp
                      </span>
                      <a
                        href={`tel:${PERSONAL_INFO.phoneClean}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-300 transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors shrink-0"
                    title="Copy phone to clipboard"
                  >
                    {copiedType === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-violet-500/10 text-violet-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">
                      Primary Location
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Availability Badges */}
              <div className="pt-2 border-t border-slate-800/80">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2.5">
                  Available For:
                </span>
                <div className="flex flex-wrap gap-2">
                  {PERSONAL_INFO.availability.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500/10 to-violet-500/10 text-cyan-300 border border-cyan-500/30 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Workflow Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090e1c]/90 border border-slate-800 space-y-6 shadow-xl">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                    Workflow Consultation Request
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-white mt-1">
                  Describe Your Operational Challenge
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Provide your context below. Clicking "Submit Inquiry" will open your email client with the details pre-filled.
                </p>
              </div>

              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/70"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/70"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">
                    Workflow Category / Area of Limitation
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryWorkflow}
                    onChange={(e) => setInquiryWorkflow(e.target.value)}
                    placeholder="e.g. Financial reconciliation, Multilingual voice assistance, or AI Video Pipeline"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/70"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">
                    Description of Bottleneck or Goals
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="Describe the current limitation and what you would like the AI application or automation to accomplish..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/70 resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-violet-600 text-white hover:from-cyan-400 hover:to-violet-500 shadow-md shadow-cyan-500/20 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry to RIA AI</span>
                  </button>

                  {sentSuccess && (
                    <span className="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
                      <Check className="w-4 h-4" /> Ready in email client
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
