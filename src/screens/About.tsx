import styled from 'styled-components';

const Wrapper = styled.main`
  justify-content: space-between;
  border: 1px dashed #a5a5a5;
  /* height: 85vh; */

  .left {
  }

  .right {
  }
`;

const About = () => {
  return (
    <Wrapper className='flex'>
      <div className='left'>a</div>

      <div className='right'>a</div>
    </Wrapper>
  );
};

export default About;
