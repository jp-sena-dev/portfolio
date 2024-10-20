'use Client';

import { CiPlay1 } from 'react-icons/ci';
import { LiaLaptopCodeSolid } from 'react-icons/lia';
import { GoBook } from 'react-icons/go';
import { LuTags } from 'react-icons/lu';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import { TitleSection } from '../../../components/title-section';
import { TimelineCard } from './components/card-timeline';

export function AboutSection() {
  const lineRef: any = useRef();
  const containerRef: any = useRef();

  useGSAP(() => {
    gsap.fromTo(lineRef.current, {
      height: 0,
    }, {
      height: '87%',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'start center',
        end: 'bottom 10%',
        scrub: true,
      },
    });

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
    <div className="bg-white rounded-xl pb-20 overflow-hidden">
      <TitleSection
        title="Sobre mim"
        description={[{ text: 'Saiba mais sobre', highlighted: false }, { text: 'quem eu sou', highlighted: true }, { text: 'e o que', highlighted: false }, { text: 'me motiva', highlighted: true }]}
      />
      <div ref={containerRef} className="flex flex-col gap-32 max-w-[650px] mx-auto relative">
        <div ref={lineRef} className="absolute left-[19px] md:left-0 h-[0] border-action border-2 border-dashed" />
        <div className="flex flex-col gap-32 *:translate-x-12 md:*:translate-x-20">
          <TimelineCard
            text="Iniciei minha jornada na programação com o Curso em Vídeo, aprendendo os fundamentos da lógica de programação e despertando meu interesse pela área."
            icon={<CiPlay1 className="text-action" size="50%" />}
            title="Primeiros Passos"
          />
          <TimelineCard
            text="Decidi me especializar em desenvolvimento front-end, equilibrando estudos escolares com minha paixão por tecnologia. Aprimorei habilidades em HTML, CSS e JavaScript."
            icon={<LiaLaptopCodeSolid className="text-action" size="50%" />}
            title="Foco no Front-End"
          />
          <TimelineCard
            text="Com o suporte da comunidade, comecei a utilizar bibliotecas como ReactJS e NextJS, criando projetos mais complexos e dinâmicos."
            icon={<GoBook className="text-action" size="50%" />}
            title="Exploração de Bibliotecas"
          />
          <TimelineCard
            text="Participei de diversos projetos freelancer e dediquei-me a construir side projects, aplicando metodologias ágeis e ferramentas modernas."
            icon={<LuTags className="text-action" size="50%" />}
            title="Projetos Freelancer e Autorais"
          />
        </div>
      </div>
    </div>
  );
}
