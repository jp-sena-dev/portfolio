/* eslint-disable jsx-a11y/control-has-associated-label */

import { Github, Instagram, Linkedin } from 'lucide-react';
import { Nav } from './components/nav';

interface HeaderProps {
  setSectionSelected: (param: string) => void;
  selectedSection: string;
}

export function Header({ selectedSection, setSectionSelected }: HeaderProps) {
  return (
    <header className="relative">
      <div className="flex items-center justify-between pr-0 md:px-4">
        <a href="https://www.linkedin.com/in/jp-sena-dev/" target="_blank" rel="noreferrer">
          <h1 className="font-bold text-xl lg:text-[52px]">
            JP-SENA
            <span className="text-action">.</span>
            DEV
          </h1>
        </a>
        <div className="flex gap-2 lg:gap-[29px] transition-all">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/joaopedr0sena"
            className="hover:text-action h-8 lg:h-[50px]"
          >
            <Github size="100%" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jp-sena-dev/"
            className="hover:text-action h-8 lg:h-[50px]"
          >
            <Linkedin size="100%" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/joao_sena1410/"
            className="hover:text-action h-8 lg:h-[50px]"
          >
            <Instagram size="100%" />
          </a>
        </div>
      </div>
      <Nav setSelectedSection={setSectionSelected} selectedSection={selectedSection} />
    </header>
  );
}
