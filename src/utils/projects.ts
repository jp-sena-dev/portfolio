export interface Project {
  description: string;
  imageURL: string;
  link: string;
  technologies: string[];
  title: string;
}

interface Projects {
  [key: string]: Project[];
}

export const frontend: Project[] = [
  {
    title: 'MarketPlace',
    description: 'Este projeto é uma interface de marketplace desenvolvida utilizando dados da API do Mercado Livre. Durante o desenvolvimento, explorei o uso de React, Redux e Tailwind CSS, aprimorando minhas habilidades com essas tecnologias e práticas de gerenciamento de estado.',
    imageURL: '/projects/marketplace.png',
    link: 'https://marketplace-jp-sena.vercel.app/',
    technologies: ['HTML', 'JavaScript', 'Redux', 'React', 'RouterDom', 'TailwindCSS'],
  },
  {
    title: 'InstaDog',
    description: 'Aplicação que simula um feed de fotos similar ao Instagram, utilizando a API DogAPI para exibir imagens de cães. Durante o projeto, aprofundei meu conhecimento em React, Styled Components e integração com APIs.',
    imageURL: '/projects/insta-dog.png',
    link: 'https://insta-dog.vercel.app/',
    technologies: ['HTML', 'JavaScript', 'React', 'RouterDom', 'Styled Components'],
  },
  {
    title: 'Todo-list',
    description: 'Aplicativo de gerenciamento de tarefas desenvolvido para aprimorar habilidades em React Native e Expo. O projeto visa simplificar o controle de atividades diárias, proporcionando uma experiência prática com essas tecnologias móveis.',
    imageURL: '/projects/todo-react-native.png',
    link: 'https://github.com/jp-sena-dev/todo-list-react-native',
    technologies: ['JavaScript', 'React Native'],
  },
  {
    title: 'Todo-list',
    description: 'Primeiro projeto desenvolvido com o objetivo de melhorar habilidades fundamentais em JavaScript, HTML e CSS. Esta aplicação de lista de tarefas simples permite organizar e gerenciar atividades diárias de forma eficiente, oferecendo uma introdução prática às tecnologias web.',
    imageURL: '/projects/todo-list.png',
    link: 'https://jp-sena-dev.github.io/todo-list/',
    technologies: ['JavaScript', 'HTML', 'CSS'],
  },
];

export const freelance: Project[] = [
  {
    title: 'Sofia Sarmento',
    description: 'Desenvolvimento de um site para uma estudante de marketing, baseado em um layout criado por ela mesma. O objetivo do projeto foi transformar seu design em uma plataforma digital personalizada e funcional, oferecendo uma experiência de navegação otimizada e intuitiva. A solução destaca com elegância sua identidade visual e profissionalismo, resultando em uma presença digital autêntica e acessível.',
    imageURL: '/projects/sofia-sarmento.png',
    link: 'https://www.sofiasarmentorosa.com/',
    technologies: ['JavaScript', 'TypeScript', 'Next.js', 'TailwindCSS', 'HTML'],
  },
  {
    title: 'INY',
    description: 'Landing page desenvolvida para uma empresa de massoterapia, focada em combinar estética e funcionalidade para atrair novos clientes. O projeto foi realizado com o objetivo de criar uma interface envolvente e informativa, destacando os serviços e benefícios da massoterapia de forma clara.',
    imageURL: '/projects/iny.png',
    link: 'https://iny.vercel.app/',
    technologies: ['JavaScript', 'TypeScript', 'Next.js', 'TailwindCSS', 'HTML'],
  },
];

export const backend: Project[] = [
  {
    title: 'consumption-api',
    description: '',
    imageURL: '',
    link: 'https://github.com/jp-sena-dev/shopper-consumption-api',
    technologies: ['HTML', 'JavaScript', 'React', 'Mui', 'Express', 'Socket.io', 'Firebase'],
  },
  {
    title: 'cash-tracker',
    description: '',
    imageURL: '',
    link: 'https://github.com/jp-sena-dev/cash-tracker/tree/master',
    technologies: ['HTML', 'JavaScript', 'React', 'Mui', 'Express', 'Socket.io', 'Firebase'],
  },
];

export const articles: Project[] = [
  {
    title: 'Primeiros passos e gestão de dependências em NestJS',
    description: 'Artigo elaborado com o intuito de auxiliar iniciantes no NestJS a compreenderem a gestão de dependências, bem como a criação de controllers, services e módulos. Com exemplos práticos, aborda a construção de APIs escaláveis e flexíveis, destacando a arquitetura modular eficiente do framework.',
    imageURL: '/projects/article-nest.jpg',
    link: 'https://www.linkedin.com/pulse/primeiros-passos-e-gest%C3%A3o-de-depend%C3%AAncias-em-nestjs-jo%C3%A3o-pedro-sena-picye/',
    technologies: [],
  },
];

export const projects: Projects = {
  freelance,
  backend,
  frontend,
  articles,
};
