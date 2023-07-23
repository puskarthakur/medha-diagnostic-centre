import React from "react";
// import Header from './Header';
// import { Navbar } from "./Navbar";
import Booktest from "../booktest/Booktest";
import Slideshow from '../slideshow/Slideshow'
import StaticCard from '../floatcard/StaticCard'
import Servicecard from "../servicecard/Servicecard";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import mount from '../../images/mount.jpg'
import './Home.css'
import PlanTable from "../advantage/PlanTable";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";


const images = [
    { img: mount },
    { img: mount }
]

// import { StaticCard } from './StaticCard'
function Home() {
    const navigate = useNavigate()
    return (
        <div style={{ marginTop: '141px', overflow:"hidden" }}>

            <div className="container mx-0 my-2">
                <div className="row px-0 py-0">
                    <div className="col-12">
                        <Slideshow  images={images} />
                    </div>
                
                </div>

            </div>
            <StaticCard></StaticCard>
            <div>
            <Servicecard></Servicecard>
            </div>
         

            {/* <div className="container-fluid home-partner mb-4">
                <div className="px-4 py-4">
                    <h2 className="mb-0 partner-heading">Partner With Us</h2>
                    <p className="mt-3 text-white">Clinical chemistry (also known as chemical pathology, clinical biochemistry or medical biochemistry) is concerned with analyzing bodily fluids for diagnostic and therapeutic purposes. The most common specimens tested in clinical chemistry are blood and urine.</p>
                    <Button variant="contained" className="white-button" onClick={() => navigate('/partner')}>Read More</Button>
                </div>
            </div> */}

<div>
    <PlanTable/>
</div>
<div>
  <Contact/>
</div>
<div>
    <Footer/>
</div>
        </div>
    )
}

export default Home;