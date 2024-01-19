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
          <div className="group relative transition-all flex items-center justify-center rounded-full text-[36px] w-full h-[72px] bg-background text-[140%] md:font-medium hover:bg-primary hover:border border-action hover:text-action">
            Entre em contato
            <div className="absolute transition-all right-8 h-[40%] md:h-[36px] group-hover:text-action">
              <Send size="100%" />
            </div>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ainda estou desenvolvendo :D</DialogTitle>
            <DialogDescription>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur quae alias architecto nam dolores. Nesciunt
              eius laboriosam minima suscipit earum, magnam architecto
              perspiciatis molestiae inventore quos illum modi qui atque.
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
