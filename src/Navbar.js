import * as React from 'react';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PersonIcon from '@mui/icons-material/Person';
import './styles/Navbar.css';


// const pages = ['Home', 'About Us', 'Tests/Packages', 'Services', 'Partner with us', 'Why Medha'];

const navroute = [
  {
    name: 'Home',
    path: '/home'
  },
  {
    name: 'About us',
    path: '/about'
  },
  {
    name: 'Tests/Packages',
    path: '/tests'
  },
  {
    name: 'Services',
    path: '/services'
  },
  {
    name: 'Partner with us',
    path: '/partner'
  },
  {
    name: 'Why Medha',
    path: '/medha'
  }

]


export function Navbar() {
  return (
    <div id="menu">
      <ul className='bar'>

        {navroute.map((page) => (
          <li key={page.name}
          >{page.name} </li>
        ))}
        <div>
          <Button startIcon={<PhoneIcon />}>7849930383</Button>
          <Button startIcon={<WhatsAppIcon />}>67388399399</Button>
          <Button startIcon={<PersonIcon />}>Sign in</Button>
        </div>

      </ul>
    </div>
  );
}


