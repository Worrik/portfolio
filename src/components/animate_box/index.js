import { motion } from "framer-motion"

const AnimateBox = ({delay=0, children}) => {
  const container = {
    initial: {opacity: 0, y: 100},
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .35,
        delay: delay
      }
    },
    exit: {opacity: 0, y: 100, transition: {duration: .3}},
  }

  return (
    <motion.ul
      variants={container}
      initial="initial"
      whileInView="whileInView"
      exit="exit"
      viewport={{ once: true }}
    >
        {children}
    </motion.ul>
  )
}
export default AnimateBox
