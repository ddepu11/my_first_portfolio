import { FC } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../screens/Navbar';
import Home from '../screens/Home';

const Wrapper = styled.main`
  padding: 00px 10px;
`;

const App: FC = (): JSX.Element => {
  return (
    <Wrapper className='w-960'>
      <Router>
        <Navbar />

        <Route path='/'>
          <Home />
        </Route>
      </Router>
    </Wrapper>
  );
};

export default App;
