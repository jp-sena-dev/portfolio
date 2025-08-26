'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { PiGlobeHemisphereWest } from 'react-icons/pi';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

export function HeroSection() {
  const containerRef = useRef(null);
  const descriptionRef = useRef(null);
  const fristTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const worldRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    tl.fromTo(fristTextRef.current, { top: '0' }, { top: '-30%' })
      .fromTo(secondTextRef.current, { top: '50%' }, { top: '-60%' }, '<');

    gsap.to(worldRef.current, {
      rotate: 360,
      repeat: -1,
      repeatDelay: 3,
      duration: 2,
      ease: 'back.inOut(2)',
    });
  });

  return (
    <div ref={containerRef} className="relative h-[100vh] max-h-[580px] md:max-h-lvh flex flex-col justify-between gap-8 md:gap-0 overflow-hidden">
      <p className="text-action font-bold text-4xl md:text-[86px] lg:text-[96px] mx-auto mt-[6%] flex items-center">
        HELLO W
        <span ref={worldRef} className="mb-[-4px] md:mb-[-12px] mx-[-4px] md:mx-[-8px]">
          <PiGlobeHemisphereWest />
        </span>
        RLD!
      </p>
      <p ref={descriptionRef} className="text-[14px] left-8 bottom-12 sm:left-none sm:-right-2  max-w-[40%] sm:text-2xl sm:block text-pretty text-text-100 w-80 absolute sm:bottom-[20%] sm:left-[10%] z-[2]">
        Apaixonado por transformar ideias em soluções tecnológicas impactantes.
      </p>
      <div className="relative w-full h-[60%]">
        <p ref={fristTextRef} className="text-action z-[-1] text-4xl md:text-[80px] md:text-[90px] xl:text-[128px] font-bold absolute left-[2%]">DESENVOLVEDOR</p>
        {/* <img className="mx-auto w-[70%] sm:w-[50%] md:w-fit" alt="" /> */}
        <p ref={secondTextRef} className="text-action text-5xl md:text-[80px] lg:text-[128px] font-bold absolute top-[50%] right-[2%]">FULLSTACK</p>
      </div>
    </div>
  );
}
