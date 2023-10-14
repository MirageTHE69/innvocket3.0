import React from "react"
import Layout from "../components/layout"
import HeaderSection from "../components/HeaderSection"
import StackCard from "../components/stackCard"
import TeamIcon from "../images/team.png"
import CodeIcon from "../images/code.png"
import FigmaIcon from "../images/figma.png"
import AndroidIcon from "../images/android.png"
import WebIcon from "../images/web.png"
import MernICon from "../images/Mern.png"
import GlobalIcon from "../images/global.png"
import WatchIcon from "../images/clock.png"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const HomePage = () => {
  return (
    <Layout>
      <HeaderSection
        title="HOME"
        subtext="Welcome to Innvoket where we rocket your thinking and service"
      />

      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Helmet>

      <div className="flex flex-col md:flex-row w-full p-10 space-y-3 mt-1">
        <div className="w-full md:w-1/2 flex flex-col ">
          <h2 className="font-leagueGothic text-3xl ml-3 text-white slide-in-right delay-1">
            ABOUT
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 ">
            {/* 2x2 Grid for About */}

            <div className="w-full h-[25vh] rounded-3xl bg-[#181c20]  slide-in-right delay-2 flex flex-col gap-12 p-5 md:p-4  ">
              <img src={TeamIcon} alt="team icon " className=" w-8 h-8 " />
              <span className=" text-base  text-slate-400 font-InterTight">
                We are a dedicated team offering full support
              </span>
            </div>

            <div className="w-full h-[25vh] rounded-3xl bg-[#181c20]  slide-in-right delay-2 flex flex-col gap-12  p-5 ">
              <img src={CodeIcon} alt="team icon " className=" w-8 h-8 " />
              <span className=" text-base  text-slate-400 font-InterTight">
                providing solutions for various stacks
              </span>
            </div>
            <div className="w-full h-[25vh] rounded-3xl bg-[#181c20]  slide-in-right delay-2 flex flex-col gap-12  p-5 ">
              <img src={WatchIcon} alt="team icon " className=" w-8 h-8 " />
              <span className=" text-base  text-slate-400 font-InterTight">
                We are committed to supporting you 24/7
              </span>
            </div>
            <div className="w-full h-[25vh] rounded-3xl bg-[#181c20]  slide-in-right delay-2 flex flex-col gap-12  p-5 ">
              <img src={GlobalIcon} alt="team icon " className=" w-8 h-8 " />
              <span className=" text-base md:text-base lg:text-base  text-slate-400 font-InterTight">
                connecting globally to deliver solutions.
              </span>
            </div>
          </div>
        </div>

        {/* Stack Cards */}
        <div className="w-full md:w-1/2 space-y-3 mt-5  ">
          <div className="flex justify-between items-center justify-items-center">
            <h2 className="font-leagueGothic text-3xl md:ml-8 lg:ml-8 ml-2 text-white">
              SERVICES
            </h2>
            <Link to="/stack">
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
                  <path
                    d="M5 10H15M15 10L10 15M15 10L10 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Link>
          </div>
          <div className=" p-2 md:pl-8 lg:pl-8 w-full h-full flex flex-col gap-6">
            <Link to="/serviceDetail/3">
              <StackCard
                title="Ui/Ux "
                className="slide-in-right delay-1"
                icon={FigmaIcon}
              />
            </Link>
            <Link to="/serviceDetail/1">
              <StackCard
                title="Mobile Application Development"
                icon={AndroidIcon}
                className="slide-in-right delay-2"
              />
            </Link>
            <Link to="/serviceDetail/0">
              <StackCard
                title="Web Development"
                icon={WebIcon}
                className="slide-in-right delay-3"
              />
            </Link>
            <Link to="/serviceDetail/2">
              <StackCard
                title="Software Development"
                icon={MernICon}
                className="slide-in-right delay-4"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full p-6">
        <div className="flex justify-between items-center justify-items-center slide-in-right delay-7">
          <h2 className="font-leagueGothic text-3xl ml-3 text-white">
            RECENT PROJECTS
          </h2>
          <Link to="/projects">
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
                <path
                  d="M5 10H15M15 10L10 15M15 10L10 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 p-2 md:h-[45vh] lg:h-[45vh] h-[150vh] gap-4 mt-4">
          <div className="w-full h-half rounded-3xl moon-pruple-gradient p-4 slide-in-right delay-8">
            <Link to="projectdetailpage/1">
              <div className="w-[80%] h-[80%] absolute bottom-0 right-0 ">
                <img
                  src="https://res.cloudinary.com/dxeb4jubk/image/upload/v1696884323/Images/innvocket/Desktop_-_3_cjndda.png"
                  alt=""
                  className="w-full h-full rounded-tl-3xl"
                />
              </div>{" "}
            </Link>
          </div>

          <div className="w-full h-half rounded-3xl custom-gradient2  p-4 slide-in-right delay-9">
            <Link to="projectdetailpage/0">
              <div className="w-[80%] h-[80%] absolute bottom-0 right-0 ">
                <img
                  src="https://res.cloudinary.com/dxeb4jubk/image/upload/v1696985625/Images/innvocket/Hackvengers_Web_Ui_kiwz2b.png"
                  alt=""
                  className="w-full h-full rounded-tl-3xl"
                />
              </div>{" "}
            </Link>
          </div>
          <div className="w-full h-half rounded-3xl gradient-background p-4 slide-in-right delay-10">
            <Link to="projectdetailpage/2">
              <div className="w-[80%] h-[80%] absolute bottom-0 right-0 ">
                <img
                  src="https://res.cloudinary.com/dxeb4jubk/image/upload/v1696984020/Images/innvocket/iPhone_14_-_30_nou20n.png"
                  alt=""
                  className="w-full h-full rounded-tl-3xl"
                />
              </div>{" "}
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
