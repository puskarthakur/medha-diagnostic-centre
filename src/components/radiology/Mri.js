import { Slider } from "@mui/material";
import React from "react";
import MED from '../../images/Whymedha.jpg'
import CT from '../../images/CT.jpg';
import EEG from '../../images/EEG.jpg';
import XRAY from '../../images/XRAY.jpg'
import MRI from '../../images/MRI.jpg'
import TET from '../../images/TET.jpg'
import Slideshow from "../slideshow/Slideshow";
import TeamGrid from "../common/TeamGrid";

const slideImages = [
    {
        img: MED,
        name: 'CT'
    },
    {
        img: MED,
        name: 'MRI'
    },
    {
        img: MED,
        name: 'TET'
    },
    {
        img: MED,
        name: 'EEG'
    },
    {
        img: MED,
        name: 'EEG'
    }
]
const TeamImages = [
    {
        img: CT,
        name: 'Dr.rao'
    },
    {
        img: MRI,
        name: 'Dr.anjali'
    },
    {
        img: TET,
        name: 'Dr.Moni'
    },
    {
        img: EEG,
        name: 'Dr.vicky'
    },
    {
        img: EEG,
        name: 'Dr.vicky'
    }
]
export default function Mri(){
    return(
        <div style={{marginTop: '150px', backgroundColor:'#19A5A0'}}>
            <Slideshow images={slideImages}></Slideshow>
            <div className="px-4">
                <h6>Description</h6>
                <p>Medha Diagnostic Centre in Nellore is delighted to offer state-of-the-art MRI scan services to the community. With the latest GE MRI 1.5T technology and a team of highly qualified doctors, we provide exceptional diagnostic
             imaging services while upholding the highest standards of healthcare in the city of Nellore.</p>
            <p>Our GE MRI 1.5T scanner is at the forefront of imaging technology, delivering detailed and high-resolution images of internal body structures. MRI scans are invaluable in diagnosing a wide range of medical conditions, aiding in accurate treatment planning and patient care. Our experienced doctors possess extensive expertise in interpreting MRI images, ensuring precise and comprehensive evaluations.
At Medha Diagnostic Centre, patient well-being and comfort are paramount. Our facility is equipped with the latest GE MRI 1.5T scanner, renowned for its advanced imaging capabilities and patient-friendly design. We follow stringent quality protocols and best practices to ensure accurate and reliable diagnostic results, while prioritizing patient safety.</p>
            <p>
            Our highly qualified doctors work closely with our dedicated team of technologists and healthcare professionals to provide personalized care and support throughout the MRI scan process. They bring a wealth of knowledge and experience to the interpretation of MRI images, ensuring precise diagnoses and effective treatment recommendations.
            </p>
           <p>When you choose Medha Diagnostic Centre in Nellore, you can trust that you will receive top-quality MRI scan services. Our commitment to maintaining the highest standards of healthcare, coupled with the latest GE MRI 1.5T technology and a team of skilled professionals, ensures that you receive exceptional imaging services for accurate and reliable diagnoses.</p>
            <p>
            Visit Medha Diagnostic Centre in Nellore to access our advanced MRI scan services. Experience the excellence of our GE MRI 1.5T technology, delivered by highly qualified doctors and a dedicated healthcare team, all aimed at providing the highest quality standards in diagnostic imaging in the city.
            </p>
            </div>
            <TeamGrid images={TeamImages}></TeamGrid>
        </div>
    )
}