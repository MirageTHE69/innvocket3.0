import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import "/src/styles/global.css"
import ExperiencePage from "./experience"
import HeaderSection from "../components/HeaderSection"

const IndexPage = () => {
  return (
    <Layout>
      <div className="h-screen bg-[rgb(16,20,24)] font-leagueGothic ">
        <HeaderSection title="PROJECTS" subtext="Case study of latest work" />
        <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 gap-4 w-full h-[400vh] md:h-[450vh] lg:h-[200vh] bg-[#101418] pt-2 pl-5 pr-5 pb-5">
          {/* Card 1 */}
          <div className="rounded-3xl gradient-background p-4 text-white w-full h-full slide-in-right delay-2">
            {/* Card content goes here */}
          </div>

          {/* Repeat for cards 2 to 12 */}
          {/* Card 2 */}
          <div className="rounded-3xl moon-pruple-gradient bg-[#181c20] p-4 text-white w-full slide-in-right delay-3 stack-item">
            {/* Card content goes here */}
          </div>
          <div className="rounded-3xl bg-[#181c20] p-4 text-white w-full h-full slide-in-right delay-4 stack-item">
            {/* Card content goes here */}
          </div>
          <div className="rounded-3xl bg-[#181c20] p-4 text-white w-full h-full slide-in-right delay-5 stack-item">
            {/* Card content goes here */}
          </div>
          <div className="rounded-3xl bg-[#181c20] p-4 text-white w-full h-full slide-in-right delay-1 stack-item">
            {/* Card content goes here */}
          </div>

          <div className="rounded-3xl bg-[#181c20] p-4 text-white w-full h-full slide-in-right delay-2 stack-item">
            {/* Card content goes here */}
          </div>

          {/* ... Repeat for cards 3 to 12 ... */}
        </div>
      </div>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
