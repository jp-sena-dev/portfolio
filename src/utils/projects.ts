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
    title: 'MarketPlace',
    description: '👋 Boas vindas ao projeto! O desenvolvimento dessa aplicação teve como objetivo criar uma iterface a partir dos dados disponibilizados pela API do Mercado Livre.',
    imageURL: 'https://user-images.githubusercontent.com/85967112/212220960-1a52ad3d-9552-4ac3-afba-c834aca04748.png',
    links: {
      repository: 'https://github.com/joaopedr0sena/marketplace',
      web: 'https://loja-joaopedr0sena.vercel.app/',
    },
    technologies: ['HTML', 'JavaScript', 'Redux', 'React', 'RouterDom', 'TailwindCSS'],
  },
  {
    title: 'InstaDog',
    description: '👋 Boas vindas ao InstaDog! Esta aplicação tem como objetivo criar um feed (estilo Instagram) a partir de requisições feitas para a Interface de Programação de Aplicação (API) DogAPI.',
    imageURL: 'https://user-images.githubusercontent.com/85967112/207317084-64a59efa-2b26-4fe9-83a5-ffb0b13ba082.png',
    links: {
      repository: 'https://github.com/joaopedr0sena/instaDog',
      web: 'https://insta-dog.vercel.app/',
    },
    technologies: ['HTML', 'JavaScript', 'React', 'RouterDom', 'Styled Components'],
  },
  {
    title: 'INY',
    description: '👋 Boas vindas! Esta aplicação foi desenvolvida para simplificar o gerenciamento de tarefas diárias e aperfeiçoar minhas habilidades em React Native.',
    imageURL: 'https://github.com/joaopedr0sena/marketplace/assets/85967112/aaf6a903-9b78-42da-8ace-24c9b874d980',
    links: {
      web: 'https://iny.vercel.app/',
    },
    technologies: ['JavaScript', 'TypeScript', 'Next.js', 'TailwindCSS', 'HTML'],
  },
  {
    title: 'Todo-list',
    description: '👋 Boas vindas! Esta aplicação foi desenvolvida para simplificar o gerenciamento de tarefas diárias e aperfeiçoar minhas habilidades em React Native.',
    imageURL: 'https://github.com/joaopedr0sena/todo-list-react-native/assets/85967112/b8f80a34-6329-454e-8ffa-f64767ab7f4d',
    links: {
      repository: 'https://github.com/joaopedr0sena/todo-list-react-native',
    },
    technologies: ['JavaScript', 'React Native'],
  },
  {
    title: 'Todo-list',
    description: '👋 Boas vindas! Esta aplicação foi desenvolvida para simplificar o gerenciamento de tarefas diárias e aperfeiçoar minhas habilidades em JavaScript, HTML e CSS.',
    imageURL: 'https://github.com/joaopedr0sena/todo-list/assets/85967112/eddc8822-1db5-459d-bdcc-a911378678be',
    links: {
      repository: 'https://github.com/joaopedr0sena/todo-list',
      web: 'https://joaopedr0sena.github.io/todo-list/',
    },
    technologies: ['JavaScript', 'HTML', 'CSS'],
  },
];
