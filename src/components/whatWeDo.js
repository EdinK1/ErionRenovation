import React from "react"
import styled from "styled-components"

import { FaBrush, FaHammer, FaScrewdriver } from "react-icons/fa"

const StyledSection = styled.section`
  min-height: 50vh;
  max-width: 80%;
  margin: 0 auto;
  padding: 3rem 0;
  color: #fff;
  text-align: center;

  @media only screen and (min-width: 768px) {
    min-height: 40vh;
  }
`

const StyledList = styled.ul`
  display: flex;
  padding-top: 1.5rem;
  margin: 0 auto;
  justify-content: space-between;
  width: 80%;
  list-style-type: none;

  @media only screen and (min-width: 768px) {
    justify-content: space-evenly;
    margin-bottom: 2rem;
  }
`

const StyledListItem = styled.li`
  font-size: 2.4rem;
  color: #fff;
`

const WhatWeDo = () => (
  <div style={{ background: "#333" }}>
    <StyledSection id="what">
      <h1>What We Do</h1>
      <StyledList>
        <StyledListItem>
          <FaBrush />
        </StyledListItem>
        <StyledListItem>
          <FaHammer />
        </StyledListItem>
        <StyledListItem>
          <FaScrewdriver />
        </StyledListItem>
      </StyledList>

      <ul>
        <li>Painting</li>
        <li>Tiles</li>
        <li>Flooring</li>
        <li>Caulking</li>
        <li>Stucco</li>
        <li>Bricklaying</li>
        <li>Fencing</li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </StyledSection>
  </div>
)

export default WhatWeDo
