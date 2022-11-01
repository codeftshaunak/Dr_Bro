import styled from "styled-components";

export const Button = styled.button`
  align-content: center;
  align-items: center;
  border: none;
  background-color: #c8c8c8;
  cursor: pointer;
  color: #243b60;
  display: flex;
  font-family: "poppins";
  font-weight: 600;
  padding: 10px 21px;
  margin-top: 9px;
  justify-content: space-evenly;

  &:hover {
    background: #243b60;
    color: #fff;
    transition: 0.3s;
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8rem;
  }
`;
