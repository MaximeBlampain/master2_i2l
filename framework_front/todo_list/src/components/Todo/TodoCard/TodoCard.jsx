
// Style
import {
  Card,
  Heading,
  Flex,
  Button,
} from "rebass"

import {
  Input
} from "@rebass/forms"


export default function TodoCard({
  title,
  description,
  image,
 }) {

  return (
    <Card
      width={500}
      height={100}
      my={3}
      px={2}
      py={2}
      sx={{boxShadow: '0 0 16px rgba(0, 0, 0, .25)'}}
      as={"form"}
    >
      <Flex
        alignItems="center"
        flexDirection="column"
      >
        <Flex alignItems="center">
          <Input
            id="title"
            name="title"
            type="text"
            placeholder="Ma super todo"
          />
        </Flex>
        <Heading as="h3">{title}</Heading>
      </Flex>
    </Card>
  )
}