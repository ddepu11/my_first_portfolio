import { FC } from 'react';
import styled from 'styled-components';
import person from '../images/person.svg';

const Wrapper = styled.main`
  justify-content: space-around;
  height: 85vh;

  .left {
    /* border: 1px dashed #a5a5a5; */
    width: 50%;

    h1 {
      font-size: 4.5em;
      font-weight: 400;
    }

    span {
      font-size: 1em;
      font-weight: 300;
      letter-spacing: 1px;
    }
  }

  .right {
    .pic {
      width: 350px;
      height: 350px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
`;

const Hero: FC = (): JSX.Element => {
  return (
    <Wrapper className='flex'>
      <div className='left'>
        <h1>Hi I&apos;am Deepanshu</h1>
        <span>A Passionate Front End Web Developer</span>
      </div>

      <div className='right'>
        <div className='pic'>
          <img src={person} alt='person' />
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
