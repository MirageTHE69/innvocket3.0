import React from "react"

function Contact() {
  return (
    <div className="h-screen w-screen bg-[#101418]">
      <div class="h-screen w-screen bg-[#101418] p-10">
        <div class="h-[55%]  rounded-3xl bg-[#181c20] flex flex-col">
          <div class="h-full bg-[#101418] p-5">
            <div class="h-full w-full rounded-2xl bg-[#181c20]">
              <div class="flex h-full w-full flex-col justify-end gap-2 p-10">
                <span class="text-6xl font-bold text-white ">CONTACT</span>
                <span class="text-white font-thin  text-lg">
                  {" "}
                  Want to work to gather{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class=" h-screen w-screen">
          <div class="h-full w-[50%] bg-white"></div>
        </div>
      </div>
    </div>
  )
}

export default Contact
