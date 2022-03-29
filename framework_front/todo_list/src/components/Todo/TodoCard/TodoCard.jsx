import { useState } from 'react'

// Components
import EditionCard from "./components/editionCard";
import VisualisationCard from "./components/visualisationCard";

// Style
import { Box, Button, Flex, CloseButton} from "@chakra-ui/react"


export default function TodoCard({
  todo,
  updateTask,
  deleteTask,
 }) {
  // State
  const [cardStatus, setCardStatus] = useState("view")

  const changeCardStatus = status => {
    setCardStatus(status)
  }

  return (
    <Box
      width={500}
      my={3}
      p={2}
      sx={{boxShadow: '0 0 16px rgba(0, 0, 0, .25)'}}
    >
      <CloseButton
        onClick={() => deleteTask(todo.id)}
      />
      <Flex
        align="center"
        direction="column"
      >
        <Flex justify="center" p={2}>
          <Button
            colorScheme='teal'
            size='xs'
            onClick={() => changeCardStatus("view")}
            mr={5}
          >
            View
          </Button>
          <Button
            colorScheme='teal'
            size='xs'
            onClick={() => changeCardStatus("edit")}
          >
            Edit
          </Button>
        </Flex>
        {cardStatus === "view"
          ? <VisualisationCard card={todo}/>
          : <EditionCard
              card={todo}
              updateTask={updateTask}
              changeCardStatus={changeCardStatus}
          />
        }
      </Flex>
    </Box>
  )
}