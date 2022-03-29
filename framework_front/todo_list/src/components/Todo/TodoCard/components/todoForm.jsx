import {
  Flex,
  Text,
  Input,
  Select,
  Textarea
} from "@chakra-ui/react"


export default function TodoForm({
  card,
  onChangeProperty,
}) {
  return (
    <Flex flexDirection="column">
      <Text htmlFor="title" as={"label"}>Titre</Text>
      <Input
        width={400}
        id="title"
        name="title"
        type="text"
        placeholder="Finir le tp ..."
        onChange={e => onChangeProperty(e, "title")}
        value={card?.title}
        sx={{marginBottom: "1rem"}}
      />
      <Text htmlFor="description" as={"label"}>Description</Text>
      <Textarea
        width={400}
        id="description"
        name="description"
        placeholder="Terminer de développer....."
        onChange={e => onChangeProperty(e, "description")}
        value={card?.description}
        sx={{marginBottom: "1rem", maxWidth: "100%"}}
      />
      <Text htmlFor="status" as={"label"}>Status</Text>
      <Select
        width={400}
        id="status"
        name="status"
        defaultValue="todo"
        onChange={e => onChangeProperty(e, "status")}
        value={card?.status}
        sx={{marginBottom: "1rem"}}
      >
        <option key="todo"> A faire </option>
        <option key="in_progress"> En cours </option>
        <option key="done"> Terminé </option>
      </Select>
      <Text htmlFor="deadline" as={"label"}>Deadline</Text>
      <Input
        width={400}
        id="deadline"
        name="deadline"
        type="date"
        onChange={e => onChangeProperty(e, "deadline")}
        value={card?.deadline ?? "todo"}
        sx={{marginBottom: "1rem"}}
      />
    </Flex>
  )
}