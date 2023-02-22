"use client";

import MotionDiv from '@/utils/motion';
import { Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { specs } from '@/constants/course';

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
    <Flex direction="column" gap="2vw" alignItems="center" justifyContent="center">
      <Heading size={["xl", "2xl", "2xl", "3xl"]}>{heading}</Heading>
      <SimpleGrid columns={items[0].image ? [1, 1, 1, 2, 2] : [1, 1, 2, 2, 3]} spacing={5}
      >
        {items.map(({ heading, image }, id) => {

          const route = image ?
            `/courses/${heading.toLowerCase().replace(' ', '-')}` :
            `/courses/specializations/${specs.specializations.findIndex(
              s => s.heading.toLowerCase().replaceAll(' ', '-') === heading.toLowerCase().replaceAll(' ', '-')
            )}`;

          return <Item
            key={id}
            heading={heading}
            image={image}
            route={route}
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
  heading
}: {
  route: string,
  image?: StaticImageData,
  heading: string
}) {

  const { push } = useRouter()

  return (
    <MotionDiv
      negInit={true}
      dimension="x"
    >
      <Flex
        gap={3}
        p={5}
        boxShadow="lg"
        bgColor="gray.700"
        cursor="pointer"
        rounded={9}
        justifyContent="center"
        h="50vh"
        alignItems="center"
        onClick={() => push(route)}
        _light={{
          bgColor: 'gray.200'
        }}
        direction={['column', 'row', 'row', 'row', 'row']}
      >
        {image && <Image src={image} alt={heading} width="200" />}
        <Heading
          textAlign="center"
          size={
            image ? ["md", "xl", "xl", "xl"] : "md"
          }>
          {heading}
        </Heading>
      </Flex></MotionDiv>
  )
}