import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from "../components/map"
import ContactForm from "../components/contactForm"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Map />
    <ContactForm />
  </Layout>
)

export default ContactPage
