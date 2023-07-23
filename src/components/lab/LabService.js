import React from "react";
import Slideshow from "../slideshow/Slideshow";
import clinical_pathology  from '../../images/clinical_pathology.jpg'
import molecular_biology  from '../../images/molecular_biology.jpg'
import hematology  from '../../images/hematology.jpg'
import microbiology  from '../../images/microbiology.jpg'
import biochemistry  from '../../images/biochemistry.jpg'
import serology  from '../../images/serology.jpg'
import team  from '../../images/team.jpg'
import Lab from '../../images/Lab.jpg'
import ImageGrid from "../common/ImageGrid";
import TeamGrid from "../common/TeamGrid";
import BreadCrumb from "../common/BreadCrumb";
import './Lab.css';

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
        img: molecular_biology ,
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
export default function LabService() {
    return (
        <div style={{ marginTop: '143px' }} className="">
            <div>
            <BreadCrumb name="Home" homeLink="/" comp="Lab Services" ></BreadCrumb>
            </div>
            <div style={{backgroundColor: "#389CA6" }}>
            <div className="lab-heading">
                <h6 className="lab-subheading">LAB SERVICES</h6>
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