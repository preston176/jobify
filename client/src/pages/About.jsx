import React from 'react'
import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'
import main from '../assets/images/main.svg';

const About = () => {
    return (
        <Wrapper>
            <nav className='navbar'>
                <Link to="/"> <Logo /></Link>
                <div className="nav"><ul>
                    <li><Link to="/about" className='btn about'>About</Link></li>
                    <li><Link to="/contact" className='btn about'>Contact Us</Link></li>
                </ul></div>
            </nav>
            <div className="container">
                <h3>Welcome to Jobify</h3>
                <div> <img src={main} alt='job hunt' style={{ width: "20rem" }} className='img main-img' /></div>

                <p>At Jobify, we believe in connecting talent with opportunities. We are a dedicated team of professionals passionate about creating a seamless and efficient platform for both job seekers and employers. Our mission is to empower individuals to find their dream jobs and businesses to discover top-notch talent.
                </p>
                <Link to="/" style={{ color: "white", fontWeight: "bolder" }}>     <button className='btn'>Get Started!</button></Link>
                <p>Join Jobify today and take the next step in your professional journey. Whether you are seeking exciting career opportunities or looking to hire top talent, we ve got you covered.
                </p>
            </div>
        </Wrapper>
    )
}

export default About
