import './App.css';
import Searchbar from "./components/SearchBar/Searchbar"
import CountryList from "./components/CountryList/CountryList";
import {useState} from "react";

function App() {
    const [filter, setFilter] = useState("")

  return (
    <div className="App">
      <Searchbar setFilter={setFilter}/>
      <CountryList filter={filter}/>
    </div>
  );
}

export default App;
