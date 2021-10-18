import { useState } from 'react';
import styled from 'styled-components';
import IProject from '../interfaces';

const Wrapper = styled.div`
  justify-content: space-between;
  margin-bottom: 120px;

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
    height: 350px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Project = ({ item }: { item: IProject }): JSX.Element => {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((prevState) => prevState + 1);
  };

  const showPreviousImage = () => {
    setImageIndex((prevState) => prevState - 1);
  };

  return (
    <Wrapper key={item.title} className='projects flex'>
      <div className='left'>
        <h1 className='title'>{item.title}</h1>

        <p className='description'>{item.description}</p>

        <div className='btns flex'>
          <a href={item.liveLink} className='live_btn'>
            See Live
          </a>

          <a href={item.codeLink} className='source_code_btn'>
            Source Code
          </a>
        </div>
      </div>

      <div className='images'>
        <img src={item.images[imageIndex]} alt='portfolio' />
      </div>
    </Wrapper>
  );
};

export default Project;
