import {
    Box,
    Heading,
    Wrap,
    Text,
    WrapItem,
    Spacer,
    List,
    ListItem
} from "@chakra-ui/react"
import AnimateBox from "../animate_box"

const Expirience = () => {
  return (
    <Box mt="6" alignSelf="center" justifySelf="center">
      <Heading>Experience</Heading>
      <Wrap mt="4" direction="column" spacing="8" justifyContent="center">
        <AnimateBox>
          <WrapItem flexDir="column">
            <Box display="flex" justifyContent="space-between" minW="full">
              <Text>Python Backend Developer</Text>
              <Text opacity="0.7">Oct. 2021 - now</Text>
            </Box>
            <Box display="flex" justifyContent="space-between" minW="full">
              <Text>teeko.</Text>
              <Text opacity="0.7">Remote</Text>
            </Box>
            <List spacing="2" mt="2">
              <ListItem display="flex" justifyContent="flex-start" fontSize="medium" py="2" px="4">
                <i className="ri-checkbox-circle-fill" style={{color: '#88bd86'}}></i>
                <Text ml="2">Developed REST and Graphql APIs</Text>
              </ListItem>
              <ListItem display="flex" justifyContent="flex-start" fontSize="medium" py="2" px="4">
                <i className="ri-checkbox-circle-fill" style={{color: '#88bd86'}}></i>
                <Text ml="2">Designed databases</Text>
              </ListItem>
              <ListItem display="flex" justifyContent="flex-start" fontSize="medium" py="2" px="4">
                <i className="ri-checkbox-circle-fill" style={{color: '#88bd86'}}></i>
                <Text ml="2">Fixed bugs, wrote tests</Text>
              </ListItem>
            </List>
          </WrapItem>
        </AnimateBox>

        <AnimateBox delay={0.5}>
          <WrapItem flexDir="column" mt="5">
            <Box display="flex" justifyContent="space-between" minW="full">
              <Text>Web Developer</Text>
              <Text opacity="0.7">June 2021 - Oct. 2021</Text>
            </Box>
            <Box display="flex" justifyContent="space-between" minW="full">
              <Text>Freelance</Text>
              <Text opacity="0.7">Remote</Text>
            </Box>
            <List spacing="2" mt="2">
              <ListItem display="flex" justifyContent="flex-start" fontSize="medium" py="2" px="4" overflow='hidden'>
                <i className="ri-checkbox-circle-fill" style={{color: '#88bd86'}}></i>
                <Text ml="2">Developed chat bots</Text>
              </ListItem>
              <ListItem display="flex" justifyContent="flex-start" fontSize="medium" py="2" px="4" overflow='hidden'>
                <i className="ri-checkbox-circle-fill" style={{color: '#88bd86'}}></i>
                <Text ml="2">Developed APIs with frontend</Text>
              </ListItem>
            </List>
          </WrapItem>
        </AnimateBox>
      </Wrap>
    </Box>
  )
}

export default Expirience
