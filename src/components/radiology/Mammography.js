
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
                <h6 className="rs-subheading">Mammography</h6>
            </div>
            <Slideshow images={slideImages} slideButtons={slideButtons}></Slideshow>
            <div className="px-4">
                <h6 className="mri-sub">Description</h6>
                <p className="mri-desc mb-2">Medha Diagnostic Centre in Nellore is proud to offer comprehensive mammogram services to the community. With a team of highly qualified doctors specializing in breast imaging and a commitment to maintaining the highest standards of healthcare, we provide exceptional mammography services in the city of Nellore.</p>
                <p className="mri-desc mb-2">Our state-of-the-art mammogram technology enables early detection and accurate diagnosis of breast abnormalities. Mammograms are an essential screening tool for breast cancer and play a crucial role in women's health. Our experienced doctor possess extensive expertise in interpreting mammogram images, ensuring precise evaluations and timely detection of any potential concerns.</p>
                <p className="mri-desc mb-2">
                At Medha Diagnostic Centre, patient care and comfort are our top priorities. Our facility is equipped with advanced mammography equipment, providing a comfortable and supportive environment for our valued patients. We understand the sensitivity of breast health and ensure that every patient receives compassionate and personalized care throughout the entire mammogram process.
                </p>
                <p className="mri-desc mb-2">Whether you require a routine mammogram screening or need further diagnostic evaluation, Medha Diagnostic Centre is your trusted destination in Nellore. Our dedicated team is committed to delivering accurate and timely results, along with a caring and supportive experience for each patient.</p>
                <p className="mri-desc mb-2 pb-4">
                Visit Medha Diagnostic Centre in Nellore to access our mammogram services, provided by highly qualified doctors who uphold the highest standards of healthcare in the city. Experience the excellence of our mammography services and prioritize your breast health with confidence, knowing that you are in the hands of dedicated professionals.
                </p>
                <TeamGrid images={TeamImages}></TeamGrid>
            </div>
         
        </div>
    )
}