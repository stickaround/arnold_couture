import {
  Box,
  Icon,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import { RiMouseLine } from 'react-icons/ri'
import { motion, Variants, AnimatePresence } from 'framer-motion'
import { mobileBreakpointsMap } from 'config/theme'

const emailVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 250,
  },
  show: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: [1, 0],
    y: [0, 250],
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

const ScrollMore = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  const emailColor = useColorModeValue('gray.800', 'gray.400')
  const emailLine = useColorModeValue('teal.500', 'cyan.200')

  return (
    <Box
      position="fixed"
      bottom="1em"
      right="3%"
      display={isMobile ? 'none' : 'block'}
    >
      <AnimatePresence>
        {
          <motion.div
            initial="hidden"
            animate="show"
            exit="exit"
            variants={emailVariants}
            whileHover={{ y: -50 }}
            style={{
              writingMode: 'vertical-rl',
              position: 'fixed',
              right: '8%',
              bottom: '-8%',
            }}
          >
            <Text
              as="a"
              paddingY={3}
              fontFamily="monospace"
              href="mailto:arnoldcouture72@gmail.com"
              target="_blank"
              rel="noreferrer"
              color={emailColor}
              _hover={{
                color: emailLine,
                _after: {
                  backgroundColor: emailLine,
                  opacity: 1,
                },
              }}
              position="relative"
              letterSpacing={3}
              display="flex"
              alignItems="center"
              justifyContent="center"
              _after={{
                backgroundColor: emailLine,
                width: '2px',
                opacity: 0.5,
                content: '""',
                flex: 1,
                height: { base: '5em', xl: '8em' },
                margin: 'auto',
                marginTop: '10px',
              }}
            >
              arnoldcouture72@gmail.com{' '}
            </Text>
          </motion.div>
        }
      </AnimatePresence>
    </Box>
  )
}

export default ScrollMore
