import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { IconButton, useColorMode, Icon } from '@chakra-ui/react'

export default function Darkmode() {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      w={55} h={55}
      aria-label="toggle-mode"
      icon={<Icon as={colorMode === "dark" ? MdDarkMode : MdLightMode} />}
      onClick={toggleColorMode}
    />
  )
}
