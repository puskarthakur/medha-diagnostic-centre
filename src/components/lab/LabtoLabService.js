import React from "react";
import Slideshow from "../slideshow/Slideshow";
import clinical_pathology from '../../images/clinical_pathology.jpg'
import molecular_biology from '../../images/molecular_biology.jpg'
import hematology from '../../images/hematology.jpg'
import microbiology from '../../images/microbiology.jpg'
import biochemistry from '../../images/biochemistry.jpg'
import serology from '../../images/serology.jpg'
import team from '../../images/team.jpg'
import Lab from '../../images/Lab.jpg'
import ImageGrid from "../common/ImageGrid";
import TeamGrid from "../common/TeamGrid";
import BreadCrumb from "../common/BreadCrumb";
import './Lab.css';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

const slideButtons = [
    {
        btnName: 'BookTest',
        btnPath: '/appoint'
    }

]

const slideImages = [
    {
        img: Lab,
        title: "Clinical Pathology"
    },
    {
        img: Lab,
        title: "Molecular Biology"
    },
    {
        img: Lab,
        title: "Hematology"
    },
    {
        img: Lab,
        title: "MicroBiology"
    },
    {
        img: Lab,
        title: "Biochemistry"
    },
    {
        img: Lab,
        title: "Serology"
    }
]
const radioImages = [
    {
        img: clinical_pathology,
        name: 'Clinical pathology',
        path: '/cp'
    },
    {
        img: molecular_biology,
        name: 'Molecular Biology ',
        path: '/mlb'
    },
    {
        img: hematology,
        name: 'Hematology',
        path: '/hy'
    },
    {
        img: microbiology,
        name: 'Microbiology',
        path: '/mcb'
    },
    {
        img: biochemistry,
        name: 'Biochemistry',
        path: '/bc'
    },
    {
        img: serology,
        name: 'Serology',
        path: '/sy'
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
const Card_Content=['World-class Equipment', 'High Quality Reagents', 'The latest technology combined with cutting edge tests',
'Couteous and responsible staff members', 'Strict internal and external quality control programs',
'Highly qualified and dedicated pathologists']
export default function LabtoLabService() {
    return (
        <div style={{ marginTop: '143px' }} className="">
            <div>
                <BreadCrumb name="Home" homeLink="/home" comp="Lab To Lab Services" ></BreadCrumb>
            </div>
            <div style={{ backgroundColor: "#389CA6" }}>
                <div className="lab-heading">
                    <h6 className="lab-subheading">LAB TO LAB SERVICES</h6>
                </div>
                <Slideshow images={slideImages} slideButtons={slideButtons}></Slideshow>

                <div className=" my-4 card-content">
                {
    Card_Content.map((i,index)=>{
        return(
            <Card sx={{ maxWidth: 180, height: 190,border: 1, borderColor: '#E2E2E2' }}>

            <CardContent >
            <div>
                    <span className="list-counter">{index}</span>
                    <p className="mb-0 py-4 text-center">{i}</p>
                </div>
            </CardContent>
        </Card>
        )
    })
}
   
                    
                </div>

                <div className="px-3" >
                    <ImageGrid images={radioImages} />
                    <TeamGrid images={TeamImages} />
                </div>
            </div>


        </div>
    )
}