'use Client';

import { Github, Instagram, Linkedin } from 'lucide-react';
import { useEffect } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/all';
import Link from 'next/link';

export function SocialMediaButton() {
  const tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 0,
  });

  useEffect(() => {
    gsap.registerPlugin(Observer);

    gsap.utils.toArray('.socialMedia').forEach((element: any) => {
      tl.fromTo(element, {
        position: 'absolute',
        top: '-90%',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'block',
      }, {
        top: '50%',
        transform: 'translate(-50%, -50%)',
        duration: 1,
        ease: 'power4.out',
      }).to(element, {
        position: 'absolute',
        top: '100%',
        transform: 'translate(-50%, 0)',
        ease: 'elastic.in(1,1)',
        duration: 1,
      });
    });

    Observer.create({
      target: '#socialMediaContainer',
      onHover: () => {
        gsap.to('.socialMedia', {
          display: 'none',
          visibility: 'hidden',
        });
        tl.pause();

        gsap.to('#socialMediaContainer', { overflow: 'visible' });

        gsap.utils.toArray('#socialMediaHidden').forEach((element: any, i) => {
          if (i === 0) {
            gsap.to(element, {
              display: 'block',
              position: 'absolute',
              top: '110%',
              ease: 'power4.out',
              duration: 1,
            });
          }
          if (i === 1) {
            gsap.to(element, {
              display: 'block',
              position: 'absolute',
              transform: 'translateY(110%)',
              top: '110%',
              ease: 'power4.out',
              duration: 1,
            });
          }
          if (i === 2) {
            gsap.to(element, {
              display: 'block',
              position: 'absolute',
              ease: 'power4.out',
              duration: 1,
            });
          }
        });
      },
    });
  });

  return (
    <div id="socialMediaContainer" className="bg-white hidden md:block rounded-full w-16 h-16 relative overflow-hidden">
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/jp-sena-dev/"
        className="socialMedia absolute hover:text-action -top-full z-[3]"
      >
        <Linkedin size={38} />
      </Link>
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/jp-sena-dev/"
        className="socialMedia absolute hover:text-action -top-full z-[3]"
      >
        <Instagram size={38} />
      </Link>
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/jp-sena-dev/"
        className="socialMedia absolute hover:text-action -top-full z-[3]"
      >
        <Github size={38} />
      </Link>
      <div id="socialMediaHidden" className="absolute z-[1] bg-white rounded-full w-16 h-16 hidden grid place-items-center">
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/jp-sena-dev/"
          className="socialMeida hover:text-action w-full h-full grid place-items-center hover:-translate-y-0.5 trasition"
        >
          <Github size={38} />
        </Link>
      </div>
      <div id="socialMediaHidden" className="absolute z-[1] bg-white rounded-full w-16 h-16 hidden grid place-items-center">
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/jp-sena-dev/"
          className="socialMeida hover:text-action w-full h-full grid place-items-center hover:-translate-y-0.5 trasition"
        >
          <Instagram size={38} />
        </Link>
      </div>
      <div id="socialMediaHidden" className="absolute z-[1] bg-white rounded-full w-16 h-16 hidden grid place-items-center">
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/jp-sena-dev/"
          className="socialMeida hover:text-action w-full h-full grid place-items-center hover:-translate-y-0.5 trasition"
        >
          <Linkedin size={38} />
        </Link>
      </div>
    </div>
  );
}
