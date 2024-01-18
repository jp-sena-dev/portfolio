/* eslint-disable jsx-a11y/control-has-associated-label */
import { Send } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { SocialMeadiaLinks } from './components/social-media-links';

export function Footer() {
  return (
    <footer className="relative flex flex-col items-center gap-12 bg-primary mt-28 pt-8 pb-4">
      <p className="text-background font-bold text-[105%] md:text-[32px]">
        Que tal transformar
        {' '}
        <span className="underline text-action">suas ideias em realidade</span>
        ?
      </p>
      <Dialog>
        <DialogTrigger className="min-w-[320px] w-[90%] max-w-[560px]">
          <div className="group relative transition-all flex items-center justify-center rounded-full text-[36px] w-full h-[72px] bg-background text-[150%] md:font-medium md:hover:text-[40px]">
            Entre em contato
            <div className="absolute transition-all right-8 h-[50%] md:h-[36px] md:group-hover:h-[40px]">
              <Send size="100%" />
            </div>
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
      <SocialMeadiaLinks />
      <p className="text-secondary absolute left-0 bottom-0 text-[11px]">
        <span className="text-action">developed by</span>
        : @João Pedro sena de Moura
      </p>
    </footer>
  );
}