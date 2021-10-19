import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.nav`
  justify-content: space-between;
  padding: 20px 0;

  .logo {
    .text {
      font-size: 1em;
      font-weight: 300;
    }
  }

  .links_inner_div ul li {
    margin-left: 30px;
  }

  .links_inner_div ul li button {
    font-size: 1em;
    font-weight: 300;
    background: transparent;
    color: #ffffff;
  }
`;

const Navbar = (): JSX.Element => {
  return (
    <Wrapper className='flex'>
      <div className='logo'>
        <Link to='/' className='text'>
          Deepanshu Tiwari
        </Link>
      </div>

      <div className='links_outer_div'>
        <div className='links_inner_div'>
          <ul className='flex'>
            <li>
              <button type='button'>Projects</button>
            </li>

            <li>
              <button type='button'>About</button>
            </li>

            <li>
              <button type='button'>Connect</button>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
