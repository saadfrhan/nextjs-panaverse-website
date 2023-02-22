import { HeadingBlock } from "@/ts";
import { Heading } from "@chakra-ui/react";

const HeadingBlock: React.FC<HeadingBlock> = ({ heading }) => {

  return <Heading
    size="md"
    color='lightseagreen'
    textDecoration='underline'
    cursor="pointer"
    rounded={9}
  >
    {heading}
  </Heading>
}

export default HeadingBlock;
