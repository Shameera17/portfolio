import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaGithub,
} from "react-icons/fa"
import { FaUnsplash } from "react-icons/fa6"
import Image from "gatsby-image"

import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    file(relativePath: { eq: "Line.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const data = [
  {
    id: 1,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://www.github.com/shameera17",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/shameeracarrim17/",
  },
  {
    id: 3,

    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://web.facebook.com/shameera28",
  },
  {
    id: 4,
    icon: <FaUnsplash className="social-icon"></FaUnsplash>,
    url: "https://unsplash.com/@shameera17",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a
        href={link.url}
        style={{ display: "table-cell" }}
        target="_blank"
        className="social-link"
      >
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>
      {links}
      <Image className={"social-line"} fluid={fluid} />
    </ul>
  )
}
