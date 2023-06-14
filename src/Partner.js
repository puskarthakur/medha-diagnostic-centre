import React from "react";
import './styles/Partner.css'
import banner from './images/download.jpg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Partner(){

    const myStyle={
        backgroundImage: `url(${banner})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        height: '35vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
    return(
        <div className="partner">
            <div style={myStyle}>
          <div className="container">
            <div className="row">
                <div className="col-md-9">
                <span><ArrowBackIcon/></span>
                <h4>Franchise</h4>
                
                </div>
            </div>
        

          </div>
            </div>
        </div>
    )
}