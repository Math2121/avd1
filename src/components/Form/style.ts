import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  justify-content: center;
  gap: 5rem;
  width: 100%;
  box-sizing: border-box;

  .ibge-back {
    border-bottom: 5px solid #0365CE;
    background-image: url("../images/ibge.jpg");

    height: 20rem;
    width: 100%;
    color: white;

    font-size: 24px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    .blu {
      backdrop-filter: blur(5px);
      display: flex;
      align-items: center;
      height: 20rem;
      justify-content: center;
      width: 100%;
    }
  }

 
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  opacity: 0;
  animation: fadeIn 0.6s forwards;
  animation-delay:0.2s;
  max-width: 40%;
  @keyframes fadeIn{
    0%{opacity: 0}
    100%{opacity:100%}
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;

  label {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #1f1f1f;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  input{
    width: 100%;
    border-radius: 5px;
    height: 2rem;
    border: 1px solid #dddd;
    color: black;
  }

  h2 {
    font-size: 24px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;

export const Button = styled.button`
  width: 100%;
  background: #0365ce;
  border: 1px solid #0365ce;
  border-radius: 8px;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem;
  margin-top: 1.2rem;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    filter: brightness(0.95);
  }
`;

export const ButtonDel = styled.button`
  width: 100%;
  height: 2rem;
  background-color: red;
  color: white;
  border: 0;
  border-radius: 8px;
  padding: 0.5rem;
  transition:  all 0.3s ease;
  &:hover{
    transform: scale(0.7);
  }

  cursor: pointer;
`;

export const TableContainer = styled.div`
  table {
    height: 50px;
    width: 100%;
    border-spacing: 0;
  }
  th {
    padding: 25px;
    width: 100%;
    padding-bottom: 16px;
    text-align: center;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    border: 1px #0365ce solid;
    background-color: #0365ce;
  }

  td {
    text-align: left;
    padding: 15px;
    width: 100%;

    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    border: 1px #0365ce solid;
  }
`;
