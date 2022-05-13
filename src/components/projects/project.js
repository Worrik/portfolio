import {
    WrapItem,
    Image,
    Text,
    List,
    ListItem,
    Tag,
    Wrap,
} from '@chakra-ui/react'
import AnimateBox from '../animate_box'

const Project = ({title, imageSrc, features=[], technologies=[]}) => {
  return (
    <WrapItem flexDir="column" justifyContent="center" p="4" borderWidth='1px' maxW="xl" borderRadius='lg' mt="10">
      {imageSrc && <Image mb="3" objectFit="contain" src={imageSrc} />}
      <Text ml="6">{title}</Text>
      <List mt="2">
        {features.map((text) => (
          <AnimateBox>
            <ListItem display="flex" justifyContent="flex-start" fontSize="medium" py="2" px="4">
              <i className="ri-checkbox-circle-fill" style={{color: '#88bd86'}}></i>
              <Text ml="2" maxW="md" textAlign="start">{text}</Text>
            </ListItem>
          </AnimateBox>
        ))}
        <Wrap mt="2" spacing="2">
          {technologies.map((text) => (
            <WrapItem>
              <Tag colorScheme="teal" size="sm" key={text}>{text}</Tag>
            </WrapItem>
          ))}
        </Wrap>
      </List>
    </WrapItem>
  )
}

export default Project
