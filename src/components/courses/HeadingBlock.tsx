import { gradientBg } from "@/constants/home";
import { HeadingBlock } from "@/ts";
import { Flex, Heading, Text } from "@chakra-ui/react";

const HeadingBlock: React.FC<HeadingBlock> = ({ description, heading, isSpecialization, number }) => (
  <Flex direction="column" gap={3} mt={isSpecialization ? 2 : 0}>
    <Heading
      size={['lg', 'xl', 'lg', 'xl']}
      bg={isSpecialization ? gradientBg : 'transparent'}
      rounded={9}
      p={isSpecialization ? 5 : 0}
      color={isSpecialization ? "white" : "auto"}
    >
      {isSpecialization && `${number}. `} {heading}
    </Heading>
    {description && <Text>{description}</Text>}
  </Flex>
);

export default HeadingBlock;