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

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#019a5d',
      margin: '8px'
  }));
  
  const StyledCardActions = styled(CardActions)(({ theme }) => ({
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-between',
  }));
  const StyledTypography = styled(Typography)(({ theme }) => ({
textAlign:'center'
  }));
  



function Booktest(){
    return(
    
        
           <Card>
        <CardContent>
          <StyledTypography variant="h5" component="div">
            Book a Online Test
          </StyledTypography>
     
        </CardContent>
        <StyledCardActions>
         <Search></Search>
          <StyledButton size="small" variant='contained'>Packages</StyledButton>
          <StyledButton size="small" variant='contained'>MEDHA ADVANTAGE PLAN</StyledButton>
        </StyledCardActions>
        </Card>
      

  
    )
}

export default Booktest;