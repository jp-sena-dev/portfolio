'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Observer } from '@/components/observer';
import { Header } from '@/app/components/header';
import { HeroSection } from '@/app/components/hero-section';
import { PortfolioSection } from '@/app/components/portfolio-section';
import { AboutSection } from '@/app/components/about-section';
import { Footer } from '@/components/footer';

export default function Home() {
  const [selectedSection, setSectionSelected] = useState('home');

  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Header selectedSection={selectedSection} />
        <section id="home">
          <Observer setSection={setSectionSelected} sectionId="home">
            <HeroSection />
          </Observer>
        </section>
      </motion.div>
      <section id="about">
        <Observer setSection={setSectionSelected} sectionId="about">
          <AboutSection />
        </Observer>
      </section>
      <section id="portfolio">
        <Observer setSection={setSectionSelected} sectionId="portfolio">
          <PortfolioSection />
        </Observer>
      </section>
      <Footer />
    </div>
  );
}
