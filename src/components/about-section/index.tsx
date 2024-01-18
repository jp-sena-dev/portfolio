import { UnderlinedWrapper } from '@/components/underlined-wrapper';

export function AboutSection() {
  return (
    <div className="flex gap-4 md:gap-16 max-w-[1060px] m-auto mt-14">
      <div className="w-20 md:w-[300px] md:h-[427px] bg-primary">a</div>
      <div className="text-5 md:text-[20px] max-w-[600px] text-balance indent-4">
        <p className="mb-5">
          Iniciei minha jornada na programação aos 13 anos por meio do
          {' '}
          <UnderlinedWrapper>Curso em Vídeo</UnderlinedWrapper>
          ,
          explorando os fundamentos da lógicade programação. Aos 16 anos, tomei a decisão de
          me especializar no desenvolvimento
          {' '}
          <UnderlinedWrapper>front-end</UnderlinedWrapper>
          , conseguindo equilibrar responsabilidades
          escolares com minha crescente paixão pela programação. Com o suporte de amigos,
          aprimorei habilidades em
          {' '}
          <UnderlinedWrapper>JavaScript</UnderlinedWrapper>
          ,
          <UnderlinedWrapper>CSS</UnderlinedWrapper>
          {' e '}
          <UnderlinedWrapper>HTML</UnderlinedWrapper>
          , evoluindo para a utilização de
          bibliotecas robustas como
          {' '}
          <UnderlinedWrapper>ReactJS</UnderlinedWrapper>
          {' e '}
          <UnderlinedWrapper>NextJS</UnderlinedWrapper>
          {' '}
          na criação de aplicações.
        </p>
        <p>
          Atualmente com
          {' '}
          <UnderlinedWrapper>18 anos</UnderlinedWrapper>
          , estou em busca da minha primeira oportunidade como
          desenvolvedor. Nos últimos dois anos, participei ativamente em projetos freelancer
          e dediquei-me à construção de side projects. Estou entusiasmado para aplicar meu
          conhecimento prático em
          {' '}
          <UnderlinedWrapper>novos desafios</UnderlinedWrapper>
          {' e '}
          <UnderlinedWrapper>contribuir</UnderlinedWrapper>
          {' '}
          de forma significativa em
          {' '}
          <UnderlinedWrapper>ambientes profissionais</UnderlinedWrapper>
          .
        </p>
      </div>
    </div>
  );
}
