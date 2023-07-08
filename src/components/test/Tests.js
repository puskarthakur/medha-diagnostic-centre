import React from "react";
import './Test.css'
import Button from '@mui/material/Button';
import Plancard from '../plan/Plancard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
// import Plancard from '../plan/Plancard'
// import Banner from '../banner/Banner';
// import bannerImage from '../../images/bannerImage.jpg';

export default function Tests() {
    const [isHovering, setIsHovering] = useState(true);
    const handleMouseOver = () => {
        setIsHovering(true);
      };
    
      const handleMouseOut = () => {
        setIsHovering(false);
      };
    return (
        <div style={{ marginTop: '143px' }} className="test">

            <div className="heading">
                <h6>Tests/Packages - Medha Diagnostic Center</h6>
            </div>

            <div class="container pt-4">
                <div class="row height d-flex align-items-center ">
                    <div class="col-11">
                        <div class="form">
                            <i className="fa-search">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </i>
                            <input type="text" class="form-control form-input" placeholder="Tests/Packages"></input>
                        </div>
                    </div>
                    <div class="col-1"   onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>
                        <Button className="button px-4  btn-font">Filter</Button>
                    </div>
                </div>

                {isHovering && (
          <div className="pb-4">
            <div className="px-2 py-2 filter-container">
        <div className="filter-box py-2">
        <div className="filter-text">
            Tests
            </div>
            <div className="filter-text">
            Packages
            </div>
            <div className="filter-text">
            Male
            </div>
            <div className="filter-text">
            Female
            </div>
            <div className="filter-text">
            Home Visit
            </div>
            <div className="filter-text">
            Center Visit
            </div>
            <div className="filter-text   ">
            All
            </div>
        </div>
        <div className="filter-box py-2">
        <div className="filter-text">
            Lab
            </div>
            <div className="filter-text">
            Biochemistry
            </div>
            <div className="filter-text">
            Clinical Pathology
            </div>
            <div className="filter-text">
            Haematology
            </div>
            <div className="filter-text">
          Histo & Cyto pathology
            </div>
            <div className="filter-text">
           Microbiology
            </div>
            <div className="filter-text">
            Molecular Biology
            </div>
        </div>
        <div className="filter-box py-2">
        <div className="filter-text">
            Radiology
            </div>
            <div className="filter-text">
            MRI
            </div>
            <div className="filter-text">
            CT Scan
            </div>
            <div className="filter-text">
            Ultrasound
            </div>
            <div className="filter-text">
           X-Ray
            </div>
            <div className="filter-text">
            Mammogram
            </div>
            <div className="filter-text">
            cardiology
            </div>
        </div>
        <div className="filter-box py-2">
        <div className="filter-text">
            Bones & Joints
            </div>
            <div className="filter-text">
            Brain
            </div>
            <div className="filter-text">
            Kidney
            </div>
            <div className="filter-text">
            Liver
            </div>
            <div className="filter-text">
           Lungs
            </div>
            <div className="filter-text">
         Stomach
            </div>
            <div className="filter-text">
           Others
            </div>
        </div>
        <div className="filter-box py-2">
        <div className="filter-text">
            Diabetic
            </div>
            <div className="filter-text">
            Thyroid
            </div>
            <div className="filter-text">
            Tuberculosis
            </div>
            <div className="filter-text">
            Cancer
            </div>
            <div className="filter-text">
        Wellness
            </div>
            <div className="filter-text">
          Hormones
            </div>
            <div className="filter-text">
            covid
            </div>
        </div>
        <div className="filter-box py-2">
        <div className="filter-text">
            Infertility
            </div>
            <div className="filter-text">
            Pregnancy
            </div>
            <div className="filter-text">
            Urinary
            </div>
            <div className="filter-text">
            Fever
            </div>
            <div className="filter-text">
         Allergy
            </div>
            <div className="filter-text">
            Immunity
            </div>
            <div className="filter-text">
            Reset
            </div>
        </div>
        
     
          </div>
          </div>    
        )}
                
         
                <div className="row plan">
            <div className="col-12 plan-info">
            <p className="mt-2 mb-2"><a className="link" href="/advantage">Become a Member</a> for 1999 & Get Lab Tests at 50% Discount & Radiology Tests at 30% Discount</p>
            </div>
       
        </div>

        
        <div className="row">
                      <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                      <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                      </div>
                      <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                      <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                      </div>
                      <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                      <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                      </div>
                      <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                      <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                      </div>
                 
                   </div>
                   <div className="row">
                      <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                      <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                      </div>
                      <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                      <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                      </div>
                      <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                      <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                      </div>
                      <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                      <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                      </div>
                 
                   </div>
                   <div className="row">
                      <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                      <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                      </div>
                      <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                      <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                      </div>
                      <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                      <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                      </div>
                      <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                      <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                      </div>
                 
                   </div>
                   <div className="row">
                      <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                      <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                      </div>
                      <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                      <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                      </div>
                      <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                      <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                      </div>
                      <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                      <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                      </div>
                 
                   </div>
            </div>
        
        
                   </div>
          


    )

}