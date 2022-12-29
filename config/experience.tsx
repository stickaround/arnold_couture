export type Company = 'CalTech'

export type CompanyDetail = {
  name: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  CalTech: {
    name: 'California Institute of Technology',
    duration: '2006 - 2011',
    logo: {
      light: '/worked_at_logos/caltech.png',
      dark: '/worked_at_logos/caltech.png',
    },
    roles: [
      <>
        Studied ML(machine learning), AI(artificial intelligence), web
        development area.
      </>,
      <>
        Researched ML-translation engine with corpus database written by Java
        and Python
      </>,
      <>Rebuilt web application for school community platform</>,
    ],
  },
}

export const ExperiencesList = [Experiences.CalTech]
