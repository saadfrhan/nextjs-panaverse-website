'use client';
import { Flex, IconButton, Icon, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { AiOutlineMenu as MenuIcon } from 'react-icons/ai';
import { BiHomeAlt as HomeIcon } from 'react-icons/bi';
import { BsBook as CourseIcon } from 'react-icons/bs';
import { TfiClose as CloseIcon } from 'react-icons/tfi';
import Darkmode from './darkmode';

export const Mobbar = (
  { close, isClose }:
    { close: boolean, isClose: Function }
): JSX.Element => {
  return (
    <Flex gap={3}>
      <IconButton
        w={55} h={55}
        rounded={9}
        boxShadow='lg'
        onClick={() => isClose(!close)}
        aria-label='home'
        icon={<Icon as={close ? MenuIcon : CloseIcon} />}
      />
      <Darkmode />
    </Flex>
  );
};

export function NavBtns() {
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
        key={idx}
        arialabel={item.arialabel}
        icon={item.icon}
        route={item.route}
      />
    ))
  }</>;
};

export function NavIconBtn({
  icon,
  route,
  arialabel
}: {
  icon: any,
  route: string,
  arialabel: string
}): JSX.Element {
  return (
    <Link href={route}>
      <Button boxShadow='lg' leftIcon={<Icon as={icon} />} w='100%'>
        {arialabel}
      </Button>
    </Link>
  );
};