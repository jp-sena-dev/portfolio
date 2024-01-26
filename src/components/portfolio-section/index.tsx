/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import { useMemo, useState } from 'react';
import { AccordionContent } from '@radix-ui/react-accordion';
import { Github, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Combobox } from '@/components/ui/Combobox';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Accordion, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { projects } from '@/utils/projects';

export function PortfolioSection() {
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
    <div className="max-w-7xl mx-auto md:mt-14">
      <div className="flex justify-between mb-5">
        {!selectedTechnology ? <div /> : <Button variant="outline" onClick={() => { setSelectedTechnology(''); }}>{selectedTechnology}</Button>}
        <Combobox setSelectedTechnology={setSelectedTechnology} />
      </div>
      <div className="grid gap-8 md:grid-cols-[minmax(100px,_1fr)_minmax(100px,_1fr)_minmax(100px,_1fr)] md:grid-rows-[minmax(200px,_1fr)_minmax(200px,_1fr)]">
        {fiteredProjects.map((project) => (
          <div className="w-full max-h-[200px] bg-secondary rounded-md">
            <Dialog>
              <DialogTrigger className="w-full h-full bg-secondary">
                <img src={project.imageURL} className="max-h-full md:max-h-full md:min-h-full rounded-md w-full object-cover transition bg-cover brightness-75 hover:bg-center hover:brightness-110 hover:drop-shadow-lg" alt={`Projeto de João Pedro Sena ${project.title}`} />
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
                    <img src={project.imageURL} alt="project" className="w-full my-2" />
                    <a target="_blank" rel="noreferrer" href={project.links.web || project.links.repository} className="absolute bg-transparent text-transparent left-0 top-0 w-full h-full hover:text-white hover:bg-[#0000008f] flex items-center justify-center">
                      {project.links.web ? <Globe /> : <Github />}
                    </a>
                  </div>
                  <div className="text-action flex gap-1 transition-all h-6">
                    {project.links.web && (
                      <a href={project.links.web} target="_blank" rel="noreferrer" className="hover:text-action-hover hover:mt-[-1px]">
                        <i><Globe /></i>
                      </a>
                    )}
                    {project.links.repository && (
                      <a href={project.links.repository} target="_blank" rel="noreferrer" className="hover:text-action-hover hover:mt-[-1px]">
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
                            <span className="z-50 text-action font-bold italic">{`${technology}`}</span>
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
  );
}
