import React from "react";
// import Header from './Header';
// import { Navbar } from "./Navbar";
// import Booktest from "./Booktest";
import Slideshow from './Slideshow'
import Grid from '@mui/material/Grid';
// import { StaticCard } from './StaticCard'
function Home() {
    return (
        <div>
          
            <Grid container spacing={1}>
                <Grid item xs={7} >
                    <Slideshow></Slideshow>
                </Grid>
                {/* <Grid item xs={4} sx={{ padding: '0' }}>
                    <Booktest></Booktest>
                </Grid> */}
       

            </Grid>




        </div>
    )
}

export default Home;