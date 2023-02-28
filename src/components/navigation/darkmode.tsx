import { IconButton, useColorMode, Icon } from '@chakra-ui/react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export default function Darkmode(): JSX.Element {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      w={55} h={55}
      boxShadow='lg'
      aria-label='toggle-mode'
      icon={<Icon as={colorMode === 'dark' ? MdDarkMode : MdLightMode} />}
      onClick={toggleColorMode}
    />
  );
};
