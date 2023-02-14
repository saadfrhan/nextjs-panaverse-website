import { ItemProps } from '@/ts';
import MotionDiv from '@/utils/motion';
import { Flex } from '@chakra-ui/react';
import HeadingBlock from './HeadingBlock';
import NumberLabel from './NumberLabel';

const QuarterItem: React.FC<ItemProps> = ({
  number,
  heading,
  description,
  isSpecialization = false,
}) => {

  return (
    <MotionDiv dimension="x" negInit={true} transition={{ type: 'tween' }}>
      <Flex
        gap="1vw"
        padding="4vh"
        direction="column"
      >
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
