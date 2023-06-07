
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

import logo from './images/medha_logo.jpg'
import logoName from './images/medha_name_logo.jpg'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import WalletIcon from '@mui/icons-material/Wallet';
import { Button } from '@mui/material';
import { Search } from './Search';


const StyledAppbar = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#fafafa',
    display: 'flex',
    position: 'relative'

}));
const StyledTextButton = styled(Button)(({ theme }) => ({
    textTransform: 'capitalize',
    color: '#019a5d'

}));
const StyledButton = styled(Button)(({ theme }) => ({
    position: 'absolute',
    left: '46%',
    backgroundColor: '#019a5d',

}));
const StyledIconButton = styled(IconButton)(({ theme }) => ({

    color: '#019a5d',

}));





const IconWrapper = styled('div')(({ theme }) => ({
    position: 'absolute',
    right: '1rem',
    display: 'flex',
    flexDirection: 'row',

}));


export default function header() {
    return (
        <div>
            <StyledAppbar position="static">
                <Toolbar>
                    <img src={logo} alt="logo" style={{ width: "5%" }}></img>
                    <img src={logoName} alt="logo" style={{ width: "12%" }}></img>
                    <Search></Search>
                    <StyledButton size="small" variant='contained'>MEDHA ADVANTAGE PLAN</StyledButton>
                    <IconWrapper>

                        <StyledTextButton size="small">Upload Prescription</StyledTextButton>
                        <StyledTextButton size="small">Download Reports</StyledTextButton>

                        <StyledIconButton aria-label="delete">
                            <ShoppingCartOutlinedIcon />
                        </StyledIconButton>
                        <StyledIconButton aria-label="delete" >
                            <WalletIcon />
                        </StyledIconButton>
                    </IconWrapper>


                </Toolbar>
            </StyledAppbar>

        </div>

    );
}