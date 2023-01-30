import { NumberLabel } from "@/ts";
import { Flex, Heading } from "@chakra-ui/react";

const NumberLabel: React.FC<NumberLabel> = ({ isLandscape, number }) => (
  <Flex direction={isLandscape ? 'column' : 'row'} justifyContent="center" alignItems="center" mt={isLandscape ? 0 : 3}>
    <Heading letterSpacing={isLandscape ? 8 : 1} size="md" mb={isLandscape ? '3vh' : 0} mr={isLandscape ? 0 : 3}>
      QUARTER
    </Heading>
    <Heading size={['lg', 'xl', 'lg', isLandscape ? '3xl' : 'md']}>
      {number}
    </Heading>
  </Flex>
);

export default NumberLabel;