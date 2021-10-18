import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  flex-direction: column;

  .heading {
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 300;
  }

  .main {
    justify-content: space-between;
    margin-top: 40px;

    .intro {
      width: 60%;
      /* border: 1px solid red; */
      p {
        line-height: 1.8;
      }
      .second {
        margin-top: 15px;
      }
    }

    .resume_link {
      margin-top: 20px;
      background: #2648d1;
      padding: 5px 10px;
      border-radius: 4px;
      transition: all 0.25s ease-in;

      &:hover {
        background-color: #ececec;
        color: black;
      }
    }
  }
`;

const About: FC = (): JSX.Element => {
  return (
    <Wrapper className='flex'>
      <h1 className='heading'>About me</h1>

      <div className='main flex'>
        <div className='image'>
          <img src='https://i.pravatar.cc/300' alt='' />
        </div>

        <div className='intro'>
          <p>
            I’m a Front End Developer from India, experienced in building
            responsive, user fiendly, accessible websites and web applications
            using React, TypeScript, JavaScript, Styled-Components, Webpack,
            Redux-Toolkit. I have also interests in yoga, space and rockets.
          </p>

          <p className='second'>Currently I am preparing for job interviews</p>

          <a href='/' className='resume_link'>
            Resume
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
