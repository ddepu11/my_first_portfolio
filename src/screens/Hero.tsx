import { FC } from 'react';
import styled from 'styled-components';
import person from '../images/person.svg';

const Wrapper = styled.main`
  justify-content: space-around;
  min-height: 90vh;

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
      max-width: 350px;
      height: 350px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  @media only screen and (max-width: 820px) {
    flex-direction: column;
    margin-top: 10px;

    .left {
      width: 100%;
      text-align: center;
    }
  }

  @media only screen and (max-width: 590px) {
    .left {
      h1 {
        font-size: 4em;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .left {
      h1 {
        font-size: 3em;
      }
      span {
        font-size: 0.9em;
      }
    }
  }
`;

const Hero: FC = (): JSX.Element => {
  return (
    <Wrapper className='flex'>
      <div className='left'>
        <h1>Hi I&apos;am Deepanshu</h1>
        <span>A Passionate Web and Mobile App Developer</span>
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
