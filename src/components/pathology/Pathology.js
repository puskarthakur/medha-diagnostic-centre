import React from "react";
import pathology from '../../images/pathology.png'
import './Pathology.css'
import Banner from '../banner/Banner';
import bannerImage from '../../images/bannerImage.jpg';

export default function Pathology() {

    return (
        <div className="patho">
            <div >
                <Banner
                    icon={false} // Pass true or false to display or hide the arrow icon
                    text="PATHOLOGY" // The text to be displayed in the banner
                    imageUrl={bannerImage} // The URL of the banner image
                    imageHeight="8rem" // The height of the banner image
                />
            </div>
            <div className="container px-15 py-4">
                <div className="row">
                    <div className="col-md-8">
                        <div className="content">
                            <h6 className="mb-0 mt-4">Clinical Chemistry, Immunoassays & ELISA</h6>
                            <p className="mt-3">Clinical chemistry (also known as chemical pathology, clinical biochemistry or medical biochemistry) is concerned with analyzing bodily fluids for diagnostic and therapeutic purposes. The most common specimens tested in clinical chemistry are blood and urine. Many different tests exist in clinical chemistry to evaluate various chemical components including, but not limited to: glucose, electrolytes, enzymes, hormones, lipids (fats), proteins and other metabolic substances.
                                Immunoassays are a bioanalytical method that measures the presence or concentration of analytes such as hormones and infectious markers through an antibody or an antigen as a biorecognition agent. ELISA stands for Enzyme-Linked Immunosorbent Assay, used to detect and measure antibodies in autoimmune diseases, infective diseases, and allergies. Our department of clinical chemistry and immunoassays is equipped with world-class instruments from Roche, Abbott, Siemens, Biorad, Biomeriux & Sebia, capable of handling large volumes of various diagnostic tests with maximum precision and accuracy. Our department was also the first in the country to install the Roche Cobas 8000 analyzer with its capacity to perform 2200 chemistry and 470 Immunoassays per hour. The department uses fully automated ELISA analyzers like Evolis from Biorad and Chorus Trio from Disse Diagnostics. In addition, our allergy testing is processed on the PHADIA 250, which allows for rapid testing for a wide variety of allergens. We have highly efficient, experienced technical staff to perform the tests with utmost expertise and care along with this cutting-edge technology. We follow stringent processes and six sigma applications to ensure quality for accurate, complete and timely reports.</p>
                        </div>
                        <div className="content">
                            <h6 className="mb-0 mt-4">Serology</h6>
                            <p className="mt-3">Serology is the study and diagnostic identification of antibodies in the serum. Such antibodies are typically formed in response to an infection, against other foreign proteins, or to one’s proteins.
                                The department of serology and immunology caters to the testing of vast volumes of samples for seasonal infectious disorders and supports this workload through its complete spectrum of serological markers. Tests for sexually transmitted diseases, dengue, chikungunya, malaria, leptospirosis and typhoid, and full automation in blood grouping, direct & indirect Coombs tests are some of the critical areas in our range of serological testing. We have a fully automated state of the art analyzer based on Column Agglutination Technology - Ortho Autovue from Johnson & Johnson for automated blood grouping.</p>
                        </div>
                        <div className="content">
                            <h6 className="mb-0 mt-4">Clinical Chemistry, Immunoassays & ELISA</h6>
                            <p className="mt-3">Clinical chemistry (also known as chemical pathology, clinical biochemistry or medical biochemistry) is concerned with analyzing bodily fluids for diagnostic and therapeutic purposes. The most common specimens tested in clinical chemistry are blood and urine. Many different tests exist in clinical chemistry to evaluate various chemical components including, but not limited to: glucose, electrolytes, enzymes, hormones, lipids (fats), proteins and other metabolic substances.
                                Immunoassays are a bioanalytical method that measures the presence or concentration of analytes such as hormones and infectious markers through an antibody or an antigen as a biorecognition agent. ELISA stands for Enzyme-Linked Immunosorbent Assay, used to detect and measure antibodies in autoimmune diseases, infective diseases, and allergies. Our department of clinical chemistry and immunoassays is equipped with world-class instruments from Roche, Abbott, Siemens, Biorad, Biomeriux & Sebia, capable of handling large volumes of various diagnostic tests with maximum precision and accuracy. Our department was also the first in the country to install the Roche Cobas 8000 analyzer with its capacity to perform 2200 chemistry and 470 Immunoassays per hour. The department uses fully automated ELISA analyzers like Evolis from Biorad and Chorus Trio from Disse Diagnostics. In addition, our allergy testing is processed on the PHADIA 250, which allows for rapid testing for a wide variety of allergens. We have highly efficient, experienced technical staff to perform the tests with utmost expertise and care along with this cutting-edge technology. We follow stringent processes and six sigma applications to ensure quality for accurate, complete and timely reports.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <img src={pathology} alt="patho" width="100%" height="100%"></img>
                        </div>
                        <div>
                            <img src={pathology} alt="patho" width="100%" height="100%"></img>
                        </div>
                        <div>
                            <img src={pathology} alt="patho" width="100%" height="100%"></img>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}