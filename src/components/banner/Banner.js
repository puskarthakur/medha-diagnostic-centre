import React from 'react';
import bannerImage from '../../images/bannerImage.jpg';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  const banner = {
    position: 'relative',
    height: '8rem',
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const bannerContent = {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
    marginLeft: '1rem',
  };

  const backArrow = {
    marginRight: '0.5rem',
    color: 'white',
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const franchiseeText = {
    fontSize: '1.5rem',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div style={banner}>
      <div className="banner-content" style={bannerContent}>
        <a href="#" className="back-arrow" style={backArrow}>
          <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon" />
        </a>
        <span className="franchisee-text" style={franchiseeText}>
          FRANCHISEE
        </span>
      </div>
    </div>
  );
};

export default Banner;
