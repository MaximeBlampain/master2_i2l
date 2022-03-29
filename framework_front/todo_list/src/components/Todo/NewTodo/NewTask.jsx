import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import {Button, Flex, Input, Select, Text, Textarea} from "@chakra-ui/react";

import { createTask } from "../../../reducers/actions";

import TodoForm from "../TodoCard/components/todoForm";

function NewTask({ create }){
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "A faire",
    deadline: "",
  })

  const handleChange = (event, property) => {
    setTask({...task, [property]: event.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if(task?.title !== "") {
      create({id: Date.now(), ...task})
      navigate("/tasks")
    }
  }

  return (
    <Flex
      direction="column"
      align="center"
      p={50}
    >
      <TodoForm
        card={task}
        onChangeProperty={handleChange}
      />
      <Button
        colorScheme='teal'
        size='md'
        mr={5}
        onClick={(e) => onSubmit(e)}
      >
        Créer
      </Button>
    </Flex>
  )
}

function mapDispatchToProps(dispatch){
  return {
    create: task => dispatch(createTask(task))
  }
}

export default connect(null, mapDispatchToProps)(NewTask)