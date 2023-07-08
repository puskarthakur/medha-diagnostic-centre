import React from "react";
import pathology from '../../images/pathology.png'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// import CardActions from '@mui/material/CardActions';
import './Testdetails.css'
// import Banner from '../banner/Banner';
// import bannerImage from '../../images/bannerImage.jpg';


export default function Testdetails() {
    return (
        <div style={{ marginTop: '143px' }}>
            <div className="heading">
                <h6>Complete Blood Picture  </h6>
            </div>
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-3">
                        <div>
                            <img src={pathology} alt="patho" width="100%" height="100%"></img>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="details-container">
                            <div className="row pt-3 px">
                                <div className="col-4">
                                    <p >Test Name</p>
                                    <p>Test Code</p>
                                    <p>MRP Price</p>
                                </div>
                                <div className="col-8">
                                    <p >complete Blood count</p>
                                    <p >1000</p>
                                    <p >1000</p>
                                </div>
                            </div>
                            <div className="row px-plan">
                                <div className="col-12 py-1 plan-info">
                                    <p className="mt-0 mb-0 member"><a  className="link" href="/plan">Become a Member</a> for 1999 & Get Lab Tests at 50% Discount & Radiology Tests at 30% Discount</p>
                                </div>
                            </div>
                            <div className="row px-plan">
                                <div className="col-12 py-1 plan-info">
                                    <p className="mt-0 mb-0"><a  className="link" href="/plan">Buy Medha Advantage plan  </a>and get this test at 150</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 px-plan py-1">
                                    <Button className="button space">ADD TO CART</Button>
                                    <Button className="button space">Buy Now</Button>
                                </div>
                            </div>
                        </div>
                        <div className="row px-plan py-2">
                        <div className="col-12 details py-2">
                                 <p>Description</p>
                                </div>
                                <div className="col-12 py-2 details">
                                 <p>Reporting Time</p>
                                </div>
                                <div className="col-12 py-2 details">
                                 <p>Sample Required</p>
                                </div>
                             

                        </div>
                    </div>
                
                </div>
             
            </div>
        </div>


    )

}