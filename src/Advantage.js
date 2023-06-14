import React from "react";
import Featurecard from "./Featurecard";
import Plancard from './Plancard'
import OIP from './images/OIP.jpeg'
import MEDHA_PLAN from './Constants'
import './styles/Advantage.css'

export default function Advantage() {
    return (
        <div style={{ position: 'relative', top: '90px', paddingBottom: "40px" }}>
            <div className=" heading">
                <h4>MEDHA ADVANTAGE PLAN</h4>
                <h5 >One stop solution for all your health needs</h5>
                <div id="menu">
                    <ul className='plan-bar'>
                        <li> Doctor Consultations</li>
                        <li> Diagnostic Services</li>
                        <li> Home Health Care Services</li>
                        <ul />

                    </ul>
                </div>
            </div>
            <div className="featutre-cards">
                <Featurecard image={OIP} content=" 50% discount on Lab Tests" ></Featurecard>
                <Featurecard image={OIP} content=" 30% discount on Radiology" ></Featurecard>
                <Featurecard image={OIP} content=" 50% discount on Consultations" ></Featurecard>
                <Featurecard image={OIP} content="Free Ambulance within  5kms radius" ></Featurecard>
                <Featurecard image={OIP} content="5 Years Validity on plan" ></Featurecard>
            </div>
            <div className=" heading">
                <h4 className="center" >Select a Medha Advantage Plan</h4>
            </div>
            <div className="featutre-cards">

                {MEDHA_PLAN.map((plan) => (
                    <Plancard title={plan.title} content={plan.content}price={plan.price} key={plan.title} />

                ))}
            </div>

        </div>
    )
}