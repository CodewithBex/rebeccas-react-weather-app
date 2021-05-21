import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      <footer>
      This project was coded by <a href="https://www.linkedin.com/in/rebecca-mary-kanaan-1a08a459/" target="_blank">Rebecca Mary K.</a> and is {""}
      <a href="https://github.com/CodewithBex/rebeccas-react-weather-app"
            target="_blank"
      >
         open-sourced on GitHub
      </a>
      </footer>
    </div>
    </div>
  );
}


