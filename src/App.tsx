import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowIWork } from './components/HowIWork';
import { ApplicationShowcase } from './components/ApplicationShowcase';
import { CoreCapabilities } from './components/CoreCapabilities';
import { ExperienceEducation } from './components/ExperienceEducation';
import { DigitalContent } from './components/DigitalContent';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScreenshotLightbox } from './components/ScreenshotLightbox';

export default function App() {
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    imageUrl: string | null;
    title: string;
    subtitle: string;
    tabId: string;
  }>({
    isOpen: false,
    imageUrl: null,
    title: '',
    subtitle: '',
    tabId: '',
  });

  const handleOpenLightbox = (
    imageUrl: string | null,
    title: string,
    subtitle: string,
    tabId: string
  ) => {
    setLightboxData({
      isOpen: true,
      imageUrl,
      title,
      subtitle,
      tabId,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxData((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About / How I Work */}
        <HowIWork />

        {/* Flagship Applications (The MAIN section) */}
        <ApplicationShowcase onOpenLightbox={handleOpenLightbox} />

        {/* Core Capabilities */}
        <CoreCapabilities />

        {/* Professional Experience & Education */}
        <ExperienceEducation />

        {/* Digital Content & Proven Results */}
        <DigitalContent />

        {/* Contact & Final CTA */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox Modal System */}
      <ScreenshotLightbox
        isOpen={lightboxData.isOpen}
        onClose={handleCloseLightbox}
        imageUrl={lightboxData.imageUrl}
        title={lightboxData.title}
        subtitle={lightboxData.subtitle}
        tabId={lightboxData.tabId}
      />
    </div>
  );
}
