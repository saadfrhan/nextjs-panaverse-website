"use client";

import MotionDiv from '@/utils/motion';
import { Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { specs } from '@/constants/course';
import Link from 'next/link';

export default function Items({
  items,
  heading
}: {
  items: {
    number?: string
    heading: string,
    image?: StaticImageData,
    description?: string,
    courses?: {
      number: string,
      heading: string,
      slug: string,
    }[]
  }[],
  heading: string
}) {


  return (
    <Flex direction="column" gap="2vw" alignItems="center" justifyContent="center" w="100%">
      <Heading size={["2xl", "2xl", "2xl", "3xl"]}>{heading}</Heading>
      <SimpleGrid columns={items[0].image && !items[0].courses ? [1, 1, 1, 2, 2] : [1, 1, 2, 2, 3]} spacing={5} w="100%"
      >
        {items.map((i, id) => {

          return <Item
            key={id}
            heading={i.heading}
            image={i.image}
            route={i.courses ? `/courses/${i.courses[0].slug}` : `/courses/${items[0].heading.toLowerCase().replace(' ', '-')}`}
            isSpec={items[0].courses ? true : false}
          />
        }
        )
        }
      </SimpleGrid >
    </Flex >
  )
}

function Item({
  route,
  image,
  heading,
  isSpec
}: {
  route: string,
  image?: StaticImageData,
  heading: string,
  isSpec: boolean
}) {

  return (
    <MotionDiv
      negInit={true}
      dimension="x"
    >
      <Link href={route}>
        <Flex
          columnGap={12}
          rowGap={6}
          paddingInline={5}
          boxShadow="lg"
          bgColor="gray.700"
          cursor="pointer"
          rounded={9}
          justifyContent="center"
          h="50vh"
          alignItems={isSpec ? "flex-start" : "center"}
          _light={{
            bgColor: 'gray.200'
          }}
          direction={isSpec ? 'column' : ['column', 'row', 'row', 'row', 'row']}
        >
          {image && <Image src={image} alt={heading} width="200" />}
          <Heading
            textAlign={isSpec ? "left" : "center"}
            size={
              image && !isSpec ? ["md", "xl", "xl", "xl"] : "md"
            }>
            {heading}
          </Heading>
        </Flex>
      </Link>
    </MotionDiv>
  )
}