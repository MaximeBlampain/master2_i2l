import {Flex, Heading} from "rebass";

export default function VisualisationCard({
  title
}) {
  return(
  <Flex
    alignItems="center"
    flexDirection="column"
  >

    <Heading as="h3">{title}</Heading>
  </Flex>)
}