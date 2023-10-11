import React, { useState } from "react"
import Layout from "../components/layout"
import HeaderSection from "../components/HeaderSection"
import { Link } from "gatsby"

const titleArray = ["hackavenger", "vidhya verse", "sigma"]

const ProjectDetailPage = ({ pageContext }) => {
  const project = pageContext.project

  const [currentIndex, setCurrentIndex] = useState(0)
  const currentTitle = titleArray[currentIndex]
  const nextTitleIndex = (currentIndex + 1) % titleArray.length
  const nextTitle = titleArray[nextTitleIndex]
  return (
    <Layout>
      <HeaderSection title={project?.title} subtext={project?.brief} />

      {/* Main Content */}
      <div className="w-full h-full pl-6 pr-6 ">
        <div className="w-full h-[38%] rounded-3xl bg-[#181c20] p-6">
          <div className=" w-full h-full pt-5 pl-5">
            <div className=" h-full w-full flex flex-col">
              <span className=" font-leagueGothic text-[32px] text-white">
                DESIGNRSUPPLY
              </span>
              <div className="mt-10 text-white text-sm md:text-base font-medium font-InterTight">
                <p>{project?.brief}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2  md:grid-rows-3 lg:grid-rows-3 gap-5 w-full h-[350vh] md:h-[125vh] lg:h-[200vh] bg-[#101418] pt-6 pb-5 ">
          {/* Card 1 */}
          <div className="rounded-3xl bg-[#181c20] p-4 text-white w-full h-full">
            <div className=" h-full w-full flex flex-col">
              <span className=" font-leagueGothic text-[32px] text-white">
                problem
              </span>
              <div className="mt-10 text-white font-medium font-InterTight">
                <p>{project?.problem}</p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="rounded-3xl gradient-background p-4 text-white w-full h-full">
            <div className=" w-full h-[55vh] flex justify-center mt-3">
              <div className="">
                <img
                  src={project?.imgUrls[2]}
                  // Access the first image URL
                  alt={project?.title}
                  className=" "
                />
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="rounded-3xl bg-[#181c20] p-4 text-white w-full h-full">
            <div className=" h-full w-full flex flex-col">
              <span className=" font-leagueGothic text-[32px] text-white">
                process
              </span>
              <div className="mt-10 text-white font-medium font-InterTight">
                <p>{project?.process}</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl gradient-background p-4 text-white w-full h-full">
            <div className=" w-full h-[55vh] flex justify-center mt-3">
              <div className="">
                <img
                  src={project?.imgUrls[1]}
                  // Access the first image URL
                  alt={project?.title}
                  className=" w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-[#181c20] p-4 text-white w-full h-full">
            <div className=" h-full w-full flex flex-col">
              <span className=" font-leagueGothic text-[32px] text-white">
                Result
              </span>
              <div className="mt-10 text-white font-medium font-InterTight">
                <p>{project?.results}</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl gradient-background p-4 text-white w-full h-full">
            <div className=" w-full h-[55vh] flex justify-center mt-3">
              <div className="">
                <img
                  src={project?.imgUrls[2]}
                  // Access the first image URL
                  alt={project?.title}
                  className=" w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full h-[50vh] md:h-[125vh] lg:h-[40vh] bg-[#101418] pt-6 pb-5">
          {/* Left Arrow and Text */}
          <div className="rounded-3xl bg-[#181c20] p-4 flex items-center justify-start text-white w-full h-full font-leagueGothic text-[32px]">
            <svg
              className="mr-4"
              width="32"
              height="16"
              viewBox="0 0 32 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 8H2M2 8L8 2M2 8L8 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            BACK TO PROJECTS
          </div>

          {nextTitle && (
            <Link
              to={`/projectdetailpage/${nextTitle
                .toLowerCase()
                .replace(/\s/g, "-")}`}
            >
              <div className="rounded-3xl bg-[#181c20] p-4 flex items-center justify-end text-white w-full h-full font-leagueGothic text-[32px]">
                NEXT PROJECT
                <svg
                  className="ml-4"
                  width="32"
                  height="16"
                  viewBox="0 0 32 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8H30M30 8L24 2M30 8L24 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          )}
        </div>
      </div>
      
    </Layout>
  )
}

export default ProjectDetailPage
