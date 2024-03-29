import { forwardRef } from 'react';
import styled from 'styled-components';
import projects from '../projects';
import Project from '../components/Project';
import { IProject } from '../interfaces';

const Wrapper = styled.section`
  /* border: 1px solid red; */

  .heading {
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 3.3em;
  }

  @media only screen and (max-width: 820px) {
    .heading {
      margin-bottom: 2em;
    }
  }
`;

const Projects = forwardRef<HTMLElement | null>((props, ref) => {
  return (
    <Wrapper ref={ref}>
      <h1 className='heading'>Projects</h1>

      {projects.map((item: IProject, index) => (
        <Project
          item={item}
          key={item.title}
          index={index}
          arrLength={projects.length}
        />
      ))}
    </Wrapper>
  );
});

export default Projects;
