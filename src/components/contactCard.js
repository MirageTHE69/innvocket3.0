import React from "react"

const ContactCard = ({ title, icon }) => {
  return (
    <div className="rounded-xl bg-[#181c20]">
      <div className="  flex flex-row">
        <div className="flex py-5 px-5">{icon}</div>
        <div className="w-full h-full text-3xl py-7 text-white">{title}</div>
      </div>
    </div>
  )
}

export default ContactCard