import * as React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"
import About from "../components/About/About"
import Skills from "../components/Skills/Skills"
import Projects from "../components/Projects/Projects"
import Contact from "../components/Contact/Contact"

const IndexPage = () => (
  <Layout>
    <Header />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
