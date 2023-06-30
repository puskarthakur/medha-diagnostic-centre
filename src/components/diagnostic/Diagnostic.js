import React from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import './Diagnostic.css'
import Banner from '../banner/Banner';
import bannerImage from '../../images/bannerImage.jpg';

export default function Diagnostic() {
    const navigate = useNavigate()

    return (
        <div className="diagnos">
            <div>
                <Banner
                    icon={false} // Pass true or false to display or hide the arrow icon
                    text="DIAGNOSTIC SERVICES" // The text to be displayed in the banner
                    imageUrl={bannerImage} // The URL of the banner image
                    imageHeight="8rem" // The height of the banner image
                />
            </div>
            <div className="container px-15 py-4">
                <p>Almost 60-70% of diseases are preventable and treatable with timely assessment & intervention. In light of this, Suburban Diagnostics offers an array of comprehensive preventive health check-up packages, which provide a thorough evaluation of all the vital organs and systems present in the body. In addition, it can be customized to your needs by way of add-ons.</p>
            </div>
            <div className="p-container">
                <div className="section-heading">
                    <h4>PATHOLOGY</h4>
                </div>
                <h6 className="mb-0 mt-4">Clinical Chemistry</h6>
                <p className="mt-3">Clinical chemistry (also known as chemical pathology, clinical biochemistry or medical biochemistry) is concerned with analyzing bodily fluids for diagnostic and therapeutic purposes. The most common specimens tested in clinical chemistry are blood and urine.</p>
                <Button variant="contained" onClick={() => navigate('/pathology')}>Read More</Button>
            </div>

            <div className="p-container">
                <div className="section-heading">
                    <h4>RADIOLOGY</h4>
                </div>
                <h6 className="mb-0 mt-4">Digital X-Ray</h6>
                <p className="mt-3">Clinical chemistry (also known as chemical pathology, clinical biochemistry or medical biochemistry) is concerned with analyzing bodily fluids for diagnostic and therapeutic purposes. The most common specimens tested in clinical chemistry are blood and urine.</p>
                <Button variant="contained" onClick={() => navigate('/radiology')}>Read More</Button>
            </div>
            <div className="p-container">
                <div className="section-heading">
                    <h4>CADIOLOGY</h4>
                </div>
                <h6 className="mb-0 mt-4">ECG Electrocardiom</h6>
                <p className="mt-3">Clinical chemistry (also known as chemical pathology, clinical biochemistry or medical biochemistry) is concerned with analyzing bodily fluids for diagnostic and therapeutic purposes. The most common specimens tested in clinical chemistry are blood and urine.</p>
                <Button variant="contained" onClick={() => navigate('/cardiology')}>Read More</Button>
            </div>
            <div className="p-container">
                <div className="section-heading">
                    <p className="pl-2">We, at medha Diagnostics, strive towards being your trusted partner for all your health diagnostics needs. Click here to book a test with us.</p>
                </div>
            </div>
        </div>
    )
}