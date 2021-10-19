import { forwardRef } from 'react';
import styled from 'styled-components';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Wrapper = styled.section`
  flex-direction: column;
  /* border: 1px solid #2648d1; */
  margin-top: 4em;

  .heading {
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 300;
    text-align: center;
  }

  .icons {
    margin-top: 2.4em;

    > * {
      font-size: 2em;
      margin-right: 30px;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const Connect = forwardRef<HTMLElement | null>((props, ref) => {
  return (
    <Wrapper ref={ref}>
      <h1 className='heading'>Connect </h1>

      <div className='icons flex'>
        <a
          href='https://twitter.com/Deepu07192814'
          target='_blank'
          rel='noopener noreferrer'
        >
          <TwitterIcon />
        </a>

        <a
          href='https://www.linkedin.com/in/deepanshu-tiwari-b431b2210/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LinkedInIcon />
        </a>

        <a
          href='https://github.com/ddepu11'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GitHubIcon />
        </a>
      </div>
    </Wrapper>
  );
});

export default Connect;
