'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';

interface NavProps {
  selectedSection: string;
}

export function Nav({ selectedSection }: NavProps) {
  const navRef: any = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    tl.fromTo(navRef.current, {
      position: 'fixed',
      top: '32px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'transparent',
      boxShadow: 'none',
      duration: 1,
    }, {
      scrollTrigger: {
        trigger: '.header',
        start: '3% top',
        end: '50% top',
        scrub: true,
      },
      top: '8px',
      duration: 1,
      background: 'white',
      boxShadow: 'rgb(0 0 0 / 22%) 0px 2px 9px 0px',
    });
  });

  return (
    <nav ref={navRef} className="fixed top-[32px] left-1/2 translate-x-[-50%] z-50 flex gap-2 md:gap-20 p-2 md:p-3 rounded-full">
      <Link href="/#" className="md:text-2xl px-2 md:px-4 transition hover:text-action hover:-translate-y-0.5 trasition">
        HOME
      </Link>
      <Link href="/#about" className={`md:text-2xl px-2 md:px-4 transition hover:text-action hover:-translate-y-0.5 trasition ${selectedSection === 'about' ? 'text-action -translate-y-0.5' : 'text-text'}`}>
        SOBRE
      </Link>
      <Link href="/#portfolio" className={`md:text-2xl px-2 md:px-4 transition hover:text-action hover:-translate-y-0.5 trasition ${selectedSection === 'portfolio' ? 'text-action -translate-y-0.5' : 'text-text'}`}>
        PROJETOS
      </Link>
    </nav>
  );
}
