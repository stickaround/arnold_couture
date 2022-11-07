import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
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
        Some of my school sites.
      </Heading>
      <Text variant="description">
        Check out some of the sites
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="ilerno"
            src="/works/ilerno.png"
            description="
              We believe that whether you are 9 or 99, an amateur or professional, 
              playing for fun or to develop your musical career, 
              when you decide to learn playing an instrument you deserve a professional 
              musician to take care of you."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://scoolio-clients-dev.track-progress.com/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="ilerno Support"
            description="We help our clients get to know the ilerno site and make them easy to use it."
            src="/works/ilerno_support.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://support.ilerno.com/"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Solvrr"
            description="
              Solvrr Creative Studio is a digital marketing agency. 
              We help our clients get found, get customers, and make more money on the web."
            src="/works/solvrr.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://solvrr.com/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="The MASTERS MUSIC SCHOOL"
            description="
              We are a London-based premier specialist music school, 
              offering a comprehensive music education for all ages and levels of proficiency.
              Being world- class performers ourselves we want to share the stage experience 
              with our students and bring it into the teaching environment."
            src="/works/tuition.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://tmms.co.uk/"
            isMobile={isMobile}
          />
        </MotionGridItem>
        
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={5}
            title="Little Life"
            description="
              OUR MISSION Little Life Nursery aims to provide a warm, 
              nurturing and natural way to develop communication and social skills in our children.
              To encourage children to be imaginative and develop their creativity within a natural outdoor environment."
            src="/works/little_life.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://littlelife.io/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
