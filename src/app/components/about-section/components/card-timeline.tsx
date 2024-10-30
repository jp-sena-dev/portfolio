'use Client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ReactElement } from 'react';

interface TimelineCardProps {
  text: string;
  title: string;
  icon: ReactElement;
}

export function TimelineCard({ text, icon, title } :TimelineCardProps) {
  useGSAP(() => {
    gsap.utils.toArray('.timelineIcon').forEach((element: any) => {
      gsap.fromTo(element, {
        opacity: 0,
        width: 0,
        height: 0,
      }, {
        scrollTrigger: {
          trigger: element,
          start: 'start 55%',
          end: 'start 55%',
          toggleActions: 'play none reverse none',
        },
        width: '42px',
        height: '42px',
        duration: 0.5,
        opacity: 1,
        rotate: 360,
      });
    });
    gsap.utils.toArray('.timelineCard').forEach((element: any) => {
      gsap.fromTo(element, {
        opacity: 0,
        x: '100vw',
      }, {
        scrollTrigger: {
          trigger: element,
          start: 'start 55%',
          end: 'start 55%',
          toggleActions: 'play none reverse none',
        },
        opacity: 1,
        duration: 0.8,
        ease: 'power4.out',
        x: 0,
      });
    });
  });

  return (
    <div className="">
      <div className="opacity-0 timelineIcon absolute grid place-items-center bg-white border-action border-2 border-dashed rounded-full w-4 h-4 sm:w-12 sm:h-12 top-0 -left-[27px]  md:-left-[78px] translate-x-[-50%]">{ icon }</div>
      <div className="timelineCard bg-background rounded-xl px-5 pt-2 pb-5 md:px-10 md:pt-5 md:pb-10 max-w-[85%]">
        <h3 className="text-action text-2xl md:text-4xl mb-5 font-medium">{ title }</h3>
        <p className="text-sm md:text-xl">{ text }</p>
      </div>
    </div>
  );
}
