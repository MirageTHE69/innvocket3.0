import React from "react"
import Layout from "../components/layout"
import ContactCard from "../components/contactCard"
import HeaderSection from "../components/HeaderSection"
import StackCard from "../components/stackCard"
import FacebookIcon from "../images/facebook.png"
import InstagramIcon from "../images/instagram.png"
import LinkdinIcon from "../images/linkdin.png"

function Contact() {
  return (
    <Layout>
      <HeaderSection
        title="HOME"
        subtext="Welcome to my personal website."
        className={"slide-in-right-bounce delay-2"}
      />

      <div className=" flex flex-col  md:flex-col lg:flex-row   w-full p-6 space-y-3 md:space-y-0 md:space-x-3 items-start">
        {" "}
        {/* Adjusted flex classes */}
        <div className="w-full md:w-[60%] contact-section flex-grow md:mr-4 pt-4">
          <div>
            <div className="text-3xl text-white font-leagueGothic mb-4">
              Send A Message
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
                <input
                  type="text"
                  placeholder="First Name"
                  className="h-15 w-full md:w-[48%] rounded-xl bg-[#181c20] text-white p-4"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="h-15 w-full md:w-[48%] rounded-xl bg-[#181c20] text-white p-4"
                />
              </div>
              <textarea
                placeholder="Message"
                className="h-48 w-full rounded-xl bg-[#181c20] text-white p-4"
              ></textarea>
              <button className="h-14 w-full rounded-xl bg-white text-[#181c20] font-bold text-center">
                Send Message
              </button>
            </div>
          </div>
        </div>
        {/* Stack Cards */}
        <div className="w-full md:w-[40%]  space-y-2 stack-section pt-8">
          <div className="flex justify-between items-center justify-items-center mb-4">
            <h2 className="font-leagueGothic text-3xl ml-3 text-white">
              SOCIALS
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
                <path
                  d="M5 10H15M15 10L10 15M15 10L10 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <StackCard
              title="Facebook"
              icon={FacebookIcon}
              className="slide-in-right delay-1 "
            />
            <StackCard
              title="Linkedin"
              icon={LinkdinIcon}
              className="slide-in-right delay-2 "
            />
            <StackCard
              title="Instagram"
              icon={InstagramIcon}
              className="slide-in-right delay-3 "
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
