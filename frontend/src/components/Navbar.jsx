import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
    <nav className='d-flex justify-content-between align-items-center navbar '>
        <div className="logo px-5">
           <Link to='/' className='logo-link'>
           <h3>
                FITNESS
            </h3>
           </Link>
        </div>
        <div className="menus">
            <ul className='d-flex justify-content-center align-items-center gap-4 px-5'>
                <li>
                    <Link to='/training' className='menu' >Training</Link>
                </li>
                
                
                <li>
                    <Link to='/trainer' className='menu' >Trainer</Link>
                </li>
                <div className="">
                {localStorage.getItem('auth-token')
                ?
                <button className='login-btn' onClick={()=>{
                  localStorage.removeItem('auth-token');
                  navigate('/')}
                  }>LOGOUT</button>
                  :
                  <Link to='/login' ><button className='login-btn'>LOGIN</button></Link> 
                  }
                 
              </div>
            </ul>
        </div>
    </nav>
    </>
    
  )
}

export default Navbar