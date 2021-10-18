import styled from 'styled-components';
import Hero from './Hero';
import About from './About';

const Wrapper = styled.main``;

const Home = () => {
  return (
    <Wrapper>
      <Hero />

      <About />
    </Wrapper>
  );
};

export default Home;
