import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { UnderlinedWrapper } from '@/components/underlined-wrapper';

export function HeroSection() {
  return (
    <div className="grid grid-row-2 relatve mt-24">
      <div className="">
        <h2 className="font-bold text-6xl">
          Front end
          {' '}
          <UnderlinedWrapper>
            developer
          </UnderlinedWrapper>
        </h2>
        <p className="text-4 md:text-[24px] w-[69%] min-w-[310px] mt-6 md:mt-2">
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
      <div className="h-full relatve mt-4">
        <motion.div
          initial={{
            width: '150px',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          animate={{
            position: 'absolute',
            width: '150px',
            bottom: ['20%', '0%', '20%'],
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        >
          <ChevronDown size={150} />
        </motion.div>
      </div>
    </div>
  );
}
