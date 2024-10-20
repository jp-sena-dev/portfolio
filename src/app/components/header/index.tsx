import Link from 'next/link';
import { Nav } from './components/nav';
import { SocialMediaButton } from './components/social-media-button';

interface HeaderProps {
  selectedSection: string;
}

export function Header({ selectedSection }: HeaderProps) {
  return (
    <header className="header relative">
      <div className="flex items-center justify-between pr-0 md:px-10 pt-10 md:pt-5">
        <Link href="https://www.linkedin.com/in/jp-sena-dev/" target="_blank" rel="noreferrer">
          <h1 className="font-bold text-xl lg:text-3xl hidden md:block">
            JP-SENA
            <span className="text-action">.</span>
            DEV
          </h1>
        </Link>
        <SocialMediaButton />
      </div>
      <Nav selectedSection={selectedSection} />
    </header>
  );
}
