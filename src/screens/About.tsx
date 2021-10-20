import { forwardRef } from 'react';
import styled from 'styled-components';
import displayPicture from '../images/displayPicture.jpg';

const Wrapper = styled.section`
  flex-direction: column;
  height: 90vh;
  /* border: 1px solid #2648d1; */

  .heading {
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 300;
    text-align: center;
    margin-top: 15px;
  }

  .main {
    justify-content: space-around;
    margin-top: 150px;

    .image {
      width: 300px;
      height: 300px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .intro {
      width: 60%;
      font-weight: 300;

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

  @media only screen and (max-width: 820px) {
    .main {
      flex-direction: column;
      margin-top: 30px;

      .intro {
        text-align: center;
        margin-top: 40px;
        width: 100%;
      }
    }
  }
`;

const About = forwardRef<HTMLElement | null>((props, ref) => {
  return (
    <Wrapper className='' id='about' ref={ref}>
      <h1 className='heading'>About me</h1>

      <div className='main flex'>
        <div className='image'>
          <img src={displayPicture} alt='' />
        </div>

        <div className='intro'>
          <p>
            I’m a Front End Developer from India, experienced in building
            responsive, user fiendly, accessible websites and web applications
            using React, TypeScript, JavaScript, Styled-Components, Webpack,
            Redux-Toolkit. I have also interests in yoga, space and rockets.
          </p>

          <p className='second'>Currently preparing for job interviews</p>

          <a href='/' className='resume_link'>
            Resume
          </a>
        </div>
      </div>
    </Wrapper>
  );
});

export default About;
