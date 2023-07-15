import React from 'react';
import './TeamGrid.css'; // CSS file for styling
import CT from '../../images/CT.jpg';
import MRI from '../../images/MRI.jpg';
import TET from  '../../images/TET.jpg';
import EEG from  '../../images/EEG.jpg';





const TeamGrid = (images) => {
    return (
        <div className='px-4'>
            <h5 >Medha Team</h5>
        <div className='container-fluid'>
            {images.images.map((i,index)=>{
            return(
                <div className='team-card'>
                <img src={i.img} className='image' style={{width:'100%'}}/>
                <p className='my-2 text'>{i.name}</p>
            </div>
            )
            })}
     
        {/* <div className='team-card'>
            <img src={EEG} className='image ' style={{width:'100%'}}/>
            <p className='my-2 text'>DR RAO</p>
        </div>
        <div className='team-card'>
            <img src={EEG} className='image' style={{width:'100%'}}/>
              <p className='my-2 text'>DR RAO</p>
        </div>
        <div className='team-card'>
            <img src={EEG} className='image' style={{width:'100%'}}/>
              <p className='my-2 text'>DR RAO</p>
        </div>
        <div className='team-card'>
            <img src={EEG} className='image' style={{width:'100%'}}/>
              <p className='my-2 text'>DR RAO</p>
        </div> */}
   
        </div>
        </div>
    );
};

export default TeamGrid;
