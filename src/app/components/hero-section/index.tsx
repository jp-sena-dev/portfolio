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
  const fristTextMobileRef = useRef(null);
  const secondTextMobileRef = useRef(null);
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

    tl.fromTo(fristTextRef.current, { top: '0' }, { top: '-15%' })
      .fromTo(secondTextRef.current, { top: '50%' }, { top: '0%' }, '<')
      .fromTo(fristTextMobileRef.current, { y: 0 }, { y: '130px' }, '<')
      .fromTo(secondTextMobileRef.current, { y: 0 }, { y: '130px' }, '<');

    gsap.to(worldRef.current, {
      rotate: 360,
      repeat: -1,
      repeatDelay: 3,
      duration: 2,
      ease: 'back.inOut(2)',
    });
  });

  return (
    <div ref={containerRef} className="relative h-[100vh] flex flex-col justify-between gap-8 md:gap-0 overflow-hidden">
      <p className="text-action font-bold text-4xl md:text-[86px] lg:text-[96px] mx-auto mt-[6%] flex items-center">
        HELLO W
        <span ref={worldRef} className="translate-y-[5%] mx-[-4px] md:mx-[-8px]">
          <PiGlobeHemisphereWest />
        </span>
        RLD!
      </p>
      <div className="block md:hidden relative">
        <p ref={fristTextMobileRef} className="text-action font-bold text-4xl md:text-5xl">DESENVOLVEDOR</p>
        <p ref={secondTextMobileRef} className="text-action mt-7 font-bold text-4xl md:text-5xl pr-2 text-end z-[-1]">FULLSTACK</p>
      </div>
      <p ref={descriptionRef} className="text-[14px] -right-2 bottom-[50%] max-w-[40%] sm:text-2xl sm:block text-pretty text-text-100 w-80 absolute sm:bottom-[20%] sm:left-[10%] z-[2]">
        Apaixonado por transformar ideias em soluções tecnológicas impactantes.
      </p>
      <div className="relative">
        <p ref={fristTextRef} className="text-action z-[-1] hidden md:block md:text-[80px] md:text-[90px] xl:text-[128px] font-bold absolute left-[2%]">DESENVOLVEDOR</p>
        <img className="mx-auto w-[60%] w-fit" src="/my.png" alt="" />
        <p ref={secondTextRef} className="text-action text-5xl hidden md:block md:text-[80px] lg:text-[128px] font-bold absolute top-[50%] right-[2%]">FULLSTACK</p>
      </div>
    </div>
  );
}
