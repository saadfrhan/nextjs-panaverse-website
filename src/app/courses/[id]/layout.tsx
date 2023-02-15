"use client"

import { core_courses, specs } from "@/constants/course"
import {
  Flex, Text, Box, useMediaQuery, Button, Icon, IconButton
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { TfiClose as CloseIcon } from 'react-icons/tfi'

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {

  const { push } = useRouter();

  const [isLandscape] = useMediaQuery('(min-width: 1000px)');

  const [show, isShow] = useState(false);

  return (
    <Flex direction={['column', 'column', 'column', 'row']} gap={7}>
      {(isLandscape || show) && <Flex direction="column">
        {!isLandscape && (
          <IconButton
            w={55} h={55}
            rounded={9}
            right={5}
            color="white"
            bg="transparent"
            position="absolute"
            onClick={() => isShow(!show)}
            aria-label="close"
            icon={<Icon as={CloseIcon} />}
          />
        )}
        <Box as="span" textAlign='left'>
          Core Courses
        </Box>
        {core_courses.courses.map((c, i) =>
          <Text pb={1} listStyleType="bullet" key={i} color='lightseagreen'
            _hover={{ textDecoration: 'underline' }} cursor='pointer' onClick={() => push(c.slug)}>
            Quarter {c.number} {c.heading}
          </Text>)}
        <Box as="span" textAlign='left'>
          Specializations
        </Box>

        {specs.specializations.map((s, i) => (
          <Flex key={i} pl={3} direction="column" paddingBlock={1.5}>
            <Box as="span" textAlign='left'>
              {s.heading}
            </Box>
            {s.courses.map((c, i) => (
              <Text listStyleType="bullet" key={i} cursor="pointer" color='lightseagreen'
                _hover={{ textDecoration: 'underline' }} mb={1}
                onClick={() => push(`/courses/${c.slug}`)}
              >
                Quarter {c.number}  {c.heading}
              </Text>
            ))}
          </Flex>
        ))}

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
