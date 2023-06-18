import React from "react";
import './Test.css'
import Button from '@mui/material/Button';
import Plancard from '../plan/Plancard'
import Banner from '../banner/Banner';
import bannerImage from '../../images/bannerImage.jpg';

export default function Tests() {

    return (
        <div>
            <div>
            <Banner
            icon={false} // Pass true or false to display or hide the arrow icon
            text="PACKAGE" // The text to be displayed in the banner
            imageUrl={bannerImage} // The URL of the banner image
            imageHeight="8rem" // The height of the banner image
          />
            </div>
           
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-2">
                        <div className="filter">
                        <div className="total">
                            <h6>Total Tests</h6>
                            <span>3255</span>
                        </div>
                        <div className="total">
                            <h6>Filters</h6>
                        <Button>Clear All</Button>
                        </div>
<div className="box">
    <div>
        <h6>Test type</h6>
        <ul>
            <li>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
             <label for="vehicle1" className="px-3">Single Test</label>
            </li>
            <li>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
             <label for="vehicle1" className="px-3">Test Package</label>
            </li>
        </ul>
    </div>
    <div>
        <h6>Visit type</h6>
        <ul>
            <li>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
             <label for="vehicle1" className="px-3">Home Test</label>
            </li>
            <li>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
             <label for="vehicle1" className="px-3">Center Package</label>
            </li>
        </ul>
    </div>
    <div>
        <h6>Service type</h6>
        <ul>
            <li>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
             <label for="vehicle1" className="px-3">Pathology</label>
            </li>
            <li>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
             <label for="vehicle1" className="px-3">Radiology</label>
            </li>
            <li>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
             <label for="vehicle1" className="px-3">Cardiology</label>
            </li>
        </ul>
    </div>
    
    
</div>
                    </div>
                        </div>
                
                  <div className="col-md-10">
                  <div className="tests">
                      
                   
                      <div className="search" >
                         <input type="text"></input>
                      </div>
                   
                   
                     
                   <div className="test-container">
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
                  </div>

                    
                    </div>
                </div>
              
            </div>
   
    )

}