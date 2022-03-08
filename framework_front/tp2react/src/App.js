import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Home from "./Components/Home/Home";
import Page1 from "./Components/Page1/Page1";
import Page2 from "./Components/Page2/Page2";
import Page3 from "./Components/Page3/Page3";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/page1" element={<Page1/>} />
        <Route path="/page2" element={<Page2/>} />
        <Route path="/page3" element={<Page3/>} />
      </Routes>
    </div>
  );
}

export default App;
