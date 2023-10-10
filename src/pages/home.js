import React from "react"
import Layout from "../components/layout"
import HeaderSection from "../components/HeaderSection"
import StackCard from "../components/stackCard"

const HomePage = () => {
  return (
    <Layout>
      <HeaderSection title="HOME" subtext="Welcome to my personal website." />

      <div className="flex flex-col md:flex-row w-full p-10 space-y-3 mt-5">
        <div className="w-full md:w-1/2 flex flex-col ">
          <h2 className="font-leagueGothic text-3xl ml-3 text-white slide-in-right delay-1">
            ABOUT
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            {/* 2x2 Grid for About */}
            <div className="w-full h-[25vh] rounded-3xl bg-[#181c20] p-4 slide-in-right delay-2  ">
              {/* Your content for the top-left box */}
            </div>
            <div className="w-full h-[25vh] rounded-3xl bg-[#181c20] p-4 slide-in-right delay-3">
              {/* Your content for the top-right box */}
            </div>
            <div className="w-full h-[25vh] rounded-3xl bg-[#181c20] p-4 slide-in-right delay-4">
              {/* Your content for the bottom-left box */}
            </div>
            <div className="w-full h-[25vh] rounded-3xl bg-[#181c20] p-4 slide-in-right delay-5">
              {/* Your content for the bottom-right box */}
            </div>
          </div>
        </div>

        {/* Stack Cards */}
        <div className="w-full md:w-1/2 space-y-3  ">
          <div className="flex justify-between items-center justify-items-center">
            <h2 className="font-leagueGothic text-3xl md:ml-8 lg:ml-8 ml-2 text-white">
              STACK
            </h2>
            <button className="flex items-center text-white">
              <span className="transition-transform transform hover:translate-x-[-8px] text-[#bdc7d0] text-sm">
                View all
              </span>
              <svg
                className="ml-2 align-middle text-[#bdc7d0]"
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG path */}
              </svg>
            </button>
          </div>
          <div className=" p-2 md:pl-8 lg:pl-8 w-full h-full flex flex-col gap-6">
            <StackCard
              title="Stack Title 1"
              icon={""}
              className="slide-in-right delay-1"
            />
            <StackCard
              title="Stack Title 2"
              icon={""}
              className="slide-in-right delay-2"
            />
            <StackCard
              title="Stack Title 3"
              icon={""}
              className="slide-in-right delay-3"
            />
            <StackCard
              title="Stack Title 4"
              icon={""}
              className="slide-in-right delay-4"
            />
          </div>
        </div>
      </div>

      <div className="w-full p-6">
        <div className="flex justify-between items-center justify-items-center slide-in-right delay-7">
          <h2 className="font-leagueGothic text-3xl ml-3 text-white">
            RECENT PROJECTS
          </h2>
          <button className="flex items-center text-white">
            <span className="transition-transform transform hover:translate-x-[-8px] text-[#bdc7d0] text-sm">
              View all
            </span>
            <svg
              className="ml-2 align-middle text-[#bdc7d0]"
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG path */}
            </svg>
          </button>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 p-2 md:h-[45vh] lg:h-[45vh] h-[250vh] gap-4 mt-4">
          <div className="w-full h-half rounded-3xl bg-[#181c20] p-4 slide-in-right delay-8">
            {/* Your content */}
          </div>
          <div className="w-full h-half rounded-3xl bg-[#181c20] p-4 slide-in-right delay-9">
            {/* Your content */}
          </div>
          <div className="w-full h-half rounded-3xl bg-[#181c20] p-4 slide-in-right delay-10">
            {/* Your content */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
