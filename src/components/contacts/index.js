import {
    Box,
    Text,
    IconButton,
    Button,
    useColorModeValue
} from '@chakra-ui/react'
import AnimateBox from '../animate_box'

const Contacts = () => {
  return (
    <Box mt="6" alignSelf="center" justifySelf="center">
      <Text mb="2">You can text me 🙃:</Text>
      <AnimateBox>
        <a href="https://t.me/worrik">
          <Button
                leftIcon={<i className="ri-telegram-line" color={useColorModeValue('gray.800', 'white')}></i>}
                colorScheme='teal'
                variant='solid'
          >
            Telegram
          </Button>
        </a>
      </AnimateBox>
      <Box mt="4" />
      <AnimateBox delay={.5}>
        <a href="mailto:vovachornang@gmail.com">
          <Button
                leftIcon={<i className="ri-mail-line" color={useColorModeValue('gray.800', 'white')}></i>}
                colorScheme='teal'
                variant='solid'
          >
            Email
          </Button>
        </a>
      </AnimateBox>
    </Box>
  )
}

export default Contacts
