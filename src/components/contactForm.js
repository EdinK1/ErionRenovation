import React from "react"
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa"
import styled from "styled-components"

const StyledSection = styled.section`
  max-width: 80%;
  padding-bottom: 3rem;
  margin: 0 auto;
  text-align: center;

  @media only screen and (min-width: 768px) {
    padding: 1rem 0 4rem 0;
  }
`

const StyledList = styled.ul`
  width: 100%;
  list-style-type: none;
  text-align: left;
  margin: 0;

  @media only screen and (min-width: 768px) {
    display: flex;
    margin-top: 2rem;
    justify-content: space-around;
  }
`

const StyledListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 1rem;
  width: 100%;

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
    <h1 id="contact">Contact Us</h1>
    <StyledList>
      <StyledListItem>
        <FaMapMarkerAlt style={{ "font-size": "2rem" }} />
        <StyledParagraph>1674 56th Street, Delta, BC</StyledParagraph>
      </StyledListItem>
      <StyledListItem>
        <FaEnvelope style={{ "font-size": "2rem" }} />
        <StyledParagraph>
          <a style={{ color: "#000" }} href="mailto:erionrenovation@gmail.com">
            erionrenovation@gmail.com
          </a>
        </StyledParagraph>
      </StyledListItem>
      <StyledListItem>
        <FaPhone style={{ "font-size": "2rem" }} />
        <StyledParagraph>
          <a style={{ color: "#000" }} href="tel:604-442-7419">
            604-442-7419
          </a>
        </StyledParagraph>
      </StyledListItem>
    </StyledList>
  </StyledSection>
)

export default ContactForm
