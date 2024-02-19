import React from 'react'
import { useState, useEffect } from "react";

const StringNumber = () => {
    const [text, setText] = useState("");
  const [number, setNumber] = useState([]);
  const [string, setString] = useState([]);

  useEffect(() => {
    
    const storedNumbers = JSON.parse(localStorage.getItem("numbers")) || [];
    const storedStrings = JSON.parse(localStorage.getItem("strings")) || [];

    setNumber(storedNumbers);
    setString(storedStrings);
  }, []); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isNaN(text)) {
      setNumber([...number, text]);
      localStorage.setItem("numbers", JSON.stringify([...number, text]));
    } else {
      setString([...string, text]);
      localStorage.setItem("strings", JSON.stringify([...string, text]));
    }
    setText("");
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
  )
}

export default StringNumber
