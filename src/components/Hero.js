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
      <div>
        <article className="hero-info">
          <div>
            <SocialLinks />
          </div>
          <div>
            <p className="hero-text1">Hello! My Name is</p>
            <p className="hero-text2">
              <span className="t1">Shameera</span>
              <span className="t2"> Carrim.</span>
            </p>
            <p className="hero-text3">
              A passionate programming freelancer with top-notch experience in
              web app and desktop application development.
            </p>
            <Link to="/projects" className="btn">
              Browse projects
            </Link>
          </div>
          <div>{/* <CodeImageitem styleClass={"code-icon"} /> */}</div>
        </article>
        <Image fluid={fluid} className={"hero-img"} />
      </div>
    </header>
  )
}

export default Hero
