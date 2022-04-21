import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    to right bottom,
    #fa9f00,
    #ff7e2a,
    #ff5a4a,
    #ff336a,
    #ff0a8c,
    #ff0a8c,
    #ff0a8c,
    #ff0a8c,
    #ff336a,
    #ff5a4a,
    #ff7e2a,
    #fa9f00
  );

  .container_home-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  figure,
  img,
  figcaption {
    display: none;
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

    figure,
    img,
    figcaption {
      display: flex;
    }

    figure {
      width: 50vw;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      margin: 0;
    }

    img {
      height: 100vh;
    }

    figcaption {
      display: none;
    }

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
