import { useState } from "react";
import "./App.css";
import First from "./component/First";

function App() {
  const [count, setCount] = useState(0);
  const [x, setx] = useState(1);
  const [y, sety] = useState(0);
  const [UN, setUN] = useState({ userName: "", password: "" });
  const [afficher, setAfficher] = useState(false);

  return (
    <>
      <div className="card">
        <button
          onClick={() => {
            if (x === 1) {
              setx(0);
              setCount((count) => count + 1);
            } else {
              setCount((count) => count - 1);
              setx(1);
            }
          }}
        >
          count is {count}
        </button>
        <input type="password" onChange={(e) => sety(e.target.value)} />
        <h1>{y}</h1>
        <button
          onClick={() => {
            setAfficher(!afficher);
          }}
        >
          login
        </button>
        <First etat={afficher} />
        <h1>
          {UN.password} , {UN.userName}
        </h1>
      </div>
    </>
  );
}

export default App;
