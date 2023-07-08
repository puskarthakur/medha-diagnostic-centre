import * as React from 'react';
import { styled } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Search from '../search/Search'
import Card from '@mui/material/Card';
import './Booktest.css'
import { useNavigate } from 'react-router-dom';



const StyledCardActions = styled(CardActions)(({ theme }) => ({
    display: 'flex !important',
    flexDirection: 'column',
    justifyContent: 'space-between !important',
    marginBottom: '8px'
}));
const StyledTypography = styled(Typography)(({ theme }) => ({
    textAlign: 'center'
}));

const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: '13px'
}));


function Booktest() {
    const navigate = useNavigate()

   const handleClick=()=>{
       navigate('/plan')
    }

    return (

        <div className='card'>
            <Card >
                <CardContent>
                    <StyledTypography variant="h6" component="div">
                        Book a Online Test
                    </StyledTypography>

                </CardContent>
                <StyledCardActions>
                    <Search></Search>
                    <StyledButton size="small" variant='contained' className='button'>Packages</StyledButton>
                    <StyledButton size="small" onClick={handleClick} variant='contained' className='button'>MEDHA ADVANTAGE PLAN</StyledButton>
                </StyledCardActions>
            </Card>

        </div>

    )
}

export default Booktest;