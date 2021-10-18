import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  /* border: 1px dashed #a5a5a5; */
  /* height: 85vh; */
  /* margin-top: 20px; */
  justify-content: space-between;

  .left {
    width: 40%;

    .title {
      font-size: 1.3em;
      letter-spacing: 2px;
      font-weight: 400;
      margin-bottom: 15px;
    }

    p {
      line-height: 1.8;
    }

    .btns {
      justify-content: flex-start;
      margin-top: 15px;

      a {
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

      .source_code_btn {
        margin-left: 20px;
        background: transparent;
      }
    }
  }

  .images {
    width: 50%;
    height: 300px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Projects: FC = (): JSX.Element => {
  return (
    <>
      <h1
        className='heading'
        style={{
          fontSize: '2em',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontWeight: 300,
          textAlign: 'center',
          margin: '80px 0 40px',
        }}
      >
        Projects
      </h1>

      <Wrapper className='flex'>
        <div className='left'>
          <h1 className='title'>Movil Shop</h1>

          <p className='description'>
            Social Media App made with Next.js, using Redux Toolkit for state
            management, Semantic UI for components,Backend is made with
            Express.js, MongoDB. Authentication using JWT
          </p>

          <div className='btns flex'>
            <a href='/' className='live_btn'>
              See Live
            </a>

            <a href='/' className='source_code_btn'>
              Source Code
            </a>
          </div>
        </div>

        <div className='images'>
          <img src='https://i.pravatar.cc/300' alt='portfolio' />
        </div>
      </Wrapper>
    </>
  );
};

export default Projects;
