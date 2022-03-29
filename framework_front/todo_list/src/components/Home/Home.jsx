import {deleteTask, getTasks, updateTask} from "../../reducers/actions";
import { connect } from "react-redux";
import {Children, Fragment, useEffect, useMemo} from "react";
import {Flex} from "@chakra-ui/react";
import {orderBy} from "lodash";
import TodoCard from "../Todo/TodoCard/TodoCard";
import StatCounters from "./components/StatCounters";


function Home({ todos, getAllTasks, updateTodoTask, deleteTaskId }){

  useEffect(() => {
    getAllTasks()
  }, [])

  const counters = useMemo(() => {
    const doneTasks = todos.filter(task => task.status === "Terminé")
    const todoTasks = todos.filter(task => task.status === "A faire")
    const wipTasks = todos.filter(task => task.status === "En cours")

    return {
      todo: todoTasks.length,
      wip: wipTasks.length,
      done: doneTasks.length,
    }
  }, [todos])


  return (
    <Flex justify="space-around">
      <Flex
        direction="column"
        align='center'
        pt={10}
      >
        <h1>Liste des tâches</h1>
        <Flex
          direction="column"
        >
          {(todos && todos.length > 0)
            ? Children.toArray(
              orderBy(todos, "deadline", "desc")
                .map(todo => (
              <TodoCard
                todo={todo}
                updateTask={updateTodoTask}
                deleteTask={deleteTaskId}
              />
            )))
            : <Fragment/>
          }
        </Flex>
      </Flex>
      <StatCounters
        counters={counters}
      />
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

export default connect(mapStateToProps ,mapDispatchToProps)(Home)