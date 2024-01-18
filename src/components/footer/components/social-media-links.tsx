/* eslint-disable jsx-a11y/control-has-associated-label */
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
} from 'lucide-react';

export function SocialMeadiaLinks() {
  return (
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
  );
}
