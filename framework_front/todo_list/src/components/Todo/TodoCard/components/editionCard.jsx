import {Input, Select, Label, Textarea} from "@rebass/forms";
import {Flex} from "rebass";


export default function EditionCard({
  card,
  onChangeProperty,
}) {
  return (
    <Flex flexDirection="column" alignItems="center">
        <Label htmlFor="title">Titre</Label>
        <Input
          width={400}
          id="title"
          name="title"
          type="text"
          placeholder="Finir le tp ..."
          onChange={e => onChangeProperty(e, "title")}
          value={card.title}
          sx={{marginBottom: "1rem"}}
        />
        <Label htmlFor="description">Description</Label>
        <Textarea
          width={400}
          id="description"
          name="description"
          placeholder="Finir le tp ..."
          onChange={e => onChangeProperty(e, "description")}
          value={card.description}
          sx={{marginBottom: "1rem"}}
        />
        <Label htmlFor="status">Status</Label>
        <Select
          width={400}
          id="status"
          name="status"
          defaultValue="todo"
          onChange={e => onChangeProperty(e, "status")}
          value={card.status}
          sx={{marginBottom: "1rem"}}
        >
          <option key="todo"> A faire </option>
          <option key="in_progress"> En cours </option>
          <option key="done"> Terminé </option>
        </Select>
      <Label htmlFor="deadline">Deadline</Label>
      <Input
        width={400}
        id="deadline"
        name="deadline"
        type="date"
        onChange={e => onChangeProperty(e, "deadline")}
        value={card.deadline}
        sx={{marginBottom: "1rem"}}
      />
    </Flex>
  )
}