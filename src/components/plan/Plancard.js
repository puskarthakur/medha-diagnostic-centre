import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useDispatch } from "react-redux";
import addorder from '../../Actions/orderAction'
import './Plancard.css'
import { useNavigate } from "react-router-dom";



export default function Featurecard(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
    return (
        <div style={{marginLeft: '10px'}} >
 <Card sx={{ minWidth: 250}} className="box">
        <CardContent >
        <Typography gutterBottom variant="h5"  component="div">
        {props.title}
        </Typography>
        <Typography variant="subtitle2"  >
        {props.content}
        </Typography>
        <Typography variant="subtitle2"  className="price" >
        {props.price}
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small"  onClick={() => dispatch(addorder(props.title, props.title, 1))} variant="contained"  className='button plan-btn'  startIcon={<ShoppingCartOutlinedIcon />}>Add to Cart</Button>
        <Button size="small" onClick={()=>navigate('/details')} variant="contained"  className='button plan-btn' >Learn More</Button>
        
      </CardActions>
    </Card>
        </div>
    )
}