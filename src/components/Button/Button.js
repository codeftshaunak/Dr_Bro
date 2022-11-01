import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styled from "styled-components";

const Button = ({ data }) => {
  return (
    <Wrapper>
      <button className="button">
        {data} <FaArrowRight className="ml-2" />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .button {
    align-content: center;
    align-items: center;
    border: none;
    background-color: #fff;
    cursor: pointer;
    color: black;
    display: flex;
    font-family: "poppins";
    font-weight: 600;
    padding: 10px 21px;
    margin-top: 9px;
    justify-content: space-evenly;
    width: 137px;

    &:hover {
      background: black;
      color: #fff;
      transition: 0.3s;
    }
  }
`;
export default Button;
