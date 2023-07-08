import { Box, IconButton, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Banner.css';

const Banner = ({ icon, text, imageUrl }) => {
  const banner = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: '100%',
    height: '10rem',
    marginTop: '8rem',
  };

  const bannerContent = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '1rem',
  };

  const backArrow = {
    marginRight: '0.5rem',
    color: 'white',
    fontSize: '5rem',
    marginLeft:'4rem',
    marginBottom: '1.2rem'  
  };

  const franchiseeText = {
    color: 'white',
    fontSize: '2rem',
    fontWeight: 'bold',
    wordWrap: 'break-word',
  };

  return (
    <Box sx={banner}>
      <Box>
      {icon && (
        <IconButton className="back-arrow" sx={backArrow} component="a" href="#">
          <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon" size='rem' />
        </IconButton>
      )}
      <Box className="banner-content" sx={bannerContent}>
        <Typography variant="span" className="franchisee-text" sx={franchiseeText}>
          {text}
        </Typography>
      </Box>
      </Box>
    </Box>
  );
};

export default Banner;
