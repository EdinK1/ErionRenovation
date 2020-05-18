import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-left: 2rem;
  margin-top: 8rem;
  padding-top: 2rem;
  flex-direction: column;
  min-height: 40vh;
  text-align: left;
  text-shadow: 0 0 1px #000;
  background-image: url("/static/landing-bg.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;

  @media only screen and (min-width: 768px) {
    min-height: 75vh;
    margin-top: unset;
    text-align: center;
    justify-content: center;
    align-items: flex-start;
    padding-left: 9rem;
    padding-top: unset;
    text-align: left;
  }
`
const StyledTitle = styled.h1`
  font-size: 1.25rem;
  width: 60%;
  color: #373737;
  font-weight: 600;
  text-transform: uppercase;

  @media only screen and (min-width: 768px) {
    font-size: 3.5rem;
    line-height: 1.1;
    text-shadow: 1px 1px 1px #000;
  }
`

const StyledNumber = styled.h2`
  text-shadow: 1px 1px 1px #000;
  font-weight: bold;
  font-size: 1.15rem;
  color: #373737;
  font-style: italic;

  @media only screen and (min-width: 768px) {
    font-size: 2.4rem;
  }
`
const StyledButton = styled.a`
  font-weight: 400;
  font-style: normal;
  color: #ffffff;
  margin-top: 1rem;
  background-color: ${props =>
    props.secondary ? "rgb(225, 37, 26)" : "#19599b"};
  text-decoration: none;
  padding: 1rem;
  font-family: serif;
  font-weight: 600;
  text-transform: uppercase;
  border-color: transparent;

  @media only screen and (min-width: 768px) {
    margin-right: 1rem;
    margin-top: unset;
  }
`

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const Landing = () => (
  <StyledSection>
    <StyledTitle>ONE CALL can solve all your house problems!</StyledTitle>
    <StyledNumber>(+1) 604-442-7419 </StyledNumber>
    <StyledButtonWrapper>
      <StyledButton href="#what">Our Services</StyledButton>
      <StyledButton href="#contact" secondary>
        Request Estimate
      </StyledButton>
    </StyledButtonWrapper>
  </StyledSection>
)

export default Landing
