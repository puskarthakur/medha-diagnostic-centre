import React from "react";
import Featurecard from "../feature/Featurecard";
import './Advantage.css'
import { Button } from "@mui/material";
import consult from '../../images/consult.png'
import medicine from '../../images/medicine.png'
import microscope from '../../images/microscope.png'
import ct_icon from '../../images/ct_icon.png'
import medical_person from '../../images/medical_person.jpg'


export default function PlanTable() {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="medha-plan">
        <div className=" medha-plan-heading">
          <h6>MEDHA ADVANTAGE PLAN</h6>
          <h6>ONE STOP SOLUTION FOR ALL YOUR HEALTH NEEDS</h6>
          <div id="menu">
            <ul className='plan-bar'>
              <li> Doctor Consultations</li>
              <li> Diagnostics</li>
              <li> Pharmacy</li>
              <li> Home Health Care</li>
              <li>Ambulance</li>
              <ul />

            </ul>
          </div>
        </div>
        <div className="featutre-cards">
        <Featurecard image={microscope} content="Upto 50% discount on Laboratory Services" ></Featurecard>
        <Featurecard image={ct_icon} content="Upto 30% discount on Radiology Services" ></Featurecard>
        <Featurecard image={consult} content="Upto 50% discount on Inhouse Dr Consultations" ></Featurecard>
        <Featurecard image={medicine} content="Upto 20% discount on Pharmacy Services" ></Featurecard>
        <Featurecard image={medical_person} content="Home Sample Collection & Ambulance Services" ></Featurecard>
      </div>

        <div className="medha-plan-heading">
          <h5 className="center text-decoration-underline" >Select a Medha Advantage Plan</h5>
        </div>
   
          <div className="plan-table">
            <table>
              <tr >
                <th></th>
                <th colspan="3" scope="colgroup">SINGLE</th>
                <th colspan="3" scope="colgroup">COUPLE</th>
              </tr>
              <tr className="t-header">
                <th></th>
                <th scope="col">LITE</th>
                <th scope="col">GOLD</th>
                <th scope="col">PLATINUM</th>
                <th scope="col">LITE</th>
                <th scope="col">GOLD</th>
                <th scope="col">PLATINUM</th>

              </tr>
              <tr className="d-rows">
                <td className="d-header">Lab Discount</td>
                <td>50%</td>
                <td>50%</td>
                <td>50%</td>
                <td>50%</td>
                <td>50%</td>
                <td>50%</td>
              </tr>
              <tr className="d-rows">
                <td className="d-header">Radiology Discount</td>
                <td>-</td>
                <td className="d-header">10%</td>
                <td className="d-header">30%</td>
                <td>-</td>
                <td className="d-header">10%</td>
                <td className="d-header">30%</td>
              </tr>
              <tr className="d-rows">
                <td className="d-header">Inhouse Dr Consultation</td>
                <td>50%</td>
                <td>50%</td>
                <td>50%</td>
                <td>50%</td>
                <td>50%</td>
                <td>50%</td>
              </tr>
              <tr className="d-rows">
                <td className="d-header">Pharmacy</td>
                <td>20%</td>
                <td>20%</td>
                <td>20%</td>
                <td>20%</td>
                <td>20%</td>
                <td>20%</td>
              </tr>
              <tr className="d-rows">
                <td className="d-header">Home Sample Collection</td>
                <td>Free</td>
                <td>Free</td>
                <td>Free</td>
                <td>Free</td>
                <td>Free</td>
                <td>Free</td>
              </tr>
              <tr className="d-rows">
                <td className="d-header">Ambulance Service</td>
                <td>-</td>
                <td>-</td>
                <td className="d-header">Free</td>
                <td>-</td>
                <td>-</td>
                <td className="d-header">Free</td>
              </tr>
              <tr className="p-row">
                <td className="d-header">Price</td>
                <td>499</td>
                <td>999</td>
                <td>1999</td>
                <td>999</td>
                <td>1999</td>
                <td>2999</td>
              </tr>
              <tr>
                <td></td>
                <td><Button className="t-button">Buy Now</Button></td>

                <td><Button className="t-button">Buy Now</Button></td>

                <td><Button className="t-button">Buy Now</Button></td>
                <td><Button className="t-button">Buy Now</Button></td>

                <td><Button className="t-button">Buy Now</Button></td>

                <td><Button className="t-button">Buy Now</Button></td>
              </tr>
            </table>
          </div>
        </div>
    </div>
  )
}