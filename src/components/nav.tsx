'use client';

import { useEffect } from 'react';
import { useAnimate } from 'framer-motion';
import { Button } from './ui/button';

interface NavProps {
  selectedSection: string;
  setSelectedSection: (param: string) => void;
}

export function Nav({ selectedSection, setSelectedSection }: NavProps) {
  const [escope, animate] = useAnimate();

  useEffect(() => {
    if (selectedSection === 'home') {
      animate('nav', {
        position: 'fixed',
        top: '132px',
        left: 62,
        transform: 0,
      });
    } else {
      animate('nav', {
        position: 'fixed',
        top: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
      });
    }
  }, [animate, selectedSection]);
  return (
    <div ref={escope}>
      <nav>
        <div className="text-xl text-muted-foreground">
          <Button variant="ghost">
            <a href="#home" className="relative font-bold text-xl" onClick={() => setSelectedSection('home')}>
              HOME
              <div className={`absolute transition-all ${selectedSection === 'home' ? 'w-full' : 'w-0'} h-[12%] bg-action left-0 bottom-0`} />
            </a>
          </Button>
          <Button variant="ghost">
            <a href="#portfolio" className="relative font-bold text-xl" onClick={() => setSelectedSection('portfolio')}>
              PORTFOLIO
              <div className={`absolute transition-all ${selectedSection === 'portfolio' ? 'w-full' : 'w-0'} h-[12%] bg-action left-0 bottom-0`} />
            </a>
          </Button>
          <Button variant="ghost">
            <a className="relative font-bold text-xl" href="#about" onClick={() => setSelectedSection('about')}>
              ABOUT
              <div className={`absolute transition-all ${selectedSection === 'about' ? 'w-full' : 'w-0'} h-[12%] bg-action left-0 bottom-0`} />
            </a>
          </Button>
        </div>
      </nav>
      {/* </motion.div> */}
    </div>
  );
}
