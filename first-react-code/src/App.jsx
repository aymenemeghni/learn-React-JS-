import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [x, setx] = useState(1);
  const [y, sety] = useState(0);
  const [UN, setUN] = useState({ userName: "", password: "" });

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
        <label htmlFor="UN">userName</label>
        <input type="text" id="UN" placeholder="aymene" />
        <label htmlFor="PW">password</label>
        <input type="text" id="PW" placeholder="123....." />
        <button
          type="submit"
          onClick={() =>
            setUN({
              userName: document.querySelector("#UN").value,
              password: document.querySelector("#PW").value,
            })
          }
        >
          login
        </button>
        <h1>
          {UN.password} , {UN.userName}
        </h1>
      </div>
    </>
  );
}

export default App;
