import { ItemProps } from '@/ts';
import MotionDiv from '@/utils/motion';
import { Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react';


const Item: React.FC<ItemProps> = ({ number, heading, description, isSpecialization = false }) => {
  const [isLandscape] = useMediaQuery('(min-width: 994px)', {
    ssr: true,
    fallback: false
  });

  return (<MotionDiv dimension='x' negInit={true} transition={{ type: "tween" }}>
    <Flex maxW="100%" gap="3vw" padding={isLandscape && !isSpecialization ? "4vh" : "0.8vh"} direction={['column', 'column', 'column', isSpecialization ? 'column' : 'row']} justifyContent="center" >
      {!isSpecialization && <Flex direction={isLandscape ? "column" : "row"} justifyContent="center" alignItems="center">
        <Heading letterSpacing={isLandscape ? 8 : 1} size="md" mb={isLandscape ? "3vh" : 0} mr={isLandscape ? 0 : 3}>
          QUARTER
        </Heading>
        <Heading size={["lg", "xl", "lg", "3xl"]}>
          {number}
        </Heading>
      </Flex>}
      <Flex direction="column" gap={3} mt={isSpecialization ? 5 : 0}>
        <Heading size={["lg", "xl", "lg", "xl"]}>
          {isSpecialization && number + '. '}  {heading}
        </Heading>
        {description && <Text>{description}</Text>}
      </Flex>
    </Flex>
  </MotionDiv>)
}

export default Item;
