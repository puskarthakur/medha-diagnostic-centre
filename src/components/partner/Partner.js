import React from "react";
import './Partner.css';
import BreadCrumb from "../common/BreadCrumb";
import logoName from '../../images/medha_name_logo.jpg'
import medhateam from '../../images/team.jpg'
import logo from '../../images/medha_logo.jpg'
import Carousel from "../common/carousel/Carousel";
import mbc from '../../images/microbiology.jpg'
import Contact from "../contact/Contact";
import Servicecard from "../servicecard/Servicecard";


const INFRA_ARR=[
    {
        img:mbc,
        content:"Our team of highly qualified doctors brings a wealth of experience and expertise to each diagnostic evaluation. With their deep understanding of various medical specialties, they ensure accurate interpretations and comprehensive assessments. At Medha Diagnostic Centre, we maintain the highest standards of healthcare, adhering to strict quality protocols"
    },
    {
        img:mbc,
        content:"Our team of highly qualified doctors brings a wealth of experience and expertise to each diagnostic evaluation. With their deep understanding of various medical specialties, they ensure accurate interpretations and comprehensive assessments. At Medha Diagnostic Centre, we maintain the highest standards of healthcare, adhering to strict quality protocols"
    },
    {
        img:mbc,
        content:"Our team of highly qualified doctors brings a wealth of experience and expertise to each diagnostic evaluation. With their deep understanding of various medical specialties, they ensure accurate interpretations and comprehensive assessments. At Medha Diagnostic Centre, we maintain the highest standards of healthcare, adhering to strict quality protocols"
    },
    {
        img:mbc,
        content:"Our team of highly qualified doctors brings a wealth of experience and expertise to each diagnostic evaluation. With their deep understanding of various medical specialties, they ensure accurate interpretations and comprehensive assessments. At Medha Diagnostic Centre, we maintain the highest standards of healthcare, adhering to strict quality protocols"
    },
    {
        img:mbc,
        content:"Our team of highly qualified doctors brings a wealth of experience and expertise to each diagnostic evaluation. With their deep understanding of various medical specialties, they ensure accurate interpretations and comprehensive assessments. At Medha Diagnostic Centre, we maintain the highest standards of healthcare, adhering to strict quality protocols"
    },
    {
        img:mbc,
        content:"Our team of highly qualified doctors brings a wealth of experience and expertise to each diagnostic evaluation. With their deep understanding of various medical specialties, they ensure accurate interpretations and comprehensive assessments. At Medha Diagnostic Centre, we maintain the highest standards of healthcare, adhering to strict quality protocols"
    }
]
export default function Partner() {
    return (
        <div style={{ marginTop: '143px', marginBottom: '30px', overflow: "hidden" }}>
            <div>
                <BreadCrumb name="Home" homeLink="/" comp="Partner With Us" ></BreadCrumb>
            </div>
            <div className="text-center">
                <h4>PARTNER WITH US</h4>
            </div>
            <div className="text-center">
                <img src={logo} alt="medha_logo" width={300} height={200} />
                <img src={logoName} alt="medha_logo" width={400} height={200} />
            </div>
      <div style={{backgroundColor: "F2F2F2"}}>
      <div className="px-4 py-4 mx-4 about-content">
                <p>When it comes to choosing a B2B partner for your diagnostic needs, Medha Diagnostic Centre stands 
                    out as the ideal choice. Here's why you should consider Medha as your trusted partner:</p>
                <span>
                    360 Degree Diagnostics:
                </span>
                <p>
                Medha Diagnostic Centre offers a comprehensive range of diagnostic services, providing a complete 
                evaluation of health. Our services encompass all aspects of diagnostics, including lab services, 
                advanced imaging modalities such as MRI, CT scan, ultrasound, mammogram, and X-ray, as well as specialized assessments like TMT
                 and 2D-echo. With our 360-degree approach, we ensure thorough assessments and accurate diagnoses.
                </p>
                <span>
                    365 Days of Service:
                </span>
                <p>
                We understand the importance of timely diagnostics for your business. That's why Medha Diagnostic
                 Centre operates 365 days a year. Our commitment to accessibility and reliability ensures that you
                  have access to our diagnostic services whenever you need them. With Medha as your
                 B2B partner, you can trust that your diagnostic requirements will be met promptly and efficiently.
                </p>
                <span>
                    All Lab Services and Extensive Healthcare Packages:
                </span>
                <p>
                At Medha Diagnostic Centre, we offer a comprehensive range of 
                lab services to address your diverse diagnostic needs. Our state-of-the-art
                 laboratory is equipped to handle routine blood tests, pathology investigations, 
                 and specialized diagnostics. In addition, we provide extensive healthcare packages
                  tailored to specific requirements. These packages cover organ-based assessments,
                   disease-specific screenings, gender-specific evaluations, and seasonal health check-ups. 
                   By choosing Medha as your B2B partner, you gain access to comprehensive diagnostic 
                   solutions for your business.

                </p>
                <span>
                Timely Sample Collection and Ambulance Pickup:
                </span>
                <p>
                We understand the importance of convenience and efficiency in diagnostic services. That's why Medha Diagnostic Centre offers timely sample collection services. Our experienced staff ensures that samples are collected promptly and delivered to our laboratory for accurate testing. We also provide ambulance pickup services, facilitating the transportation of patients who require
                 diagnostic services. With Medha, you can expect seamless sample collection and reliable ambulance support.
                </p>
                <span>
                    Latest Technology and World-Class Equipment:
                </span>
                <p>
                Medha Diagnostic Centre utilizes the latest technology and world-class equipment to deliver accurate and reliable results. We stay updated with advancements in diagnostic technology, ensuring that our services are backed by the latest tools and techniques. Our 
                commitment to using state-of-the-art equipment ensures the highest level of accuracy in our diagnostics.
                </p>
                <span>
                    Highly Qualified Doctors and Standards:
                </span>
                <p>
                Our team of highly qualified doctors brings extensive expertise to our diagnostic services. With their deep understanding of various medical specialties, they ensure accurate interpretations and comprehensive assessments. Medha Diagnostic Centre maintains the highest standards of healthcare, adhering to strict protocols and industry best practices. By choosing us as your B2B
                 partner, you can be confident that you are aligning with a provider that upholds exceptional standards.
                </p>
                <p>
                Consider Medha Diagnostic Centre as your B2B partner for comprehensive diagnostics. With our 360-degree services, timely sample collection, ambulance pickup support, latest technology, world-class equipment, highly qualified doctors, and commitment to maintaining standards, we are well-equipped to meet your business needs.
                 Trust Medha to deliver accurate and reliable diagnostics that support your business objectives.
                </p>
            </div>
        <div>
            <Servicecard></Servicecard>
        </div>

            <div className="py-4">
                <h6 className="text-center about-heading">Infrastructure</h6>
                {
                    INFRA_ARR.map((i, index) => {
                        return (
                            <div>
                                     <div className="row px-4">
                            <div className="col-4">
                                <p className="text-center">MRI</p>
                                <img src={i.img} style={{ width: '100%' }}></img>
                            </div>
                            <div className="col-8 py-4">
                                <p>{i.content}</p>
                            </div>
                        </div>
                        <div className="row px-4">
                            <div className="col-12">
                                <hr></hr>
                            </div>
                        </div>
                            </div>
                       
                        )
                    })
                }
               
            </div>
            <div className="py-4">
                <h6 className="text-center about-heading">Medha Team</h6>
                <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>
                    <Carousel
                        show={3}
                    >
                        <div>
                            <div style={{ padding: 8 }}>
                                <img src={medhateam} alt="placeholder" style={{ width: '100%' }} />
                                <p className="text-center  mb-0 mt-2">DR RAO</p>
                                <p className="text-center  mb-0">Cardilogist</p>
                            </div>
                        </div>
                        <div>
                            <div style={{ padding: 8 }}>
                                <img src={medhateam} alt="placeholder" style={{ width: '100%' }} />
                                <p className="text-center  mb-0 mt-2">DR RAO</p>
                                <p className="text-center  mb-0">Cardilogist</p>
                            </div>
                        </div>
                        <div>
                            <div style={{ padding: 8 }}>
                                <img src={medhateam} alt="placeholder" style={{ width: '100%' }} />
                                <p className="text-center  mb-0 mt-2">DR RAO</p>
                                <p className="text-center  mb-0">Cardilogist</p>
                            </div>
                        </div>
                        <div>
                            <div style={{ padding: 8 }}>
                                <img src={medhateam} alt="placeholder" style={{ width: '100%' }} />
                                <p className="text-center  mb-0 mt-2">DR RAO</p>
                                <p className="text-center  mb-0">Cardilogist</p>
                            </div>
                        </div>
                        <div>
                            <div style={{ padding: 8 }}>
                                <img src={medhateam} alt="placeholder" style={{ width: '100%' }} />
                                <p className="text-center  mb-0 mt-2">DR RAO</p>
                                <p className="text-center  mb-0">Cardilogist</p>
                            </div>
                        </div>

                    </Carousel>
                </div>
            </div>

            <div className="py-4">
                <h6 className="text-center about-heading">Accrediations & Certifications</h6>
                <div style={{ maxWidth: 800, marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>
                    <Carousel
                        show={2}
                    >
                        <div>
                            <div style={{ padding: 8 }}>
                                <p className="text-center">title 1</p>
                                <img src={medhateam} alt="placeholder" style={{ width: '100%' }} />
                            </div>
                        </div>
                        <div>
                            <div style={{ padding: 8 }}>
                                <p className="text-center">title 2</p>
                                <img src={medhateam} alt="placeholder" style={{ width: '100%' }} />
                            </div>
                        </div>
                        <div>
                            <div style={{ padding: 8 }}>
                                <p className="text-center">title 3</p>
                                <img src={medhateam} alt="placeholder" style={{ width: '100%' }} />
                            </div>
                        </div>


                    </Carousel>
                </div>
            </div>
            <div>
                <Contact></Contact>
            </div>
      </div>
        </div>
    )
}