import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
import './styles/Orderdetails.css'
// import Grid from '@mui/material/Grid';


import CardHeader from '@mui/material/CardHeader';
// import Box from '@mui/material/Box';

export default function Orderdetails() {
    return (
        <div style={{width: '32%', margin: 'auto'}}>


            <Card sx={{ maxWidth: 450 }} >
                <CardHeader title="Order Details" sx={{ textAlign: 'center', backgroundColor: '#019a5d', color: 'white' }}>
                    
                </CardHeader>
                <CardContent>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <span >Number of test Selected:</span>
                            </div>
                        </div>
                        <div className="row  order-heading">
                            <div className="col-lg-6">
                                <span>Test Name</span>
                            </div>

                            <div className="col-lg-6">
                                <span >Service Price</span>

                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-lg-6">
                                <span >Test Name</span>
                           
                            </div>
                            <div className="col-lg-6">
                                <span >5678</span>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-lg-6">
                                <span>Total Charges</span>
                            </div>
                            <div className="col-lg-6">
                                <span >1000</span>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <span>Home Visit Charges</span>
                            </div>
                            <div className="col-lg-6">
                                <span>1000</span>
                            </div>

                        </div>
                        <div className="row order-heading">
                            <div className="col-lg-6">
                                <span>Payable Amount</span>
                            </div>
                            <div className="col-lg-6">
                                <span>5000  </span>
                            </div>
                        </div>
                    </div>
                </CardContent>
                <CardActions sx={{justifyContent:'end', paddingRight:'1.2 rem', paddingBottom: '1.2rem'}}>
                    <Button className="button">Add More Tests</Button>
                    <Button className="button">Next</Button>
                </CardActions>
            </Card>

         
        </div>
    )
}