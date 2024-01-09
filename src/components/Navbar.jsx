import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar" id="navbar">
      <img style={{opacity:window.location.pathname==="/"?0:100}} src="./bitskrieg_logo.png" alt="BITSkrieg Logo" id="logo" />
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