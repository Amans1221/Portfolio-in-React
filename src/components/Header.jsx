import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"

const Header = ({setMenuOpen, menuOpen}) => {
  return (
    <>
  <nav>
    <NavContent />
    
  </nav>
    <button className='navBtn' onClick={()=>setMenuOpen(!menuOpen)}>
    <AiOutlineMenu />
  </button>
    
    </>
  )
};

export const HeaderPhone =({menuOpen ,setMenuOpen})=> {
  return(
    <div className={`navPhone ${menuOpen?"navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  )
}

 const NavContent = ({setMenuOpen}) => (
  <>
 <h2>
    Aman.
  </h2>
  <div>
    <a onClick={()=>setMenuOpen(false)} href="#home">Home</a>
    <a onClick={()=>setMenuOpen(false)} href="#work">Work</a>
    <a onClick={()=>setMenuOpen(false)} href="#experince">Experince</a>
    <a onClick={()=>setMenuOpen(false)} href="#service">Services</a>
    <a onClick={()=>setMenuOpen(false)}href="#testimonial">Testimonial</a>
    <a onClick={()=>setMenuOpen(false)}href="#contact">Contact</a>
  </div>
  <a href="mailto:aman@gmail.com">
    <button>
      Email
    </button>
  </a>

  </>
)

export default Header;