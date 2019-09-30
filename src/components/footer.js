import React from "react"
import styled from "styled-components"
import { FaTools } from "react-icons/fa"

const StyledFooter = styled.footer`
  width: 100%;
  background: #fff;
  padding: 0.85rem;
  text-align: center;
  letter-spacing: 0.1rem;
`

const Footer = () => (
  <StyledFooter>
    ErionRenova
    <FaTools />
    ion © {new Date().getFullYear()}
  </StyledFooter>
)

export default Footer
