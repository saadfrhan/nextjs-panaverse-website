import { Flex, Heading, Text } from '@chakra-ui/react'

export default function Item({
  number,
  heading,
  description
}: {
  number: string,
  heading: string,
  description: string
}) {
  return (
    <Flex maxW="100%" gap="3vw" paddingBlock="4vh" direction={['column', 'column', 'column', 'row']} >
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Heading letterSpacing={8} size="md" mb="3vh">QUARTER</Heading>
        <Heading size={["lg", "xl", "lg", "3xl"]}>{number}</Heading>
      </Flex>
      <Flex direction="column" gap={3}>
        <Heading size={["lg", "xl", "lg", "xl"]}>{heading}</Heading>
        <Text>
          {description}
        </Text>
      </Flex>
    </Flex>
  )
}
