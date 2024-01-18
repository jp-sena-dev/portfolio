/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import { useMemo, useState } from 'react';
import { AccordionContent } from '@radix-ui/react-accordion';
import { motion } from 'framer-motion';
import {
  ChevronDown,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Send,
} from 'lucide-react';
import { UnderlinedWrapper } from '@/components/underlined-wrapper';
import { Nav } from '@/components/nav';
import { Observer } from '@/components/observer';
import { Button } from '@/components/ui/button';
import { Combobox } from '@/components/ui/Combobox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Accordion, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { projects } from '@/utils/projects';

export default function Home() {
  const [selectedSection, setSectionSelected] = useState('home');
  const [selectedTechnology, setSelectedTechnology] = useState('');
  const fiteredProjects = useMemo(() => {
    if (selectedTechnology) {
      return (projects.filter(({ technologies }) => (
        technologies.some((technology) => (
          technology.toLowerCase() === selectedTechnology.toLowerCase()
        ))
      )));
    }
    return projects;
  }, [selectedTechnology]);

  return (
    <div>
      <div className="px-16 pt-16" id="home">
        <section className="h-screen relative">
          <Observer selectedSection={selectedSection} setSection={setSectionSelected} sectionId="home" />
          <header>
            <div className="flex items-center justify-between px-4">
              <a href="https://www.linkedin.com/in/jp-sena-dev/" target="_blank" rel="noreferrer">
                <h1 className="font-bold lg:text-[52px]">
                  JP-SENA
                  <span className="text-action">.</span>
                  DEV
                </h1>
              </a>
              <div className="flex gap-[29px] transition-all">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/joaopedr0sena"
                  className="hover:mt-[-4px] hover:brightness-75"
                >
                  <Github size="40px" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/jp-sena-dev/"
                  className="hover:mt-[-4px] hover:brightness-75"
                >
                  <Linkedin size="40px" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/joao_sena1410/"
                  className="hover:mt-[-4px] hover:brightness-75"
                >
                  <Instagram size="40px" />
                </a>
              </div>
            </div>
            <Nav setSelectedSection={setSectionSelected} selectedSection={selectedSection} />
          </header>
          <div className="mt-24">
            <h2 className="font-bold text-6xl">
              Front end
              {' '}
              <UnderlinedWrapper>
                developer
              </UnderlinedWrapper>
            </h2>
            <p className="text-[24px] w-[69%] mt-2">
              Olá, sou o João! Desenvolvedor FrontEnd com mais de 2 anos
              de experiência, especializado em
              {' '}
              <UnderlinedWrapper>JavaScript</UnderlinedWrapper>
              {', '}
              <UnderlinedWrapper>HTML</UnderlinedWrapper>
              {' e '}
              <UnderlinedWrapper>CSS</UnderlinedWrapper>
              . Estou aqui para criar interfaces incríveis e funcionais,
              transformando conceitos em realidade digital.
            </p>
          </div>
          <motion.div
            initial={{
              width: 'contetent',
              maxWidth: '40px',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            animate={{
              width: 'contetent',
              position: 'absolute',
              maxWidth: '40px',
              bottom: ['30%', '20%', '4%', '20%', '30%'],
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          >
            <ChevronDown size={150} />
          </motion.div>
        </section>
        <section id="portfolio" className="min-h-screen pt-16">
          <Observer selectedSection={selectedSection} setSection={setSectionSelected} sectionId="portfolio" />
          <div className="max-w-7xl mx-auto mt-14">
            <div className="flex justify-between mb-5">
              {!selectedTechnology ? <div /> : <Button variant="outline">{selectedTechnology}</Button>}
              <Combobox setSelectedTechnology={setSelectedTechnology} />
            </div>
            <div className="grid gap-8 grid-cols-[minmax(100px,_1fr)_minmax(100px,_1fr)_minmax(100px,_1fr)] grid-rows-[minmax(200px,_1fr)_minmax(200px,_1fr)_minmax(200px,_1fr)]">
              {fiteredProjects.map((project) => (
                <div className="w-full max-h-[200px] bg-secondary rounded-md">
                  <Dialog>
                    <DialogTrigger className="w-full h-full bg-secondary">
                      <img src={project.imgageURL} className="max-h-full rounded-md w-full object-cover transition bg-cover brightness-75 hover:bg-center hover:brightness-110 hover:drop-shadow-lg" alt="" />
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href={project.links.repository}
                            className="text-action font-bold hover:underline hover:text-action-hover"
                          >
                            {project.title}
                          </a>
                        </DialogTitle>
                      </DialogHeader>
                      <div>
                        <p className="text-justify">{ project.description }</p>
                        <div className="relative">
                          <img src={project.imgageURL} alt="project-image" className="w-full my-2" />
                          <a target="_blank" rel="noreferrer" href={project.links.web || project.links.repository} className="absolute bg-transparent text-transparent left-0 top-0 w-full h-full hover:text-white hover:bg-[#0000008f] flex items-center justify-center">
                            {project.links.web ? <Globe /> : <Github />}
                          </a>
                        </div>
                        <div className="text-action flex gap-1 transition-all h-6">
                          {project.links.web && (
                            <a href={project.links.web} target="_blank" rel="noreferrer" className="hover:text-action-hover hover:mt-[-4px]">
                              <i><Globe /></i>
                            </a>
                          )}
                          {project.links.repository && (
                            <a href={project.links.repository} target="_blank" rel="noreferrer" className="hover:text-action-hover hover:mt-[-4px]">
                              <i><Github /></i>
                            </a>
                          )}
                        </div>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="item-1">
                            <AccordionTrigger>Ferramentas e serviços</AccordionTrigger>
                            <AccordionContent>
                              {project.technologies.map((technology, index) => (
                                <>
                                  <span className="text-action font-bold italic">{`${technology}`}</span>
                                  {index === project.technologies.length - 1 ? '' : ', '}
                                </>
                              ))}
                              .
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="pt-16">
          <Observer selectedSection={selectedSection} setSection={setSectionSelected} sectionId="about" />
          <div className="flex gap-16 max-w-[1060px] m-auto mt-14">
            <div className="w-[300px] h-[427px] bg-primary">a</div>
            <div className="text-[20px] w-[600px] text-balance indent-4">
              <p className="mb-5">
                Iniciei minha jornada na programação aos 13 anos por meio do
                {' '}
                <UnderlinedWrapper>Curso em Vídeo</UnderlinedWrapper>
                ,
                explorando os fundamentos da lógicade programação. Aos 16 anos, tomei a decisão de
                me especializar no desenvolvimento
                {' '}
                <UnderlinedWrapper>front-end</UnderlinedWrapper>
                , conseguindo equilibrar responsabilidades
                escolares com minha crescente paixão pela programação. Com o suporte de amigos,
                aprimorei habilidades em
                {' '}
                <UnderlinedWrapper>JavaScript</UnderlinedWrapper>
                ,
                <UnderlinedWrapper>CSS</UnderlinedWrapper>
                {' e '}
                <UnderlinedWrapper>HTML</UnderlinedWrapper>
                , evoluindo para a utilização de
                bibliotecas robustas como
                {' '}
                <UnderlinedWrapper>ReactJS</UnderlinedWrapper>
                {' e '}
                <UnderlinedWrapper>NextJS</UnderlinedWrapper>
                {' '}
                na criação de aplicações.
              </p>
              <p>
                Atualmente com
                {' '}
                <UnderlinedWrapper>18 anos</UnderlinedWrapper>
                , estou em busca da minha primeira oportunidade como
                desenvolvedor. Nos últimos dois anos, participei ativamente em projetos freelancer
                e dediquei-me à construção de side projects. Estou entusiasmado para aplicar meu
                conhecimento prático em
                {' '}
                <UnderlinedWrapper>novos desafios</UnderlinedWrapper>
                {' e '}
                <UnderlinedWrapper>contribuir</UnderlinedWrapper>
                {' '}
                de forma significativa em
                {' '}
                <UnderlinedWrapper>ambientes profissionais</UnderlinedWrapper>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
      <footer className="relative flex flex-col items-center gap-12 bg-primary mt-28 pt-8 pb-4">
        <p className="text-background font-bold text-[32px]">
          Que tal transformar
          {' '}
          <span className="underline text-action">suas ideias em realidade</span>
          ?
        </p>
        <Dialog>
          <DialogTrigger>
            <div className="relative transition-all flex items-center justify-center rounded-full text-[36px] w-[560px] h-[72px] bg-background font-medium hover:text-[40px] hover:w-[575px] hover:h-[72px]">
              Entre em contato
              <Send className="absolute right-8" size={36} />
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <div className="flex gap-[22px] transition-all text-background">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/joaopedr0sena"
            className="hover:text-secondary hover:mt-[-4px]"
          >
            <Github size="35px" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jp-sena-dev/"
            className="hover:text-secondary hover:mt-[-4px] hover:brightness-75"
          >
            <Linkedin size="35px" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/joao_sena1410/"
            className="hover:text-secondary hover:mt-[-4px] hover:brightness-75"
          >
            <Instagram size="35px" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/joao_sena1410/"
            className="hover:text-secondary hover:mt-[-4px] hover:brightness-75"
          >
            <Mail size="35px" />
          </a>
        </div>
        <p className="text-secondary absolute left-0 bottom-0 text-[11px]">
          <span className="text-action">developed by</span>
          : @João Pedro sena de Moura
        </p>
      </footer>
    </div>
  );
}
