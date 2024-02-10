import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import CodeImageitem from "../constants/codeImageitem"
// ...GatsbyImageSharpFluid
const query = graphql`
  {
    file(relativePath: { eq: "Curve.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <header className="hero">
      <div
      // className="section-center hero-center"
      >
        <article className="hero-info">
          <div>
            <SocialLinks />
          </div>
          <div>
            <p className="hero-text1">Hello! My Name is</p>
            <h1 className="hero-text2">Shameera Carrim</h1>
            <p className="hero-text3">
              A passionate programming freelancer with top-notch experience in
              web app and desktop application development.
            </p>
          </div>
          <div>
            <CodeImageitem styleClass={"code-icon"} />
          </div>
        </article>
        <Image fluid={fluid} className={"hero-img"} />
      </div>
    </header>
  )
}

export default Hero
