import {Badge, Flex, Heading, Text} from "@chakra-ui/react";

export default function VisualisationCard({
  card
}) {
  const {
    title,
    description,
    deadline,
    status,
  } = card

  return(
  <Flex
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
  >
    <Heading sx={{padding: "1rem"}} as="h3">{title}</Heading>
    <Text sx={{marginBottom: "1rem"}} >{description}</Text>
    <Badge sx={{marginBottom: "1rem"}} >{status}</Badge>
    <Text >{deadline}</Text>
  </Flex>)
}