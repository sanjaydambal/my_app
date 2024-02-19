import React from 'react'
import { FaStar } from'react-icons/fa';
import { useState} from "react";
import './style.css'

const StarRating = ({noOfStars = 5}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const handleClick = (getCurrentIndex) => {
  
   setRating(getCurrentIndex)
  }
  const handleMouseEnter = (getCurrentIndex) => {
   
    setHover(getCurrentIndex)
  }
  const handleMouseLeave = () => {
  
    setHover(rating)
  }
  return (
    <div>
     {
      [...Array(noOfStars)].map((ele,index) =>{
        index = index + 1;
      return <FaStar key={index} onClick={()=>handleClick(index)}
      className={index <= (hover || rating) ? "active" : "inActive"}
      onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave()}
      
      />
      }
      )
}
    </div>
  )
}

export default StarRating
