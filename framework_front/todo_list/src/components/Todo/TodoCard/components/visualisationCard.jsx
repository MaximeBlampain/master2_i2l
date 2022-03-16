import {Flex, Heading, Text, Card} from "rebass";

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
    <Text sx={{marginBottom: "1rem"}} >{status}</Text>
    <Text >{deadline}</Text>
  </Flex>)
}