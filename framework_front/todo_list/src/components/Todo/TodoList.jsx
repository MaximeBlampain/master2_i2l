import {useEffect, Fragment, Children, useState} from "react";
import { connect } from "react-redux";

// Components
import TodoCard from "./TodoCard/TodoCard";

// Actions
import {
  deleteTask,
  getTasks,
  updateTask
} from "../../reducers/actions";

// Style
import {
  Flex, Input, InputGroup, InputLeftElement,
} from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons";


function TodoList({
  todos,
  getAllTasks,
  updateTodoTask,
  deleteTaskId,
}) {
  const [search, setSearch] = useState("")

  useEffect(() => {
    getAllTasks()
  }, [])

  const onSearch = e => {
    setTimeout(() => setSearch(e.target.value), 500)
  }

  const includeCharacter = obj  => {
    if(search === "")
      return true

    const titleIncludes = obj?.title.toLowerCase().includes(search.toLowerCase())
    const descIncludes = obj?.description.toLowerCase().includes(search.toLowerCase())
    const deadlineIncludes = obj?.deadline.toLowerCase().includes(search.toLowerCase())
    const statusIncludes = obj?.status.toLowerCase().includes(search.toLowerCase())

    return titleIncludes || descIncludes || deadlineIncludes || statusIncludes
  }

  return (
    <Flex
      direction="column"
      align='center'
      px={10}
      py={10}
    >
      <InputGroup w={300} mb={10}>
        <InputLeftElement
          pointerEvents='none'
          children={<SearchIcon color='gray.300' />}
        />
        <Input type='text' onChange={onSearch}placeholder='Recherche' />
      </InputGroup>
      <h1>Liste des tâches</h1>
      {(todos && todos.length > 0)
        ? Children.toArray(
          todos.filter(i => includeCharacter(i))
            .map(todo => (
              <TodoCard
                todo={todo}
                updateTask={updateTodoTask}
                deleteTask={deleteTaskId}
              />
            )
          )
        )
        : <Fragment/>
      }
    </Flex>
  )
}

function mapDispatchToProps(dispatch){
  return {
    getAllTasks: () => dispatch(getTasks()),
    updateTodoTask: task => dispatch(updateTask(task)),
    deleteTaskId: id => dispatch(deleteTask(id)),
  }
}

function mapStateToProps(state) {
  return {
    todos: state.tasks
  }
}

export default connect(mapStateToProps ,mapDispatchToProps)(TodoList)