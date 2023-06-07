import React from "react";
import Header from './Header';
import { Navbar } from "./Navbar";
import Booktest from "./Booktest";

function Home (){
    return(
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Booktest></Booktest>
        </div>
    )
}

export default Home;