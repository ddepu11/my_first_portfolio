import { FC } from 'react';
import styled from 'styled-components';
import projects from '../projects';
import Project from '../components/Project';

const Wrapper = styled.section`
  margin-top: 80px;

  .heading {
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 40px;
  }
`;

const Projects: FC = (): JSX.Element => {
  return (
    <Wrapper id='projects'>
      <h1 className='heading'>Projects</h1>

      {projects.map((item) => (
        <Project item={item} key={item.title} />
      ))}
    </Wrapper>
  );
};

export default Projects;
