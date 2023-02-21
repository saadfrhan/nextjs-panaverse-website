import { ItemProps } from '@/ts';
import MotionDiv from '@/utils/motion';
import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import HeadingBlock from './HeadingBlock';
import NumberLabel from './NumberLabel';

const QuarterItem: React.FC<ItemProps> = ({
  number,
  heading,
  description,
  image,
  isSpecialization = false,
}) => {

  return (
    <MotionDiv dimension="x" negInit={true} transition={{ type: 'tween' }}>
      <Flex
        gap="1vw"
        bg="gray.100"
        _dark={{
          bgColor: "gray.700"
        }}
        rounded={9}
        padding="4vh"
        direction="column"
      >
        {image && <Image src={image} alt={heading} />}
        <NumberLabel
          number={number}
        />
        <HeadingBlock
          description={description}
          heading={heading}
          isSpecialization={isSpecialization}
          number={number}
        />
      </Flex>
    </MotionDiv>
  );
};

export default QuarterItem;
