import React from "react"

function Card({ imageSrc }) {
  return (
    <div className="rounded-3xl moon-pruple-gradient bg-[#181c20] w-full h-full">
      <img
        src={imageSrc}
        alt="Card Image"
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export default Card
