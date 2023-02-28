import { ItemProps } from '@/ts';
import MotionDiv from '@/utils/motion';
import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import HeadingBlock from './HeadingBlock';
import NumberLabel from './NumberLabel';

const QuarterItem: React.FC<ItemProps> = ({
  number,
  heading,
  image
}) => {

  const route = `/courses/${heading.toLowerCase().replaceAll(' ', '-').replace(':', '')}`;

  return (
    <MotionDiv dimension="x" negInit={true} transition={{ type: 'tween' }}>
      <Link href={route}>
        <Flex
          gap="1vw"
          bg="gray.100"
          _dark={{
            bgColor: "gray.700"
          }}
          boxShadow="lg"
          rounded={9}
          padding="4vh"
          direction="column"
          h="100%"
        >
          {image && <Image src={image} alt={heading} className="c-img" />}
          <NumberLabel
            number={number}
          />
          <HeadingBlock heading={heading} />
        </Flex>
      </Link>
    </MotionDiv>
  );
};

export default QuarterItem;
