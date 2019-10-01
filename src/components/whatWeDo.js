import React from "react"
import styled from "styled-components"

const StyledGrid = styled.main`
  padding: 4rem 0;
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
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 2.05rem;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
`

const WhatWeDo = () => (
  <StyledGrid>
    <h1 style={{ "text-align": "center" }}>Our Services</h1>
    <Grid>
      <li
        style={{
          height: "250px",
          margin: 0,
          background:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://mywallworks.com/wp-content/uploads/2018/08/hiring-a-painter.jpeg") no-repeat center center/cover',
        }}
      >
        <GridItemText>Painting</GridItemText>
      </li>
      <li
        style={{
          height: "250px",
          margin: 0,
          background:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://alis.alberta.ca/media/697237/bricklayer-istock-522550624.jpg") no-repeat center center/cover',
        }}
      >
        <GridItemText>BrickLaying & Repointing</GridItemText>
      </li>
      <li
        style={{
          height: "250px",
          margin: 0,
          background:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://www.taskforce.com.au/image/concreters/vic/narre-warren/taskforce-smoothing-cement/8633/") no-repeat center center/cover',
        }}
      >
        <GridItemText>Concrete</GridItemText>
      </li>
      <li
        style={{
          height: "250px",
          margin: 0,
          background:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("http://toolboys.ae/wp-content/uploads/2018/05/plaster3.png") no-repeat center center/cover',
        }}
      >
        <GridItemText>Plaster</GridItemText>
      </li>
      <li
        style={{
          height: "250px",
          margin: 0,
          background:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://caulkingprofessionals.ca/wp-content/uploads/2018/07/caulk-e1530731237414.jpg") no-repeat center center/cover',
        }}
      >
        <GridItemText>Caulking</GridItemText>
      </li>
      <li
        style={{
          height: "250px",
          margin: 0,
          background:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("http://anthonystileca.com/wp-content/themes/tileterrazzo/images/headers/index-slide-3.jpg") no-repeat center center/cover',
        }}
      >
        <GridItemText>Tile</GridItemText>
      </li>
      <li
        style={{
          height: "250px",
          margin: 0,
          background:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://i.pinimg.com/originals/ed/b7/53/edb753b12d3196dc6f776b4b7707ac08.jpg") no-repeat center center/cover',
        }}
      >
        <GridItemText>Pressure Washer</GridItemText>
      </li>
      <li
        style={{
          height: "250px",
          margin: 0,
          background:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://www.tapi.co.uk/images_products/L_spirit-bohm-wood-roomshot.jpg") no-repeat center center/cover',
        }}
      >
        <GridItemText>Flooring</GridItemText>
      </li>
      <li
        style={{
          height: "250px",
          margin: 0,
          background:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://allstarfencespokane.com/wp-content/uploads/2017/09/Fancy-Cedar-Fence-1.jpg") no-repeat center center/cover',
        }}
      >
        <GridItemText>Fencing</GridItemText>
      </li>
      <li
        style={{
          height: "250px",
          margin: 0,
          background:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://jonesfencecompany.com/wp-content/uploads/new-vinyl-decking.jpg") no-repeat center center/cover',
        }}
      >
        <GridItemText>Decking</GridItemText>
      </li>
      <li
        style={{
          height: "250px",
          margin: 0,
          background:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://www.electricsontap.com/wp-content/uploads/2018/09/bblog-4.jpg") no-repeat center center/cover',
        }}
      >
        <GridItemText>Electrician</GridItemText>
      </li>
      <li
        style={{
          height: "250px",
          margin: 0,
          background:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.prop24.com/218173469") no-repeat center center/cover',
        }}
      >
        <GridItemText>Plumbing</GridItemText>
      </li>
    </Grid>
  </StyledGrid>
)

export default WhatWeDo
