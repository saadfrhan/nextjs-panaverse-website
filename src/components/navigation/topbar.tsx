import { Button, Flex, IconButton, useColorMode, Icon } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Panaverse from '../../images/panaverse.png';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export default function Topbar({ landscape }: { landscape: boolean }) {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex p={5} alignContent="center" alignItems="center">
      <Link href="/">
        <Image alt="panaverse" src={Panaverse} className={`nav-pv ${colorMode === 'dark' && 'dark-pv'}`} />
      </Link>
      {landscape &&
        <Flex gap={6}>
          <Button>
            <Link href="/">Home</Link>
          </Button>
          <Button>
            <Link href="/courses">Courses</Link>
          </Button>
        </Flex>}
      <Flex justifyContent="flex-end" alignItems="center" position="fixed"
        right={0}
        top={0}
        gap={4}
        z-index={1}
        mr={3}
        mt={6}>
        <IconButton
          w={55} h={55}
          aria-label="toggle-mode"
          icon={<Icon as={colorMode === "dark" ? MdDarkMode : MdLightMode} />}
          onClick={toggleColorMode}
        />
      </Flex>
    </Flex>
  )
}
