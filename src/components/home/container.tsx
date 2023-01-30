"use client";

import { Flex } from "@chakra-ui/react";

export default function Container({
  bg = "white",
  left,
  right,
  center,
  ...props
}: {
  bg?: string;
  left?: JSX.Element,
  right?: JSX.Element,
  center?: JSX.Element,
  [key: string]: any
}) {
  return (
    <Flex bgImage={bg} {...props} direction={['column', 'column', 'column', 'row']} justifyContent={center ? 'center' : "space-between"}>

      {left && left}
      {center && center}
      {right && right}
    </Flex>
  )
}


