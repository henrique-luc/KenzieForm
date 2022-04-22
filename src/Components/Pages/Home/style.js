import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    to right bottom,
    #f2bf27,
    #f8a71b,
    #fb8d1c,
    #fc7125,
    #fa5331,
    #fa5331,
    #fa5331,
    #fa5331,
    #fc7125,
    #fb8d1c,
    #f8a71b,
    #f2bf27
  );

  .container_home-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: white;
    font-size: 40px;
    width: 20px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    background-image: none;

    h1 {
      color: black;
      font-size: 40px;
      width: 20px;
    }

    .container_home-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
    }
  }
`;
