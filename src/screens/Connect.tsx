import { forwardRef } from 'react';
import styled from 'styled-components';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Wrapper = styled.section`
  flex-direction: column;
  border: 1px solid #2648d1;

  .heading {
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 300;
    text-align: center;
    margin-top: 15px;
  }
`;

const Connect = forwardRef<HTMLElement | null>((props, ref) => {
  return (
    <Wrapper ref={ref}>
      <h1 className='heading'>Connect </h1>

      <div className='icons flex'>
        <TwitterIcon />

        <LinkedInIcon />

        <GitHubIcon />
      </div>
    </Wrapper>
  );
});

export default Connect;
