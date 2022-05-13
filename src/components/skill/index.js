import {
    ListItem,
    Box,
    Text
} from '@chakra-ui/react'

const Skill = ({ skillName, like=false, children }) => {
  const icon = like ? 'ri-heart-3-fill' : 'ri-checkbox-circle-fill'
  const iconColor = like ? 'red' : '#88bd86'
  return (
    <ListItem>
        <Box display="flex" justifyContent="flex-start" fontSize="medium" py="2" px="4" borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <i style={{color: iconColor}} className={icon}></i>
        {children}
      </Box>
    </ListItem>
  )
}

export default Skill
