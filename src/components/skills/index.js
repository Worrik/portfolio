import {
    Box,
    List,
    Text
} from '@chakra-ui/react'
import Skill from '../skill'
import AnimateBox from '../animate_box'

const Skills = ({skills, title, animationDelay=.3}) => {
  return (
    <Box mb="2">
      <AnimateBox delay={animationDelay}>
        <Text mb="1">{title}</Text>
        <List spacing={2}>
          {skills.map((i) => (
            <Skill like={i[2]}>
                <Text ml="2">{i[1]}</Text>
            </Skill>
          ))}
        </List>
      </AnimateBox>
    </Box>
  )
}

export default Skills
