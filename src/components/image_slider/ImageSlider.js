import React from 'react'
import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css"

function ImageSlider({ url, limit, page }) {
    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchImages = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(`${url}?page=${page}&limit=${limit}`);
            const data = await response.json();
            if (data) {
                setImages(data)
                setIsLoading(false)
            }

        } catch (error) {
            setError(error.message)
            setIsLoading(false)
        }
    }
    const handlePrevious = () => {
        setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1)
    }
    const handleNext = () => {
        setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1)
    }
    useEffect(() => {
        if (url !== "") fetchImages();
    }, [url])
    console.log(images)
    if (isLoading) {
        return <div>Image is loading</div>
    }
    if (error) {
        return <div>Error</div>
    }
    return (
        <div className='container'>
            <BsArrowLeftCircleFill className='arrow arrow-left' onClick={handlePrevious} />
            {images && images.length ? images.map((imageItem, index) => {
                return <img src={imageItem.download_url} key={imageItem.id} className={
                    currentImage === index
                        ? "current-image"
                        : "current-image hide-current-image"
                } />
            }) : <div>No Images</div>}
            <BsArrowRightCircleFill className='arrow arrow-right' onClick={handleNext} />
            <span className='circle-indicators'>
                {images && images.length ? images.map((_, index) => {
                    return <button className={currentImage === index
                        ? "current-indicator"
                        : "current-indicator inactive-indicator"} key={index} onClick={() => setCurrentImage(index)}></button>
                }) : <div></div>}
            </span>
        </div>
    )

}

export default ImageSlider
