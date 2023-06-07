import React from "react";
import Header from './Header';
import { Navbar } from "./Navbar";
import Booktest from "./Booktest";
import { Slideshow } from './Slideshow'
import Grid from '@mui/material/Grid';
function Home (){
    return(
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Grid container spacing={2}>
  <Grid item xs={8}>
  <Slideshow></Slideshow>
  </Grid>
  <Grid item xs={2}>
  <Booktest></Booktest>
  </Grid>
  <Grid item xs={2}>
  </Grid>
  </Grid>

           
           
        </div>
    )
}

export default Home;