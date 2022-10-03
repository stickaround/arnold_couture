import { memo } from 'react'
import { Heading, Text, Stack, Link } from '@chakra-ui/react'
import ExperienceTab from './ExperienceTab'
const DetailSection = () => (
  <Stack
    width={{ base: '99%', lg: '60%', xl: '75%' }}
    height="100%"
    spacing={{ base: 6, xl: 8 }}
  >
    <Heading
      size="2xl"
      style={{
        fontVariantCaps: 'small-caps',
      }}
    >
      Places i’ve worked.
    </Heading>
    <Text variant="description">
      Since 2011, had a privilege to work with several schools that enables me
      to hone my skills and talents. These schools will always have a special
      place in my heart. Currently I am working with{' '}
      <Link href="https://www2.deloitte.com/" target="_blank" rel="noreferrer">
        Harris
      </Link>
      .
    </Text>

    <ExperienceTab />
  </Stack>
)

export default memo(DetailSection)
