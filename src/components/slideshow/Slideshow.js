import React, { useEffect } from "react"
import { useState, useRef } from "react"
import './Slideshow.css'
import { Button } from "@mui/material";





const delay = 5000;

export default function Slideshow(images) {
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
                    prevIndex === images.images.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div className="slideshowSlider">

                <img className="slide-img" src={images.images[index].img} alt="logo" key={index} />
            </div>
            <div className="text-overlay">
                {/* Render your text overlay content here */}
                <h2>MRI SCAN</h2>
            </div>

            <div className="btn-overlay">
              
                <Button className="button" style={{marginRight: '10px'}} variant="contained">Book Test</Button>
                <Button   className="button"  variant="contained">Know More</Button>
            </div>
          


            <div className="slideshowDots">
                {images.images.map((_, idx) => (
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