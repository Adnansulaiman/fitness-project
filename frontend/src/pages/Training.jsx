import React from 'react'
import { Link } from 'react-router-dom'

const Training = () => {
  return (
    <>
    <div className="training-section d-flex justify-content-center align-items-center">
    <div className="  category-cards d-flex justify-content-around  ">
      <div className=" cat-card training-card bc4 d-flex flex-column align-items-center justify-content-center">
        <h2 >Begineer Level</h2>
        <Link to='/begineer-training' className='card-btn'>Get Started</Link>
      </div>
      <div className=" cat-card training-card bc5 d-flex flex-column align-items-center justify-content-center">
        <h2>Amateur Level</h2>
        <Link to='/amateur-training' className='card-btn'>Get Started</Link>
      </div>
      <div className=" cat-card training-card bc6 d-flex flex-column align-items-center justify-content-center">
        <h2>Pro Level</h2>
        <Link to='/pro-training' className='card-btn'>Get Started</Link>
      </div>
    </div>
    </div>
    </>
  )
}

export default Training