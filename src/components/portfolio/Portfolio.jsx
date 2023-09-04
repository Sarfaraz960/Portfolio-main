import React from 'react'
import './portfolio.css'
import {FaGithub} from 'react-icons/fa'
import ME from '../../assets/Clock.png'
import ME1 from '../../assets/Calculator.png'
import ME2 from '../../assets/Calendar.png'
import ME3 from '../../assets/ToDoList.png'
import ME4 from '../../assets/Netflix.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <div className='head'>
        <h2 className='car'><a href="https://github.com/Sarfaraz960/Portfolio.git" className='seeta'>My Projects <FaGithub/> </a></h2>
        </div>
       

        <div className='mom'>

<div className="border">
<div className='card1'>
  <div className="login">
  <a href="https://steady-rugelach-1a6347.netlify.app"><img src={ME4} alt="me" className='god'/></a>
 
  </div>
  <h3 className='bike'>Netflix</h3>

</div>
</div>

<div className="border">
<div className='card1'>
  <div className="login">
  <a href="https://astounding-travesseiro-e837a2.netlify.app/"><img src={ME1} alt="me" className='god'/></a>
  </div>
 <h3 className='bike'>Calculator</h3>
</div>
</div>

<div className="border">
<div className='card1'>
  <div className="login">
  <a href="https://benevolent-wisp-29ded9.netlify.app/"><img src={ME3} alt="me" className='god'/></a>
  </div>
 <h3 className='bike'>Todo App</h3>

</div>
</div>

<div className="border">
<div className='card1'>
  <div className="login">
  <a href="https://resonant-moxie-a1cc77.netlify.app/"><img src={ME2} alt="me" className='god'/></a>
  </div>
 <h3 className='bike'>Calendar </h3>
</div>
</div>

<div className="border">
<div className='card1'>
  <div className="login">
  <a href="https://magnificent-paletas-3ed80c.netlify.app/"><img src={ME} alt="me" className='god'/></a>
  </div>
 <h3 className='bike'>Clock</h3>

</div>
</div>
</div>
</section>
  )
}

export default Portfolio