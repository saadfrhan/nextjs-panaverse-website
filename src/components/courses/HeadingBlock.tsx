import { gradientBg } from "@/constants/home";
import { HeadingBlock } from "@/ts";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const HeadingBlock: React.FC<HeadingBlock> = ({ heading }) => {

  return <Link
    href={`/courses/${heading.toLowerCase().replaceAll(' ', '-').replace(':', '')}`}
  >
    <Heading
      size="md"
      color='lightseagreen'
      textDecoration='underline'
      cursor="pointer"
      rounded={9}
    >
      {heading}
    </Heading>
  </Link>
}

export default HeadingBlock;
