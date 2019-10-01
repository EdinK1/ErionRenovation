import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WhatWeDoGrid from "../components/WhatWeDoGrid"

const ServicesPage = () => (
  <Layout>
    <SEO title="About Us" />
    <h1 style={{ "text-align": "center", padding: "3rem 0" }}>
      This is some of the services we provide
    </h1>
    <WhatWeDoGrid />
  </Layout>
)

export default ServicesPage
