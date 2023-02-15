"use client";

import { Flex, IconButton, Icon } from '@chakra-ui/react'
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineMenu as MenuIcon } from 'react-icons/ai';
import { TfiClose as CloseIcon } from 'react-icons/tfi'
import { BsBook as CourseIcon } from 'react-icons/bs'
import { BiHomeAlt as HomeIcon } from 'react-icons/bi'


export const Mobbar = () => {

  const [close, isClose] = useState(true)

  return (
    <Flex
      position="fixed"
      direction="row"
      justifyContent="space-evenly"
      bottom={5}
      w="100%"
      gap={4}
      z-index={1}
    >
      <Link href="/" prefetch={false} className={close ? "hide" : "show"}>
        <IconButton
          w={55} h={55}
          rounded={9}
          display="flex"
          aria-label="home"
          icon={<Icon as={HomeIcon} />}
        />
      </Link>
      <Link href="/courses" prefetch={false} className={close ? "hide" : "show"}>
        <IconButton
          display="flex"
          rounded={9}
          w={55} h={55}
          aria-label="home"
          icon={<Icon as={CourseIcon} />}
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
