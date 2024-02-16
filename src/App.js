import React from "react";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState([]);
  const [string, setString] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    setText("");
    if (!isNaN(text)) {
      setNumber([...number, text]);
    } else {
      setString([...string, text]);
    }
  
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Enter a text</label>
        <input
          type="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Click Me</button>
      </form>
      <div className="output">
        <div className="output__number">
          <h3>Numbers</h3>
          {number.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className="output__string">
          <h3>Strings</h3>
          {string.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
