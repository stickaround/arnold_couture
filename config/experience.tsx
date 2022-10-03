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
    url: 'https://www2.deloitte.com/',
    position: 'Director',
    duration: 'Sep 2022 - Present',
    logo: {
      light: '/worked_at_logos/deloitte/Deloitte_logo_black.png',
      dark: '/worked_at_logos/deloitte/Deloitte_logo.png',
    },
    roles: [
      <>
        Started early September and undergoing training for .NET Sitecore 10,
        Sitecore SXA and different topologies it provides.{' '}
      </>,
      <>
        Worked as a Sitecore Backend on new{' '}
        <Link
          aria-label="Deloitte Digital AU"
          href="https://www.deloittedigital.com.au/"
          target="_blank"
          rel="noreferrer"
        >
          Deloitte Digital AU Site.
        </Link>
      </>,
      <>
        Took{' '}
        <Link
          aria-label="Sitecore 10 .NET Developer Certification"
          href="/certification/Lawingco-Sitecore 10 NET Developer Cert.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Sitecore 10 .NET Developer Certification.
        </Link>
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
      light: '/worked_at_logos/scg/SCG_400x400.jpg',
      dark: '/worked_at_logos/scg/SCG.png',
    },
    roles: [
      <>
        Revamping the legacy Partner Portal into a new{' '}
        <Link
          aria-label="Westfield Marketing Hub"
          href="https://partner.scentregroup.com/"
          target="_blank"
          rel="noreferrer"
        >
          Westfield Marketing Hub
        </Link>{' '}
        using NextJS and Typescript. Restructuring the old express app into a
        newer architectural design approach.
      </>,
      <>
        Created multiple Contentful and Bynder extensions to improve BX process
        better.
      </>,
      <>
        Worked on maintaining{' '}
        <Link
          variant="primaryLink"
          href="https://www.westfield.com.au/"
          target="_blank"
          rel="noreferrer"
        >
          Westfield
        </Link>{' '}
        main site and Graphql apis written in NodeJS.
      </>,
      <>
        Migrating of existing marketing email related tools and batch jobs from
        Responsys into new platform called Braze.
      </>,
      <>
        Hired at early 2020, first major task was helping with selecting a new
        marketing vendor that can scale and also enable us to have
        personalisation as well, selecting{' '}
        <Link
          aria-label="Braze"
          href="https://www.braze.com/"
          target="_blank"
          rel="noreferrer"
        >
          Braze
        </Link>{' '}
        as a result.
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
      light: '/worked_at_logos/ivp/blotocol_logo-dark.png',
      dark: '/worked_at_logos/ivp/blotocol-logo-white.png',
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
