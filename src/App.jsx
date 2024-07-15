import NavBar from "./Comp/NavBar/NavBar";
import "./App.css";
import Body from "./Comp/Body/Body";
function App() {
  return (
    <div className="app">
      <h1 className="heading">Sorting Visualizer</h1>
      <NavBar />
      <Body />
    </div>
  );
}

export default App;
