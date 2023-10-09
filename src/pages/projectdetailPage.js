import React from 'react';
import Layout from '../components/layout';
import HeaderSection from '../components/HeaderSection';

const ProjectDetailPage = ({ project }) => {
    return (
        <Layout>
            <HeaderSection title={"sdfs"} subtext={"sdfs"} />
            
            {/* Main Content */}
           <div className='w-full h-full pl-6 pr-6 '>

            <div className='w-full h-[38%] rounded-3xl bg-[#181c20] p-6'>


            <div className=" w-full h-full pt-5 pl-5">
            <span className=" font-leagueGothic text-[32px] text-white">
            DESIGNRSUPPLY
            </span>
          </div>

            </div>


            <div className="grid  grid-cols-2 grid-rows-3 gap-5 w-full h-[50vh] md:h-[125vh] lg:h-[200vh] bg-[#101418] pt-6 pb-5">
        
        {/* Card 1 */}
        <div className="rounded-3xl bg-[#181c20] p-4 text-white w-full h-full">
          <div className=" w-full h-full pt-5 pl-5">
            <span className=" font-leagueGothic text-[32px]">
            DESIGNRSUPPLY
            </span>
          </div>
        </div>
        {/* Card 2 */}
        <div className="rounded-3xl bg-[#181c20] p-4 text-white w-full h-full">
          <div className=" w-full h-full pt-5 pl-5">
            <span className=" font-leagueGothic text-[32px]">
            DESIGNRSUPPLY
            </span>
          </div>
        </div>
        {/* Card 3 */}
        <div className="rounded-3xl bg-[#181c20] p-4 text-white w-full h-full">
          <div className=" w-full h-full pt-5 pl-5">
            <span className=" font-leagueGothic text-[32px]">
            DESIGNRSUPPLY
            </span>
          </div>
        </div>

      
        <div className="rounded-3xl bg-[#181c20] p-4 text-white w-full h-full">
          <div className=" w-full h-full pt-5 pl-5">
            <span className=" font-leagueGothic text-[32px]">
            DESIGNRSUPPLY
            </span>
          </div>
        </div>

   
        <div className="rounded-3xl bg-[#181c20] p-4 text-white w-full h-full">
          <div className=" w-full h-full pt-5 pl-5">
            <span className=" font-leagueGothic text-[32px]">
            DESIGNRSUPPLY
            </span>
          </div>
        </div>
        <div className="rounded-3xl bg-[#181c20] p-4 text-white w-full h-full">
          <div className=" w-full h-full pt-5 pl-5">
            <span className=" font-leagueGothic text-[32px]">
            DESIGNRSUPPLY
            </span>
          </div>
        </div>

      </div>

      <div className='w-full h-[40%] rounded-3xl bg-[#181c20] p-4'>


      <div className=" w-full h-full pt-5 pl-5">
            <span className=" font-leagueGothic text-[32px] text-white">
            DESIGNRSUPPLY
            </span>
          </div>

</div>

<div className="grid grid-cols-2 gap-5 w-full h-[50vh] md:h-[125vh] lg:h-[40vh] bg-[#101418] pt-6 pb-5">
    {/* Left Arrow and Text */}
    <div className="rounded-3xl bg-[#181c20] p-4 flex items-center justify-start text-white w-full h-full font-leagueGothic text-[32px]">
        <svg className="mr-4" width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 8H2M2 8L8 2M2 8L8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        BACK TO PROJECTS
    </div>

                {/* Right Arrow and Text */}
                <div className="rounded-3xl bg-[#181c20] p-4 flex items-center justify-end text-white w-full h-full font-leagueGothic text-[32px]">
                NEXT PROJECT
                <svg className="ml-4"  width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 8H30M30 8L24 2M30 8L24 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
        
    </div>
            </div>
            </div>
        </Layout>
    );
};

export default ProjectDetailPage;
