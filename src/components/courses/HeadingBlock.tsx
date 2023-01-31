import { gradientBg } from "@/constants/home";
import { HeadingBlock } from "@/ts";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const HeadingBlock: React.FC<HeadingBlock> = ({ description, heading, isSpecialization, number }) => {

  const { push } = useRouter()

  return <Flex direction="column" gap={3} mt={isSpecialization ? 2 : 0}>
    <Heading
      size={['lg', 'xl', 'lg', 'xl']}
      bg={isSpecialization ? gradientBg : 'transparent'}
      onClick={() => push(`/courses/${heading.toLowerCase().replaceAll(' ', '-').replace(':', '')}`)}
      cursor="pointer"
      rounded={9}
      p={isSpecialization ? 5 : 0}
      color={isSpecialization ? "white" : "auto"}
    >
      {isSpecialization && `${number}. `} {heading}
    </Heading>
    {description && <Text>{description}</Text>}
  </Flex>
}

export default HeadingBlock;