import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import './Appointment.css'
import Grid from '@mui/material/Grid';

import CardHeader from '@mui/material/CardHeader';

export default function Appointment() {

    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 }]
    return (
        <div style={{marginTop: '143px'}}>

         <Grid sx={{justifyContent: 'center', display:'flex'}}>
            <Card sx={{ maxWidth: 450 }} >
                <CardHeader title="Book an Appointment" sx={{textAlign: 'center',color: '#019a5d'}}>Book an Appointment</CardHeader>
                <CardActions >
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <label for="name" className="form-label">Your Full Name</label>
                                <TextField fullWidth 	 id="name" />
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <label for="age" className="form-label">Enter Your Age</label>
                                <TextField fullWidth id="age" />
                            </div>
                            <div className="col-sm-6">
                                <label for="MN" className="form-label">Enter Your Mobile Number</label>
                                <TextField fullWidth id="MN"  />

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <label for="city" className="form-label">Select Your City</label>
                                <Autocomplete options={top100Films}
                                    renderInput={(params) => <TextField {...params} />} />
                            </div>
                            <div className="col-sm-6">
                                <label for="city" className="form-label">Select Your Location</label>
                                <Autocomplete options={top100Films}
                                    renderInput={(params) => <TextField {...params} />} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <label for="city" className="form-label">Pick Date of Appointment</label>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DateTimePicker']}>
                                        <DateTimePicker />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <label for="city" className="form-label">You can add multiple Tests for enquiry</label>
                                <Autocomplete options={top100Films}
                                    renderInput={(params) => <TextField {...params} />} />
                            </div>

                        </div>


                        <div className="row">
                            <div className="col-sm-12">
                                <label for="name" className="form-label">Your Total cost</label>
                                <TextField fullWidth id="name" />
                            </div>

                        </div>
                    <Button variant="contained" className="button">Submit</Button>
                    </div>

                    

                </CardActions>
            </Card>
            </Grid>

        </div>
    )
}
