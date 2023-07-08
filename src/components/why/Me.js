import React from 'react'
import Banner from '../banner/Banner'
import bannerImage from '../../images/healthcare-worker-wearing-blue-surgical-260nw-1904889133.webp'

export default function Me() {
    return (
        <div>
             <div>
                <Banner
                    icon={false} // Pass true or false to display or hide the arrow icon
                    text="Delivering Reliable, Fast and Affordable
                    Diagnostic services" // The text to be displayed in the banner
                    imageUrl={bannerImage} // The URL of the banner image
                    imageHeight="12rem" // The height of the banner image
                />
            </div>
        </div>
    )
}