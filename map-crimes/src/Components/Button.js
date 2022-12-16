import React from "react";
import styled from "styled-components";

const Button = ({ text, sendInput }) => {

  return (
    <Container>
      <SubmitButton onClick={sendInput}>{text}</SubmitButton>
    </Container>
  );
};

export default Button;

const Container = styled.div``;
const SubmitButton = styled.button`
  background-color: #00bd68;
  border-radius: 20px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: "Farfetch Basis", "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
  max-width: none;
  min-height: 44px;
  min-width: 10px;
  outline: none;
  overflow: hidden;
  padding: 9px 20px 8px;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;

  &:hover,
  &:focus {
    opacity: 0.75;
  }
`;
