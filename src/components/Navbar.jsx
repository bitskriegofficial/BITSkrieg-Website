import { Link } from 'react-router-dom'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useState } from 'react';

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <div className="navbar" id="navbar">
      <div className='navbar-icon-container'>
        <img style={{ opacity: window.location.pathname === "/" ? 0 : 100 }} src="./bitskrieg_logo.png" alt="BITSkrieg Logo" id="logo" />
        <div className='menu-icon' onClick={(e) => setOpen(!open)}>
          {open ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
        </div>
      </div>
      <ul className='nav-menu-mobile' style={{display:open?"flex":"none"}}>
        <Link className='nav-menu-item' style={{ textDecoration: 'none' }} to='/'>
          ~
        </Link>
        <Link className='nav-menu-item' style={{ textDecoration: 'none' }} to='/about'>
          /About
        </Link>

        <Link className='nav-menu-item' style={{ textDecoration: 'none' }} to='/archives'>
          /Archives
        </Link>
        <Link className='nav-menu-item' style={{ textDecoration: 'none' }} to='/contact'>
          /Contact
        </Link>
      </ul>
      <ul id="nav-menu">
        <Link className='nav-menu-item' style={{ textDecoration: 'none' }} to='/'>
          ~
        </Link>
        <li className="nav-separator">/</li>
        <Link className='nav-menu-item' style={{ textDecoration: 'none' }} to='/about'>
          About
        </Link>
        <li className="nav-separator">/</li>
        <Link className='nav-menu-item' style={{ textDecoration: 'none' }} to='/archives'>
          Archives
        </Link>
        <li className="nav-separator">/</li>
        <Link className='nav-menu-item' style={{ textDecoration: 'none' }} to='/contact'>
          Contact
        </Link>
      </ul>
    </div>
  )
}