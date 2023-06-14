import React from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function Sample() {
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 }]
    return (
        <div style={{ position: 'relative', top: '71px', width: '50%', left: '25%', paddingBottom:"40px" }}>

            <div className="container" >
                <h5 style={{marginBottom:"20px", color:'#019a5d'}}>Book Home Sample Collection</h5>
                <div className="row">
                    <div className="col-sm-6">
                        <label for="name" className="form-label">Your Full Name<span className="required">*</span></label>
                        <TextField fullWidth id="name" />
                    </div>
                    <div className="col-sm-6">
                        <label for="name" className="form-label">Email<span className="required">*</span></label>
                        <TextField fullWidth id="name" />
                    </div>

                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <label for="age" className="form-label">Enter Your Age</label>
                        <TextField fullWidth id="age" />
                    </div>
                    <div className="col-sm-6">
                        <label for="city" className="form-label">Select Gender</label>
                        <Autocomplete options={top100Films}
                            renderInput={(params) => <TextField {...params} />} />

                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <label for="city" className="form-label">Mobile Number<span className="required">*</span></label>
                        <TextField fullWidth id="age" />
                    </div>
                    <div className="col-sm-6">
                        <label for="city" className="form-label">Complete Address</label>
                        <TextField fullWidth id="age" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <label for="city" className="form-label">Select City</label>
                        <Autocomplete options={top100Films}
                            renderInput={(params) => <TextField {...params} />} />
                    </div>
                    <div className="col-sm-6">
                        <label for="city" className="form-label">Select Branch</label>
                        <Autocomplete options={top100Films}
                            renderInput={(params) => <TextField {...params} />} />
                    </div>

                </div>


                <div className="row">
                    <div className="col-sm-6">
                        <label for="city" className="form-label">Select Number of Visits</label>
                        <Autocomplete options={top100Films}
                            renderInput={(params) => <TextField {...params} />} />
                    </div>
                    <div className="col-sm-6">
                        <label for="city" className="form-label">Home Visit Charges</label>
                        <TextField fullWidth id="age" disabled />
                    </div>

                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <label for="city" className="form-label">Pick Date and Time</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateTimePicker']}>
                                <DateTimePicker />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>

                </div>





                <Button variant="contained" className="button">Request an Appointment</Button>
            </div>
        </div>
    )
}