import React from 'react';
import './Footer.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Padding } from '@mui/icons-material';
export default function Footer() {
    return (
        <div className='pb-4'>
                <div style={{backgroundColor: "black" }} className='py-2'>
            <div className='row'>

                <div className='col-2'>
                    <ul className='footer-links'>
                        <li style={{ color: 'white' }}>ABOUT</li>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Tests/Packages</li>
                        <li>Services</li>
                        <li>Partner with us</li>
                        <li>why Medha</li>
                        <li>Accrediations & Certifications</li>
                        <li>Medha Team</li>
                        <li>Contact Us</li>
                        <li>Branches</li>
                        <li>Gallery</li>
                    </ul>
                </div>

                <div className='col-2'>
                    <ul className='footer-links'>
                        <li style={{ color: 'white' }}>SERVICES</li>
                        <li>Lab Services</li>
                        <li>Radiology Services</li>
                        <li>Medha Advantage Plan</li>
                        <li>Home HealthCare</li>
                        <li>Health Packages/Profiles</li>
                        <li>Lab to Lab Services</li>
                    </ul>
                </div>
                <div className='col-2 pt-4'>
                    <ul className='footer-links'>
                        <li></li>
                        <li>Feedback/Grievance</li>
                        <li>Patient Login</li>
                        <li>Careers</li>
                        <li>Doctor Login</li>
                        <li>Partner Login</li>
                    </ul>
                </div>

                <div className='col-6 pt-4'>
                    <div className="row px-0  py-0">
                      
                        <div className="col-6">
                            <label for="name" className="form-label" style={{ color: '#70AD47' }}>Subscribe to WhatsApp</label>
                            <TextField style={{ backgroundColor: '#fff' }} fullWidth id="name" />
                            <Button variant="contained" class="footer-button" startIcon={<WhatsAppIcon />}>Subscribe</Button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                        <span className='icon-button px-2'>Connect With Us</span>
                            <ul className='icon-links'>
                                <li> <IconButton className='icon-button' aria-label="delete">
                                    <FacebookIcon />
                                </IconButton></li>
                                <li> <IconButton className='icon-button' aria-label="delete">
                                    <WhatsAppIcon />
                                </IconButton></li>
                                <li> <IconButton className='icon-button' aria-label="delete">
                                    <InstagramIcon />
                                </IconButton></li>
                                <li> <IconButton className='icon-button' aria-label="delete">
                                    <LinkedInIcon />
                                </IconButton></li>
                                <li> <IconButton className='icon-button' aria-label="delete">
                                    <YouTubeIcon />
                                </IconButton></li>
                                <li> <IconButton  className='icon-button' aria-label="delete">
                                    <TwitterIcon />
                                </IconButton></li>
                            </ul>

                        </div>
                    </div>
                </div>


            </div>
          
        </div>
              <div style={{backgroundColor: "#70AD47", padding: "6px 10px"}}>
              <span>Copyright © 2023 Medha Diagnostic Centre.  All Right reserved!</span>
              <span className='footer-terms'>Terms & Conditions | Refund & Cancellaton | Privacy Policy  </span>
            </div>
        </div>
    
    )
}