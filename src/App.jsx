import { useState } from "react";
import "./App.css";

function App() {
  const [value, setvalue] = useState("");
  const [error, setError] = useState(null);

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={error ? error : value} />
          </div>
          <div>
            <input type="button" value="AC" onClick={(e) => { setvalue(""); setError(null); }} />
            <input
              type="button"
              value="DEL"
              onClick={(e) => setvalue(value.slice(0, -1))}
            />
            <input
              type="button"
              value="."
              onClick={(e) => { setvalue(value + e.target.value); setError(null); }}
            />
            <input
              type="button"
              value="/"
              onClick={(e) => { setvalue(value + e.target.value); setError(null); }}
            />
          </div>
          <div>
            <input
              type="button"
              value="7"
              onClick={(e) => { setvalue(value + e.target.value); setError(null); }}
            />
            <input
              type="button"
              value="8"
              onClick={(e) => { setvalue(value + e.target.value); setError(null); }}
            />
            <input
              type="button"
              value="9"
              onClick={(e) => { setvalue(value + e.target.value); setError(null); }}
            />
            <input
              type="button"
              value="*"
              onClick={(e) => { setvalue(value + e.target.value); setError(null); }}
            />
          </div>
          <div>
            <input
              type="button"
              value="4"
              onClick={(e) => { setvalue(value + e.target.value); setError(null); }}
            />
            <input
              type="button"
              value="5"
              onClick={(e) => { setvalue(value + e.target.value); setError(null); }}
            />
            <input
              type="button"
              value="6"
              onClick={(e) => { setvalue(value + e.target.value); setError(null); }}
            />
            <input
              type="button"
              value="+"
              onClick={(e) => { setvalue(value + e.target.value); setError(null); }}
            />
          </div>
          <div>
            <input
              type="button"
              value="1"
              onClick={(e) => { setvalue(value + e.target.value); setError(null); }}
            />
            <input
              type="button"
              value="2"
              onClick={(e) => { setvalue(value + e.target.value); setError(null); }}
            />
            <input
              type="button"
              value="3"
              onClick={(e) => { setvalue(value + e.target.value); setError(null); }}
            />
            <input
              type="button"
              value="-"
              onClick={(e) => { setvalue(value + e.target.value); setError(null); }}
            />
          </div>
          <div>
            <input
              type="button"
              value="00"
              onClick={(e) => { setvalue(value + e.target.value); setError(null); }}
            />
            <input
              type="button"
              value="0"
              onClick={(e) => { setvalue(value + e.target.value); setError(null); }}
            />
            <input
              type="button"
              value="="
              className="equal"
              onClick={(e) => {
                try {
                  setvalue(eval(value));
                  setError(null); 
                } catch {
                  setError('Error');
                }
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
