import React from 'react';
import {
    ChakraProvider,
    Box,
    Grid,
    Center,
    Heading,
    Wrap,
    WrapItem
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import theme from './theme'
import Skills from './components/skills';
import ContactButtons from './components/contact_buttons';
import Profile from './components/profile'
import Expirience from './components/expirience';
import Projects from './components/projects';
import Contacts from './components/contacts';

const App = () => {
  const languages = [
      [1, 'Python', true],
      [2, 'JS / TS', false],
      [3, 'Golang', false],
      [3, 'C / C++', false],
  ]
  const frameworks = [
    [0, 'FastAPI', true],
    [0, 'Django/DRF', false],
    [0, 'Vue.js', false],
    [0, 'React', false],
    [0, 'Flutter', true],
    [0, 'aiohttp', false],
  ]
  const tools = [
      [2, 'Git', false],
      [1, 'Linux (Ubuntu)', false],
      [3, 'Nginx', false],
  ]
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" minW="full">
        <Grid alignItems="flex-start" minH="100vh" p={3} maxW="100%">
          <ColorModeSwitcher justifySelf="flex-end" />

          <Center display="flex" flexDir="column">
            <Profile />

            <ContactButtons />

          </Center>
        </Grid>


        <Grid minH="100vh" p={3} maxW="100%">
          <Box mt="6" alignSelf="center" justifySelf="center">
            <Heading>Skills</Heading>
            <Wrap mt="4" spacing="7" justify="center">
              <WrapItem>
                <Skills title={'Languages'} skills={languages} animationDelay={.3} />
              </WrapItem>
              <WrapItem>
                <Skills title={'Frameworks'} skills={frameworks} animationDelay={.4} />
              </WrapItem>
              <WrapItem>
                <Skills title={'Tools'} skills={tools} animationDelay={.5} />
              </WrapItem>
            </Wrap>
          </Box>
        </Grid>


        <Grid minH="100vh" p={3} maxW="100%">
          <Expirience />
        </Grid>


        <Grid minH="100vh" p={3} maxW="100%">
          <Projects />
        </Grid>


        <Grid minH="100vh" p={3} maxW="100%">
          <Contacts />
        </Grid>
      </Box>
    </ChakraProvider>
  )
}

export default App;
