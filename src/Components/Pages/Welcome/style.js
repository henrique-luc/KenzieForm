import styled from "styled-components";

export const ContainerWelcome = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  .container_welcome-title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    margin: 20px;
    font-size: 20px;
    border-bottom: 1px solid #b603ff;
    color: #b603ff;
  }

  h1 {
    font-size: 80px;
    font-family: "Lobster", cursive;
    background: url(https://media.giphy.com/media/26ufo4EIIEdB8tX3y/giphy.gif);
    background-size: 300px;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 30px;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 120px;
      background-size: 500px;
    }

    button:hover {
      border-bottom: 1px solid #fa5331;
      color: #fa5331;
    }
  }
`;
