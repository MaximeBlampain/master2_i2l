import {useState, useEffect, Fragment, Children} from "react";
import {generateTask} from "./fake.tasks";

// Components
import TodoCard from "./TodoCard/TodoCard";

// Style
import {
  Flex,

} from "rebass"

export default function TodoList() {
  const [todos, setTodos] = useState([])

  // Lifecycle
  useEffect(() => {
    setTodos(generateTask(15))
  }, [])

  return (
    <Flex
      flexDirection="column"
      alignItems='center'
      px={10}
      py={10}
    >
      <h1>Liste des tâches</h1>
      {Children.toArray(todos.map(todo => (
        <TodoCard
          title={todo.title}
          description={todo.description}
          image={todo.img}
        />
      )))}
    </Flex>
  )
}