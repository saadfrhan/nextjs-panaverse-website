import { gradientBg } from "@/constants/home";
import { HeadingBlock } from "@/ts";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const HeadingBlock: React.FC<HeadingBlock> = ({ description, heading, isSpecialization, number }) => {

  return <Flex direction="column" gap={3} mt={isSpecialization ? 2 : 0}>
    {isSpecialization ? <SpecilizationHeading heading={heading} number={number!} /> :
      <Link href={`/courses/${heading.toLowerCase().replaceAll(' ', '-').replace(':', '')}`}><Heading
        size={['lg', 'xl', 'lg', 'xl']}
        bg={'transparent'}
        color='lightseagreen'
        textDecoration='underline'
        cursor="pointer"
        rounded={9}
        p={0}
      >
        {heading}
      </Heading></Link>
    }
    {description && <Text>{description}</Text>}
  </Flex >
}

const SpecilizationHeading = ({ heading, number }: {
  heading: string, number: string
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
