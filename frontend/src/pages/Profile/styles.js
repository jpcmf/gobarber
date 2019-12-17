import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 50px auto;
  max-width: 600px;

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

    @keyframes slideInFromLeft {
      0% {
        transform: translateX(-10%);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    hr {
      background-color: rgba(255, 255, 255, 0.2);
      border: 0;
      height: 1px;
      margin-bottom: 20px;
      margin-top: 10px;
    }

    span {
      animation: 300ms ease-out 0s 1 slideInFromLeft;
      color: #ffacac;
      align-self: flex-start;
      margin-bottom: 10px;
      font-size: 11px;
      font-weight: bold;
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
  }

  > button {
    appearance: none;
    background-color: #f64c75;
    border-radius: 4px;
    border: 0;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    height: 44px;
    margin: 10px 0 0;
    transition: all 300ms ease;
    width: 100%;

    &:hover {
      background-color: ${darken(0.05, '#f64c75')};
    }
  }
`;
