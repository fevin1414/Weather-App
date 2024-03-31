import logo from "./logo.svg";
import "./App.css";
import Search from "./Components/Search";
import Stats from "./Components/Stats";

function App() {
  return (
    <div>
      <div className="mt-20">
        <Stats />
      </div>
      <div className="mt-10">
        <Search />
      </div>
    </div>
  );
}

export default App;
