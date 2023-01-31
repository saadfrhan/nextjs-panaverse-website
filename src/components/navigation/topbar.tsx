import { Button, Flex, IconButton, useColorMode, Icon } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Panaverse from '../../images/panaverse.png';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import styles from './topbar.module.css'

export default function Topbar({ landscape }: { landscape: boolean }) {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex paddingBlock={5} paddingInline="5%" alignContent="center" alignItems="center" justifyContent="space-between">
      <Flex>
        <Link href="/">
          <Image alt="panaverse" src={Panaverse} className={styles.navpv} />
        </Link>
        {landscape &&
          <Flex gap={6} alignItems="center">
            <Link href="/">
              <Button>
                Home
              </Button>
            </Link>
            <Link href="/courses">
              <Button>
                Courses
              </Button>
            </Link>
          </Flex>}
      </Flex>
      <IconButton
        w={55} h={55}
        alignSelf="flex-end"
        aria-label="toggle-mode"
        icon={<Icon as={colorMode === "dark" ? MdDarkMode : MdLightMode} />}
        onClick={toggleColorMode}
      />
    </Flex>
  )
}
