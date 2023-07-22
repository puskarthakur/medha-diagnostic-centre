import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Featurecard.css'

export default function Featurecard(props) {
    return (
        <div style={{padding: '10px'}}>
<Card sx={{ maxWidth: 170, borderRadius: "18px"}}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="110"
          width="80"
          image={props.image}
          alt="green iguana"
        /> */}
        <div style={{position:"relative", left:"33%", paddingTop:"8px"}}>
        <img src={props.image} width={50} height={50} alt="medhaImages"></img>
        </div>
       
        <CardContent  className="card-text">
         
         {props.content}
       
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
    )
}