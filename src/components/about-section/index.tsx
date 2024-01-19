import { UnderlinedWrapper } from '@/components/underlined-wrapper';

export function AboutSection() {
  return (
    <div className="relative flex gap-4 md:gap-16 max-w-[800px] mx-auto mt-10 text-justify">
      <div className="w-2 min-h-full absolute left-[-1px] bg-primary">
        {/* <img src="/me.jpeg" alt="me" className="w-full h-full object-cover" /> */}
      </div>
      <div className="text-5 md:text-[22px] max-w-[90%] text-balance indent-4 m-auto">
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
