import React from "react";
import './Contact.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

export default function Contact() {
    return (
        <div>
            <p className="contact-heading">CONTACT US</p>
            <div className="contact-content py-4">
            <div className="">
                <Card sx={{ maxWidth: 350, height: 380, border: 1, borderColor: '#E2E2E2', padding: 0, margin: 0 }}>
                    <CardContent >
                        <p className="text-center">Address</p>
                        <div className="row">
                            <div className="col-2">
                                <LocationOnIcon />
                            </div>
                            <div className="col-10">
                                <p className="mb-0">Medha Diagnostic Centre</p>
                                <p className="mb-0">#71 16-2-169, HMR heights, near venkataramana hotel, Pogathota, Nellore,
                                    Andhra Pradesh-524001	</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <PhoneIcon />
                            </div>
                            <div className="col-10">
                                <p className="mb-0">+91 8612328787</p>
                                <p className="mb-0">+91 8612328787</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <WhatsAppIcon />
                            </div>
                            <div className="col-10">
                                <p className="mb-0">+91 9392901428
</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <EmailIcon />
                            </div>
                            <div className="col-10">
                                <p className="mb-0">info@medhadoagnosticcentre.com</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

            </div>
            <div>
                <Card sx={{ maxWidth: 400, height: 380, border: 1, borderColor: '#E2E2E2', padding: 0, margin: 0 }}>
                    <CardContent >
                    <div className="row add-card">
                    <div className="col-12">
                        <label for="name" className="form-label">Name*</label>
                        <TextField fullWidth id="name" />
                    </div>
                </div>
                <div className="row add-card">
                    <div className="col-12">
                        <label for="name" className="form-label">Mobile Number*</label>
                        <TextField fullWidth id="name" />
                    </div>
                </div>
                <div className="row add-card">
                    <div className="col-12">
                        <label for="name" className="form-label">Email</label>
                        <TextField fullWidth id="name" />
                    </div>
                </div>
                <div className="row add-card ">
                    <div className="col-12">
                        <label for="name" className="form-label">Message</label>
                        <TextField fullWidth id="name" />
                    </div>
                </div>
                <div className="py-2">
                <Button  variant="contained"  style={{float: 'right'}}>Send</Button>
                </div>
    
                    </CardContent>
                </Card>

            </div>
            </div>
        
        </div>
    )

}