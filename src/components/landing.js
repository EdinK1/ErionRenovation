import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  text-shadow: 0 0 1px #000;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("https://images.unsplash.com/photo-1499815022134-5a333f5a299c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2125&q=80")
      no-repeat center center/cover;
  color: #fff;

  @media only screen and (min-width: 768px) {
    min-height: 80vh;
  }
`
const StyledTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;

  @media only screen and (min-width: 768px) {
    font-size: 2.2rem;
    text-shadow: 1px 1px 1px #000;
  }
`

const StyledNumber = styled.h2`
  text-shadow: 1px 1px 1px #000;
  font-weight: bold;
  font-size: 1.8rem;

  @media only screen and (min-width: 768px) {
    font-size: 2.6rem;
  }
`

const StyledParagraph = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.3;
  font-family: sans-serif;

  @media only screen and (min-width: 768px) {
    font-size: 2.1rem;
    text-shadow: 1px 1px 1px #000;
  }
`

const Landing = () => (
  <StyledSection>
    <StyledTitle>ONE CALL can solve all your house problems!</StyledTitle>
    <StyledNumber>(+1) 604-442-7419 </StyledNumber>
    <StyledParagraph>Call us for your free estimate.</StyledParagraph>
  </StyledSection>
)

export default Landing
