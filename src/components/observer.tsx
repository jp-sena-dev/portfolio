'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';

interface ObserverProps {
  sectionId: string;
  setSection: (para: string) => void;
  children: JSX.Element;
}

export function Observer({ sectionId, setSection, children }: ObserverProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setSection(sectionId),
      onEnterBack: () => setSection(sectionId),
    });
  }, [sectionId, setSection]);

  return (
    <div ref={ref}>{children}</div>
  );
}
