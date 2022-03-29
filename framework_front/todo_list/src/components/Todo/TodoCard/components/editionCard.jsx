import { Flex, Button } from "@chakra-ui/react"

import TodoForm from "./todoForm";
import {useState} from "react";

export default function EditionCard({ card, updateTask, changeCardStatus }) {
  const [task, setTask] = useState(card)

  const handleChange = (event, property) => {
    setTask({...task, [property]: event.target.value})
  }

  const onSubmit = () => {
    updateTask(task)
    changeCardStatus("view")
  }

  return (
    <Flex flexDirection="column">
      <TodoForm
        card={task}
        onChangeProperty={handleChange}
      />
      <Button
        colorScheme='teal'
        size='md'
        mr={5}
        onClick={() => onSubmit()}
      >
        Modifier
      </Button>
    </Flex>
  )
}