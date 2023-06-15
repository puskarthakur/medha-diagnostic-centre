import React from "react";
import Banner from '../banner/Banner'
import Card from "../common/Card";
import { faMicroscope } from '@fortawesome/free-solid-svg-icons';
import './Partner.css';
import { Grid } from '@mui/material';

export default function Partner() {
    const iconStyle = {
        // Define the styles for the icon (replace with your desired styles)
        fontSize: '2rem',
        color: 'blue',
    };

    const genericCards = [
        {
            iconClass: faMicroscope,
            heading: 'Extensive Network',
            paragraph: 'We have our Central Lab in Mumbai; four satellite labs across Mumbai, Thane, and Navi Mumbai; several regional labs in Pune, Nagpur, Nashik, Aurangabad, Indore, Jabalpur and Goa; and twelve labs in reputed hospitals across Mumbai, Pune and Madhya Pradesh.'
        },
        {
            iconClass: faMicroscope,
            heading: 'Logistics',
            paragraph: 'We have excellent logistics management support offered by a team of 150+ members and a collaboration with a leading national courier company that looks after compliance with IATA norms and maintains the sample’s integrity throughout transportation.'
        },
        {
            iconClass: faMicroscope,
            heading: 'Wide Range of Services',
            paragraph: 'We provide diagnostic services in the fields of biochemistry, hematology, immunology, clinical pathology, serology, molecular, microbiology, histopathology, cytology, flow cytometry, and others.'
        },
        {
            iconClass: faMicroscope,
            heading: 'Infrastructure',
            paragraph: 'We use top-notch, fully automated instruments and machines from globally renowned brands like Roche, Biomeriux, Horiba, Sysmex, Johnson & Johnson, etc.'
        },
        {
            iconClass: faMicroscope,
            heading: 'Support',
            paragraph: 'We use top-notch, fully automated instruments and machines from globally renowned brands like Roche, Biomeriux, Horiba, Sysmex, Johnson & Johnson, etc.'
        }
        // Add more generic card data as needed
    ];

    return (
        <div>
            <div>
                <Banner />
            </div>
            <div>
                <div className="containerBox">
                    <div >
                        <div className="header-content">
                            <div className="section-content">
                                <p className="mb-0"> Since 1994, Suburban Diagnostics has been a one-stop solution for diagnostic services. With our franchisee model, we invite partners with business acumen to grow and prosper with us. </p>
                            </div>
                            <div className="franchise-why-partner-section">
                                <div className="section-content">
                                    <h3 className="sub-heading top-subheading">Why partner with Suburban Diagnostics?</h3>
                                </div>
                            </div>
                        </div>
                        <div row row-eq-height>
                            <Grid container spacing={3}>
                                {genericCards.map((card, index) => (
                                    <Grid key={index} item xs={12} md={4}>
                                        <Card
                                            iconClass={card.iconClass}
                                            heading={card.heading}
                                            paragraph={card.paragraph}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}