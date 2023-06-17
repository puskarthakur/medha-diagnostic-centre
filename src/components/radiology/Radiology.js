import React from "react";
import xray from '../../images/x-ray.png'
import pathology from '../../images/pathology.png'
import './Radiology.css'
import Banner from '../banner/Banner';
import bannerImage from '../../images/bannerImage.jpg';


export default function Radiology() {

    const radio = {
        backgroundImage: `url(${xray})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '11rem',
        backgroundColor: 'red !important',
        backgroundPosition: 'right center',
        padding: '0rem 2rem'
    }
    return (
        <div className="radiology">
            <div>
                <Banner
                    icon={false} // Pass true or false to display or hide the arrow icon
                    text="RADIOLOGY" // The text to be displayed in the banner
                    imageUrl={bannerImage} // The URL of the banner image
                    imageHeight="8rem" // The height of the banner image
                />

            </div>
            <div className="px-4 py-4">
                <div>
                    <div style={radio} className="mt-4" >
                        <div className="row">
                            <div className="col-md-8">
                                <h6 className="mb-0 mt-4">Digital X-Ray</h6>
                                <p className="mt-3">Clinical chemistry (also known as chemical pathology, clinical biochemistry or medical biochemistry) is concerned with analyzing bodily fluids for diagnostic and therapeutic purposes. The most common specimens tested in clinical chemistry are blood and urine.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div >
                    <div style={radio} className="mt-4" >
                        <div className="row">
                            <div className="col-md-8">
                                <h6 className="mb-0 mt-4">Sonography</h6>
                                <p className="mt-3">Clinical chemistry (also known as chemical pathology, clinical biochemistry or medical biochemistry) is concerned with analyzing bodily fluids for diagnostic and therapeutic purposes. The most common specimens tested in clinical chemistry are blood and urine.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row px-4 py-2">
                        <div className="col-md-8">
                            <div>
                                <h6 className=" mb-4 mt-4">Sonography</h6>
                                <p >This procedure is generally used to understand and examine the following in pregnancy:</p>
                                <div>
                                    <ul>
                                        <li>Routine obstetrics (growth scan, early pregnancy, assessment of cervical length, placental position)</li>
                                        <li>Second-trimester anomaly scan/targetted scan/malformation scan</li>
                                        <li>Second-trimester anomaly scan/targetted scan/malformation scan</li>
                                        <li>Second-trimester anomaly scan/targetted scan/malformation scan</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h6 className=" mb-4 mt-4">Sonography</h6>
                                <p >This procedure is generally used to understand and examine the following in pregnancy:</p>
                                <div>
                                    <ul>
                                        <li>Routine obstetrics (growth scan, early pregnancy, assessment of cervical length, placental position)</li>
                                        <li>Second-trimester anomaly scan/targetted scan/malformation scan</li>
                                        <li>Second-trimester anomaly scan/targetted scan/malformation scan</li>
                                        <li>Second-trimester anomaly scan/targetted scan/malformation scan</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h6 className=" mb-4 mt-4">First Trimester</h6>
                                <p >This procedure is generally used to understand and examine the following in pregnancy:</p>
                                <div>
                                    <ul>
                                        <li>Routine obstetrics (growth scan, early pregnancy, assessment of cervical length, placental position)</li>
                                        <li>Second-trimester anomaly scan/targetted scan/malformation scan</li>
                                        <li>Second-trimester anomaly scan/targetted scan/malformation scan</li>
                                        <li>Second-trimester anomaly scan/targetted scan/malformation scan</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="pt-4">
                                <img src={pathology} alt="patho" width="100%" ></img>
                            </div>
                            <div className="py-4">
                                <img src={pathology} alt="patho" width="100%" ></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={radio} className="mt-4" >
                <div className="row">
                    <div className="col-md-8">
                        <h6 className="mb-0 mt-4">Mamography</h6>
                        <p className="mt-3">Clinical chemistry (also known as chemical pathology, clinical biochemistry or medical biochemistry) is concerned with analyzing bodily fluids for diagnostic and therapeutic purposes. The most common specimens tested in clinical chemistry are blood and urine.</p>
                    </div>
                </div>
            </div>
            <div className="row px-4 py-2">
                <div className="col-md-4">

                    <div className="pt-4">
                        <img src={pathology} alt="patho" width="100%" ></img>
                    </div>
                </div>


                <div className="col-md-8">

                    <div>
                        <h6 className=" mb-4 mt-4">Sonography</h6>
                        <p >This procedure is generally used to understand and examine the following in pregnancy:</p>
                        <div>
                            <ul>
                                <li>Routine obstetrics (growth scan, early pregnancy, assessment of cervical length, placental position)</li>
                                <li>Second-trimester anomaly scan/targetted scan/malformation scan</li>
                                <li>Second-trimester anomaly scan/targetted scan/malformation scan</li>
                                <li>Second-trimester anomaly scan/targetted scan/malformation scan</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row px-4 py-2">
                <div className="col-md-8">

                    <div>
                        <h6 className=" mb-4 mt-4">Sonography</h6>
                        <p >This procedure is generally used to understand and examine the following in pregnancy:</p>
                        <div>
                            <ul>
                                <li>Routine obstetrics (growth scan, early pregnancy, assessment of cervical length, placental position)</li>
                                <li>Second-trimester anomaly scan/targetted scan/malformation scan</li>
                                <li>Second-trimester anomaly scan/targetted scan/malformation scan</li>
                                <li>Second-trimester anomaly scan/targetted scan/malformation scan</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h6 className=" mb-4 mt-4">First Trimester</h6>
                        <p >This procedure is generally used to understand and examine the following in pregnancy:</p>
                        <div>
                            <ul>
                                <li>Routine obstetrics (growth scan, early pregnancy, assessment of cervical length, placental position)</li>
                                <li>Second-trimester anomaly scan/targetted scan/malformation scan</li>
                                <li>Second-trimester anomaly scan/targetted scan/malformation scan</li>
                                <li>Second-trimester anomaly scan/targetted scan/malformation scan</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="pt-4">
                        <img src={pathology} alt="patho" width="100%" ></img>
                    </div>

                </div>
            </div>
        </div>
    )
}