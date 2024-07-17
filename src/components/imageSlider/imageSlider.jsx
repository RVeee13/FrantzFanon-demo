import React, { useState } from 'react'
import {ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"
import "./imageSlider.css"

export const ImageSlider = ({images}) => {
    const [imageIndex, setImageIndex] = useState(0)

    const showNextImage = ()=>{
        if(imageIndex === images.length - 1){
            setImageIndex(0)
        }
        else setImageIndex(imageIndex + 1)
    }

    const showPreviousImage = ()=>{
        if(imageIndex === 0){
            setImageIndex(images.length -1)
        } else setImageIndex(imageIndex - 1)
    }
  return (
    <div className='image-slider'>
        <div className='image-slider-images-container'>
            {images.map(url=>(
                <img src={url} key={url} className='image-slider-image' style={{translate: `${-100 * imageIndex}%`}}/>
            ))}
        </div>
        <button onClick={showPreviousImage} className='image-slider-button' style={{left: 0}}> <ArrowBigLeft width={24} height={24}/> </button>
        <button onClick={showNextImage} className='image-slider-button' style={{right: 0}}> <ArrowBigRight width={24} height={24}/> </button>
        <div className="image-slider-dot-buttons">
            {images.map((_, index) =>(
                <button key={index} className='image-slider-dot-button' onClick={()=> setImageIndex(index)}>{index === imageIndex ? <CircleDot width={16} height={16}/> : <Circle width={16} height={16}/>}</button>
            ))}
        </div> 
    </div>
  )
}
