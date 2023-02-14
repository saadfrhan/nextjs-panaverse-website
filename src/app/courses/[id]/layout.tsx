"use client"

import { core_courses, specs } from "@/constants/course"
import {
  Flex, Text, Box
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {

  const { push } = useRouter();

  function returnSlug(heading: string) {
    return `/courses/${heading.toLowerCase().replaceAll(' ', '-').replace(':', '')}`
  }

  return (
    <Flex direction={['column', 'column', 'row', 'row']} gap={7}>
      <Flex direction="column">
        <Box as="span" flex='1' textAlign='left'>
          Core Courses
        </Box>

        {core_courses.courses.map((c, i) =>
          <Text pb={4} key={i} color='lightseagreen'
            textDecoration='underline' onClick={() => push(returnSlug(c.heading))}>
            Quarter {c.number} {c.heading}
          </Text>)}

        <Box as="span" flex='1' textAlign='left'>
          Specializations
        </Box>

        {specs.specializations.map((s, i) => (
          <Flex key={i} pl={3} direction="column" paddingBlock={1.5}>
            <Box as="span" flex='1' textAlign='left'>
              {s.heading}
            </Box>
            {s.courses.map((c, i) => (
              <Text key={i} cursor="pointer" color='lightseagreen'
                textDecoration='underline' mb={1}
                onClick={() => push(returnSlug(c.heading))}
              >
                Quarter {c.number}  {c.heading}
              </Text>
            ))}
          </Flex>
        ))}
      </Flex>
      {children}
    </Flex>
  )
}
