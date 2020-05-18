import React from "react"
import styled from "styled-components"

const StyledGrid = styled.main`
  padding-top: 4rem;
`

const Grid = styled.ul`
  display: grid;
  grid-gap: 20px;
  list-style-type: none;
  margin: 0;
  padding: 3rem 0;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    width: 80%;
    margin: 0 auto;
  }

  @media only screen and (min-width: 1240px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
const GridItemText = styled.span`
  display: flex;
  position: absolute;
  bottom: 0;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  font-size: 1.75rem;
  font-family: sans-serif;
  color: #fff;
  text-shadow: 1px 1px 1px #000;

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }
`

const WhatWeDo = () => (
  <StyledGrid>
    <h1 id="what" style={{ "text-align": "center" }}>
      Our Services
    </h1>
    <Grid>
      <li
        style={{
          position: "relative",
          height: "250px",
          margin: 0,
          background:
            'url("https://mywallworks.com/wp-content/uploads/2018/08/hiring-a-painter.jpeg") no-repeat center center/cover',
        }}
      >
        <GridItemText>Painting</GridItemText>
      </li>
      <li
        style={{
          position: "relative",
          height: "250px",
          margin: 0,
          background:
            'url("https://alis.alberta.ca/media/697237/bricklayer-istock-522550624.jpg") no-repeat center center/cover',
        }}
      >
        <GridItemText>Briclaying & Repointing</GridItemText>
      </li>
      <li
        style={{
          position: "relative",
          height: "250px",
          margin: 0,
          background:
            'url("https://www.taskforce.com.au/image/concreters/vic/narre-warren/taskforce-smoothing-cement/8633/") no-repeat center center/cover',
        }}
      >
        <GridItemText>Concrete</GridItemText>
      </li>
      <li
        style={{
          position: "relative",
          height: "250px",
          margin: 0,
          background:
            'url("https://www.wconline.com/ext/resources/issues/2016/August/WC0816-FT3-Lath_Plaster-p1FT-trowel.jpg") no-repeat center center/cover',
        }}
      >
        <GridItemText>Plaster</GridItemText>
      </li>
      <li
        style={{
          position: "relative",
          height: "250px",
          margin: 0,
          background:
            'url("https://caulkingprofessionals.ca/wp-content/uploads/2018/07/caulk-e1530731237414.jpg") no-repeat center center/cover',
        }}
      >
        <GridItemText>Caulking</GridItemText>
      </li>
      <li
        style={{
          position: "relative",
          height: "250px",
          margin: 0,
          background:
            'url("http://anthonystileca.com/wp-content/themes/tileterrazzo/images/headers/index-slide-3.jpg") no-repeat center center/cover',
        }}
      >
        <GridItemText>Tile</GridItemText>
      </li>
      <li
        style={{
          position: "relative",
          height: "250px",
          margin: 0,
          background:
            'url("https://i.pinimg.com/originals/ed/b7/53/edb753b12d3196dc6f776b4b7707ac08.jpg") no-repeat center center/cover',
        }}
      >
        <GridItemText>Pressure Washer</GridItemText>
      </li>
      <li
        style={{
          position: "relative",
          height: "250px",
          margin: 0,
          background:
            'url("https://www.tapi.co.uk/images_products/L_spirit-bohm-wood-roomshot.jpg") no-repeat center center/cover',
        }}
      >
        <GridItemText>Flooring</GridItemText>
      </li>
      <li
        style={{
          position: "relative",
          height: "250px",
          margin: 0,
          background:
            'url("https://allstarfencespokane.com/wp-content/uploads/2017/09/Fancy-Cedar-Fence-1.jpg") no-repeat center center/cover',
        }}
      >
        <GridItemText>Fencing</GridItemText>
      </li>
      <li
        style={{
          position: "relative",
          height: "250px",
          margin: 0,
          background:
            'url("https://jonesfencecompany.com/wp-content/uploads/new-vinyl-decking.jpg") no-repeat center center/cover',
        }}
      >
        <GridItemText>Decking</GridItemText>
      </li>
      <li
        style={{
          position: "relative",
          height: "250px",
          margin: 0,
          background:
            'url("https://www.electricsontap.com/wp-content/uploads/2018/09/bblog-4.jpg") no-repeat center center/cover',
        }}
      >
        <GridItemText>Electrician</GridItemText>
      </li>
      <li
        style={{
          position: "relative",
          height: "250px",
          margin: 0,
          background:
            'url("https://images.prop24.com/218173469") no-repeat center center/cover',
        }}
      >
        <GridItemText>Plumbing</GridItemText>
      </li>
    </Grid>
  </StyledGrid>
)

export default WhatWeDo
