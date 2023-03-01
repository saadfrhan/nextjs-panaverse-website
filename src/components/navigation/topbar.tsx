import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Panaverse from '../../images/panaverse.png';
import styles from './topbar.module.css'
import { Mobbar, NavBtns } from './mobbar';
import Darkmode from './darkmode';

export default function Topbar({ landscape }: { landscape: boolean }) {

  const [close, isClose] = useState(true);

  return (<Flex direction="column" gap={3}>
    <Flex alignContent="center" alignItems="center" justifyContent="space-between">
      <Flex>
        <Link href="/">
          <Image alt="panaverse" src={Panaverse} className={styles.navpv} />
        </Link>
        {landscape &&
          <Flex gap={6} alignItems="center">
            <NavBtns isClose={isClose} close={close} />
          </Flex>}
      </Flex>
      {!landscape && <Mobbar close={close} isClose={isClose} />}
      {landscape && <Darkmode />}
    </Flex>
    {!landscape && <Flex direction="column" gap={3}
      display={close ? "none" : "flex"}
    >
      <NavBtns isClose={isClose} close={close} />
    </Flex>}
  </Flex>)
}
