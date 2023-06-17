import React from "react";
import EventIcon from '@mui/icons-material/Event';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import './StaticCard.css'


export default function StaticCard() {

    const redirect=()=>{
      window.location.href="//api.whatsapp.com/send?phone=919602178333"
    }

    const navigate = useNavigate()
    return(
       
               <Card className="static-card">
        
                <CardActions className="static-btns static-action">
                    
                    <Button size="small"  variant="text"  className="static-btns"  onClick={()=> navigate('/appoint')}><EventIcon/>Book an <br></br> Appointment</Button>
                    <Button size="small"  variant="text"  className="static-btns" onClick={()=> navigate('/sample')}><EventIcon/>Home Sample <br></br> Collection</Button>
                    <Button size="small"  variant="text"  className="static-btns" onClick={redirect} ><WhatsAppIcon/>Chat on<br></br> Whatsapp</Button>
                
                </CardActions>
            </Card>
       
    )
}