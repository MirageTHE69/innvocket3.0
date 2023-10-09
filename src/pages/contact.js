import React from "react"
import Layout from "../components/layout"
import ContactCard from "../components/contactCard"
import HeaderSection from "../components/HeaderSection"
import StackCard from "../components/stackCard"

function Contact() {
    return (
        <Layout>
          <HeaderSection title="HOME" subtext="Welcome to my personal website." />
    
          <div className="flex justify-between w-full p-6 space-y-3">
          <div class="h-[58%] w-[60%] ">
          <div class=" ">
            <div class="p-10 text-4xl text-white">Send A Message</div>
            <div class="flex w-full flex-row justify-around pl-5  pr-5">
              <div class="h-16 w-[45%] rounded-xl bg-[#181c20]"></div>

              <div class="h-16 w-[45%] rounded-xl bg-[#181c20]"></div>
            </div>
            <div class="flex w-full flex-col justify-around pl-5 pr-5 mt-5 ml-4">
              <div class=" h-72 w-[95%] rounded-xl bg-[#181c20]"></div>

              <div class=" mt-3 h-14 w-[95%] rounded-xl bg-white"></div>
            </div>
          </div>
        </div>
    
            {/* Stack Cards */}
            <div className="w-[40%] space-y-3 ">
                <div className="flex justify-between items-center justify-items-center">
                    <h2 className="font-leagueGothic text-3xl ml-3 text-white">STACK</h2>
                    <button className="flex items-center text-white">
                        <span className="transition-transform transform hover:translate-x-[-8px] text-[#bdc7d0] text-sm">
                            View all
                        </span>
                        <svg className="ml-2 align-middle text-[#bdc7d0]" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 10H15M15 10L10 15M15 10L10 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </button>
                </div>
    
        <StackCard title="Stack Title 1" icon={""} className="slide-in-right delay-1" />
      <StackCard title="Stack Title 2" icon={""} className="slide-in-right delay-2" />
      <StackCard title="Stack Title 3" icon={""} className="slide-in-right delay-3" />
      <StackCard title="Stack Title 4" icon={""} className="slide-in-right delay-4" />
            </div>
          </div>
    
        </Layout>
      );
}

export default Contact