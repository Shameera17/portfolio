import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Hobbies from "../components/Hobbies"
export default () => {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  )
}
// ...GatsbyImageSharpFluid
