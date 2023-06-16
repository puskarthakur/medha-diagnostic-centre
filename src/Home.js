import React from "react";
// import Header from './Header';
// import { Navbar } from "./Navbar";
// import Booktest from "./Booktest";
// import Slideshow from './Slideshow'
// import Grid from '@mui/material/Grid';
import Servicecard from "./Servicecard";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

// import { StaticCard } from './StaticCard'
function Home() {
    const navigate = useNavigate()
    return (
        <div style={{marginTop: '193px'}}>
          
            {/* <Grid container spacing={1}>
                <Grid item xs={7} >
                    <Slideshow></Slideshow>
                </Grid>
                 <Grid item xs={4} sx={{ padding: '0' }}>
                  
                </Grid> 
       
              
            </Grid> */}
            
            <Servicecard></Servicecard>

            <div className="container-fluid home-partner mb-4">
                <div className="px-4 py-4">
                <h2 className="mb-0 partner-heading">Partner With Us</h2>
                <p className="mt-3 text-white">Clinical chemistry (also known as chemical pathology, clinical biochemistry or medical biochemistry) is concerned with analyzing bodily fluids for diagnostic and therapeutic purposes. The most common specimens tested in clinical chemistry are blood and urine.</p>
           <Button variant="contained" onClick={()=>navigate('/patho')}>Read More</Button>
            </div>
            </div>




        </div>
    )
}

export default Home;