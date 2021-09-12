import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #eeee;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 40%;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;

  label {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #1f1f1f;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  input,
  select {
    width: 100%;
    border-radius: 8px;
    height: 2rem;
    border: 1px solid #dddd;
    color: black;
  }
  select {
    height: 2.5rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  background: #4bf106;
  border: 1px solid #4bf106;
  border-radius: 8px;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding:1rem;
  margin-top: 1.2rem;
  transition: all 0.3s;
  cursor: pointer;
  &:hover{
      filter: brightness(0.95);
  }
`;

export const ButtonDel = styled.button`
width: 100%;
height: 2rem;
background-color: red;
color: white;
border: 0;
border-radius:8px;
padding:0.5rem;
cursor:pointer;
`;

export const TableContainer = styled.div`

table {
  height: 50px;
  border: 1px gray solid;
  border-spacing: 0;
}
th {
  padding: 25px;
  padding-bottom: 16px;
  text-align: center;
  border: 1px gray solid;
  background-color: #d8d8d8;
}

td {
  text-align: left;
  padding: 15px;
  text-align: center;
  border: 1px gray solid;
}
`
