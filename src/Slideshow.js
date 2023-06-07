import React, { useEffect } from "react"
import { useState, useRef } from "react"
import down from './images/download.jpg'
import logo from './images/medha_logo.jpg'
import './Slideshow.css';



const images = [
    {img:down},
    {img:logo}
]

const delay = 5000;

export function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  /**
   * slideshow functionality
   */
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
      >
    
            <img className="slide-img" src={images[index].img}  alt="logo" key={index} />
        
        
      </div>
      <p  className="slideshow-text font-regular" >
        {images[index].content}
      </p>
      

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}