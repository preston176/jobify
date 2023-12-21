import React from 'react'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <Wrapper>
            <nav className='navbar'>
                <Logo />
                <div className="nav"><ul>
                    <li><Link to="/about" className='btn about'>About</Link></li>
                </ul></div>
            </nav>
            <div className="container page">
                <h3>Welcome to Jobify
                </h3>
                <h4>
                    {/* empty */}
                </h4>
                <p>At Jobify, we believe in connecting talent with opportunities. We are a dedicated team of professionals passionate about creating a seamless and efficient platform for both job seekers and employers. Our mission is to empower individuals to find their dream jobs and businesses to discover top-notch talent.
                </p>
                <button className='btn'><Link to="/">Get Started!</Link></button>
                <p>Join Jobify today and take the next step in your professional journey. Whether you are seeking exciting career opportunities or looking to hire top talent, we ve got you covered.
                </p>
            </div>
        </Wrapper>
    )
}

export default About
