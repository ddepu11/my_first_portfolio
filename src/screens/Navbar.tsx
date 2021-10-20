import { useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { IDirrerentRefs } from '../interfaces';

const Wrapper = styled.nav`
  padding: 20px 10px;
  justify-content: space-between;
  border-radius: 5px;
  position: relative;

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

  .ic_menu {
    position: absolute;
    right: 4px;
    font-size: 1.5em;
    display: none;

    &:hover {
      cursor: pointer;
    }
  }

  .links_outer_div {
    transition: height 250ms ease-in;
  }

  @media only screen and (max-width: 590px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0px;

    .links_inner_div ul {
      flex-direction: column;
      align-items: flex-start;

      li {
        margin-left: 0;
        width: 100%;

        margin: 1px 0;
        button {
          margin: 5px;
          width: 100%;
          padding: 7px 0;
          background-color: #2648d1;
        }
      }
    }

    .links_outer_div {
      height: 0;
      overflow: hidden;
      width: 100%;
    }

    .ic_menu {
      display: block;
    }
  }

  @media only screen and (min-width: 590px) {
    .links_outer_div {
      height: auto !important;
    }
  }
`;

const Navbar = ({ refs }: { refs: IDirrerentRefs }): JSX.Element => {
  const outerDiv = useRef<HTMLDivElement | null>(null);
  const innerDiv = useRef<HTMLDivElement | null>(null);

  const closeMenu = () => {
    if (outerDiv.current) {
      outerDiv.current.style.height = `0px`;
    }
  };

  const scrollToProjects = (): void => {
    closeMenu();
    if (refs.projectsRef.current) {
      refs.projectsRef.current.scrollIntoView({});
    }
  };

  const scrollToAbout = (): void => {
    closeMenu();

    if (refs.aboutRef.current) {
      refs.aboutRef.current.scrollIntoView();
    }
  };

  const scrollToConnect = (): void => {
    closeMenu();

    if (refs.connectRef.current) {
      refs.connectRef.current.scrollIntoView();
    }
  };

  const scrollToSkills = (): void => {
    closeMenu();

    if (refs.skillsRef.current) {
      refs.skillsRef.current.scrollIntoView();
    }
  };

  const handleToggleMenu = () => {
    const outerDivHeight = outerDiv.current?.getBoundingClientRect().height;
    const innerDivHeight = innerDiv.current?.getBoundingClientRect().height;

    if (outerDivHeight === 0 && outerDiv.current) {
      outerDiv.current.style.height = `${innerDivHeight}px`;
    } else {
      closeMenu();
    }
  };

  return (
    <Wrapper className='flex'>
      <div className='logo'>
        <Link to='/' className='text'>
          Deepanshu Tiwari
        </Link>
      </div>

      <div className='links_outer_div' ref={outerDiv}>
        <div className='links_inner_div' ref={innerDiv}>
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

      <AiOutlineMenu className='ic_menu' onClick={handleToggleMenu} />
    </Wrapper>
  );
};

export default Navbar;
