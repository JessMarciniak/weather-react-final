import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather App Final</h1>
        <div className="location">
          <button className="btn btn-primary">Testing</button>
        </div>
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
