import React from 'react'
import Wrapper from '../assets/wrappers/LandingPage'
import { Link } from 'react-router-dom'
import { Logo } from '../components'

const Contact = () => {
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
                <h2>Welcome to our Jobify contact page</h2>
                <p> Have questions, suggestions, or just want to say hello? We'd love to hear from you!</p>
                <Link to="https://forms.gle/yC2QULFFLr8J4Qa17" target='_blank' style={{ color: "white", fontWeight: "bolder" }}>   <button className='btn form-btn button'>Fill out this form</button></Link>
            </div>
        </Wrapper >
    )
}

export default Contact
