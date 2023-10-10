import React from "react"

function Card({ title, subtitle, imageSrc }) {
  return (
    <div className="rounded-3xl p-6  text-white  bg-[#181c20]  relative aspect-w-1  aspect-h-1">
      <div className=" w-full h-[50%] flex  justify-between  ">
        <img src={imageSrc} alt={title} className=" h-10 w-10  mb-4" />
      </div>
      <div className="  flex flex-col  ">
        <span className="  text-5xl">{title}</span>
        <span className=" mt-4   text-slate-500">{subtitle}</span>
      </div>
    </div>
  )
}

export default Card
