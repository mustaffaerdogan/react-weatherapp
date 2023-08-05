import axios from "axios";
import './App.css';
import { useEffect } from "react";

function App() {
  //api keyi sabite atadım 
  const key = "1379df55a24681a58c21d4bc74bd92c6";

  useEffect (() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=&appid=${key}`);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }
  ,[]
    
  )
  return (
    <div className="App">
      Hello Must
    </div>
  );
}

export default App;
