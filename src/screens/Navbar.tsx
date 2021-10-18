import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.nav`
  justify-content: space-between;
  padding: 20px 0;

  .logo {
    .text {
      font-size: 1em;
    }
  }

  .links_inner_div ul li {
    margin-left: 30px;
  }

  .links_inner_div ul li a {
    font-size: 1em;
    font-weight: 400;
  }
`;

const Navbar = () => {
  return (
    <Wrapper className='flex'>
      <div className='logo'>
        <Link to='/' className='text'>
          DT
        </Link>
      </div>

      <div className='links_outer_div'>
        <div className='links_inner_div'>
          <ul className='flex'>
            <li>
              <Link to='/'>Work</Link>
            </li>

            <li>
              <Link to='/'>About</Link>
            </li>

            <li>
              <Link to='/'>Connect</Link>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
