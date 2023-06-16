import React from "react";
import pathology from './images/pathology.png';
import xray from './images/x-ray.png';

import Banner from './components/banner/Banner';
import bannerImage from './images/bannerImage.jpg';

export default function Cardiology() {



    const cardio = {
        backgroundImage: `url(${xray})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '15rem',
        backgroundColor: 'red !important',
        backgroundPosition: 'right center',
        padding: '0rem 2rem'
    }
    return (
        <div className="cardiology">
            <div>
                <Banner
                    icon={false} // Pass true or false to display or hide the arrow icon
                    text="CADIOLOGY" // The text to be displayed in the banner
                    imageUrl={bannerImage} // The URL of the banner image
                    imageHeight="8rem" // The height of the banner image
                />

            </div>
            <div className="px-4 py-4">
                <div>
                    <div style={cardio} className="mt-4" >
                        <div className="row">
                            <div className="col-md-8">
                                <h6 className="mb-0 mt-4">ECG (Electrocardiogram)</h6>
                                <p className="mt-3">At Suburban Diagnostics, ECGs are conducted by trained technicians. These are then reviewed by a specialist physician/cardiologist to check for any signs of a potential problem.</p>
                                <p className="mt-3">An electrocardiogram is a painless, non-invasive way to diagnose many many of the common heart problems:

                                </p>
                                <div>
                                    <ul>
                                        <li>Irregularities in heart rhythm (Arrhythmia)</li>
                                        <li>Heart defects</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row px-4 py-2">
                        <div className="col-md-4">

                            <div className="pt-4">
                                <img src={pathology} alt="patho" width="100%" ></img>
                            </div>

                        </div>


                        <div className="col-md-8">

                            <div>
                                <h6 className=" mb-4 mt-4">How To Prepare</h6>
                                <p >No special preparations are necessary. However, avoid exercising right before an electrocardiogram. Physical activity, such as climbing stairs, etc. may increase your heart rate. An electrocardiogram is a safe procedure. There may be minor discomfort when the electrodes are taped to your chest. Although this happens rarely, a reaction to the electrodes may cause redness or swelling of the skin. There isn’t any risk during an electrocardiogram. The electrodes placed on your body only record the electrical activity of your heart. They don’t emit electricity.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div style={cardio} className="mt-4" >
                    <div className="row">
                        <div className="col-md-8">
                            <h6 className="mb-0 mt-4">Stress Tests</h6>
                            <p className="mt-3">Stress test is also known as an Exercise test or Treadmill test.

                                Understanding the purpose of the individual exercise test allows the physician/cardiologist to determine the appropriate methodology and to select test endpoints that maximize test safety and obtain needed diagnostic and prognostic information.</p>

                            <div>
                                <ul>
                                    <li>Detection of Coronary Artery disease (CAD)</li>
                                    <li>Evaluation of the functional severity of CAD</li>

                                </ul>
                            </div>
                        </div>
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
                        <h6 className=" mb-4 mt-4">Preparations for testing include the following:</h6>
                        <div>
                            <ul>
                                <li>The purpose of the test should be clear in advance to maximize diagnostic value and ensure safety.</li>
                                <li>The subject or patient should not eat a heavy meal in the 3 hours leading up to the test. Routine medications may be taken with small amounts of water. Subjects should dress in comfortable clothing and wear comfortable walking shoes or sneakers.</li>
                                <li>When exercise testing is performed for the diagnosis of ischemia, routine medication may be withheld because some drugs (especially beta-blockers) attenuate the HR and blood pressure responses to exercise.</li>

                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className="row px-4 py-2">
                <div className="col-md-8">

                    <div>
                        <h6 className=" mb-4 mt-4">How is the test performed?</h6>

                        <div>
                            <ul>
                                <li>A Stress Test is done under the supervision of a trained physician or a cardiologist. After initial screening, history, and examination, consent is taken and an appropriate protocol for the test is selected. The technician then Prepares the subject’s skin and attaches electrodes on his/her chest. These electrodes are attached to an ECG monitor.</li>
                                <li>ECG and heart rate are recorded throughout the test. Blood pressure is also recorded at regular intervals.</li>
                                <li>A resting supine standard 12-lead ECG should be obtained before exercise, followed by standing and hyperventilation.</li>
                                <li>After this, exercise is started on a treadmill with an initial warm-up period (at low workload), followed by progressive graded exercise with increasing loads and an adequate time interval in each level, and a post–maximum effort recovery period which is recorded.</li>
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