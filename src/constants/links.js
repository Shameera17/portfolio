import React from "react"
import { Link } from "gatsby"
import { scrollToElement } from "../utils/helpers"
const data = [
  {
    id: 1,
    text: "about",
    nav: "about",
  },
  {
    id: 2,
    text: "experience",
    nav: "jobs",
  },
  {
    id: 3,
    text: "projects",
    nav: "projects",
  },
  {
    id: 4,
    text: "hobbies",
    nav: "hobbies",
  },
  {
    id: 5,
    text: "contact",
    nav: "contact",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id} className={link.text + link.id}>
      <a
        style={{
          cursor: "pointer",
        }}
        onClick={() => scrollToElement(link.nav)}
      >
        {link.text}
      </a>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
