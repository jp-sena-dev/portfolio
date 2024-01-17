'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface ObserverProps {
  sectionId: string;
  selectedSection: string;
  setSection: (para: string) => void;
}

export function Observer({ sectionId, selectedSection, setSection }: ObserverProps) {
  const ref = useInView({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  useEffect(() => {
    if (ref.inView && sectionId !== selectedSection) {
      window.history.replaceState({}, document.title, `#${sectionId}`);
      setSection(sectionId);
    }
  }, [ref, sectionId, selectedSection, setSection]);

  return (
    <div ref={ref.ref} />
  );
}
