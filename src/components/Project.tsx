import { useState } from 'react';
import styled from 'styled-components';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { IProject } from '../interfaces';

const Wrapper = styled.div`
  justify-content: space-between;
  margin-bottom: 10em;
  /* border: 1px solid red; */
  align-items: flex-start;

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
      font-weight: 300;
    }

    .btns {
      justify-content: flex-start;
      margin-top: 15px;
      font-weight: 300;

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
    border-radius: 5px;
    overflow: hidden;
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.1) translateY(-10px);
    }

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

    .index_dots {
      position: absolute;
      bottom: 2px;
      left: 0;
      width: 100%;
      background: #2b2b2b33;

      .dot {
        font-size: 0.5em;
        margin-right: 5px;
      }

      .dot.active {
        color: #1b1b1b;
      }
    }

    .loading_cover {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      color: #ffffff;
      background: rgba(38, 76, 182, 0.7);
      display: grid;
      place-items: center;

      h1 {
        font-weight: 400;
        font-size: 1.1em;
        letter-spacing: 1px;
      }
    }
  }
`;
type ProjectType = {
  item: IProject;
  index: number;
  arrLength: number;
};

const Project = ({ item, index, arrLength }: ProjectType): JSX.Element => {
  const [imageIndex, setImageIndex] = useState(0);

  const [loading, setLoading] = useState(false);

  const showNextImage = () => {
    setImageIndex((prevState) => {
      if (prevState === item.images.length - 1) {
        setLoading(true);
        return 0;
      }
      setLoading(true);

      return prevState + 1;
    });
  };

  const showPreviousImage = () => {
    setImageIndex((prevState) => {
      if (prevState === 0) {
        setLoading(true);

        return item.images.length - 1;
      }

      setLoading(true);
      return prevState - 1;
    });
  };

  const handleImageLoad = () => setLoading(false);

  return (
    <Wrapper
      key={item.title}
      className='flex'
      style={{ marginBottom: `${index === arrLength - 1 && '5em'}` }}
    >
      <div className='left'>
        <h1 className='title'>{item.title}</h1>

        <p className='description'>{item.description}</p>

        <div className='btns flex'>
          <a
            href={item.liveLink}
            className='live_btn'
            target='_blank'
            rel='noopener noreferrer'
          >
            See Live
          </a>

          <a
            href={item.codeLink}
            className='source_code_btn'
            target='_blank'
            rel='noopener noreferrer'
          >
            Source Code
          </a>
        </div>
      </div>

      <div className='images'>
        <img
          src={item.images[imageIndex]}
          alt='portfolio'
          onLoad={handleImageLoad}
        />

        <KeyboardArrowLeftOutlinedIcon
          className='left_arrow'
          onClick={showPreviousImage}
        />

        <KeyboardArrowRightOutlinedIcon
          className='right_arrow'
          onClick={showNextImage}
        />

        {loading && (
          <div className='loading_cover'>
            <h1>Loading...</h1>
          </div>
        )}

        <div className='index_dots flex'>
          {item.images.map((im, imIndex) => (
            <FiberManualRecordIcon
              className={`dot ${imageIndex === imIndex && 'active'}`}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Project;
