import React from "react";
import banner from './images/download.jpg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

export default function Healthcheck() {
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
        <div className="hc">
        <div style={myStyle}>
      <div className="container">
        <div className="row">
            <div className="col-md-9">
            <span><ArrowBackIcon/></span>
            <h4>Health Check-Ups</h4>
            </div>
        </div>
      </div>
        </div>
     
    <div class="container px-15 py-4">
       
            <p class="mb-4">Almost 60-70% of diseases are preventable and treatable with timely assessment & intervention. In light of this, Suburban Diagnostics offers an array of comprehensive preventive health check-up packages, which provide a thorough evaluation of all the vital organs and systems present in the body. In addition, it can be customized to your needs by way of add-ons.</p>
            <p class="mb-4">Our range of ProSelf Health Check-Up Packages have been carefully designed basis our analysis & study of patient data available with us that prove that an individual's diagnostic investigation needs differ depending on their age and gender.</p>
            <p class="mb-4">We also provide custom health check-up plans by way of our unique <a target="_blank" class="link-color" href="https://subcheck.suburbandiagnostics.com/HCU/">SUB-CHECK </a>platform. SUB-CHECK is a revolutionary tool that understands the signs and signals of your body to design a unique health check-up plan for you - unique to your needs. This health check-up plan will contain only tests that you need with no extraneous tests. The platform creates the package by analyzing your answers to a comprehensive questionnaire that helps us understand your lifestyle, demographics and family health history.</p>
</div>
<div className="p-container">
<div className="package">
    <p className="package-text">Browse through our popular Test packages</p>
  <Button variant="contained" startIcon={<MedicalServicesIcon/>}>View Packages</Button>

</div>
</div>
    </div>
    )
}