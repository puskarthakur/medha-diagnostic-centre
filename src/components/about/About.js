import React from "react";
import './About.css';
import BreadCrumb from "../common/BreadCrumb";
import logoName from '../../images/medha_name_logo.jpg'
import medhateam from '../../images/team.jpg'
import logo from '../../images/medha_logo.jpg'
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Carousel from "../common/carousel/Carousel";
import aboutTeam from '../../images/aboutTeam.jpg'
import mbc from '../../images/microbiology.jpg'
import cert from '../../images/cert.jpg'
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

const Card_Content = [{
    heading: 'VISION',
    content: 'To deliver the best quality diagnostic services with ethical practices by a team of highly qualified and efficient professionals at a very reasonable price.'
}, {
    heading: 'MISSION',
    content: 'To make use of the best diagnostic testing services and deliver them to the doorsteps of patients,doctors and healthcare service providers.'
}, {
    heading: 'VALUES',
    content: 'To offer the "BEST ADVANCED CARE" through core values of Excellence, Reliability, Punctuality, Novelty, Safety, Accuracy and Sincerity'
}]
export default function About() {
    return (
        <div style={{ marginTop: '143px', marginBottom: '30px', overflow: "hidden" }}>
            <div>
                <BreadCrumb name="Home" homeLink="/" comp="About Us" ></BreadCrumb>
            </div>
            <div className="text-center">
                <h4>ABOUT US</h4>
            </div>
            <div className="text-center">
                <img src={logo} alt="medha_logo" width={300} height={200} />
                <img src={logoName} alt="medha_logo" width={400} height={200} />
            </div>
      <div style={{backgroundColor: "F2F2F2"}}>
      <div className="px-4 py-4 mx-4 about-content">
                <p>Welcome to Medha Diagnostic Centre, your trusted destination for
                    comprehensive and advanced diagnostics in Nellore. Discover why Medha stands out as the preferred
                    choice for all your healthcare needs.</p>
                <span>
                    360 Degree Diagnostics:
                </span>
                <p>
                    At Medha Diagnostic Centre, we offer a complete range of diagnostic services that cover every aspect of your health.
                    From laboratory services to cutting-edge imaging modalities such as MRI, CT scan, ultrasound, mammogram, and X-ray, we provide a comprehensive evaluation of your health. Our extensive range also includes TMT (Treadmill Test) and 2D-echo for specialized cardiac assessments. With our 360-degree diagnostics,
                    you can be assured of a thorough evaluation to support accurate diagnoses and effective treatment plans.
                </p>
                <span>
                    365 Days of Service:
                </span>
                <p>
                    We understand that healthcare needs can arise at any time. That's why we are dedicated to serving you 365 days a year. Whether it's a routine check-up or an urgent diagnostic requirement, you can rely on Medha Diagnostic Centre for accessible and timely
                    services. Your health is our priority, and we are committed to being available to you whenever you need us.
                </p>
                <span>
                    All Lab Services and Extensive Healthcare Packages:
                </span>
                <p>
                    Medha Diagnostic Centre offers a comprehensive range of laboratory services to address your diagnostic needs. From routine blood tests to specialized investigations, our state-of-the-art laboratory is equipped to provide accurate and timely results. Additionally, we provide extensive healthcare packages tailored to meet specific requirements, including organ-based assessments, disease-specific screenings, gender-specific evaluations, and seasonal
                    health check-ups. Our packages are designed to promote preventive healthcare and provide a holistic approach to your well-being.
                </p>
                <span>
                    Home Sample Collection:
                </span>
                <p>
                    We understand that visiting a diagnostic centre may not always be convenient. That's why we offer home sample collection services. Our team of highly qualified phlebotomists will visit you at your preferred location to collect samples for testing. This service ensures your comfort and convenience
                    while maintaining the highest standards of sample collection and maintaining the integrity of the samples.
                </p>
                <span>
                    Latest Technology and World-Class Equipment:
                </span>
                <p>
                    Medha Diagnostic Centre is equipped with the latest technology and world-class equipment to ensure accurate and reliable results. We continually invest in advanced diagnostic technology to provide you with the best possible care. Our commitment to staying at the
                    forefront of medical advancements enables us to deliver precise diagnoses and personalized treatment plans.
                </p>
                <span>
                    Highly Qualified Doctors and Standards:
                </span>
                <p>
                    Our team of highly qualified doctors brings a wealth of experience and expertise to each diagnostic evaluation. With
                    their deep understanding of various medical specialties, they ensure accurate interpretations and comprehensive assessments. At Medha Diagnostic Centre, we maintain the highest standards of healthcare, adhering to strict quality protocols and industry best practices.
                    Your well-being and safety are our utmost priority, and we strive to provide you with the highest level of care.
                </p>
                <p>
                    Choose Medha Diagnostic Centre in Nellore for comprehensive diagnostics backed by the latest technology, world-class equipment, and highly qualified doctors. Experience our commitment to excellence,
                    convenience, and personalized care. Your health is precious, and we are here to support you on your journey to wellness.
                </p>
            </div>
            <div className="card-content pb-4">
                {
                    Card_Content.map((i, index) => {
                        return (
                            <Card sx={{ maxWidth: 350, height: 170, border: 1, borderColor: '#E2E2E2', padding: 0, margin: 0 }}>
                                <CardHeader sx={{ padding: 0, margin: 0, border: '1px solid black', textAlign: 'center', backgroundColor: '#94ECB3', fontSize: '1.2rem !important', fontWeight: 200 }} title={i.heading}
                                    titleTypographyProps={{
                                        fontSize: 18,
                                    }}></CardHeader>
                                <CardContent >
                                    <div>
                                        <p className="mb-0 card-text">{i.content}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })
                }
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

            <div className="py-4">
                <h6 className="text-center about-heading">Gallery</h6>
                <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>
                    <Carousel
                        show={3}
                    >
                        <div>
                            <div style={{ padding: 8 }}>
                                <img src={mbc} alt="placeholder" style={{ width: '100%' }} />
                            </div>
                        </div>
                        <div>
                            <div style={{ padding: 8 }}>

                                <img src={mbc} alt="placeholder" style={{ width: '100%' }} />
                            </div>
                        </div>
                        <div>
                            <div style={{ padding: 8 }}>

                                <img src={mbc} alt="placeholder" style={{ width: '100%' }} />
                            </div>
                        </div>

                        <div>
                            <div style={{ padding: 8 }}>

                                <img src={mbc} alt="placeholder" style={{ width: '100%' }} />
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