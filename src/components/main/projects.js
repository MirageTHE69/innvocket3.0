import * as React from "react"

function Project() {
  return (
    <div className=" h-screen w-screen">
      <div className="h-[35%] w-screen bg-[#101418] flex flex-col ">
        <div className="h-full w-screen bg-[#101418] p-5">
          <div className="h-full w-full rounded-2xl bg-[#181c20]">
            <div className="flex h-full w-full flex-col justify-end gap-2 p-6">
              <span className="text-6xl font-bold text-white ">PROJECT</span>
              <span className="text-white text-lg">
                Case studies of my latest work.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 w-screen h-screen  bg-[#101418] p-4 ">
        {/* Card 1 */}
        <div className="rounded-xl gradient-background p-4 text-white w-full h-full">
          {/* Card content goes here */}
        </div>

        {/* Repeat for cards 2 to 12 */}
        {/* Card 2 */}
        <div className="rounded-xl bg-[#181c20] p-4 text-white w-full h-full">
          {/* Card content goes here */}
        </div>
        <div className="rounded-xl bg-[#181c20] p-4 text-white w-full h-full">
          {/* Card content goes here */}
        </div>
        <div className="rounded-xl bg-[#181c20] p-4 text-white w-full h-full">
          {/* Card content goes here */}
        </div>
        <div className="rounded-xl bg-[#181c20] p-4 text-white w-full h-full">
          {/* Card content goes here */}
        </div>

        <div className="rounded-xl bg-[#181c20] p-4 text-white w-full h-full">
          {/* Card content goes here */}
        </div>

        {/* ... Repeat for cards 3 to 12 ... */}
      </div>
    </div>
  )
}

export default Project
