import React from "react";
import Slideshow from "../slideshow/Slideshow";
import CT from '../../images/CT.jpg';
import EEG from '../../images/EEG.jpg';
import XRAY from '../../images/XRAY.jpg'
import MRI from '../../images/MRI.jpg'
import TET from '../../images/TET.jpg'
import team from '../../images/team.jpg'
import Radiology from '../../images/Radiology.jpg'
import ImageGrid from "../common/ImageGrid";
import TeamGrid from "../common/TeamGrid";
import './Radiology.css';

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
    },
    {
        img: Radiology,
    },
    {
        img: Radiology,
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
        img: TET,
        name: 'TMT',
        path: '/tet'
    },
    {
        img: EEG,
        name: '3D/4D Ultrasound',
        path: '/eeg'
    },
    {
        img: EEG,
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
export default function RadiologyService() {
    return (
        <div style={{ marginTop: '143px', backgroundColor: "#389CA6" }} className="">
            <div className="rs-heading">
                <h6 className="rs-subheading">RADIOLOGY & CARDIOLOGY SERVICES</h6>
            </div>
            <Slideshow images={slideImages} slideButtons={slideButtons}></Slideshow>

            <div className="px-3" >
                <ImageGrid images={radioImages} />
                <TeamGrid images={TeamImages} />
            </div>

        </div>
    )
}