import axios from "axios";
import './App.css';
import { useEffect } from "react";

function App() {
  useEffect (() => {
    async function getApi() {
      try {
        const response = await axios.get('/user?ID=12345');
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
    
  )
  return (
    <div className="App">
      Hello Must
    </div>
  );
}

export default App;
