import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from "../assets/images/main.svg"
import logo from "../assets/images/logo.svg"



const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <img src={logo} alt="jobify" className='logo' />
            </nav>
        </Wrapper>
    );
};

const StyledButton = styled.button`
  background-color: red;
  color: white;
`;
export default Landing;