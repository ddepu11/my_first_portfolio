import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IDirrerentRefs } from '../interfaces';

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

const Navbar = ({ refs }: { refs: IDirrerentRefs }): JSX.Element => {
  const scrollToProjects = (): void => {
    if (refs.projectsRef.current) {
      refs.projectsRef.current.scrollIntoView();
    }
  };

  const scrollToAbout = (): void => {
    if (refs.aboutRef.current) {
      refs.aboutRef.current.scrollIntoView();
    }
  };

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
              <button
                type='button'
                data-ref='projects'
                onClick={scrollToProjects}
              >
                Projects
              </button>
            </li>

            <li>
              <button type='button' data-ref='about' onClick={scrollToAbout}>
                About
              </button>
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
