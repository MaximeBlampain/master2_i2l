import {Box, Flex, Heading, Text} from "@chakra-ui/react";


export default function Counter({
  color,
  text,
  value,
}) {
  return (
    <Box h={100} w={100} bg={color}  m={5} borderRadius={10}>
      <Flex h={100} w={100} direction="column" align="center"  justify="center">
        <Text as="h3">{text}</Text>
        <Heading as="h2">{value}</Heading>
      </Flex>
    </Box>
  )
}