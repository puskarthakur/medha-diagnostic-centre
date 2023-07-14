import React from "react";
import mount from '../../images/mount.jpg'
import Slideshow from "../slideshow/Slideshow";
import CT from '../../images/CT.jpg';
import EEG from '../../images/EEG.jpg';
import XRAY from '../../images/XRAY.jpg'
import MRI from '../../images/MRI.jpg'
import TET from '../../images/TET.jpg'
import MED from '../../images/Whymedha.jpg'
import ImageGrid from "../common/ImageGrid";
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
const radioImages = [
    {
        img: CT,
        name: 'CT',
        path: '/ct'
    },
    {
        img: MRI,
        name: 'MRI',
        path: '/mri'
    },
    {
        img: TET,
        name: 'TET',
        path: '/tet'
    },
    {
        img: EEG,
        path: '/eeg'
    },
    {
        img: EEG,
        name: 'EEG'
    },
    {
        img: EEG,
        name: 'EEG'
    },
    {
        img: XRAY,
        name: 'XRAY',
        path: '/xray'
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
export default function RadiologyService(){
    return(
        <div style={{ marginTop: '143px' }}>
            <div className="heading">
                <h6>RADIOLOGY & CARDIOLOGY SERVICES</h6>
            </div>
        <Slideshow images={slideImages}></Slideshow>
      
<div >
  <ImageGrid images={radioImages}/>
<TeamGrid images={TeamImages}/>
</div>
      
        </div>
    )
}