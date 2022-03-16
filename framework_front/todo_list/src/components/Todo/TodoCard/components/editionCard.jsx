import {Input} from "@rebass/forms";
import {Flex} from "rebass";


export default function EditionCard({
  title,
  description,
  image,
  deadline,
  status,
  onChangeCardProperty,
}) {
  return (
    <Flex alignItems="center">
      <Input
        id="title"
        name="title"
        type="text"
        placeholder="Ma super todo"
      />
    </Flex>
  )
}