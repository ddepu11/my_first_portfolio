import { forwardRef } from 'react';
import {
  SiWebpack,
  SiBabel,
  SiJavascript,
  SiCss3,
  SiPrettier,
  SiEslint,
  SiTypescript,
  SiStyledcomponents,
} from 'react-icons/si';
import { DiGit } from 'react-icons/di';
import { FaHtml5 } from 'react-icons/fa';
import styled from 'styled-components';

const Wrapper = styled.section`
  flex-direction: column;
  /* border: 1px solid #2648d1; */

  .heading {
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 300;
    text-align: center;
  }

  .skills {
    padding: 10px 0 50px;
    margin-top: 40px;
    font-size: 7em;
    flex-wrap: wrap;
    gap: 50px 40px;

    > * {
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: rgba(28, 73, 170, 0.3) 0px 1px 2px 0px,
        rgba(12, 118, 199, 0.15) 0px 2px 5px 2px;
      padding: 15px;
      position: relative;
      overflow: hidden;
      transition: transform 0.5s ease;

      .cover {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: #2b46b8;
        opacity: 0.6;
        transform: translateY(100%) translateX(-11%) rotate(80deg);
        transition: transform 0.5s ease;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        text-align: center;

        span {
          font-size: 12px;
          color: #d3d3d3;
          font-weight: 600;
          text-transform: uppercase;
          left: 15px;
          background: #181717;
          width: 100%;
          letter-spacing: 2px;
        }
      }
    }

    > *:hover .cover {
      transform: translateY(0%);
    }

    > *:hover {
      transform: scale(1.1) translateY(-10px);
    }
  }
`;

const Skills = forwardRef<HTMLElement | null>((props, ref) => {
  return (
    <Wrapper ref={ref}>
      <h1 className='heading'>Skills </h1>

      <div className='skills flex'>
        <div className='styled-components'>
          <SiStyledcomponents />

          <div className='cover'>
            <span>styled-components</span>
          </div>
        </div>

        <div className='typescript'>
          <SiTypescript />

          <div className='cover'>
            <span>TypeScript</span>
          </div>
        </div>

        <div className='webpack'>
          <SiWebpack />

          <div className='cover'>
            <span>Webpack</span>
          </div>
        </div>

        <div className='babel'>
          <SiBabel />
          <div className='cover'>
            <span>babel</span>
          </div>
        </div>

        <div className='js'>
          <SiJavascript />
          <div className='cover'>
            <span>JavaScript</span>
          </div>
        </div>

        <div className='git'>
          <DiGit />
          <div className='cover'>
            <span>Git</span>
          </div>
        </div>

        <div className='html5'>
          <FaHtml5 />
          <div className='cover'>
            <span>Html5</span>
          </div>
        </div>

        <div className='css3'>
          <SiCss3 />
          <div className='cover'>
            <span>CSS3</span>
          </div>
        </div>

        <div className='prettier'>
          <SiPrettier />
          <div className='cover'>
            <span>prettier</span>
          </div>
        </div>

        <div className='eslint'>
          <SiEslint />
          <div className='cover'>
            <span>eslint</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
});

export default Skills;
