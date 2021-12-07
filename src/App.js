import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Boston" />
        <footer>
          {" "}
          This project was coded by Jessica Marciniak and is{" "}
          <a href="https://github.com/JessMarciniak/weather-react-final">
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
