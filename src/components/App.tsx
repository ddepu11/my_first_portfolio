import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  padding: 20px 20px;
  flex-direction: column;

  button {
    margin-top: 20px;
    font-size: 1em;
    padding: 5px 10px;
    border-radius: 10px;
  }
`;

const App = () => {
  const [number, setNumber] = useState(0);

  const increaseNumber = () => {
    setNumber(number + 1);
  };

  const decreaseNumber = () => {
    setNumber(number - 1);
  };

  return (
    <Wrapper className='flex'>
      <h2>Number:&nbsp; {number}</h2>

      <button type='button' onClick={increaseNumber}>
        Increase
      </button>

      <button type='button' onClick={decreaseNumber}>
        Decrease
      </button>
    </Wrapper>
  );
};

export default App;
