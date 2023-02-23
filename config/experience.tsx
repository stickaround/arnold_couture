export type Company = 'UH'

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
  UH: {
    name: 'University of Houston',
    duration: '2006 - 2011',
    logo: {
      light: '/worked_at_logos/uh.png',
      dark: '/worked_at_logos/uh.png',
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

export const ExperiencesList = [Experiences.UH]
