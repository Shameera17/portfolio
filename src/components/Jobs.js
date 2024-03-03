import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import jobs from "../constants/jobs"
const Jobs = () => {
  const [value, setValue] = useState(1)
  const { company, positionBased, id } = jobs[value]
  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs
            .map((item, index) => (
              <button
                className={`job-btn  ${index === value && "active-btn"}`}
                key={item.id}
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            ))
            .reverse()}
        </div>
        {/* job info */}
        <article className="job-info">
          {positionBased.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <h4>{company}</h4>
              <p className="job-date">{item.duration}</p>
              {/* projects */}
              {item.project.map((projectItem, index) => (
                <>
                  <div className="job-desc" key={index}>
                    <p
                      style={{
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
                    >
                      {projectItem.name}
                    </p>
                    <p>{projectItem.description}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Tech stack:
                    </p>
                    <p> {projectItem.techStack}</p>
                  </div>
                  <div>
                    {projectItem.responsibilities.map((task, tindex) => (
                      <div
                        key={tindex}
                        style={{
                          display: "flex",
                          gap: "10px",
                        }}
                      >
                        <FaAngleDoubleRight />
                        <p>{task}</p>
                      </div>
                    ))}
                  </div>
                </>
              ))}
            </div>
          ))}
        </article>
      </div>
    </section>
  )
}

export default Jobs
