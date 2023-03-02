"use client";

import MotionDiv from '@/utils/motion';
import { Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function Items({
  items,
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
    <Flex direction="column" gap="2vw" alignItems="center" justifyContent="center">
      {/* <Heading size={["2xl", "2xl", "2xl", "3xl"]}>{heading}</Heading> */}
      <SimpleGrid columns={items[0].image && !items[0].courses ? [1, 1, 1, 2, 2] : [1, 1, 2, 2, 3]} spacing={5}
      >
        {items.map((i, id) => {

          return <Item
            key={id}
            heading={i.heading}
            image={i.image}
            route={i.courses ? `/courses/specializations/${id}` : `/courses/${items[id].heading.toLowerCase().replace(' ', '-')}`}
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
          gap={6}
          boxShadow="lg"
          p={10}
          bgColor="gray.700"
          alignItems="center"
          cursor="pointer"
          w="auto"
          rounded={9}
          _light={{
            bgColor: 'gray.200'
          }}
          direction='column'
        >
          {image && <Image src={image} alt={heading} width="300" />}
          <Heading
            textAlign="center"
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
