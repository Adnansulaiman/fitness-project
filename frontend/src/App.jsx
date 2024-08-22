import {BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Trainer from './pages/Trainer'
import Training from './pages/Training'
import BegineerTraining from './pages/BeginnerTraining'
import ProTraining from './pages/ProTraining'
import AmateurTraining from './pages/AmateurTraining'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <div className='fitness'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/trainer' element={<Trainer/>}/>
      <Route path='/training' element={<Training/>}/>
      <Route path='/begineer-training' element={<BegineerTraining/>}/>
      <Route path='/pro-training' element={<ProTraining/>}/>
      <Route path='/amateur-training' element={<AmateurTraining/>}/>
      
    </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
