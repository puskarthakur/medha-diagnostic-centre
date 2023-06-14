import React from "react";

export default function Pathology() {
    const myStyle={
        backgroundImage: `url(${banner})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        height: '18vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
    return(
        <div className="diagnos">
        <div style={myStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <span><ArrowBackIcon /></span>
                        <h4>Diagnostic Services</h4>
                    </div>
                </div>
            </div>

        </div>
        <div class="container px-15 py-4">
            <p>Almost 60-70% of diseases are preventable and treatable with timely assessment & intervention. In light of this, Suburban Diagnostics offers an array of comprehensive preventive health check-up packages, which provide a thorough evaluation of all the vital organs and systems present in the body. In addition, it can be customized to your needs by way of add-ons.</p>
        </div>
    
        
      
    </div>
    )
}