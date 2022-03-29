import types from "./types.js"

const {
  GET_TASKS,
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
} = types

/**
 * Get the tasks from local storage and return them. If there are no tasks, return an empty array
 * @returns An array of tasks
 */
function getTasksFromLocalStorage(){
  let tasks = localStorage.getItem("tasks")

  if(!tasks)
    localStorage.setItem("tasks", JSON.stringify([]))

  return !tasks ? [] : JSON.parse(tasks)
}

/**
 * This function gets the tasks from local storage and returns them
 * @returns An object with a type and a payload.
 */
export function getTasks(){
  let tasks = getTasksFromLocalStorage()
  return {
    type: GET_TASKS,
    payload: tasks
  }

}

/**
 * Create a new task and add it to the list of tasks
 * @param task - The task that we want to add to the list.
 * @returns An object with a type and a payload.
 */
export function createTask(task){
  const tasks = getTasksFromLocalStorage()

  const newTasks = tasks.concat(task)

  localStorage.setItem("tasks", JSON.stringify(newTasks))

  return {
    type: CREATE_TASK,
    payload: newTasks,
  }
}

/**
 * Update a task by filtering out the old task and adding the updated task
 * @param task - The updated task object.
 * @returns An object with a type of UPDATE_TASK and a payload of the new tasks array.
 */
export function updateTask(task){
  const tasks = getTasksFromLocalStorage()

  const allTasksWithoutUpdated = tasks.filter(t => t.id !== task.id)

  const newTasks = allTasksWithoutUpdated.concat(task)

  localStorage.setItem("tasks", JSON.stringify(newTasks))

  return {
    type: UPDATE_TASK,
    payload: newTasks,
  }
}

/**
 * Given a task id, delete the task from the local storage
 * @param taskId - The id of the task to be deleted.
 * @returns An object with a type of DELETE_TASK and a payload of the new array of tasks.
 */
export function deleteTask(taskId){
  const tasks = getTasksFromLocalStorage()

  const allTasksWithoutDeleted = tasks.filter(t => t.id !== taskId)
  localStorage.setItem("tasks", JSON.stringify(allTasksWithoutDeleted))

  return {
    type: DELETE_TASK,
    payload: allTasksWithoutDeleted
  }
}