import { ItemProps } from '@/ts';
import MotionDiv from '@/utils/motion';
import { Flex, useMediaQuery } from '@chakra-ui/react';
import HeadingBlock from './HeadingBlock';
import NumberLabel from './NumberLabel';

const QuarterItem: React.FC<ItemProps> = ({
  number,
  heading,
  description,
  isSpecialization = false,
}) => {

  const [isLandscape] = useMediaQuery('(min-width: 994px)', {
    ssr: true,
    fallback: false,
  });

  return (
    <MotionDiv dimension="x" negInit={true} transition={{ type: 'tween' }}>
      <Flex
        gap="3vw"
        alignItems={isSpecialization ? "none" : "center"}
        padding={isLandscape && !isSpecialization ? '4vh' : 0}
        direction={isSpecialization ? 'column' : ['column', 'column', 'column', 'row']}
        w="100%"
      >
        {!isSpecialization && (
          <NumberLabel
            isLandscape={isLandscape}
            number={number}
          />
        )}
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
