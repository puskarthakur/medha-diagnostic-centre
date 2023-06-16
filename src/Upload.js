import React from "react";
import './styles/Upload.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Upload() {
    return (
        <div className="upload" style={{marginTop: '143px'}} >

            <div className="heading">
                <h4>Upload Prescription</h4>
            </div>
            <h4 className="subheading">Send us your prescription</h4>
            <p className="content">Not sure which tests to take? Share your prescription with us and our team
                will call you to book tests for you
            </p>
            <div className="container" >

                <div className="row">
                    <div className="col-sm-12">
                        <label for="name" className="form-label">Your Full Name *</label>
                        <TextField fullWidth id="name" />
                    </div>

                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <label for="name" className="form-label">Your Email *</label>
                        <TextField fullWidth id="name" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <label for="name" className="form-label">Your Mobile Number *</label>
                        <TextField fullWidth id="name" />
                    </div>

                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <label for="name" className="form-label">Subject</label>
                        <TextField fullWidth id="name" />
                    </div>

                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <label for="name" className="form-label">Message</label>
                        <TextField fullWidth id="name" />
                    </div>

                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <label for="name" className="form-label label">Choose Prescription</label>

                        <input type="file"
                            id="avatar" name="avatar"
                            accept="image/png, image/jpeg, image/pdf" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <input type="checkbox" id="scales" name="scales" />
                        <label for="scales" className="check">I agree that my submitted data is being collected and stored.</label>
                        <p className="label1">You can upload a docuument in formats: PDF,JPG,JPEG,PNG</p>
                    </div>
                </div>
                <Button variant="contained" className='button'>Upload Prescription</Button>
            </div>
        </div>

    )
}