import { useState } from 'react';
import styled from 'styled-components';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
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
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .left_arrow,
    .right_arrow {
      position: absolute;
      top: 45%;
      right: 5px;
      background: #dfdede;
      border-radius: 50%;
      color: #222222;
      font-size: 1.1em;

      &:hover {
        cursor: pointer;
      }
    }

    .left_arrow {
      left: 5px;
    }
  }
`;

const Project = ({ item }: { item: IProject }): JSX.Element => {
  const [imageIndex, setImageIndex] = useState(0);

  console.log(item);
  const showNextImage = () => {
    setImageIndex((prevState) => {
      if (prevState === item.images.length - 1) {
        return 0;
      }

      return prevState + 1;
    });
  };

  const showPreviousImage = () => {
    setImageIndex((prevState) => {
      if (prevState === 0) {
        return item.images.length - 1;
      }

      return prevState - 1;
    });
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

        <KeyboardArrowLeftOutlinedIcon
          className='left_arrow'
          onClick={showPreviousImage}
        />

        <KeyboardArrowRightOutlinedIcon
          className='right_arrow'
          onClick={showNextImage}
        />
      </div>
    </Wrapper>
  );
};

export default Project;
