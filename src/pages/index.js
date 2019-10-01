import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/landing"
import WhatWeDoGrid from "../components/whatWeDoGrid"
import ContactForm from "../components/contactForm"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <WhatWeDoGrid />
    <ContactForm />
  </Layout>
)

export default IndexPage
