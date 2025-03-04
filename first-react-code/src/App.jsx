import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [x, setx] = useState(1);

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
      </div>
    </>
  );
}

export default App;
