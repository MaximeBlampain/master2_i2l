import { Routes, Route} from "react-router-dom";

import Home from "./components/Home/Home";
import NewDeal from "./components/NewDeal";
import DealDetails from "./components/DealDetails/DealDetails";

function Rooter() {
  return (
    <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="details/:id" element={<DealDetails />}/>
        <Route  path="new" element={<NewDeal />}/>
    </Routes>
  )
}

function App() {
  return (
  <>
    <h2>Menu incomming...</h2>
    <Rooter />
  </>)
}

export default App;
