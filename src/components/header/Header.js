
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import logo from '../../images/medha_logo.jpg'
import logoName from '../../images/medha_name_logo.jpg'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import WalletIcon from '@mui/icons-material/Wallet';
import { Button } from '@mui/material';
import { Search } from '../search/Search';
import UploadIcon from '@mui/icons-material/Upload';
import DownloadIcon from '@mui/icons-material/Download';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';


const StyledAppbar = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#fafafa',
    display: 'flex'
    // position: 'fixed',
    // top:'31px'

}));
const StyledTextButton = styled(Button)(({ theme }) => ({
    textTransform: 'capitalize',
    color: '#019a5d'

}));
// const StyledButton = styled(Button)(({ theme }) => ({
//     "MuiButton-root:hover": {
//         backgroundColor: 'none !important'
//       },
//     backgroundColor: '#019a5d',


// }));
const StyledIconButton = styled(IconButton)(({ theme }) => ({

    color: '#019a5d',

}));





// const IconWrapper = styled('div')(({ theme }) => ({
//     position: 'absolute',
//     right: '1rem',
//     display: 'flex',
//     flexDirection: 'row',

// }));


export default function Header() {
  const cartno =   useSelector((state)=>state.order.noOfItems)
    const navigate = useNavigate()
    const pri = () =>{
        console.log({cartno})
    }
    return (

        <StyledAppbar position="fixed" sx={{ top: '64px' }}>
            <Toolbar>
                <Grid style={{ alignItems: "center" }} container spacing={1}>
                    <Grid item md={2}>
                        <img src={logo} alt="logo" style={{ width: "25%" }}></img>
                        <img src={logoName} alt="logo" style={{ width: "60%" }}></img>
                    </Grid>
                    <Grid item md={3}>
                        <Search></Search>
                    </Grid>
                    <Grid item md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button size="small" variant='contained' className='button' onClick={() => navigate('/plan')}>MEDHA ADVANTAGE PLAN</Button>
                    </Grid>


                    <Grid item md={3}>
                        <StyledTextButton size="small" startIcon={<UploadIcon />} onClick={() => navigate('/upload')}>Upload Prescription</StyledTextButton>
                        <StyledTextButton size="small" startIcon={<DownloadIcon />} >Download Reports</StyledTextButton>
                    </Grid>
                    <Grid item md={1}>
                        <StyledIconButton aria-label="delete" onClick={() => navigate('/cart')}>
                            <Badge ba badgeContent={cartno}  color="error">
                                <ShoppingCartOutlinedIcon  />
                            </Badge>
                        </StyledIconButton>
                        <StyledIconButton aria-label="delete" onClick={pri()} >
                            <WalletIcon />
                        </StyledIconButton>
                    </Grid>
                </Grid>

            </Toolbar>
        </StyledAppbar>



    );
}