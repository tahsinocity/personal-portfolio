import * as React from "react"
import { Link } from "gatsby"
import { Home } from "../components/home"
import { Aboutme } from "../components/aboutme"
import { Skills } from "../components/skills"
import { Projects } from "../components/projects"
import { ContactMe } from "../components/contactme"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <Aboutme />
    <Skills />
    <Projects />
    <ContactMe />
  </Layout>
)

export default IndexPage
