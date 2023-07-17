import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Featurecard'

export default function Featurecard(props) {
    return (
        <div style={{padding: '10px'}}>
<Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="110"
          width="80"
          image={props.image}
          alt="green iguana"
        /> */}
        <img src={props.image} width={50} height={50} alt="medhaImages"></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
         {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
    )
}