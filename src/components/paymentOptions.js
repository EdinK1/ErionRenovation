import React from "react"
import VisaLogo from "../images/visa-logo.png"
import MasterCardLogo from "../images/mastercard-logo.png"
import AmexLogo from "../images/american-express-logo.svg"
import styled from "styled-components"

const Section = styled.section`
  max-width: 100%;
  width: 80%;
  padding-top: 1rem;
  margin: 0 auto;
  text-align: center;

  @media only screen and (min-width: 768px) {
    width: 80%;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 3rem;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const CardWrapper = styled.div`
  width: 200px;
  height: auto;
  padding: 2rem 0;
`

const Card = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`

const paymentOptions = () => {
  return (
    <Section>
      <h1>Payment options</h1>
      <Wrapper>
        <CardWrapper>
          <Card src={VisaLogo} />
        </CardWrapper>
        <CardWrapper>
          <Card src={MasterCardLogo} />
        </CardWrapper>
        <CardWrapper>
          <Card src={AmexLogo} />
        </CardWrapper>
      </Wrapper>
    </Section>
  )
}

export default paymentOptions
