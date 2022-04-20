import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;

  .container_form-inputs {
    display: flex;
    flex-direction: column;
  }

  figure,
  img,
  figcaption {
    display: none;
  }

  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    padding: 25px 0 10px;
    width: 320px;
    margin-bottom: 15px;
  }

  input::placeholder {
    color: white;
  }

  input:focus {
    color: white;
    outline: 0;
  }

  .container_form-button {
    display: flex;
    margin-top: 50px;
  }

  .container_form-circle {
    background-color: #ff7e2a;
    padding: 20px;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    position: relative;
    right: 55px;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 30px;
    font-weight: 700;
    text-align: right;
    z-index: 5;
    color: white;
  }

  @media screen and (min-width: 768px) {
    input {
      border-bottom: 1px solid #b603ff;
    }

    input::placeholder {
      color: grey;
    }

    input:focus {
      color: grey;
    }

    button {
      color: black;
    }
  }
`;
