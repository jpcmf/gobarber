import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  align-items: center;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  display: flex;
  height: 100%;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 315px;
  text-align: center;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      border: 0;
      color: #fff;
      height: 44px;
      margin: 0 0 10px;
      padding: 0 15px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      background-color: #3b9eff;
      border-radius: 4px;
      border: 0;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      height: 44px;
      margin: 5px 0 0;
      transition: all 300ms ease;

      &:hover {
        background-color: ${darken(0.03, '#3b9eff')};
      }
    }

    a {
      color: #fff;
      font-size: 16px;
      margin-top: 15px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
