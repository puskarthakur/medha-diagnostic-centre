import React from 'react';
import bannerImage from '../../images/bannerImage.jpg'
import './Banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {

    const banner = {
        display: 'flex',
        flexDirection: 'row',
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: '100%',
        height: '30vh'
    }
    return (
        <div style={banner}>
            <div className="banner-content">
                <a href="#" className="back-arrow">
                    <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon" />
                </a>
                <span className="franchisee-text">FRANCHISEE</span>
            </div>
        </div>
    );
}

export default Banner;
