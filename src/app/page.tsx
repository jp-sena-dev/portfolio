'use client';

import { useState } from 'react';
import { Observer } from '@/components/observer';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { PortfolioSection } from '@/components/portfolio-section';
import { AboutSection } from '@/components/about-section';
import { Footer } from '@/components/footer';

export default function Home() {
  const [selectedSection, setSectionSelected] = useState('home');

  return (
    <div>
      <div className="px-4 pt-8 md:px-16 pt-16 overflow-x-hidden" id="home">
        <section className="h-screen ">
          <Observer selectedSection={selectedSection} setSection={setSectionSelected} sectionId="home" />
          <Header selectedSection={selectedSection} setSectionSelected={setSectionSelected} />
          <HeroSection />
        </section>
        <section id="portfolio" className="pt-16 mb-24">
          <Observer selectedSection={selectedSection} setSection={setSectionSelected} sectionId="portfolio" />
          <PortfolioSection />
        </section>
        <section id="about" className="pt-16">
          <AboutSection />
          <Observer selectedSection={selectedSection} setSection={setSectionSelected} sectionId="about" />
        </section>
      </div>
      <Footer />
    </div>
  );
}
