import React from "react"
import Layout from "../components/layout"
import HeaderSection from "../components/HeaderSection"
import { Link } from "gatsby"

const ServiceDetail = ({ pageContext }) => {
  const { service, index, totalServices } = pageContext // updated this line

  // Calculate the paths for the next and previous services
  const prevServiceIndex = index === 0 ? totalServices - 1 : index - 1
  const nextServiceIndex = (index + 1) % totalServices

  return (
    <Layout>
      <HeaderSection title={service?.title} subtext={service?.service} />

      {/* Main Content */}
      <div className="w-full h-full pl-6 pr-6 ">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2  md:grid-rows-1 lg:grid-rows-1 gap-5 w-full h-[150vh] md:h-[125vh] lg:h-[80vh] bg-[#101418] pt-6 pb-5 ">
          {/* Card 1 */}
          <div className="rounded-3xl bg-[#181c20] p-10 text-white w-full h-full">
            <div className=" h-full w-full flex flex-col">
              <span className=" font-leagueGothic text-[32px] text-white capitalize">
                PROBLEM
              </span>
              <div className="mt-10 text-white  font-medium font-InterTight">
                <p>{service?.description}</p>
              </div>
            </div>
          </div>
          {/* Card 2 */}

          <div className="rounded-3xl bg-[#181c20] p-4 text-white w-full h-full">
            <div className=" w-full h-[55vh] flex justify-center mt-3">
              <div className=" h-full w-full flex flex-col">
                <span className=" font-leagueGothic text-[32px] text-white capitalize">
                  Tech stack
                </span>
                <div className="mt-10 text-white  font-medium font-InterTight">
                  <p>{service?.techStack}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full h-[40vh] bg-[#101418] pt-6 pb-5 mt-44 md:mt-0">
          {/* Left Arrow and Text */}
          <Link to={`/stack`}>
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
              Back to services
            </div>
          </Link>

          <Link to={`/servicedetail/${nextServiceIndex}`}>
            <div className="rounded-3xl bg-[#181c20] p-4 flex items-center justify-end text-white w-full h-full font-leagueGothic text-[32px]">
              Next service
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
        </div>
      </div>
    </Layout>
  )
}

export default ServiceDetail
