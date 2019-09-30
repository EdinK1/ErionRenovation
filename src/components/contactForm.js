import React from "react"
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaUserAlt,
  FaShareAlt,
} from "react-icons/fa"
import styled from "styled-components"

const StyledSection = styled.section`
  max-width: 80%;
  min-height: 50vh;
  padding: 3rem 0;
  margin: 0 auto;
  text-align: center;

  @media only screen and (min-width: 768px) {
    min-height: 40vh;
  }
`

const StyledList = styled.ul`
  width: 100%;
  list-style-type: none;
  text-align: left;
  margin: 0;
  padding: 1rem 0;

  @media only screen and (min-width: 768px) {
    display: flex;
    margin-top: 2rem;
    justify-content: space-evenly;
  }
`

const StyledListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 1rem;

  @media only screen and (min-width: 768px) {
    flex-direction: column;
  }
`

const StyledParagraph = styled.p`
  padding-left: 1.5rem;
  font-size: 1.1rem;

  @media only screen and (min-width: 768px) {
    padding: 0;
    margin-top: 1rem;
  }
`

const ContactForm = () => (
  <StyledSection>
    <h1>Contact Us</h1>
    <StyledList>
      <StyledListItem>
        <FaMapMarkerAlt style={{ "font-size": "2rem" }} />
        <StyledParagraph>lalalalallala</StyledParagraph>
      </StyledListItem>
      <StyledListItem>
        <FaEnvelope style={{ "font-size": "2rem" }} />
        <StyledParagraph>lalalalallala</StyledParagraph>
      </StyledListItem>
      <StyledListItem>
        <FaUserAlt style={{ "font-size": "2rem" }} />
        <StyledParagraph>lalalalallala</StyledParagraph>
      </StyledListItem>
      <StyledListItem>
        <FaShareAlt style={{ "font-size": "2rem" }} />
        <StyledParagraph>lalalalallala</StyledParagraph>
      </StyledListItem>
    </StyledList>
  </StyledSection>
)

export default ContactForm
