import * as React from 'react';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PersonIcon from '@mui/icons-material/Person';
import './Navbar.css';


const pages = ['Home', 'About Us', 'Tests/Packages', 'Services', 'Partner with us', 'Why Medha'];


export function Navbar() {



  return (
    <div>
      <div id="menu">
        <ul className='navbar'>

          {pages.map((page) => (
            <li key={page}
            >{page}</li>
          ))}
          <Button startIcon={<PhoneIcon />}>7849930383</Button>
          <Button startIcon={<WhatsAppIcon />}>67388399399</Button>
          <Button startIcon={<PersonIcon />}>Sign in</Button>

        </ul>
      </div>

    </div>

  );
}


