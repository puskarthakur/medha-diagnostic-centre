import React from "react";
import EventIcon from '@mui/icons-material/Event';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
// import CardContent from '@mui/material/CardContent';
import { useNavigate } from "react-router-dom";


export function StaticCard() {
    const navigate = useNavigate()
    return(
       
               <Card className="static">
        
                <CardActions className="verticalText-btn staticcard">
                    
                    <Button size="small"  variant="text"  className="verticalText-btn"  onClick={()=> navigate('/appoint')}><EventIcon/>Book an <br></br> Appointment</Button>
                    <Button size="small"  variant="text"  className="verticalText-btn" onClick={()=> navigate('/sample')}><EventIcon/>Home Sample <br></br> Collection</Button>
                    <Button size="small"  variant="text"  className="verticalText-btn"><WhatsAppIcon/>Chat on<br></br> Whatsapp</Button>
                </CardActions>
            </Card>
       
    )
}