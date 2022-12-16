import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
const SearchBox = ({ handleSubmit }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const sendInput = () => {
    handleSubmit(userInput, "city");
    setUserInput('')
  };

  return (
    <Container>
      <Input
        type="text"
        onChange={handleChange}
        value={userInput}
        placeholder="Location of Crime"
        required
      ></Input>
      <Button text="Search Crime" sendInput={sendInput} />
    </Container>
  );
};
export default SearchBox;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const Input = styled.input`
  margin-right: 5px;
  box-sizing: border-box;
  border: 1px solid white;
  border-radius: 20px;
  width: 40%;
  padding-left: 13px;
`;
