import React from 'react'
import CatergoryImg1 from '../assets/images/3d-gym-equipment (1).jpg'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <div className="row">
    
    <div className='col-12 text-center home d-flex flex-column gap-2 justify-content-center align-items-center '>
      <h1>BE GREATER</h1>
      <h4>Build Your Body With Us</h4>
      <Link to='#body-wrapper' className='get-started-btn'>Get Started</Link>
    </div>
   
    </div>
    
    <div id='body-wrapper' className="  category-cards d-flex justify-content-around  ">
      <div className=" col-4 cat-card bc1 d-flex flex-column align-items-center justify-content-center">
        <h2>Fitness Training</h2>
        
        <Link to='/training' className='card-btn'>Get Started</Link>
      </div>
      
      <div className=" col-4  cat-card bc3 d-flex flex-column align-items-center justify-content-center">
        <h2>Fitness Trainers</h2>
        
        <Link to='/trainer' className='card-btn'>Get Started</Link>
      </div>
    </div>
    <div className="contact-wrapper d-flex flex-column  justify-content-center gap-3 align-items-start">
      <h1>Get Your <br /> Personal Trainer</h1>
      <Link to='/trainer' className='contact-btn'>More Details</Link>
    </div>
    
    
    </>
   
  )
}

export default Home