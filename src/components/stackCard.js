import React from "react"

const StackCard = ({ title, icon, className }) => {
  return (
    <div className={` w-full h-[10vh] default-styles-for-card  ${className}`}>
      <div className="w-full h-full rounded-xl bg-[#181c20] stack-item">
        <div className="flex items-center w-full h-[11vh] md:w-full md:h-full ">
          <div className="pl-5 pr-10">
            <img className=" w-10 h-10 " src={icon} alt="icon" />{" "}
          </div>
          <div className="md:text-3xl lg:text-3xl text-xl text-white font-leagueGothic">
            {title}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StackCard
