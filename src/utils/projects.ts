export interface Projects {
  description: string;
  imageURL: string;
  links: {
    repository?: string;
    web?: string;
  };
  technologies: string[];
  title: string;
}

export const projects: Projects[] = [
  {
    title: 'INY',
    description: '👋 Boas vindas! O site oferece uma landing page dedicada para uma empresa de massoterapia, integrando estética e informação para atrair clientes.',
    imageURL: '/projects/iny.png',
    links: {
      web: 'https://iny.vercel.app/',
    },
    technologies: ['JavaScript', 'TypeScript', 'Next.js', 'TailwindCSS', 'HTML'],
  },
  {
    title: 'MarketPlace',
    description: '👋 Boas vindas ao projeto! O desenvolvimento dessa aplicação teve como objetivo criar uma iterface a partir dos dados disponibilizados pela API do Mercado Livre.',
    imageURL: '/projects/marketplace.png',
    links: {
      repository: 'https://github.com/jp-sena-dev/marketplace',
      web: 'https://marketplace-jp-sena.vercel.app/',
    },
    technologies: ['HTML', 'JavaScript', 'Redux', 'React', 'RouterDom', 'TailwindCSS'],
  },
  {
    title: 'InstaDog',
    description: '👋 Boas vindas ao InstaDog! Esta aplicação tem como objetivo criar um feed (estilo Instagram) a partir de requisições feitas para a Interface de Programação de Aplicação (API) DogAPI.',
    imageURL: '/projects/insta-dog.png',
    links: {
      repository: 'https://github.com/jp-sena-dev/instaDog',
      web: 'https://insta-dog.vercel.app/',
    },
    technologies: ['HTML', 'JavaScript', 'React', 'RouterDom', 'Styled Components'],
  },
  {
    title: 'Todo-list',
    description: '👋 Boas vindas! Esta aplicação foi desenvolvida para simplificar o gerenciamento de tarefas diárias e aperfeiçoar minhas habilidades em React Native.',
    imageURL: '/projects/todo-react-native.png',
    links: {
      repository: 'https://github.com/jp-sena-dev/todo-list-react-native',
    },
    technologies: ['JavaScript', 'React Native'],
  },
  {
    title: 'Todo-list',
    description: '👋 Boas vindas! Esta aplicação foi desenvolvida para simplificar o gerenciamento de tarefas diárias e aperfeiçoar minhas habilidades em JavaScript, HTML e CSS.',
    imageURL: '/projects/todo-list.png',
    links: {
      repository: 'https://github.com/jp-sena-dev/todo-list',
      web: 'https://jp-sena-dev.github.io/todo-list/',
    },
    technologies: ['JavaScript', 'HTML', 'CSS'],
  },
];
