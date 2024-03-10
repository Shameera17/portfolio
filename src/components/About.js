import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
const About = () => {
  const query = graphql`
    {
      file(relativePath: { eq: "aboutme.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <header className="about-center" id="about">
      <Image
        className={"about-image"}
        fluid={fluid}
        style={{
          maxHeight: "374px",
          maxWidth: "451px",
          height: "100%",
          width: "100%",
        }}
      />
      <div>
        <div className="about-text1">
          <span className="t1">About</span>
          <span className="t2"> Me</span>
        </div>
        <p className="about-underline"></p>
        <p className="about-text2" style={{ maxWidth: "450px" }}>
          I am a Sri Lankan-based front-end developer and content creator. I
          found my passion in programming back in college but never pursued it.
          Even though I took the classes for fun, those were the best times I
          ever had in college. Graduated with a sociology degree with a strong
          passion in contributing back to society, my goal is to combine my web
          development skills and my knowledge in sociology to build platforms
          for people who want to speak up and address social issues that matters
          to them.
        </p>
      </div>
    </header>
  )
}

export default About
