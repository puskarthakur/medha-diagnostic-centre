import React from "react";
import Slideshow from "../slideshow/Slideshow";
import CT from '../../images/CT.jpg';
import EEG from '../../images/EEG.jpg';
import XRAY from '../../images/XRAY.jpg'
import MRI from '../../images/MRI.jpg'
import TMT from '../../images/TMT.jpg'
import Ultrasound from '../../images/Ultrasound.jpg'
import Mammography from '../../images/Mammography.jpg'
import team from '../../images/team.jpg'
import Radiology from '../../images/Radiology.jpg'
import ImageGrid from "../common/ImageGrid";
import TeamGrid from "../common/TeamGrid";
import './Radiology.css';
import BreadCrumb from "../common/BreadCrumb";

const slideButtons = [
    {
        btnName: 'BookTest',
        btnPath: '/appoint'
    },

    {
        btnName: 'Know More',
        btnPath: '/appoint'
    }

]

const slideImages = [
    {
        img: Radiology,
        title: "CT Scan"
    },
    {
        img: Radiology,
        title: "MRI"
    },
    {
        img: Radiology,
        title: "TMT"
    },
    {
        img: Radiology,
        title: "Ultrasound"
    },
    {
        img: Radiology,
        title: "Mammography"
    },
    {
        img: Radiology,
        title: "EEG"
    },
    {
        img: Radiology,
        title: "X-RAY"
    }
]
const radioImages = [
    {
        img: CT,
        name: 'CT Scan',
        path: '/ct'
    },
    {
        img: MRI,
        name: 'MRI',
        path: '/mri'
    },
    {
        img: TMT,
        name: 'TMT',
        path: '/tmt'
    },
    {
        img: Ultrasound,
        name: '3D/4D Ultrasound',
        path: '/ultra'
    },
    {
        img: Mammography,
        name: 'Mammography'
    },
    {
        img: EEG,
        name: 'EEG/ENMG'
    },
    {
        img: XRAY,
        name: 'XRAY',
        path: '/xray'
    }
]

const TeamImages = [
    {
        img: team,
        name: 'Dr.rao',
        designation: 'Consultant'
    },
    {
        img: team,
        name: 'Dr.anjali',
        designation: 'Consultant'
    },
    {
        img: team,
        name: 'Dr.Moni',
        designation: 'Consultant'
    },
    {
        img: team,
        name: 'Dr.vicky',
        designation: 'Consultant'
    },
    {
        img: team,
        name: 'Dr.vicky',
        designation: 'Consultant'
    }
]

   

export default function RadiologyService() {
    return (
        <div style={{ marginTop: '143px'}}>
            <div>
<BreadCrumb name="Home" homeLink="/home" comp="Radiology & Cardiology Services" ></BreadCrumb>
            </div>
       
       <div style={{backgroundColor: "#389CA6" }}>
       <div className="rs-heading">
                <h6 className="rs-subheading">RADIOLOGY & CARDIOLOGY SERVICES</h6>
            </div>
            <Slideshow images={slideImages} slideButtons={slideButtons}></Slideshow>

            <div className="px-3" >
                <ImageGrid images={radioImages} />
                <TeamGrid images={TeamImages} />
            </div>

       </div>
        
        </div>
    )
}