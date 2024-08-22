import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    
    <div className="footer-section">
    <div className='footer d-flex justify-content-evenly '>
        <div className="footer-logo">FITNESS</div>
        <div className="footer-title">
            <h4>Training</h4>
            <p>Begineer</p>
            <p>Amature</p>
            <p>Pro</p>
        </div>
        <div className="footer-title">
            <h4>Challenges</h4>
            <p>7 Days</p>
            <p>30 Days</p>
            
        </div>
        <div className="footer-title">
            <h4>Guides</h4>
            <p>Begineer</p>
            <p>Amature</p>
            <p>Pro</p>
            
        </div>
        <div className="footer-title">
            <h4>Trainers</h4>
            <h4>About Us</h4>
            <h4>Contact Us</h4>
            
            
            
        </div>
        
    </div>
    <div className="social-medias pt-3 d-flex justify-content-center align-items-center">
            <ul className='d-flex justify-content-between gap-4 align-items-center'>
                <li><FaInstagram className=' s-btn fs-3'/></li>
                <li><FaFacebook className='  s-btn fs-3'/></li>
                <li><FaLinkedin className=' s-btn fs-3'/></li>
                <li><FaXTwitter className=' s-btn fs-3'/></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Footer