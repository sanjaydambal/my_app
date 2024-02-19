import React, { useState, useEffect } from "react";
// import StringNumber from "./components/StringNumber";
// import RandomColor from "./components/RandomColor";

import StarRating from "./components/star-rating/StarRating";

function App() {
  

  return (
    <div className="App">
      {/* <StringNumber /> */}
      {/* <RandomColor /> */}
      <StarRating noOfStars={10}/>
      </div>
  );
}

export default App;
