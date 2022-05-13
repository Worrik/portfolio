import {
    Box,
    Heading,
    Wrap,
} from "@chakra-ui/react"
import AnimateBox from "../animate_box"
import Project from "./project"

const Projects = () => {
  const projects = [
      [
          'Dentist site with voice assistant',
          [
              'Developed API for saving and selecting data from database, talking with assistant using dialogflow API',
              'Designed tables of database',
              'Developed frontend using Vuetify.js'
          ],
          ['Python', 'FastAPI', 'JS', 'Vue.js', 'PostgreSQL', 'Ubuntu'],
          "assets/speaking-site-macbook.png"
      ],
      [
          'A device that can recognize the brand of devices nearby',
          [
              'Developed ESP8266 program that catches mac-addresses and passes them to the phone',
              'Developed API that running on phone (by Termux), show devices neary and save mac-addresses with brand names in database',
          ],
          ['Python', 'C++', 'FastAPI'],
          "assets/esp.jpg"
      ],
      [
          'Terminal Web Panel',
          [
              'Developed API using Flask-SocketIO for creating shell sessions and communicate with them',
              'Developed frontend using pure JS, xterm.js annd SocketIO',
          ],
          ['Python', 'Flask', 'HTML/CSS', 'Pure JS', 'SocketIO'],
          "assets/terminal.png"
      ]
  ]
  return (
    <Box minW="full" alignSelf="center" justifySelf="center">
      <Heading>Projects</Heading>
      <Wrap justify="center" mt="6">
        <AnimateBox>
            {projects.map((project) => (
                <Project
                    title={project[0]}
                    features={project[1]}
                    technologies={project[2]}
                    imageSrc={project[3]}
                />
            ))}
        </AnimateBox>
      </Wrap>
    </Box>
  )
}

export default Projects
