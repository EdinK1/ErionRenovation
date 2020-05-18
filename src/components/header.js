import PropTypes from "prop-types"
import React from "react"
import { FaTools } from "react-icons/fa"

import styled from "styled-components"

const StyledHeader = styled.header`
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`
const StyledNav = styled.nav`
  display: flex;
  margin: 0 auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 0;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media only screen and (min-width: 1240px) {
    min-width: 1240px;
    width: 80%;
    align-items: center;
    justify-content: space-between;
  }
`

const StyledLink = styled.a`
  text-decoration: none;
  color: #000;
  cursor: pointer;
  font-size: 0.9rem;
  font-family: sans-serif, serif;
  font-weight: 600;

  &:hover {
    color: #f4f4f4;
  }
`

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
  margin-top: 1rem;
  width: 100%;

  @media only screen and (min-width: 768px) {
    justify-content: space-around;
    width: 50%;
    margin: 0;
  }

  @media only screen and (min-width: 1240px) {
    justify-content: center;
    width: 50%;
  }
`

const StyledListItem = styled.li`
  @media only screen and (min-width: 1240px) {
    padding-right: 2rem;
    margin: 0;
  }
`

const activeLink = {
  color: "#f00",
}

const StyledIcon = {
  transform: "rotate(0deg)",
}

const Header = () => (
  <StyledHeader>
    <StyledNav>
      <h1
        style={{
          margin: 0,
          "font-size": "2rem",
          "text-shadow": "1px 1px 1px #000",
        }}
      >
        <StyledLink
          href="#"
          style={{ "font-weight": "200", "font-size": "2rem" }}
        >
          Erion Renova
          <FaTools style={StyledIcon} />
          on
        </StyledLink>
      </h1>
      <StyledList>
        <StyledListItem>
          <StyledLink activeStyle={activeLink} href="#">
            Home
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink activeStyle={activeLink} href="#what">
            What We Do
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink activeStyle={activeLink} href="#payment">
            Payment Options
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink activeStyle={activeLink} href="#contact">
            Contact Us
          </StyledLink>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
