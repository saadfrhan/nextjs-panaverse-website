"use client";

import { Flex } from "@chakra-ui/react";

export default function Container({
  bg = "white",
  element,
  ...props
}: {
  bg?: string;
  element?: JSX.Element,
  [key: string]: any
}) {
  return (
    <Flex bgImage={bg} width="100%" {...props} direction={['column', 'column', 'column', 'row']}>
      {element && element}
    </Flex>
  )
}


