"use client";

import { Flex, IconButton, Icon } from '@chakra-ui/react'
import Link from 'next/link';
import React, { useState } from 'react'
import {
  AiFillHome as HomeIcon,
  AiFillBook as CourseIcon,
  AiOutlineMenu as MenuIcon
} from 'react-icons/ai';
import {
  GrClose as CloseIcon,
} from 'react-icons/gr';

export const Mobbar = () => {

  const [close, isClose] = useState(true)

  return (
    <Flex position="sticky" direction="column" justifyContent="flex-start" right={0} bottom={0} p={5} gap={4}>
      {!close && <>
        <Link href="/">
          <IconButton
            w={50} h={50}
            rounded="full"
            aria-label="home"
            icon={<Icon as={HomeIcon} />}
          />
        </Link>
        <Link href="/courses">
          <IconButton
            rounded="full"
            w={50} h={50}
            aria-label="home"
            icon={<Icon as={CourseIcon} />}
          />
        </Link>
      </>}
      <IconButton
        w={50} h={50}
        rounded="full"
        onClick={() => isClose(!close)}
        aria-label="home"
        icon={<Icon as={close ? MenuIcon : CloseIcon} />}
      />
    </Flex>
  )
}
