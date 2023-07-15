import React, { useEffect } from "react"
import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom";
import './Slideshow.css'
import { Button } from "@mui/material";

const delay = 5000;

export default function Slideshow(props) {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    const renderSliderButton = () => {
        if (props.slideButtons) {
            return <div className="btn-overlay">
                {props.slideButtons.map((i, index) => {
                    return (
                        <Button className="rs-button" key={index} variant="contained" onClick={() => { navigate(i.btnPath) }}>{i.btnName}</Button>
                    )
                })}
            </div>
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
                    prevIndex === props.images.length - 1 ? 0 : prevIndex + 1
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

                <img className="slide-img" src={props.images[index].img} alt="logo" key={index} />
            </div>
            <div className="text-overlay">
                {/* Render your text overlay content here */}
                <h2>MRI SCAN</h2>
            </div>
            {renderSliderButton()}


            <div className="slideshowDots">
                {props.images.map((_, idx) => (
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