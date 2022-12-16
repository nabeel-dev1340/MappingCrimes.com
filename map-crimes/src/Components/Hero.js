import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";

const Hero = () => {
  return (
    <Container>
      {/* <Header>CRIME MAP</Header> */}
      <Image src={Logo} alt="" />
      <Description>
        Safety is subjective. What you consider a safe neighborhood, someone
        else may not.
        <br />
        Research the safety of your Neighborhood
      </Description>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const Image = styled.img`
  width: 20%;
  @media (max-width: 768px) {
    width: 60%;
  }
`;
const Header = styled.h1`
  color: #ffffff;
  font-family: "Raleway", sans-serif;
  font-size: 62px;
  font-weight: 500;
  line-height: 72px;
  margin: 0 0 24px;
  text-align: center;
  text-transform: uppercase;
`;
const Description = styled.h4`
  text-align: center;
  font-size: 18px;
  line-height: 30px;
`;
