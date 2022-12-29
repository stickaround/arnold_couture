import { memo } from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  SiReact,
  SiVueDotJs,
  SiSvelte,
  SiNextDotJs,
  SiGatsby,
  SiJavascript,
  SiTypescript,
  SiGraphql,
  SiSass,
  SiBootstrap,
  SiMaterialUi,
  SiTailwindcss,
  SiD3DotJs,
  SiAngular,
  SiNodeDotJs,
  SiLaravel,
  SiRuby,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
  SiFirebase,
  SiEthereum,
  SiTrulia,
  SiRust,
} from 'react-icons/si'
import { GiCoffeePot } from 'react-icons/gi'
import { IoMdOpen } from 'react-icons/io'

type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const currentYear = new Date().getFullYear()
  const professionalYears = currentYear - 2014

  return (
    <Stack
      width={{ base: '100%', lg: '70%' }}
      spacing={{ base: 6, xl: 8 }}
      as="section"
    >
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        What i do.
      </Heading>
      <Text variant="description">
        I have been working as a software engineer for {professionalYears} years
        since graduating with Bachelor's Degree in Computer Science and I have
        built number of websites.
        <br /> <br />
        Below are my Skills <Icon as={GiCoffeePot} color={emphasis} />.
      </Text>

      <SimpleGrid columns={5} spacing={4}>
        <List spacing={3} width="600px">
          <ListItem fontSize="small" display="flex" alignItems="center">
            Front-End:
            <div style={{ marginLeft: 'auto' }}>
              <ListIcon as={SiReact} color={emphasis} fontSize="2em" />
              <ListIcon as={SiVueDotJs} color={emphasis} fontSize="2em" />
              <ListIcon as={SiAngular} color={emphasis} fontSize="2em" />
              <ListIcon as={SiSvelte} color={emphasis} fontSize="2em" />
              <ListIcon as={SiNextDotJs} color={emphasis} fontSize="2em" />
              <ListIcon as={SiGatsby} color={emphasis} fontSize="2em" />
              <ListIcon as={SiJavascript} color={emphasis} fontSize="2em" />
              <ListIcon as={SiTypescript} color={emphasis} fontSize="2em" />
              <ListIcon as={SiGraphql} color={emphasis} fontSize="2em" />
              <ListIcon as={SiBootstrap} color={emphasis} fontSize="2em" />
              <ListIcon as={SiSass} color={emphasis} fontSize="2em" />
              <ListIcon as={SiMaterialUi} color={emphasis} fontSize="2em" />
              <ListIcon as={SiTailwindcss} color={emphasis} fontSize="2em" />
              <ListIcon as={SiD3DotJs} color={emphasis} fontSize="2em" />
            </div>
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            Back-End:
            <div style={{ marginLeft: 'auto' }}>
              <ListIcon as={SiNodeDotJs} color={emphasis} fontSize="2em" />
              <ListIcon as={SiLaravel} color={emphasis} fontSize="2em" />
              <ListIcon as={SiRuby} color={emphasis} fontSize="2em" />
              <ListIcon as={SiDjango} color={emphasis} fontSize="2em" />
              <ListIcon as={SiMysql} color={emphasis} fontSize="2em" />
              <ListIcon as={SiPostgresql} color={emphasis} fontSize="2em" />
              <ListIcon as={SiDocker} color={emphasis} fontSize="2em" />
              <ListIcon as={SiKubernetes} color={emphasis} fontSize="2em" />
              <ListIcon as={SiAmazonaws} color={emphasis} fontSize="2em" />
              <ListIcon as={SiFirebase} color={emphasis} fontSize="2em" />
            </div>
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            Blockchain & Web3 Development
            <div style={{ marginLeft: 'auto' }}>
              <ListIcon as={SiEthereum} color={emphasis} fontSize="2em" />
              <ListIcon as={SiRust} color={emphasis} fontSize="2em" />
            </div>
          </ListItem>
        </List>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
