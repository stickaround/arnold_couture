import { memo } from 'react'
import { Text, Stack, Link, Icon, Box } from '@chakra-ui/react'
import { RiHeartPulseFill, RiCopyleftLine, RiGithubFill } from 'react-icons/ri'

const GetInTouch = () => (
  <Stack
    width={{ base: '99%', lg: '60%', xl: '75%' }}
    height="100%"
    spacing={{ base: 6, xl: 8 }}
    as="footer"
  >
    <Box
      spacing={0.5}
      textAlign="center"
      fontFamily="monospace"
      paddingTop={{ base: 10, lg: 20, xl: 20 }}
      paddingBottom={{ base: 5, lg: 18 }}
    >
      <Link
        variant="description"
        textDecoration="none"
        rel="noreferrer"
        href="https://github.com/stickaround"
        target="_blank"
        _focus={{ boxShadow: 'none' }}
      >
        <Text as="span">
          <Icon as={RiGithubFill} h={6} w={6} /> <br />
          Designed and Made with <Icon as={RiHeartPulseFill} /> <br />
          Arnold Couture <Icon as={RiCopyleftLine} /> 22
        </Text>
      </Link>
    </Box>
  </Stack>
)

export default memo(GetInTouch)
