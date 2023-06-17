import React from "react";
import Amenity from "./Amenity";
import './styles/Servicecard.css'
import { faMicroscope } from '@fortawesome/free-solid-svg-icons';
import DonutChart from './components/charts/DonutChart';

export default function Servicecard() {
    const items = ['ECG', 'Menu2', 'Menu3', 'Menu4', 'Menu5', 'Menu6', 'ECG'];
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
                    <div className="col-1 item1">
                    </div>
                    <div className="col-2 item1">
                        <Amenity iconClass={faMicroscope} name="Corporate wellness Program" />
                    </div>
                    <div className="col-2">
                        <div className="pb-4">
                            <Amenity iconClass={faMicroscope} name="Corporate wellness Program" />
                        </div>

                        <div>
                            <Amenity iconClass={faMicroscope} name="Corporate wellness Program" />
                        </div>
                    </div>
                    <div className="col-2 item1">
                        <Amenity iconClass={faMicroscope} name="Corporate wellness Program" />
                    </div>
                    <div className="col-2  item2">
                        <div className="pb-4">
                            <Amenity iconClass={faMicroscope} name="Corporate wellness Program" />
                        </div>
                        <div>
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