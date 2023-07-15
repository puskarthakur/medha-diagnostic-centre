import React from "react";
import Amenity from '../amenity/Amenity'
import './Servicecard.css'
import { faMicroscope } from '@fortawesome/free-solid-svg-icons';
import DonutChart from '../charts/DonutChart';

export default function Servicecard() {
    const items = ['LAB', 'Ultrasound', 'CT Scan', 'MRI', 'X-Ray', 'Mammography', 'TMT', 'EEG/ENMG'];
    return (
        <div className="service mb-4">

            <div className="service-heading py-2">
                <h2>Services</h2>

            </div>
            <div>
                <DonutChart items={items} />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-2 item1">
                    <div>
                        <Amenity iconClass={faMicroscope} name="Corporate wellness Program" />
                    </div>
                    </div>
                  
                    <div className="col-2">
                        <div>
                            <Amenity iconClass={faMicroscope} name="Corporate wellness Program" />
                        </div>
                    </div>
                    <div className="col-2 item1">
                        <Amenity iconClass={faMicroscope} name="Corporate wellness Program" />
                    </div>
                    <div className="col-2  item2">
                        <div >
                            <Amenity iconClass={faMicroscope} name="Corporate wellness Program" />
                        </div>
                    </div>
                    <div className="col-2 item1">
                        <Amenity iconClass={faMicroscope} name="Corporate wellness Program" />
                    </div>
                </div>



            </div>



        </div>
    )
}