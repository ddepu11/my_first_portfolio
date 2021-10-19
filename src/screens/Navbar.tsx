import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IDirrerentRefs } from '../interfaces';

const Wrapper = styled.nav`
  padding: 20px 10px;
  justify-content: space-between;

  border-radius: 5px;

  .logo {
    .text {
      font-size: 1em;
      font-weight: 300;
    }
  }

  .links_inner_div ul li {
    margin-left: 20px;
  }

  .links_inner_div ul li button {
    font-size: 1em;
    font-weight: 300;
    background: transparent;
    color: #ffffff;
    transition: all 0.25s ease-in;
    padding: 5px 10px;
    border-radius: 5px;

    &:hover {
      background-color: #2648d1;
    }
  }
`;

const Navbar = ({ refs }: { refs: IDirrerentRefs }): JSX.Element => {
  const scrollToProjects = (): void => {
    if (refs.projectsRef.current) {
      refs.projectsRef.current.scrollIntoView({});
    }
  };

  const scrollToAbout = (): void => {
    if (refs.aboutRef.current) {
      refs.aboutRef.current.scrollIntoView();
    }
  };

  const scrollToConnect = (): void => {
    if (refs.connectRef.current) {
      refs.connectRef.current.scrollIntoView();
    }
  };

  const scrollToSkills = (): void => {
    if (refs.connectRef.current) {
      refs.connectRef.current.scrollIntoView();
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
              <button type='button' onClick={scrollToProjects}>
                Projects
              </button>
            </li>

            <li>
              <button type='button' onClick={scrollToAbout}>
                About
              </button>
            </li>

            <li>
              <button type='button' onClick={scrollToSkills}>
                Skills
              </button>
            </li>

            <li>
              <button type='button' onClick={scrollToConnect}>
                Connect
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
