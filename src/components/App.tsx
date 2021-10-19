import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Navbar from '../screens/Navbar';
import Home from '../screens/Home';
import { IDirrerentRefs } from '../interfaces';

const Wrapper = styled.main`
  padding: 00px 15px 3em;
  position: relative;

  .scroll_to_top {
    position: fixed;
    bottom: 5px;
    left: 50%;
    display: grid;
    place-items: center;
    z-index: 5;

    &:hover {
      cursor: pointer;
    }

    .icon {
      font-size: 1.8em;
      background: #aaa;
      border-radius: 50%;
      color: #242424;
    }
  }
`;

const App: FC = (): JSX.Element => {
  const refs: IDirrerentRefs = {
    projectsRef: useRef(null),
    aboutRef: useRef(null),
    connectRef: useRef(null),
    skillsRef: useRef(null),
  };

  const [showIcon, setShowScrollIcon] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 400) {
        setShowScrollIcon(true);
      } else {
        setShowScrollIcon(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <Wrapper className='w-1150'>
      {showIcon && (
        <div className='scroll_to_top'>
          <ArrowUpwardIcon
            className='icon'
            onClick={() => window.scrollTo({ top: 0 })}
          />
        </div>
      )}

      <Router>
        <Navbar refs={refs} />

        <Route path='/'>
          <Home refs={refs} />
        </Route>
      </Router>
    </Wrapper>
  );
};

export default App;
