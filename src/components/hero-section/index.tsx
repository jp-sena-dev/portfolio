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
          Olá, meu nome é João Pedro Sena! Desenvolvedor FrontEnd com mais de 2 anos
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
      <div className="h-full relatve mt-4 mx-auto">
        <motion.div
          initial={{
            width: '150px',
            height: '100%',
            // position: 'absolute',
            // left: '50%',
            // transform: 'translateX(-50%)',
          }}
          animate={{
            // position: 'absolute',
            width: '150px',
            height: '100%',
            // bottom: ['20%', '0%', '20%'],
            scale: [0, '20%', '40%', '60%', '80%', '100%', '80%', '60%', '40%', '20%', 0],
            // x: [0, 100, 200, 300, 350, 400, 450, 500, 450, 400, 350, 300, 200, 100, 0],
            y: [
              0,
              // 5,
              // 10,
              100,
              // 150,
              200,
              // 250,
              300,
              // 350,
              400,
              // 450,
              // 500,
              // 450,
              // 350,
              // 300,
              // 250,
              // 200,
              // 150,
              // 100,
              // 0,
            ],
            // rotate: [0, 15, 30, 45, 90, 100, 200, 100, 90, 45, 30, 15],
            // left: '50%',
            // transform: 'translateX(-50%)',
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          <ChevronDown size={150} />
        </motion.div>
      </div>
    </div>
  );
}
