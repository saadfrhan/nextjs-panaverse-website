"use client"

import { core_courses, specs } from "@/constants/course"
import {
  Flex, Text, Box, useMediaQuery, Button, Icon, IconButton
} from '@chakra-ui/react'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { TfiClose as CloseIcon } from 'react-icons/tfi'

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {

  const { push } = useRouter();

  const [isLandscape] = useMediaQuery('(min-width: 1034px)');

  const [show, isShow] = useState(false);

  return (
    <Flex direction={['column', 'column', 'column', 'column', 'row']} gap={7} justifyContent="space-between">
      {(isLandscape || show) && <Flex direction="column" w={["100%", "100%", "100%", "100%", "30%"]}>
        {!isLandscape && (
          <IconButton
            w={55} h={55}
            rounded={9}
            pt={10}
            right={10}
            bg="transparent"
            position="absolute"
            onClick={() => isShow(!show)}
            aria-label="close"
            icon={<Icon as={CloseIcon} />}
          />
        )}
        <Flex direction="column" pb="5">
          <Box as="span" textAlign='left' fontWeight="extrabold">
            Core Courses
          </Box>
          {core_courses.courses.map((c, i) =>
            <Link href={c.slug} key={i}>
              <Text color='lightseagreen'
                _hover={{ textDecoration: 'underline' }} cursor='pointer'>
                Quarter {c.number} {c.heading}
              </Text>
            </Link>)}
        </Flex>

        <Flex direction="column" pb="5">
          <Box as="span" textAlign='left' fontWeight="bold">
            Specializations
          </Box>

          {specs.specializations.map((s, i) => (
            <Flex key={i} pl={3} direction="column" pb="5">
              <Box as="span" textAlign='left'>
                {s.heading}
              </Box>
              {s.courses.map((c, i) => (
                <Link key={i} href={`/courses/${c.slug}`}>
                  <Text cursor="pointer" color='lightseagreen'
                    _hover={{ textDecoration: 'underline' }} mb={1}
                  >
                    Quarter {c.number}  {c.heading}
                  </Text>
                </Link>
              ))}
            </Flex>
          ))}
        </Flex>

      </Flex>}
      {!isLandscape && <Button
        onClick={() => isShow(!show)}
      >
        Courses Menu
      </Button>}
      {children}
    </Flex>
  )
}
