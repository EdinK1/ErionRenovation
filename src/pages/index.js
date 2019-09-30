import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/landing"
import WhoWeAre from "../components/whoWeAre"
import WhatWeDo from "../components/whatWeDo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <WhoWeAre />
    <WhatWeDo />
  </Layout>
)

export default IndexPage
