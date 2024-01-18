export interface Projects {
  description: string;
  imgageURL: string;
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
    imgageURL: 'https://user-images.githubusercontent.com/85967112/212220960-1a52ad3d-9552-4ac3-afba-c834aca04748.png',
    links: {
      repository: 'https://github.com/joaopedr0sena/marketplace',
      web: 'https://loja-joaopedr0sena.vercel.app/',
    },
    technologies: ['HTML', 'JavaScript', 'Redux', 'React', 'RouterDom', 'TailwindCSS'],
  },
  {
    title: 'InstaDog',
    description: '👋 Boas vindas ao InstaDog! Esta aplicação tem como objetivo criar um feed (estilo Instagram) a partir de requisições feitas para a Interface de Programação de Aplicação (API) DogAPI.',
    imgageURL: 'https://user-images.githubusercontent.com/85967112/207317084-64a59efa-2b26-4fe9-83a5-ffb0b13ba082.png',
    links: {
      repository: 'https://github.com/joaopedr0sena/instaDog',
      web: 'https://insta-dog.vercel.app/',
    },
    technologies: ['HTML', 'JavaScript', 'React', 'RouterDom', 'Styled Components'],
  },
  {
    title: 'INY',
    description: '👋 Boas vindas! Esta aplicação foi desenvolvida para simplificar o gerenciamento de tarefas diárias e aperfeiçoar minhas habilidades em React Native.',
    imgageURL: 'https://github.com/joaopedr0sena/marketplace/assets/85967112/aaf6a903-9b78-42da-8ace-24c9b874d980',
    links: {
      web: 'https://iny.vercel.app/',
    },
    technologies: ['JavaScript', 'Next.js', 'TailwindCSS', 'HTML'],
  },
  {
    title: 'Todo-list',
    description: '👋 Boas vindas! Esta aplicação foi desenvolvida para simplificar o gerenciamento de tarefas diárias e aperfeiçoar minhas habilidades em React Native.',
    imgageURL: 'https://private-user-images.githubusercontent.com/85967112/297518826-b8f80a34-6329-454e-8ffa-f64767ab7f4d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDU1MjYyNzAsIm5iZiI6MTcwNTUyNTk3MCwicGF0aCI6Ii84NTk2NzExMi8yOTc1MTg4MjYtYjhmODBhMzQtNjMyOS00NTRlLThmZmEtZjY0NzY3YWI3ZjRkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMTclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTE3VDIxMTI1MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU3ZGM3Y2QxMzc4YjY2ZGJlOTFjNTM1NWFjYzVjNzEyZDIyZjRmMDk0NTAzOGUzNTE4OWE2MzQwMjZjY2UyYTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.BekIOTcgAJQFXwh2ID1AQWIqVx2Qf9aFRoft_zqX4Xs',
    links: {
      repository: 'https://github.com/joaopedr0sena/todo-list-react-native',
    },
    technologies: ['JavaScript', 'React Native'],
  },
];
