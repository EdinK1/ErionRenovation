import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  max-width: 80%;
  margin: 0 auto;
  text-align: center;
  padding: 3rem 0;
  min-height: 50vh;
`

const StyledImg = styled.img`
  width: 250px;

  @media only screen and (min-width: 768px) {
    width: 400px;
  }
`

const StyledContent = styled.section`
  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`

const WhoWeAre = () => (
  <>
    <StyledSection>
      <h1>Who we are</h1>
      <StyledContent>
        <StyledImg src="https://purepng.com/public/uploads/large/purepng.com-toolboxboxtoolobjecttoolbox-631522164050ubeum.png" />
        <p>lorem ipsum med ast ejdtl ajst nwpsod ewlsd</p>
      </StyledContent>
    </StyledSection>
  </>
)

export default WhoWeAre
