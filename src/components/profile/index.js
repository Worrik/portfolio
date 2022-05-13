import {
    Box,
    Avatar,
    Text,
    Heading
} from '@chakra-ui/react'

const Profile = () => {
  return (
    <>
      <Box justifySelf="center" border="1px" borderColor="gray.700" borderRadius="full" p="1" mb="3" >
        <Avatar src="./assets/me.jpg" bg="transparent" size="xl" />
      </Box>

      <Heading fontSize="x-large">Volodymyr</Heading>
      <Text fontSize="sm" color="gray.500">Backend developer</Text>
    </>
  )
}

export default Profile
