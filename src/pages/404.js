import React from "react"
import { Link } from "gatsby"
import { FaHome } from "react-icons/fa"

import styled from "styled-components"

import SEO from "../components/seo"

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

const HomeBtn = styled(Link)`
  background: #fff;
  color: #000;
  text-decoration: none;
  border: 1px solid #000;
  padding: 0.5rem 1rem;
  transition: 0.3s all ease-in;

  &:hover {
    background: #000;
    color: #fff;
  }
`

const NotFoundPage = () => (
  <StyledSection>
    <SEO title="404: Not found" />
    <h1>WOW BUDDY, YOU LOST?</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <HomeBtn to="/">
      Return Home <FaHome />
    </HomeBtn>
  </StyledSection>
)

export default NotFoundPage
