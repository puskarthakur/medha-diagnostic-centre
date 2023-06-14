import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Featurecard(props) {
    return (
        <div style={{padding: '10px 25px'}}>
 <Card sx={{ maxWidth: 350 }}>
      <CardContent >
        <Typography gutterBottom variant="h5"  component="div">
        {props.title}
        </Typography>
        <Typography variant="subtitle2"  >
        {props.content}
        </Typography>
        <Typography variant="subtitle2"  >
        {props.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained"  className='button' startIcon={<ShoppingCartOutlinedIcon />}>Add to Cart</Button>
      </CardActions>
    </Card>
        </div>
    )
}