import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import HeaderSection from "../components/HeaderSection";

const ExperiencePage = () => {
  return (
    <Layout>
      <div className="h-screen bg-[#101418] font-leagueGothic">
      <HeaderSection title="EXPERIENCE" subtext="Overview of my professional journey." />


        <div className="grid  grid-cols-1 lg:grid-cols-2 lg:grid-row-3 md:grid-cols-2 md:grid-rows-3 gap-4 w-full h-[250vh] md:h-[125vh] lg:h-[200vh] bg-[#101418] pt-2 pl-5 pr-5 pb-5">
        
          {/* Card 1 */}
          <div className="rounded-3xl bg-[#181c20] p-4 text-white w-full h-full">
            <div className=" w-full h-full pt-5 pl-5">
              <span className=" font-leagueGothic text-[50px]">
              DESIGNRSUPPLY
              </span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="rounded-3xl bg-[#181c20] p-4 text-white w-full h-full">
            {/* Card content goes here */}
          </div>
          {/* Card 3 */}
          <div className="rounded-3xl bg-[#181c20] p-4 text-white w-full h-full">
            {/* Card content goes here */}
          </div>

          {/* Double-height Card on right 1 */}
          <div className="rounded-3xl bg-[#181c20] p-4 row-span-2 text-white w-full">
            {/* Card content goes here */}
          </div>

          {/* Double-height Card on right 2 */}
          <div className="rounded-3xl bg-[#181c20] p-4  text-white w-full h-full">
            {/* Card content goes here */}
          </div>

        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Experience" />

export default ExperiencePage;
