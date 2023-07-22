import React from "react";
import './Test.css'
import Button from '@mui/material/Button';
import Plancard from '../plan/Plancard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
// import Plancard from '../plan/Plancard'
// import Banner from '../banner/Banner';
// import bannerImage from '../../images/bannerImage.jpg';


 const arr1 = [
  
    {
        "filtername": "TEST",
        "filtercategory": null,
        "testcode": "CYTO SME",
        "testtype": "TEST",
        "testname": "CYTOLOGY SMEAR FOR OPENIAN",
        "price": 300.00,
        "mapprice": 300.00,
        "deptname": "Department Of Histopathology And Cytology",
        "subdeptname": "",
        "applicableto": null
    },
    {
        "filtername": "TEST",
        "filtercategory": null,
        "testcode": "ER/PR",
        "testtype": "TEST",
        "testname": "ER / PR STUDY",
        "price": 6000.00,
        "mapprice": 3000.00,
        "deptname": "Department Of Histopathology And Cytology",
        "subdeptname": "",
        "applicableto": null
    },
    {
        "filtername": "TEST",
        "filtercategory": null,
        "testcode": "ERPR",
        "testtype": "TEST",
        "testname": "ER PR STUDY",
        "price": 4900.00,
        "mapprice": 2450.00,
        "deptname": "Department Of Histopathology And Cytology",
        "subdeptname": "",
        "applicableto": null
    },
    {
        "filtername": "TEST",
        "filtercategory": null,
        "testcode": "F.N.A.C SAMPLE COLLECTION ",
        "testtype": "TEST",
        "testname": "F.N.A.C SAMPLE COLLECTION ",
        "price": 1000.00,
        "mapprice": 1000.00,
        "deptname": "Department Of Histopathology And Cytology",
        "subdeptname": "",
        "applicableto": null
    },
    {
        "filtername": "TEST",
        "filtercategory": null,
        "testcode": "FFCT",
        "testtype": "TEST",
        "testname": "FLUID FOR CYTOLOGY",
        "price": 1000.00,
        "mapprice": 500.00,
        "deptname": "Department Of Histopathology And Cytology",
        "subdeptname": "",
        "applicableto": null
    },
    {
        "filtername": "TEST",
        "filtercategory": null,
        "testcode": "KIDNEY",
        "testtype": "TEST",
        "testname": "KIDNEY BIOPSY (LM & IF)",
        "price": 5600.00,
        "mapprice": 2800.00,
        "deptname": "Department Of Histopathology And Cytology",
        "subdeptname": "",
        "applicableto": null
    },
    {
        "filtername": "Kidny",
        "filtercategory": "Orgon",
        "testcode": "KIDNEY EM",
        "testtype": "TEST",
        "testname": "KIDNEY BIOPSY EM STUDY",
        "price": 10500.00,
        "mapprice": 5250.00,
        "deptname": "Department Of Histopathology And Cytology",
        "subdeptname": "",
        "applicableto": null
    },
    {
        "filtername": "TEST",
        "filtercategory": null,
        "testcode": "LBCFC",
        "testtype": "TEST",
        "testname": "LBC FOR CYTOLOGY",
        "price": 700.00,
        "mapprice": 350.00,
        "deptname": "Department Of Histopathology And Cytology",
        "subdeptname": "",
        "applicableto": null
    },
    {
        "filtername": "TEST",
        "filtercategory": null,
        "testcode": "UCT",
        "testtype": "TEST",
        "testname": "Urine for cytology",
        "price": 1000.00,
        "mapprice": 500.00,
        "deptname": "Department Of Histopathology And Cytology",
        "subdeptname": "",
        "applicableto": null
    },
    {
        "filtername": "",
        "filtercategory": "",
        "testcode": "WELL WOMEN CHECKUP",
        "testtype": "PACKAGE",
        "testname": "WELL WOMEN CHECKUP",
        "price": 10410.00,
        "mapprice": 10410.00,
        "deptname": "",
        "subdeptname": "",
        "applicableto": "Women",
        "visittype": "HOME VISIT"
    }
]

