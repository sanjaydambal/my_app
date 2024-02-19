import React from 'react'
import { useState, useEffect } from "react";

function ImageSlider({url, limit, page}) {
    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchImages = async () => {
        try {
            setIsLoading(true)
        const response = await fetch(`${url}?page=${page}&limit=${limit}`);
        const data = await response.json();
        if (data){
            setImages(data)
            setIsLoading(false)
        }
        
        } catch (error) {
            setError(error.message)
            setIsLoading(false)
        }
    }
    useEffect(() => {
        if(url !== "") fetchImages();
    },[url])
    console.log(images)
    if(isLoading){
return <div>Image is loading</div>
    }
    if(error){
       return <div>Error</div>
    }
  return (
    <div>
      
    </div>
  )
}

export default ImageSlider
