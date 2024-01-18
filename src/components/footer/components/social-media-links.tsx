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
        className="hover:text-action"
      >
        <Github size="35px" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/jp-sena-dev/"
        className="hover:text-action"
      >
        <Linkedin size="35px" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/joao_sena1410/"
        className="hover:text-action"
      >
        <Instagram size="35px" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/joao_sena1410/"
        className="hover:text-action"
      >
        <Mail size="35px" />
      </a>
    </div>
  );
}
