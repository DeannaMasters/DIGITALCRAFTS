import dealership from "./components/dealership/dealership"
import neighborhood from "./components/neighborhood/neighborhood"
import "./App.css";

function App() {
  return (
    <div className="box">
      <h1>props drilling</h1>
      <neighborhood/>
      <dealership/>
  </div>
  );
}


export default App;
