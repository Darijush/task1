import {Animals,animals} from "./components/animals/Animals";
import './style.css';

function App() {
  return (
    <div className="container" >
      <Animals animals={animals}/>
    </div>
  );
}

export default App;
