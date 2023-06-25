import React from "react";
import pathology from '../../images/pathology.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import './Testdetails.css'
import Banner from '../banner/Banner';
import bannerImage from '../../images/bannerImage.jpg';


export default function Testdetails() {
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
            <div className="col-md-3">
                <div>
                    <img src={pathology} alt="patho" width="100%" height="100%"></img>
                </div>
            </div>
            <div className="col-md-9">


            <Card sx={{ maxWidth: 350 , maxHeight: 225 }} className="test-card" >
                    <CardContent>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <p >Test Name</p>
                                    <p>Test Code</p>
                                    <p>MRP Price</p>
                                </div>
                                <div className="col-md-6">
                                    <p >1000</p>
                                    <p >1000</p>
                                </div>

                            </div>
                        </div>
                                <CardActions sx={{ justifyContent: 'end', paddingRight: '1.2 rem', paddingBottom: '1.2rem' }}>
                        <Button className="button">ADD TO CART</Button>
                    </CardActions>

                    </CardContent>
            
                 
              
                </Card>
                <Card sx={{ maxWidth: 350 , maxHeight: 225 }} className="test-card" >
                    <CardContent>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <p >Actual Price</p>
                                    <p>MAP Price</p>
                                </div>
                                <div className="col-md-6">
                                    <p >1000</p>
                                    <p >1000</p>
                                </div>

                            </div>
                        </div>
                                <CardActions sx={{ justifyContent: 'end', paddingRight: '1.2 rem', paddingBottom: '1.2rem' }}>
                        <Button className="button">ADD TO CART</Button>
                        <Button className="button">Know More</Button>
                    </CardActions>

                    </CardContent>
            
                 
              
                </Card>

            </div>  
        </div>
            </div>
          
        </div>


    )

}