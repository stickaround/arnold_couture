import { Link } from '@chakra-ui/react'

export type Company = 'Deloitte' | 'SCG' | 'Blotocol'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
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
  Deloitte: {
    name: 'THE MASTERS MUSIC SCHOOL',
    longName: 'Director. Delivery Center',
    subDetail: 'Director. Delivery Center',
    url: 'https://scoolio-clients-dev.track-progress.com/',
    position: 'Director',
    duration: 'Sep 2022 - Present',
    logo: {
      light: '/worked_at_logos/tmms/TMMS_light.png',
      dark: '/worked_at_logos/tmms/TMMS_dark.png',
    },
    roles: [
      <>
        I live in UK.
      </>,
      <>
        In 2*** got promoted as Director
      </>,
      <>
        Create websites
      </>,
      <>
        I work at *****
      </>,
    ],
  },
  SCG: {
    name: 'THE MASTERS MUSIC SERVICES LTD',
    longName: 'Director',
    subDetail: 'Director',
    url: 'https://www.scentregroup.com/',
    position: 'Director',
    duration: 'Nov 2015 - Feb 2019',
    logo: {
      light: '/worked_at_logos/tmmsl/tmmsl_light.png',
      dark: '/worked_at_logos/tmmsl/tmmsl_dark.png',
    },
    roles: [
      <>
        I live in UK.
      </>,
      <>
        In 2*** got promoted as Director
      </>,
      <>
        Create websites
      </>,
      <>
        I work at *****
      </>,
    ],
  },
  Blotocol: {
    name: 'DRUMTRONIX LIMITED',
    longName: 'Director',
    subDetail: 'Director',
    url: 'https://blotocol.com/',
    position: 'Director',
    duration: 'Nov 2016 - Feb 2020',
    logo: {
      light: '/worked_at_logos/iconix/iconix_light.png',
      dark: '/worked_at_logos/iconix/iconix_dark.png',
    },
    roles: [
      <>
        I live in UK.
      </>,
      <>
        In 2*** got promoted as Director
      </>,
      <>
        Create websites
      </>,
      <>
        I work at *****
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.Deloitte,
  Experiences.SCG,
  Experiences.Blotocol,
]
