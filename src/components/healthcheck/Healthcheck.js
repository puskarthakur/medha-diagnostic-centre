import React from "react";
import Button from '@mui/material/Button';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import './Healthcheck.css'
import Banner from '../banner/Banner';
import bannerImage from '../../images/bannerImage.jpg';

export default function Healthcheck() {

  return (
    <div className="hc">
      <div >
          <Banner
            icon={false} // Pass true or false to display or hide the arrow icon
            text="HEALTH CHECK-UP" // The text to be displayed in the banner
            imageUrl={bannerImage} // The URL of the banner image
            imageHeight="8rem" // The height of the banner image
          />
      </div>

      <div className="container px-15 py-4">

        <p className="mb-4">Almost 60-70% of diseases are preventable and treatable with timely assessment & intervention. In light of this, Suburban Diagnostics offers an array of comprehensive preventive health check-up packages, which provide a thorough evaluation of all the vital organs and systems present in the body. In addition, it can be customized to your needs by way of add-ons.</p>
        <p className="mb-4">Our range of ProSelf Health Check-Up Packages have been carefully designed basis our analysis & study of patient data available with us that prove that an individual's diagnostic investigation needs differ depending on their age and gender.</p>
        <p className="mb-4">We also provide custom health check-up plans by way of our unique <a target="_blank" class="link-color" href="https://subcheck.suburbandiagnostics.com/HCU/">SUB-CHECK </a>platform. SUB-CHECK is a revolutionary tool that understands the signs and signals of your body to design a unique health check-up plan for you - unique to your needs. This health check-up plan will contain only tests that you need with no extraneous tests. The platform creates the package by analyzing your answers to a comprehensive questionnaire that helps us understand your lifestyle, demographics and family health history.</p>
      </div>
      <div className="p-container">
        <div className="package">
          <p className="package-text">Browse through our popular Test packages</p>
          <Button variant="contained" startIcon={<MedicalServicesIcon />}>View Packages</Button>

        </div>
      </div>
    </div>
  )
}