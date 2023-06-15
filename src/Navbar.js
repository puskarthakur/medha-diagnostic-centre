import React, { useState } from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PersonIcon from '@mui/icons-material/Person';
import './styles/Navbar.css';
// import { useNavigate } from 'react-router-dom';




export function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  // const navigate = useNavigate()
  return (

    <div>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light">

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/tests">Tests/Packages</a>
          </li>
          <li className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}>
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" onClick={toggleDropdown} aria-haspopup="true" aria-expanded={isDropdownOpen ? 'true' : 'false'}>
              Services
            </a>
            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/check">Health Check-ups</a>
              <a className="dropdown-item" href="/diagnos">Diagnostic Services</a>
              <a className="dropdown-item" href="care">Home HealthCare</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/partner">Partner With US</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Why Medha</a>
          </li>
          <div style={{display: 'flex', position: 'absolute', right: '2rem'}}>
          <li className="nav-item">
   
   <a className="nav-link" href="#"><span className='px-2'><LocalPhoneIcon/></span>9886753345</a>
 </li>
 <li className="nav-item">

<a className="nav-link" href="#"><span className='px-2'><WhatsAppIcon/></span>9886753345</a>
</li>
<li className="nav-item">

<a className="nav-link" href="#"><span className='px-2'><PersonIcon/></span>Sign In</a>
</li>
          </div>
  
        </ul>
      </div>
    </nav>
    </div>
  );

}