export default function Tests() {
    const [isHovering, setIsHovering] = useState(true);
    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    const handle = (value) =>()=>{
        console.log(value)
    const arr2 =  arr1.filter((e)=> e.applicableto === value)
    }
    return (
        <div style={{ marginTop: '143px' }} className="test">

            <div className="heading">
                <h6>Tests/Packages - Medha Diagnostic Center</h6>
            </div>

            <div class="container pt-4">
                <div class="row height d-flex align-items-center ">
                    <div class="col-11">
                        <div class="form">
                            <i className="fa-search">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </i>
                            <input type="text" class="form-control form-input" placeholder="Tests/Packages"></input>
                        </div>
                    </div>
                    <div class="col-1" onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}>
                        <Button className="button px-4  btn-font">Filter</Button>
                    </div>
                </div>

                {isHovering && (
                    <div className="pb-4">
                        <div className="px-2 py-2 filter-container">
                            <div className="filter-box py-2">
                                <div className="filter-text test-pack">
                                    Tests
                                </div>
                                <div className="filter-text test-pack">
                                    Packages
                                </div>
                                <div className="filter-text gender">
                                    Male
                                </div>
                                <div className="filter-text gender" onClick={handle('Female')}>
                                    Female
                                </div>
                                <div className="filter-text visit">
                                    Home Visit
                                </div>
                                <div className="filter-text visit">
                                    Center Visit
                                </div>
                                <div className="filter-text all">
                                    All
                                </div>
                            </div>
                            <div className="filter-box py-2">
                                <div className="filter-text lab-based">
                                    Lab
                                </div>
                                <div className="filter-text lab-based">
                                    Biochemistry
                                </div>
                                <div className="filter-text lab-based">
                                    Clinical Pathology
                                </div>
                                <div className="filter-text lab-based">
                                    Haematology
                                </div>
                                <div className="filter-text lab-based">
                                    Histo & Cyto pathology
                                </div>
                                <div className="filter-text lab-based">
                                    Microbiology
                                </div>
                                <div className="filter-text lab-based">
                                    Molecular Biology
                                </div>
                            </div>
                            <div className="filter-box py-2">
                                <div className="filter-text lab-based">
                                    Radiology
                                </div>
                                <div className="filter-text lab-based">
                                    MRI
                                </div>
                                <div className="filter-text lab-based">
                                    CT Scan
                                </div>
                                <div className="filter-text lab-based">
                                    Ultrasound
                                </div>
                                <div className="filter-text lab-based">
                                    X-Ray
                                </div>
                                <div className="filter-text lab-based">
                                    Mammogram
                                </div>
                                <div className="filter-text lab-based">
                                    Cardiology
                                </div>
                            </div>
                            <div className="filter-box py-2">
                                <div className="filter-text organ-based">
                                    Bones & Joints
                                </div>
                                <div className="filter-text organ-based">
                                    Brain
                                </div>
                                <div className="filter-text organ-based">
                                    Kidney
                                </div>
                                <div className="filter-text organ-based">
                                    Liver
                                </div>
                                <div className="filter-text organ-based">
                                    Lungs
                                </div>
                                <div className="filter-text organ-based">
                                    Stomach
                                </div>
                                <div className="filter-text organ-based">
                                    Others
                                </div>
                            </div>
                            <div className="filter-box py-2">
                                <div className="filter-text disease">
                                    Diabetic
                                </div>
                                <div className="filter-text disease">
                                    Thyroid
                                </div>
                                <div className="filter-text disease">
                                    Tuberculosis
                                </div>
                                <div className="filter-text disease">
                                    Cancer
                                </div>
                                <div className="filter-text disease">
                                    Wellness
                                </div>
                                <div className="filter-text disease">
                                    Hormones
                                </div>
                                <div className="filter-text disease">
                                    Covid
                                </div>
                            </div>
                            <div className="filter-box py-2">
                                <div className="filter-text disease">
                                    Infertility
                                </div>
                                <div className="filter-text disease">
                                    Pregnancy
                                </div>
                                <div className="filter-text disease">
                                    Urinary
                                </div>
                                <div className="filter-text disease">
                                    Fever
                                </div>
                                <div className="filter-text disease">
                                    Allergy
                                </div>
                                <div className="filter-text disease">
                                    Immunity
                                </div>
                                <div className="filter-text disease">
                                    Reset
                                </div>
                            </div>


                        </div>
                    </div>
                )}


                <div className="row plan">
                    <div className="col-12 plan-info">
                        <p className="mt-2 mb-2"><a className="link" href="/advantage">Become a Member</a> for 1999 & Get Lab Tests at 50% Discount & Radiology Tests at 30% Discount</p>
                    </div>

                </div>


                <div className="row">
                    <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                        <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                    </div>
                    <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                        <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                    </div>
                    <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                        <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                    </div>
                    <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                        <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                    </div>

                </div>
                <div className="row">
                    <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                        <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                    </div>
                    <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                        <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                    </div>
                    <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                        <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                    </div>
                    <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                        <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                    </div>

                </div>
                <div className="row">
                    <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                        <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                    </div>
                    <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                        <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                    </div>
                    <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                        <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                    </div>
                    <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                        <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                    </div>

                </div>
                <div className="row">
              
                    {/* <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                        <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                    </div>
                    <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                        <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                    </div>
                    <div className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                        <Plancard title="Proself" content="A basic helath chekup package
                      ideal for those" price="1000" />
                    </div> */}

                </div>
            </div>


        </div>



    )

}