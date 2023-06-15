import React from "react";
import './Card.css';
import { Box, Typography, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Card({ iconClass, heading, paragraph, buttonName }) {

    return (
        <Box className="franchise-col" sx={{ textAlign: 'left' }}>
            <Box className="section-content grey-content franchise-col-inner">
                <Box className="icon-wrap">
                    <FontAwesomeIcon icon={iconClass} size={'2x'} color={"#19a5a0"} />
                </Box>
                <Box className="section-heading mb-3 mt-4">
                    <Typography variant="h3" component="h3" mb={0}>
                        {heading}
                    </Typography>
                </Box>
                <Typography>{paragraph}</Typography>
                {buttonName && (
                    <Button variant="contained" color="secondary">
                        {buttonName}
                    </Button>
                )}
            </Box>
        </Box>
    )
}