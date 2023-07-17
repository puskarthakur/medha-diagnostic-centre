
import React from "react";
import MED from '../../images/Whymedha.jpg'
import team from '../../images/team.jpg'
import Slideshow from "../slideshow/Slideshow";
import TeamGrid from "../common/TeamGrid";
import './Mri.css'


const slideButtons = [
    {
        btnName: 'BookTest',
        btnPath: '/appoint'
    }

]
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
        img: team,
        name: 'Dr.rao'
    },
    {
        img: team,
        name: 'Dr.anjali'
    },
    {
        img: team,
        name: 'Dr.Moni'
    },
    {
        img: team,
        name: 'Dr.vicky'
    },
    {
        img: team,
        name: 'Dr.vicky'
    }
]
export default function Mri() {
    return (
        <div style={{ marginTop: '150px', backgroundColor: '#19A5A0' }}>
              <div className="rs-heading">
                <h6 className="rs-subheading">X-Ray</h6>
            </div>
            <Slideshow images={slideImages} slideButtons={slideButtons}></Slideshow>
            <div className="px-4">
                <h6 className="mri-sub">Description</h6>
                <p className="mri-desc mb-2">Medha Diagnostic Centre in Nellore takes pride in offering top-quality X-Ray services to the community. With a team of highly qualified doctors and a commitment to upholding the highest standards of healthcare, we provide exceptional diagnostic imaging services in the city of Nellore.</p>
                <p className="mri-desc mb-2">Our state-of-the-art X-Ray technology allows for accurate and precise imaging of various body parts, aiding in the diagnosis and treatment of a wide range of medical conditions. Our experienced doctors possess extensive expertise in interpreting X-Ray images, ensuring reliable and comprehensive evaluations.</p>
                <p className="mri-desc mb-2">
                At Medha Diagnostic Centre, patient well-being and satisfaction are our utmost priorities. Our facility is equipped with advanced X-Ray equipment, providing a comfortable and seamless imaging experience for our valued patients. We adhere to stringent quality protocols and follow best practices in diagnostic imaging to ensure accurate results and patient safety.
                </p>
                <p className="mri-desc mb-2">
                Whether you require a routine X-Ray examination or a specialized imaging procedure, Medha Diagnostic Centre is your trusted destination in Nellore. Our dedicated team is committed to delivering compassionate care, precise diagnostics, and personalized attention to each patient.
                </p>
                <p className="mri-desc mb-2 pb-4">
                Visit Medha Diagnostic Centre in Nellore and avail yourself of our X-Ray services, delivered by highly qualified doctors who maintain the highest standards of healthcare in the city. Experience the excellence of our diagnostic imaging services and rest assured that your well-being is in capable hands.
                </p>
                <TeamGrid images={TeamImages}></TeamGrid>
            </div>
         
        </div>
    )
}