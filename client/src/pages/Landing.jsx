import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';


const Landing = () => {
  return (
    <Wrapper>
      <nav className='navbar'>
        <Link to="/"> <Logo /></Link>
        <div className="nav"><ul>
          <li><Link to="/about" className='btn about'>About</Link></li>
          <li><Link to="/contact" className='btn about'>Contact Us</Link></li>
        </ul></div>
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Need a job ? You are in the right place. Get started by clicking in either of the links below:
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn '>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
