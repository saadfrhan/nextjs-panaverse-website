import { NumberLabel } from "@/ts";
import { Flex, Heading } from "@chakra-ui/react";

const NumberLabel: React.FC<NumberLabel> = ({ isLandscape, number }) => (
  <Flex direction={isLandscape ? 'column' : 'row'} justifyContent="center" alignItems="center" mt={isLandscape ? 0 : 9}>
    <Heading letterSpacing={isLandscape ? 8 : 1} size="md" mb={isLandscape ? '3vh' : 0} mr={isLandscape ? 0 : 3}>
      QUARTER
    </Heading>
    <Heading size={['md', 'xl', 'lg', '3xl']}>
      {number}
    </Heading>
  </Flex>
);

export default NumberLabel;