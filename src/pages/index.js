import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/landing"
import WhatWeDo from "../components/whatWeDo"
import ContactForm from "../components/contactForm"
import PaymentOptions from "../components/paymentOptions"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <WhatWeDo />
    <PaymentOptions />
    <ContactForm />
  </Layout>
)

export default IndexPage
