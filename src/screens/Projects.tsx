import { forwardRef } from 'react';
import styled from 'styled-components';
import projects from '../projects';
import Project from '../components/Project';
import { IProject } from '../interfaces';

const Wrapper = styled.section`
  /* border: 1px solid red; */
  margin-top: 40px;

  .heading {
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 100px;
  }
`;

const Projects = forwardRef<HTMLElement | null>((props, ref) => {
  return (
    <Wrapper id='projects' ref={ref}>
      <h1 className='heading'>Projects</h1>

      {projects.map((item: IProject) => (
        <Project item={item} key={item.title} />
      ))}
    </Wrapper>
  );
});

export default Projects;
