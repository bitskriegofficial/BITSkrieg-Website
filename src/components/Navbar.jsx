import {Link} from 'react-scroll'

export default function Navbar(){
    return(
        <div className="navbar" id="navbar">
          {/* <p id="logo">BITSkrieg</p> */}
          <img src="./bitskrieg_logo.png" alt="BITSkrieg Logo" id="logo" />
          <ul id="nav-menu">
            <li id="nav-home">
              <Link to='hero' smooth={true} offset={-100} duration={500}>~</Link>
            </li>
            <li id="nav-separator">/</li>
            <li id="nav-about">
              <Link to='about-section' smooth={true} offset={-75} duration={500}>About</Link>
            </li>
            <li id="nav-separator">/</li>
            <li id="nav-members">
              <Link to='members-section' smooth={true} offset={-75} duration={500}>Members</Link>
            </li>
            <li id="nav-separator">/</li>
            <li id="nav-contact">
              <Link to='contact-section' smooth={true}  offset={-75} duration={500}>Contact</Link>
            </li>
          </ul>
      </div>
    )
}