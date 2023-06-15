import React from "react";
import banner from './images/download.jpg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import pathology from './images/pathology.png'
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';



export default function Homecare() {
    const myStyle={
        backgroundImage: `url(${banner})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        height: '18vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
    return (
        <div className="homecare">
            <div style={myStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <span><ArrowBackIcon /></span>
                            <h4>Home HealthCare</h4>
                        </div>
                    </div>
                </div>

            </div>
<div className="px-4 py-4">
           
      <p  className="mb-0">We at Suburban Diagnostics believe that nothing should come between you and your health check-ups. Be it your busy schedule or this pandemic. With our home healthcare services, there’s no need for you to leave your home or to reach the diagnostic centre on time for your appointment. Just book a home visit with us between 7:30AM to 6:30PM.</p>
      <p>Along with the trust and experience of 25+ years, we provide:</p>
            
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-8 ">
                        <div className="mb-4">
                        <div className="d-flex align-items-center">
                        <span className="list-counter">1</span>
                     <h4 className="mb-0">Convienence and Safety</h4>
                        </div>
                     <p className="mb-0 px-2">All you need to do is provide your address and select a suitable time slot for you. Our fully vaccinated and trained technician will collect your sample(s) from the comfort of your home while following the highest standards for safety and hygiene.</p>
                        </div>

                    
                    <div className="mb-4">
                    <div className="d-flex align-items-center">
                        <span className="list-counter">2</span>
                     <h4 className="mb-0">Flexibility</h4>
                        </div>
                     <p className="mb-0 px-2">All you need to do is provide your address and select a suitable time slot for you. Our fully vaccinated and trained technician will collect your sample(s) from the comfort of your home while following the highest standards for safety and hygiene.</p>
                    </div>
                    <div className="mb-4">
                    <div className="d-flex align-items-center">
                        <span className="list-counter">3</span>
                     <h4 className="mb-0">Punctuality and Professionalism</h4>
                        </div>
                     <p className="mb-0 px-2">All you need to do is provide your address and select a suitable time slot for you. Our fully vaccinated and trained technician will collect your sample(s) from the comfort of your home while following the highest standards for safety and hygiene.</p>
                    </div>
                    <div className="mb-4">
                    <div className="d-flex align-items-center">
                        <span className="list-counter">4</span>
                     <h4 className="mb-0">Sunday Collection</h4>
                        </div>
                     <p className="mb-0 px-2">All you need to do is provide your address and select a suitable time slot for you. Our fully vaccinated and trained technician will collect your sample(s) from the comfort of your home while following the highest standards for safety and hygiene.</p>
                    </div>
                    <div>
                    <div className="d-flex align-items-center">
                        <span className="list-counter">5</span>
                     <h4 className="mb-0">Online Reports</h4>
                        </div>
                     <p className="mb-0 px-2">All you need to do is provide your address and select a suitable time slot for you. Our fully vaccinated and trained technician will collect your sample(s) from the comfort of your home while following the highest standards for safety and hygiene.</p>
                    </div>
                
                    </div>
                    
                    <div className="col-md-4">
                    <img src={pathology} alt="patho" width="100%" ></img>
</div>
                </div>

            </div>

            <div className="px-4">
<div className="package">
    <p className="package-text">Get precise, most accurate results in the comfort and safety of your home.

</p>
  <Button variant="contained" startIcon={<HomeIcon/>}>Book a Home Visit</Button>

</div>
</div>
            </div>
    
    </div>
    )
}