import React from 'react';
import './ImageGrid.css'; // CSS file for styling
const ImageGrid = (images) => {
    return (
        <div>
            <div className="image-grid">
                {/* Render your images here */}
                {images.images.map((i, index) => {
                    return (
                        <div className='im-co' key={index} >
                            <a href={i.path}>
                                <img src={i.img} alt="medhaImage" className='image' style={{ width: '100%', height: '50%' }} />
                                <span className='image-card'>{i.name}</span>
                            </a>

                        </div>
                    )

                })}

                {/* 
            <div  className='im-co'>
                <img src={CT} alt="Image" className='image' style={{width:'100%'}} />
                <span className='image-card'>CT Scan</span>
            </div>
            <div  className='im-co'>
                <img src={CT} alt="Image" className='image' style={{width:'100%'}} />
                <span className='image-card'>CT Scan</span>
            </div>
            <div  className='im-co'>
                <img src={CT} alt="Image" className='image' style={{width:'100%'}}/>
                <span className='image-card'>CT Scan</span>
            </div>
            <div  className='im-co'>
                <img src={CT} alt="Image" className='image' style={{width:'100%'}} />
                <span className='image-card'>CT Scan</span>
            </div>
            <div className='im-co'>
                <img src={CT} alt="Image" className='image' style={{width:'100%'}} />
                <span className='image-card'>CT Scan</span>
            </div>
            <div  className='im-co'>
                <img src={CT} alt="Image" className='image' style={{width:'100%'}} />
                <span className='image-card'>CT Scan</span>
            </div> */}
            </div>
        </div>
    );
};

export default ImageGrid;
