import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeaderSection from "../components/HeaderSection"

const ExperiencePage = () => {
  return (
    <Layout>
      <div className="h-screen bg-[#101418] font-leagueGothic">
        <HeaderSection
          title="EXPERIENCE"
          subtext="Overview of my professional journey."
        />
        <div className="grid  grid-cols-1 lg:grid-cols-2 lg:grid-row-3 md:grid-cols-2 md:grid-rows-3 gap-4 w-full h-[250vh] md:h-[125vh] lg:h-[200vh] bg-[#101418] pt-2 pl-5 pr-5 pb-5">
          {/* Card 1 */}
          <div className="rounded-3xl bg-[#181c20] p-4 text-white w-full h-full ">
            <div className=" w-full h-full pt-5 pl-5">
              <div className=" w-full h-full flex flex-col">
                <span className=" font-leagueGothic text-[50px]">
                  Vidhya Verse
                </span>
                <div className=" w-full h-full text-base p-5 mt-5 flex flex-col gap-3 font-InterTight">
                  <div className="flex flex-row ">
                    <span>+</span>
                    <span>
                      Client: Vidhya Verse - A Web3 and blockchain study
                      platform.
                    </span>
                  </div>
                  <div className="flex flex-row ">
                    <span>+</span>

                    <span>
                      Challenge: Integrate blockchain, maintain
                      user-friendliness, budget, and timeline.
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <span>+</span>
                    <span>
                      Goal: Create a secure, decentralized academic records
                      platform.
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <span>+</span>
                    <span>
                      Process: Explored blockchain for education, collaborated
                      with Vidhya Verse.
                    </span>
                  </div>

                  <div className="flex flex-row">
                    <span>+</span>
                    <span>
                      Results: Platform exceeded client expectations, validating
                      blockchain's role.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="rounded-3xl bg-[#181c20] p-4 text-white w-full h-full">
            <div className=" w-full h-full pt-5 pl-5">
              <div className=" w-full h-full flex flex-col">
                <span className=" font-leagueGothic text-[50px]">
                  Hackvengers
                </span>
                <div className="w-full h-full text-base p-5 mt-4 flex flex-col gap-3 font-InterTight">
                  <div className="flex flex-row">
                    <span>+</span>
                    <span>
                      Organize a college hackathon promoting innovation and
                      teamwork.
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <span>+</span>

                    <span>Conducted pre-event publicity and workshops.</span>
                  </div>
                  <div className="flex flex-row">
                    <span>+</span>
                    <span>
                      Established fair judging criteria for project evaluation.
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <span>+</span>
                    <span>
                      Enthusiastic participation across tech tracks, generating
                      innovative projects.
                    </span>
                  </div>

                  <div className="flex flex-row">
                    <span>+</span>
                    <span>
                      Positive feedback from participants, sponsors, and college
                      authorities.
                    </span>
                  </div>

                  <div className="flex flex-row">
                    <span>+</span>

                    <span>
                      Cultivated innovation and collaboration, aligning with
                      initial objectives.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="rounded-3xl bg-[#181c20] p-4 text-white w-full h-full">
            <div className=" w-full h-full pt-5 pl-5">
              <div className=" w-full h-full flex flex-col">
                <span className=" font-leagueGothic text-[50px]">Puconnet</span>
                <div className="w-full h-full text-base p-5 mt-5 flex flex-col gap-3 font-InterTight">
                  <div className="flex flex-row">
                    <span>+</span>
                    <span>
                      Objective: Create an app for students to connect and boost
                      productivity.
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <span>+</span>

                    <span>
                      Challenge: Balance user-friendliness with data security
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <span>+</span>
                    <span>
                      Features: Profiles, chat, productivity tools, privacy
                      controls
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <span>+</span>
                    <span>
                      Development: Involved students for feedback and
                      improvement.
                    </span>
                  </div>

                  <div className="flex flex-row">
                    <span>+</span>
                    <span>
                      Results: Improved student connections, productivity, and
                      networking.
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <span>+</span>
                    <span>
                      Impact: Strengthened community and learning collaboration.
                    </span>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>

          {/* Double-height Card on right 1 */}
          <div className="rounded-3xl bg-[#181c20] p-4 row-span-2 text-white w-full">
            <div className=" w-full h-full pt-5 pl-5">
              <div className=" w-full h-full flex flex-col">
                <span className=" font-leagueGothic text-[50px]">Skills</span>
                <div className=" w-full h-full text-base p-5 mt-5 flex flex-col gap-3 font-InterTight">
                  <div className="flex flex-row">
                    <span>+</span>
                    <span>Kotlin</span>
                  </div>
                  <div className="flex flex-row">
                    <span>+</span>

                    <span>Mern Stack</span>
                  </div>
                  <div className="flex flex-row">
                    <span>+</span>
                    <span>Java</span>
                  </div>
                  <div className="flex flex-row">
                    <span>+</span>
                    <span>React Js</span>
                  </div>

                  <div className="flex flex-row">
                    <span>+</span>
                    <span>Unity</span>
                  </div>
                  <div className="flex flex-row">
                    <span>+</span>
                    <span>Java Script</span>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>

          {/* Double-height Card on right 2 */}
          <div className="rounded-3xl bg-[#181c20] p-4  text-white w-full h-full">
            <div className=" w-full h-full pt-5 pl-5">
              <div className=" w-full h-full flex flex-col">
                <span className=" font-leagueGothic text-[50px]">
                  Sigma University Website
                </span>
                <div className=" w-full h-full text-base p-5 mt-5 flex flex-col gap-3 font-InterTight">
                  <div className="flex flex-row">
                    <span>+</span>
                    <span>
                      Objective: Create a user-friendly website for Sigma
                      University.
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <span>+</span>

                    <span>Challenge: Balance design and functionality.</span>
                  </div>
                  <div className="flex flex-row">
                    <span>+</span>
                    <span>
                      Features: Easy navigation, course info, news, and
                      contacts.
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <span>+</span>
                    <span>
                      Development: Collaborated with university staff.
                    </span>
                  </div>

                  <div className="flex flex-row">
                    <span>+</span>
                    <span>
                      Results: Enhanced online presence, communication, and
                      resource access.
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <span>+</span>
                    <span>
                      Impact: Improved community connection and information
                      sharing.
                    </span>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Experience" />

export default ExperiencePage
