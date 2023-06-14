import React from "react";
import banner from './images/download.jpg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Pathology() {
    const myStyle={
        backgroundImage: `url(${banner})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        height: '18vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
    return(
        <div className="diagnos">
        <div style={myStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <span><ArrowBackIcon /></span>
                        <h4>Pathology</h4>
                    </div>
                </div>
            </div>

        </div>
        <div class="container px-15 py-4">
        <div className="row">
            <div className="col-md-8">
            <h6 className="mb-0 mt-4">Clinical Chemistry, Immunoassays & ELISA</h6>
                <p className="mt-3">Clinical chemistry (also known as chemical pathology, clinical biochemistry or medical biochemistry) is concerned with analyzing bodily fluids for diagnostic and therapeutic purposes. The most common specimens tested in clinical chemistry are blood and urine.</p>
            </div>
            <div className="col-md-4">

</div>
        </div>
        </div>
    
        
      
    </div>
    )
}