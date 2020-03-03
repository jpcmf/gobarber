import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  max-width: 600px;

  header {
    align-items: center;
    align-self: center;
    display: flex;

    button {
      background: none;
      border: 0;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 30px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 90px;

    svg {
      animation: ${rotate} 1s linear infinite;
      color: #fff;
      width: 50px;
      height: 50px;
    }
  }
`;

export const Time = styled.li`
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: ${props => (props.available ? '#999' : '#7159c1')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? '#999' : '#666')};
  }
`;
