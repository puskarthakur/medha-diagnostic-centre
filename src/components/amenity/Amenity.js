import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Amenity.css'

export default function Amenity({ iconClass, name }) {
    return (
        <div className="amenityTest">
            <div  className="icon-wrap">
                <FontAwesomeIcon icon={iconClass} size={'2x'} color={"#19a5a0"} />
             
            </div>
            <span>{name}</span>
        </div>
    )
}