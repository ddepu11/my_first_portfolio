import { FC, useRef } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../screens/Navbar';
import Home from '../screens/Home';
import { IDirrerentRefs } from '../interfaces';

const Wrapper = styled.main`
  padding: 00px 15px 3em;
`;

const App: FC = (): JSX.Element => {
  const refs: IDirrerentRefs = {
    projectsRef: useRef(null),
    aboutRef: useRef(null),
    connectRef: useRef(null),
    skillsRef: useRef(null),
  };

  return (
    <Wrapper className='w-1150'>
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
