
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
                <h6 className="rs-subheading">Ultrasound</h6>
            </div>
            <Slideshow images={slideImages} slideButtons={slideButtons}></Slideshow>
            <div className="px-4">
                <h6 className="mri-sub">Description</h6>
                <p className="mri-desc mb-2">Medha Diagnostic Centre in Nellore is proud to offer state-of-the-art 3D/4D ultrasound scans to the community. With a team of highly qualified doctors and a commitment to maintaining the highest standards of care, we provide exceptional imaging services in the city of Nellore.</p>
                <p className="mri-desc mb-2">Our advanced 3D/4D ultrasound technology allows for a detailed and immersive visualization of the developing fetus, providing expectant parents with a unique and memorable experience. Our skilled doctors have extensive expertise in obstetric imaging, ensuring accurate and comprehensive assessments during pregnancy.</p>
                <p className="mri-desc mb-2">
                At Medha Diagnostic Centre, we prioritize patient safety, comfort, and satisfaction. Our facility is equipped with modern equipment, creating a soothing and welcoming environment for our valued patients. We adhere to rigorous quality standards and follow best practices in diagnostic imaging to ensure accurate and reliable results.
                </p>
                <p className="mri-desc mb-2">Whether you are seeking a routine pregnancy scan or wish to cherish the precious moments of seeing your baby in 3D/4D, Medha Diagnostic Centre is your trusted destination in Nellore. Our dedicated team is committed to delivering compassionate care, exceptional imaging services, and a personalized experience to each patient.</p>
                <p className="mri-desc mb-2 pb-4">
                Visit Medha Diagnostic Centre in Nellore and entrust your ultrasound needs to our highly qualified doctors and cutting-edge technology. Experience the joy of advanced imaging with our 3D/4D ultrasound scans while being assured of our unwavering commitment to maintaining the highest standards of healthcare excellence in the city.
                </p>
                <TeamGrid images={TeamImages}></TeamGrid>
            </div>
         
        </div>
    )
}