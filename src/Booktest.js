import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Search from './Search';
import Card from '@mui/material/Card';



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
                    <StyledButton size="small" variant='contained' className='btn'>Packages</StyledButton>
                    <StyledButton size="small" variant='contained' className='btn'>MEDHA ADVANTAGE PLAN</StyledButton>
                </StyledCardActions>
            </Card>

        </div>

    )
}

export default Booktest;