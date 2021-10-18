import { FC } from 'react';
import styled from 'styled-components';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';

const Wrapper = styled.main``;

const Home: FC = (): JSX.Element => {
  return (
    <Wrapper>
      <Hero />

      <About />

      <Projects />
    </Wrapper>
  );
};

export default Home;
