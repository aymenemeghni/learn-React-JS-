import React from "react";
import "./App.css";
import First from "./component/First";
import Head from "./component/Head";
import Side from "./component/Side";
import Midel from "./component/Midel";

function App() {
  const PUB = [
    {
      id:1,
      title: "Real madrid",
      nameUser: "aymene meghni",
      content: "real madrid is the best club in the world",
    },
    {
      id:2,
      title: "fcb",
      nameUser: "yasser meghni",
      content: "real madrid is the best club in the world",
    },
    {
      id:3,
      title: "atm",
      nameUser: "barca fan",
      content: "real madrid is the best club in the world",
    },
  ];

  return (
    <>
      <h1 style={{color :"red"}}>fffffffffff</h1>
      <div id="head">
        <Head />
      </div>
      <div id="side">
        <Side />
      </div>
      <div id="midel">
        <Midel PUB={PUB} />
      </div>
    </>
  );
}

export default App;
