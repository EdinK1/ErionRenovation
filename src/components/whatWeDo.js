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
`

const StyledList = styled.ul`
  display: flex;
  padding-top: 1.5rem;
  margin: 0 auto;
  justify-content: space-between;
  width: 80%;
  list-style-type: none;
`

const StyledListItem = styled.li`
  font-size: 2.4rem;
  color: #fff;
`

const WhatWeDo = () => (
  <div style={{ background: "#333" }}>
    <StyledSection>
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
      <p>lorem ipsum med haha kdkd bla bli blu dummy text all around</p>
    </StyledSection>
  </div>
)

export default WhatWeDo
