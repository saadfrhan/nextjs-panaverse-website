import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Panaverse from '../../images/panaverse.png';
import styles from './topbar.module.css'
import { Mobbar, NavBtns, NavIconBtn } from './mobbar';
import Darkmode from './darkmode';
import { BsBook as CourseIcon } from 'react-icons/bs'
import { BiHomeAlt as HomeIcon } from 'react-icons/bi'

export default function Topbar({ landscape }: { landscape: boolean }) {

  const [close, isClose] = useState(true);

  return (<Flex direction="column" gap={3}>
    <Flex alignContent="center" alignItems="center" justifyContent="space-between" w="100%">
      <Flex>
        <Link href="/">
          <Image alt="panaverse" src={Panaverse} className={styles.navpv} />
        </Link>
        {landscape &&
          <Flex gap={6} alignItems="center">
            <NavBtns />
          </Flex>}
      </Flex>
      {!landscape && <Mobbar close={close} isClose={isClose} />}
      {landscape && <Darkmode />}
    </Flex>
    {!landscape && <Flex direction="column" gap={3}
      display={close ? "none" : "flex"}
    >
      <NavBtns />
    </Flex>}
  </Flex>)
}
