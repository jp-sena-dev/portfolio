import { SocialMeadiaLinks } from './components/social-media-links';
import { SendMessageButton } from './components/send-message-button';

export function Footer() {
  return (
    <footer className="relative flex flex-col items-center gap-12 bg-primary mt-28 pt-8 pb-4">
      <p className="text-background font-bold text-[105%] md:text-[32px]">
        Que tal transformar
        {' '}
        <span className="underline text-action">suas ideias em realidade</span>
        ?
      </p>
      <SendMessageButton />
      <SocialMeadiaLinks />
      <p className="text-secondary absolute left-0 bottom-0 text-[11px]">
        <span className="text-action">developed by</span>
        : @João Pedro sena de Moura
      </p>
    </footer>
  );
}
