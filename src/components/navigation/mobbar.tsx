"use client";

import { Flex, IconButton, Icon, Button } from '@chakra-ui/react'
import { AiOutlineMenu as MenuIcon } from 'react-icons/ai';
import { TfiClose as CloseIcon } from 'react-icons/tfi'
import { BsBook as CourseIcon } from 'react-icons/bs'
import { BiHomeAlt as HomeIcon } from 'react-icons/bi'
import Darkmode from './darkmode';
import Link from 'next/link';


export const Mobbar = (
  { close, isClose }:
    { close: boolean, isClose: Function }
) => {
  return (
    <Flex gap={3}>
      <IconButton
        w={55} h={55}
        rounded={9}
        boxShadow="lg"
        onClick={() => isClose(!close)}
        aria-label="home"
        icon={<Icon as={close ? MenuIcon : CloseIcon} />}
      />
      <Darkmode />
    </Flex>
  )
}

export function NavBtns({
  close, isClose
}: {
  close: boolean, isClose: Function
}) {
  return <>{
    [{
      arialabel: 'Home',
      icon: HomeIcon,
      route: '/'
    }, {
      arialabel: 'Courses',
      icon: CourseIcon,
      route: '/courses'
    }].map((item, idx) => (
      <NavIconBtn
        close={close}
        isClose={isClose}
        key={idx}
        arialabel={item.arialabel}
        icon={item.icon}
        route={item.route}

      />
    ))
  }</>
}

export function NavIconBtn({
  icon,
  route,
  arialabel,
  close, isClose
}: {
  icon: any,
  route: string,
  arialabel: string,
  close: boolean, isClose: Function
}) {
  return (
    <Link href={route} >
      <Button boxShadow="lg" onClick={() => isClose(!close)} leftIcon={<Icon as={icon} />} w="100%">
        {arialabel}
      </Button>
    </Link>
  )
}