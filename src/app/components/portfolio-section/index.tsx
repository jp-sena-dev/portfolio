'use Client';

import { useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import { ScrollTrigger } from 'gsap/all';
import { LuServer, LuTags } from 'react-icons/lu';
import { LiaLaptopCodeSolid } from 'react-icons/lia';
import { GoBook } from 'react-icons/go';
import { TitleSection } from '../../../components/title-section';

export function PortfolioSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.freelanceObjectAnimate').forEach((element: any, i) => {
      gsap.fromTo(element, {
        top: '-75px',
        right: '-75px',
      }, {
        rotateX: -15,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: 'slow(0.7,0.7,false)',
        delay: i * 0.5,
      });
    });
    gsap.utils.toArray('.articleObjectAnimate').forEach((element: any, i) => {
      gsap.fromTo(element, {
        top: '-80%',
        right: '-100%',
        delay: i * 0.5,
      }, {
        rotate: -39,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: 'power2.inOut',
        delay: i * 0.5,
      });
    });
    gsap.utils.toArray('.frontendObjectAnimate').forEach((element: any, i) => {
      gsap.fromTo(element, {
        delay: i * 1.5,
      }, {
        rotate: 3,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: 'power2.inOut',
        delay: i * 1.5,
      });
    }, []);

    gsap.utils.toArray('.backendObjectAnimate').forEach((element: any, i) => {
      gsap.fromTo(element, {
        top: '-75px',
        right: '-75px',
      }, {
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: 'slow(0.7,0.7,false)',
        delay: i * 0.5,
      });
    });
  }, []);

  return (
    <div className="">
      <TitleSection
        title="Experiência profissional"
        description={[{ text: 'Projetos que transformam', highlighted: false }, { text: 'ideias', highlighted: true }, { text: 'em', highlighted: false }, { text: 'experiências digitais', highlighted: true }]}
      />
      <div className="flex flex-wrap mx-auto justify-center max-w-[1880px] gap-10 my-16 pb-20 px-4 md:px-10">
        <Link href="/portfolio#freelance" className="portifolio hover:cursor-pointer bg-white flex flex-col justify-between bg-background h-72 rounded-xl p-6 relative overflow-hidden w-[420px] over:cursor-pointer hover:-translate-y-1 trasition duration-500">
          <div className="freelanceObjectAnimate absolute right-[-75px] top-[-75px] rounded-full w-[160px] h-[160px] border-action-100 border-[25px]" />
          <div className="freelanceObjectAnimate absolute right-[-75px] top-[-75px] rounded-full w-[245px] h-[245px] border-action-100 border-[25px]" />
          <div className="freelanceObjectAnimate absolute right-[-75px] top-[-75px] rounded-full w-[325px] h-[325px] border-action-100 border-[25px]" />
          <div className="rounded-xl w-20 h-20 bg-background text-action grid place-items-center">
            <LuTags size="70%" className="" />
          </div>
          <p className="text-5xl font-semibold">Freelance</p>
        </Link>
        <Link href="/portfolio#articles" className="portifolio hover:cursor-pointer bg-white flex flex-col justify-between bg-background h-72 rounded-xl p-6 relative overflow-hidden w-[420px] over:cursor-pointer hover:-translate-y-1 trasition duration-500">
          <div className="articleObjectAnimate absolute right-[-80%] top-[-100%] h-[436px] w-[436px] border-action-100 border-l-[25px] rotate-[-40deg]" />
          <div className="articleObjectAnimate absolute right-[-80%] top-[-100%] h-[472px] w-[472px] border-action-100 border-l-[25px] rotate-[-40deg]" />
          <div className="articleObjectAnimate absolute right-[-80%] top-[-100%] h-[523px] w-[523px] border-action-100 border-l-[25px] rotate-[-40deg]" />
          <div className="rounded-xl w-20 h-20 bg-background text-action grid place-items-center">
            <GoBook size="70%" className="" />
          </div>
          <p className="text-5xl font-semibold">Artigos</p>
        </Link>
        <Link href="/portfolio#frontend" className="portifolio hover:cursor-pointer bg-white flex flex-col justify-between bg-background h-72 rounded-xl p-6 relative overflow-hidden w-[420px] over:cursor-pointer hover:-translate-y-1 trasition duration-500">
          <div className="frontendObjectAnimate absolute right-[-75px] top-[-75px] rounded-lg w-[160px] h-[160px] border-action-100 border-[25px]" />
          <div className="frontendObjectAnimate absolute right-[-75px] top-[-75px] rounded-lg w-[233px] h-[233px] border-action-100 border-[25px]" />
          <div className="frontendObjectAnimate absolute right-[-75px] top-[-75px] rounded-lg w-[298px] h-[298px] border-action-100 border-[25px]" />
          <div className="rounded-xl w-20 h-20 bg-background text-action grid place-items-center">
            <LiaLaptopCodeSolid size="70%" className="" />
          </div>
          <p className="text-5xl font-semibold">Front-end</p>
        </Link>
        <Link href="/portfolio#backend" className="portifolio hover:cursor-pointer bg-white flex flex-col justify-between bg-background h-72 rounded-xl p-6 relative overflow-hidden w-[420px] over:cursor-pointer hover:-translate-y-1 trasition duration-500">
          <div className="backendObjectAnimate absolute right-[-75px] top-[-75px] rounded-full w-[160px] h-[160px] border-action-100 border-[25px]" />
          <div className="backendObjectAnimate absolute right-[-75px] top-[-75px] rounded-full w-[245px] h-[245px] border-action-100 border-[25px]" />
          <div className="backendObjectAnimate absolute right-[-75px] top-[-75px] rounded-full w-[325px] h-[325px] border-action-100 border-[25px]" />
          <div className="rounded-xl w-20 h-20 bg-background text-action grid place-items-center">
            <LuServer size="70%" className="" />
          </div>
          <p className="text-5xl font-semibold">Back-end</p>
        </Link>
      </div>
    </div>
  );
}
