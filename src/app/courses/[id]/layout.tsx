"use client"

import { core_courses, specs } from "@/constants/course"
import MotionDiv from "@/utils/motion"
import {
  Flex, Text, Box, useMediaQuery, Button, Icon, IconButton
} from '@chakra-ui/react'
import Link from "next/link"
import { useState } from 'react'
import { TfiClose as CloseIcon } from 'react-icons/tfi'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {

  const [isLandscape] = useMediaQuery('(min-width: 767px)');

  const [show, isShow] = useState(false);

  return (<MotionDiv dimension="x" negInit={true} transition={{
    type: "tween"
  }}>
    <Flex direction={['column', 'column', 'row', 'row', 'row']} justifyContent="space-between" >
      {(isLandscape || show) && <Flex direction="column" p={5} gap={3} w={['100%', '100%', '100%', '100%', '30%']}>
        {!isLandscape && (
          <IconButton
            w={55} h={55}
            rounded={9}
            right={5}
            bg="transparent"
            position="absolute"
            onClick={() => isShow(!show)}
            aria-label="close"
            icon={<Icon as={CloseIcon} />}
          />
        )}

        <Flex direction="column">
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

        <Flex direction="column" gap={2}>
          <Box as="span" textAlign='left' fontWeight="bold">
            Specializations
          </Box>

          <Accordion>
            {specs.specializations.map((s, i) => (
              <AccordionItem border="none" key={i}>
                <h2>
                  <AccordionButton
                    rounded={9}
                    _focusVisible={{
                      border: 'none'
                    }}
                    _expanded={{
                      bg: 'gray.300',
                      color: 'black'
                    }}
                    _hover={{
                      bg: "gray.200",
                      color: 'black'
                    }}>
                    <Box as="span" flex='1' textAlign='left'>
                      {s.heading}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {s.courses.map((c, i) => (
                    <Link key={i} href={`/courses/${c.slug}`}>
                      <Text cursor="pointer" color='lightseagreen'
                        _hover={{ textDecoration: 'underline' }}
                      >
                        Quarter {c.number}  {c.heading}
                      </Text>
                    </Link>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Flex>

      </Flex>}
      {
        !isLandscape && <Button
          onClick={() => isShow(!show)}
        >
          Courses Menu
        </Button>
      }

      {children}
    </Flex> </MotionDiv>
  )
}
