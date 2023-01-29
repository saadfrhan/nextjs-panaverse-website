import { Button, Flex, IconButton, useColorMode, Icon } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Panaverse from '../../images/panaverse.png';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export default function Topbar({ landscape }: { landscape: boolean }) {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex paddingBlock={5} paddingInline={10} alignContent="center" alignItems="center">
      <Image alt="panaverse" src={Panaverse} className={`nav-pv ${colorMode === 'dark' && 'dark-pv'}`} />
      {landscape && <Flex gap={6}><Button>
        <Link href="/">Home</Link>
      </Button>
        <Button>
          <Link href="/courses">Courses</Link>
        </Button></Flex>}
      <Flex w="100%" justifyContent="flex-end" alignContent="center" alignItems="center">
        <IconButton
          aria-label="toggle-mode"
          icon={<Icon as={colorMode === "dark" ? MdDarkMode : MdLightMode} />}
          onClick={toggleColorMode}
        />
      </Flex>
    </Flex>
  )
}
