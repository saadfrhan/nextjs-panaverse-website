import { gradientBg } from "@/constants/home";
import { HeadingBlock } from "@/ts";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const HeadingBlock: React.FC<HeadingBlock> = ({ description, heading, isSpecialization, number }) => {

  const { push } = useRouter()

  return <Flex direction="column" gap={3} mt={isSpecialization ? 2 : 0}>
    {isSpecialization ? <SpecilizationHeading heading={heading} number={number!} push={push} /> :
      <Heading
        size={['lg', 'xl', 'lg', 'xl']}
        bg={'transparent'}
        onClick={() => push(`/courses/${heading.toLowerCase().replaceAll(' ', '-').replace(':', '')}`)}
        _hover={{
          color: 'lightseagreen',
          textDecoration: 'underline'
        }}
        cursor="pointer"
        rounded={9}
        p={0}
        color="auto"
      >
        {heading}
      </Heading>}
    {description && <Text>{description}</Text>}
  </Flex>
}

const SpecilizationHeading = ({ heading, number, push }: {
  heading: string, number: string, push: (href: string) => void
}) => {
  return (
    <Heading
      size={['lg', 'xl', 'lg', 'xl']}
      bg={gradientBg}
      _hover={{
        color: 'lightseagreen',
        textDecoration: 'underline'
      }}
      cursor="pointer"
      rounded={9}
      p={5}
      color={"white"}
    >
      {`${number}. `} {heading}
    </Heading>
  )
}

export default HeadingBlock;