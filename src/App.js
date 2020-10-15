import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import Clock2 from "./components/Clock2";

function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <div className="jumbotron" style={{ textAlign: "center" }}>
        <h1>World Clock</h1>
      </div>
      <Clock location="Bangkok" cn="jumbotron bg-primary text-white" />
      <Clock location="Japan" cn="jumbotron bg-success text-white" />
      <Clock location="London" cn="jumbotron bg-info text-white" />
      <Clock2 location="Japan" UTC="Asia/Tokyo" bgColor="#e6ccff" />
    </div>
  );
}

export default App;
