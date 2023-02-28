'use client';
import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { specs } from '@/constants/course';
import MotionDiv from '@/utils/motion';

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
    <Flex direction='column' pt={5} gap='2vw' alignItems='center' justifyContent='center' w='100%'>
      <Heading size={['2xl', '2xl', '2xl', '3xl']}>{heading}</Heading>
      <SimpleGrid columns={items[0].image ? [1, 1, 1, 2, 2] : [1, 1, 2, 2, 3]} spacing={5} w='100%'
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
          />;
        }
        )
        }
      </SimpleGrid >
    </Flex >
  );
};

function Item({
  route,
  image,
  heading
}: {
  route: string,
  image?: StaticImageData,
  heading: string
}) {

  return (
    <MotionDiv
      negInit={true}
      dimension='x'
    >
      <Link href={route}>
        <Flex
          gap={3}
          boxShadow='lg'
          paddingInline={5}
          bgColor='gray.700'
          cursor='pointer'
          rounded={9}
          justifyContent='center'
          h='50vh'
          alignItems='center'
          _light={{
            bgColor: 'gray.200'
          }}
          direction={['column', 'row', 'row', 'row', 'row']}
        >
          {image && <Image src={image} alt={heading} width='200' />}
          <Heading
            textAlign='center'
            size={
              image ? ['md', 'xl', 'xl', 'xl'] : 'md'
            }>
            {heading}
          </Heading>
        </Flex>
      </Link>
    </MotionDiv>
  );
};
