import styled from 'styled-components';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import { IDirrerentRefs } from '../interfaces';

const Wrapper = styled.main``;

const Home = ({ refs }: { refs: IDirrerentRefs }): JSX.Element => {
  return (
    <Wrapper>
      <Hero />

      <About ref={refs.aboutRef} />

      <Projects ref={refs.projectsRef} />
    </Wrapper>
  );
};

export default Home;
