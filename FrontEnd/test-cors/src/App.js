import logo from "./logo.svg";
import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const url = "http://localhost:8080/api/testarr";

  //Make call with axios and fetch an array of objects
  const getData = async () => {
    const response = await axios.get(url);
    console.log(response.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
