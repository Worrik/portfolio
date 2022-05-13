import {
    WrapItem,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'

const ContactButtons = () => {
  return (
    <WrapItem justifySelf="center" gap="26" mt="3" >
      <a href="https://github.com/Worrik">
        <IconButton>
          <i className="ri-github-line" color={useColorModeValue('gray.800', 'white')}></i>
        </IconButton>
      </a>
      <a href="https://t.me/worrik">
        <IconButton>
          <i className="ri-telegram-line" color={useColorModeValue('gray.800', 'white')}></i>
        </IconButton>
      </a>
    </WrapItem>
  )
}

export default ContactButtons
