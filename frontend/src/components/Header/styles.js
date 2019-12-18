import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  height: 64px;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 900px;

  nav {
    align-items: center;
    display: flex;

    svg {
      margin-right: 20px;
    }

    a {
      border-left: solid 1px #eee;
      color: #7159c1;
      font-weight: bold;
      padding-left: 20px;
      text-transform: uppercase;
    }
  }

  aside {
    align-items: center;
    display: flex;
  }
`;

export const Profile = styled.div`
  border-left: solid 1px #eee;
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    margin-right: 10px;
    text-align: right;

    strong {
      color: #333;
      display: block;
    }

    a {
      color: #999;
      display: block;
      font-size: 12px;
      margin-top: 2px;
    }
  }

  img {
    border: solid 1px #eee;
    border-radius: 50%;
    height: 32px;
    width: 32px;
  }
`;
