'use client';

import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';
import { Project } from '@/utils/projects';
import 'keen-slider/keen-slider.min.css';

interface SliderProps {
  projects: Project[];
}

export default function Slider({ projects }: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
      slides: { perView: 1, spacing: 20 },
      breakpoints: projects.length > 1
        ? {
          '(min-width: 0px)': {
            slides: { perView: 1, spacing: 20 },
          },
          '(min-width: 1170px)': {
            slides: { perView: 1.5, spacing: 74 },
          },
        }
        : {
          '(min-width: 0)': {
            slides: { perView: 1 },
          },
        },
    },
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider mt-4">
        {projects.map((project: Project) => (
          <Link href={`${project.link}`} target="_black" className="keen-slider__slide relative max-h-[550px] rounded-2xl hover:cursor-pointer">
            <Image width={1080} height={720} className="object-cover object-top w-full h-full min-w-[320px]" src={project.imageURL} loading="lazy" alt="" />
            <div className="absolute top-0 left-0 w-full trasition duration-500 h-full bg-gradient-to-t from-[#0000005e] to-transparent hover:bg-[#0000005e] flex flex-col justify-end pb-10 px-10">
              <p className="text-2xl md:text-5xl text-pretty text-background font-bold">{project.title}</p>
              <p className="hidden md:block text-xl text-background">{project.description}</p>
            </div>
            <FaArrowRight size={38} className="text-background absolute right-4 top-4" />
          </Link>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-5 w-full">
        {projects.length > 1 && projects.map((_project, index) => (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
          <button
            type="button"
            onClick={() => instanceRef.current?.moveToIdx(index)}
            className={`rounded-full h-6 w-6 transition ${currentSlide === index ? 'bg-action' : 'bg-gray-400'} hover:brightness-110`}
          />
        ))}
      </div>
    </>
  );
}
