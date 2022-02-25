import {Routes, Route} from "react-router-dom"
import {lazy, Fragment, Suspense} from "react";

// Components
import Navbar from "./components/Layout/Navbar"
const Home = lazy(() => import("./components/Home/Home"))
const TaskList = lazy(() => import("./components/Todo/TodoList"))
const NewTask = lazy(() => import("./components/Todo/NewTodo/NewTask"))

export default function App() {
  return (
      <Fragment>
          <Navbar/>
          <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/tasks" element={<TaskList/>} />
                  <Route path="/newTask" element={<NewTask/>} />
              </Routes>
          </Suspense>
      </Fragment>
  );
}