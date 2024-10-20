'use Client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

export function LeftLine() {
  const ref: any = useRef();
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(ref.current, {
      backgroundSize: '100% 0',
      position: 'absolute',
    }, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 70%',
        end: 'bottom 90%',
        scrub: true,
      },
      delay: 4,
      backgroundSize: '100% 100%',
    });
  });

  return (
    <div
      ref={ref}
      className="w-2 min-h-full absolute left-[-1px] bg-bottom-top bg-[length:100%_0] bg-[position:0_0] bg-no-repeat"
      style={{
        backgroundImage: 'linear-gradient(#107E78, #107E78)',
      }}
    >
      {/* <img src="/me.jpeg" alt="me" className="w-full h-full object-cover" /> */}
    </div>
  );
}
