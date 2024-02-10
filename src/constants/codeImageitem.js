import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
} from "react-icons/fa"
import Image from "gatsby-image"

import { graphql, useStaticQuery } from "gatsby"

const codequery = graphql`
  {
    file(relativePath: { eq: "CodeIcon.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ({ styleClass }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(codequery)
  return <Image className={styleClass} fluid={fluid} />
}
