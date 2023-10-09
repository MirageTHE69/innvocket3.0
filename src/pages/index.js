import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";
import "/src/styles/global.css";
import ExperiencePage from "./experience";

const IndexPage = () => {
 

  return (
    <Layout>
      <div className="h-screen bg-[#101418] font-leagueGothic ">
        <div className="h-[50%] w-full bg-[#101418] flex flex-col slide-in-right-bounce delay-2">
          <div className="h-full bg-[#101418] p-6">
            <div className="h-full w-full rounded-3xl bg-[#181c20]">
              <div className="flex h-full w-full flex-col justify-end gap-2 p-6">
                <span className="text-6xl font-bold text-white">PROJECT</span>
                <span className="text-white text-lg">
                  Case studies of my latest work.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full h-[50vh] md:h-[125vh] lg:h-[200vh] bg-[#101418] pt-2 pl-5 pr-5 pb-5   ">

        
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
