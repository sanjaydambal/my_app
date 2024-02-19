import React, { useState, useEffect } from "react";
import ImageSlider from "./components/image_slider/ImageSlider";
// import StringNumber from "./components/StringNumber";
// import RandomColor from "./components/RandomColor";

// import StarRating from "./components/star-rating/StarRating";

function App() {
  

  return (
    <div className="App">
      {/* <StringNumber /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10}/> */}
      <ImageSlider url = {"https://picsum.photos/v2/list"} limit = {10} page = {1} />
      </div>
  );
}

export default App;
