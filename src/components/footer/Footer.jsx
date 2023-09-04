import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {CiLinkedin} from 'react-icons/ci'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'></a>
      <ul className="permalinks">

<li> <a href="#">Home</a></li>
<li> <a href="#about">About</a></li>
<li> <a href="#experience">MySkills</a></li>
<li> <a href="#portfolio">Projects</a></li>
<li> <a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
<a href="https://facebook.com"><AiFillFacebook className="mom"/></a>
<a href="https://github.com/Sarfaraz960?tab=repositories"><FaGithub/></a>
<a href="https://instagram.com"><FiInstagram className="dad"/></a>
<a href="https://www.linkedin.com/in/sarfaraziqbal18"><CiLinkedin className="bro"/></a>



      </div>
<div className="footer__copyright">
<small>
  &copy;Sarfaraz Portfolio
</small>
</div>

    </footer>
  )
}

export default Footer