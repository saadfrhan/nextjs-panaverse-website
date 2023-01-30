"use client";

import { Flex, IconButton, Icon } from '@chakra-ui/react'
import Link from 'next/link';
import React, { useState } from 'react'
import {
  AiFillHome as HomeIcon,
  AiFillBook as CourseIcon,
  AiOutlineMenu as MenuIcon,
  AiOutlineClose as CloseIcon
} from 'react-icons/ai';

export const Mobbar = () => {

  const [close, isClose] = useState(true)

  return (
    <Flex
      position="fixed"
      direction="column"
      justifyContent="flex-start"
      left={0}
      bottom={0}
      p={5}
      gap={4}
      z-index={1}
    >
      <Link href="/">
        <IconButton
          w={55} h={55}
          rounded={9}
          display={close ? 'none' : 'flex'}
          aria-label="home"
          icon={<Icon as={HomeIcon} />}
        />
      </Link>
      <Link href="/courses">
        <IconButton
          display={close ? 'none' : 'flex'}
          rounded={9}
          w={55} h={55}
          aria-label="home"
          icon={<Icon as={CourseIcon} w={70} />}
        >Courses</IconButton>
      </Link>
      <IconButton
        w={55} h={55}
        rounded={9}
        onClick={() => isClose(!close)}
        aria-label="home"
        icon={<Icon as={close ? MenuIcon : CloseIcon} />}
      />
    </Flex>
  )
}
