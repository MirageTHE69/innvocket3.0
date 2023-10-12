import React, { useState } from "react"
import Layout from "../components/layout"
import HeaderSection from "../components/HeaderSection"
import { Link } from "gatsby"

const titleArray = ["hackavenger", "vidhya verse", "Pu Connect"]

const ProjectDetailPage = ({ pageContext }) => {
  const { project, index, totalProjects } = pageContext;  // Destructure totalProjects from pageContext

  const nextIndex = (parseInt(index, 10) + 1) % totalProjects;
  const nextTitle = titleArray[nextIndex]; 
  return (
    <Layout>
     <HeaderSection
  title={project?.title}
  subtext={project?.stack.join(', ')}
  
/>


      {/* Main Content */}
      <div className="w-full h-full pl-6 pr-6 ">
        <div className="w-full h-[38%] rounded-3xl bg-[#181c20] p-6">
          <div className=" w-full h-full pt-5 pl-5">
            <div className=" h-full w-full flex flex-col">
              <span className=" font-leagueGothic text-[32px] text-white capitalize">
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
          <div className="rounded-3xl bg-[#181c20] p-10 text-white w-full h-full">
            <div className=" h-full w-full flex flex-col">
              <span className=" font-leagueGothic text-[32px] text-white capitalize">
                PROBLEM
              </span>
              <div className="mt-10 text-white  font-medium font-InterTight">
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
                  className=" w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl bg-[#181c20] p-10 text-white w-full h-full">
            <div className=" h-full w-full flex flex-col">
              <span className=" font-leagueGothic   text-[32px] text-white">
                PROCESS
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
                  className=" w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-[#181c20] p-10 text-white w-full h-full">
            <div className=" h-full w-full flex flex-col">
              <span className=" font-leagueGothic text-[32px] text-white">
                RESULT
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
                  className=" w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full h-[50vh] md:h-[125vh] lg:h-[40vh] bg-[#101418] pt-6 pb-5  mt-16  md:mt-0 lg:mt-0">
          {/* Left Arrow and Text */}
          <Link 
          to={'/'}>
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
          </Link>

          {nextTitle && (
            <Link
              to={`/projectdetailpage/${nextIndex
               }`}
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