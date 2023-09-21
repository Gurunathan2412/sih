import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <section className='sec-main'>
  <nav className="header-nav">
        <div className="branding">
           <img src="https://res.cloudinary.com/dcsduqstu/image/upload/v1695031087/Color_logo_-_no_background_hfvp6n.png" alt=""/>
        </div>
        <div className="nav-buttons">
            <Link to=""><p className="nav-btn">Home</p></Link>
            <Link to="/chatbot"><p className="nav-btn">Chatbot</p></Link>
        <Link to="http://localhost:3000"><p class="nav-btn">Dashboard</p></Link>
            <Link to=""><p className="nav-btn">Login</p></Link>
        </div>    
    </nav>
  <div class="overlay"></div>
  <video src="https://res.cloudinary.com/dcsduqstu/video/upload/v1695020848/pexels_videos_1851190_2160p_wnl1x7.mp4" autoPlay loop muted></video>
  <div class="txt">
    <h1 className="heading">POWER GPT</h1>
    <p className="description">Intelligent Chatbot for Substation Asset Maintenance. Enhance efficiency with instant guidance, safety compliance, and troubleshooting support...</p>
    <button className='login-btn'>LOGIN</button>
  </div>
</section>
  )
}

export default Home