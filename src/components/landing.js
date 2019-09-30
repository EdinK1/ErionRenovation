import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
  text-align: center;
  text-shadow: 0 0 1px #000;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url("https://img.freepik.com/free-photo/texture-wooden-boards_1249-169.jpg?size=626&ext=jpg")
      center center/cover;
  color: #333;
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
  color: rgb(219, 45, 20);
  font-weight: bold;
  font-size: 1.8rem;

  @media only screen and (min-width: 768px) {
    font-size: 2.6rem;
    text-shadow: 1px 1px 1px #000;
  }
`

const StyledParagraph = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.3;
  font-family: serif;

  @media only screen and (min-width: 768px) {
    font-size: 2.1rem;
    text-shadow: 1px 1px 1px #000;
  }
`

// const data = useStaticQuery(graphql`
//   file(relativePath: { eq: 'src/images/landing-bg.jpg' })
// `)

const Landing = () => (
  <StyledSection>
    <StyledTitle>ONE CALL can solve all your house problems!</StyledTitle>
    <StyledNumber>+800 456 12 54 </StyledNumber>
    <StyledParagraph>
      Call us today to have your first consultation.
    </StyledParagraph>
  </StyledSection>
)

export default Landing
