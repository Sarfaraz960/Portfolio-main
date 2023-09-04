import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me3.jpg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
<div className="container header__container">
<h5>Hello I'm</h5>
<h1>Sarfaraz Iqbal M</h1>
<h4 className="text-light"><marquee behavior="scroll" direction="right" scrollamount="18">Fullstack Developer</marquee></h4>
<CTA/>
<HeaderSocials/>
<div className='me'>
<img src={ME} alt="me" id="a" />

</div>
<a href="#contact" className='scroll__down'>Scroll Down</a>
</div>

      
    </header>
  )
}

export default Header