import React from 'react';

function HeaderSection({ title, subtext }) {
  return (
  
      <div className="h-[50%] w-full bg-[#101418] mt-28 md:mt-0 lg:mt-0 flex flex-col ">
        <div className="h-full bg-[#101418] p-6">
          <div className="h-full w-full rounded-3xl bg-[#181c20]">
            <div className="flex h-full w-full flex-col justify-end gap-2 p-10">
              <span className="text-6xl  text-white font-leagueGothic">{title}</span>
              <span className="text-[#949da6]  text-base font-InterTight">{subtext}</span>
            </div>
          </div>
        </div>
      </div>
 
  );
}

export default HeaderSection;
