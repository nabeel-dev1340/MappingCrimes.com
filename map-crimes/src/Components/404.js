import React from "react";
import styled from "styled-components";

const NoResults = () => {
  return (
    <Container>
      <h1 style={{ color: "white",fontSize:'5vw' }}>No Results</h1>
      <h2 style={{ color: "#00BD68",fontSize:'4vw' }}>Found</h2>
    </Container>
  );
};

export default NoResults;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10% auto;
  text-align: center;
  width: 50%;
  @media (max-width: 768px) {
    margin: 50% auto;
  }
`;
