import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Search from './Search';

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#019a5d',
      
  }));
  
  const StyledCardActions = styled(CardActions)(({ theme }) => ({
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-between',
  }));
  



function Booktest(){
    return(
    
        <div style={{textAlign: 'center'}}>
        <CardContent>
          <Typography variant="h5" component="div">
            Book a Online Test
          </Typography>
     
        </CardContent>
        <StyledCardActions>
         <Search></Search>
          <StyledButton size="small" variant='contained'>Packages</StyledButton>
          <StyledButton size="small" variant='contained'>MEDHA ADVANTAGE PLAN</StyledButton>
        </StyledCardActions>
      </div>

  
    )
}

export default Booktest;