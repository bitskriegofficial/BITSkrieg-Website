import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar" id="navbar">
      {/* <p id="logo">BITSkrieg</p> */}
      <img src="./bitskrieg_logo.png" alt="BITSkrieg Logo" id="logo" />
      <ul id="nav-menu">
        <Link className='nav-menu-item' style={{ textDecoration: 'none' }} to='/'>
          ~
        </Link>
        <li className="nav-separator">/</li>
        <Link className='nav-menu-item' style={{ textDecoration: 'none' }} to='/about'>
          About
        </Link>
        <li className="nav-separator">/</li>
        <Link className='nav-menu-item' style={{ textDecoration: 'none' }} to='/members'>
          Members
        </Link>
        <li className="nav-separator">/</li>
        <Link className='nav-menu-item' style={{ textDecoration: 'none' }} to='/contact'>
          Contact
        </Link>
      </ul>
    </div>
  )
}