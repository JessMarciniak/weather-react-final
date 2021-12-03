import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
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

export default App;
