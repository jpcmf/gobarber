import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      background-color: #eee;
      border-radius: 50%;
      border: solid 3px rgba(255, 255, 255, 0.3);
      height: 120px;
      width: 120px;
    }

    input {
      display: none;
    }
  }
`;
