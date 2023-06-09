export type PostType = {
  id: number
  date: string
  title: string
  resume: string
  isFavorite: boolean
}

export const initialPosts: PostType[] = [
  {
    id: 1,
    date: '02 de jul, 2021',
    title: 'Agora é oficial: o Windows 11 está vindo',
    resume:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.',
    isFavorite: true,
  },
  {
    id: 2,
    date: '02 de jul, 2021',
    title: 'Tim Berners-Lee vai leiloar código-fonte da web',
    resume:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.',
    isFavorite: false,
  },
  {
    id: 3,
    date: '02 de jul, 2021',
    title: 'Tem Firefox novo no pedaço e você vai querer migrar',
    resume:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.',
    isFavorite: false,
  },
  {
    id: 4,
    date: '02 de jul, 2021',
    title: 'John McAfee, criador do antivírus McAfee, morre',
    resume:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.',
    isFavorite: false,
  },
]
