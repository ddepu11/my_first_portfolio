import { forwardRef } from 'react';
import styled from 'styled-components';
import displayPicture from '../images/displayPicture.jpg';

const Wrapper = styled.section`
  flex-direction: column;
  min-height: 90vh;
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
      max-width: 300px;
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

  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
    .main {
      .intro {
        p {
          line-height: 1.6;
        }
        .second {
          margin-top: 5px;
        }
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
            As an experienced developer, I specialize in building responsive and
            user-friendly web and mobile applications. With expertise in
            technologies such as React, React Native, TypeScript, JavaScript,
            and Redux, I have a proven track record of delivering high-quality
            solutions. My passion for innovation and commitment to excellence
            drive me to continually learn and explore new technologies. I am
            dedicated to crafting intuitive and efficient solutions that meet
            the needs of users and businesses alike.
          </p>
          <a
            href='https://drive.google.com/file/d/1e_BtYEg3sW6ilzE4Q9ftlp-18ch7Htl-/view?usp=sharing'
            className='resume_link'
            target='_blank'
            rel='noopener noreferrer'
          >
            Resume
          </a>
        </div>
      </div>
    </Wrapper>
  );
});

export default About;
