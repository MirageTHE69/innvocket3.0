import * as React from "react"

function Stack() {
  return (
    <div className=" h-screen w-screen bg-[#101418] font-leagueGothic ">
      <div className="h-[35%] w-screen bg-[#101418] flex flex-col ">
        <div className="h-full w-screen bg-[#101418] p-5">
          <div className="h-full w-full rounded-2xl bg-[#181c20]">
            <div className="flex h-full w-full flex-col justify-end gap-2 p-6">
              <span className="text-6xl font-bold text-white ">STACK</span>
              <span className="text-white font-thin text-lg">
                Recommended tools and resources.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 w-screen h-screen  bg-[#101418] p-4 ">
        {/* Card 1 */}
        <div className="rounded-xl p-6  text-white  bg-[#181c20]  relative aspect-w-1  aspect-h-1">
          <div className=" w-full h-[50%] flex  justify-between  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 20 20"
              viewBox="0 0 24 24"
              id="figma"
              className=" h-10 w-7  "
            >
              <path
                fill="#0ACF83"
                d="M8,24c2.208,0,4-1.792,4-4v-4H8c-2.208,0-4,1.792-4,4C4,22.208,5.792,24,8,24L8,24z"
              ></path>
              <path
                fill="#A259FF"
                d="M4,12c0-2.208,1.792-4,4-4h4v8H8C5.792,16,4,14.208,4,12L4,12z"
              ></path>
              <path
                fill="#F24E1E"
                d="M4,4c0-2.208,1.792-4,4-4h4v8H8C5.792,8,4,6.208,4,4L4,4z"
              ></path>
              <path
                fill="#09B472"
                d="M8.419,16H8c-2.208,0-4,1.792-4,4c0,2.208,1.792,4,4,4l0,0c0.142,0,0.281-0.007,0.419-0.022V16L8.419,16z"
              ></path>
              <path
                fill="#8D4DDE"
                d="M8.419,8H8c-2.208,0-4,1.792-4,4s1.792,4,4,4h0.419V8L8.419,8z"
              ></path>
              <path
                fill="#D3441A"
                d="M8.419,0H8C5.792,0,4,1.792,4,4s1.792,4,4,4h0.419V0L8.419,0z"
              ></path>
              <path
                fill="#FF7262"
                d="M12,0h4c2.208,0,4,1.792,4,4c0,2.208-1.792,4-4,4h-4V0L12,0z"
              ></path>
              <path
                fill="#1ABCFE"
                d="M20,12c0,2.208-1.792,4-4,4c-2.208,0-4-1.792-4-4c0-2.208,1.792-4,4-4C18.208,8,20,9.792,20,12L20,12z"
              ></path>
              <polygon
                fill="#DE6355"
                points="16 0 12 0 12 8 16 8 16 8 16 8 16 0 16 0"
              ></polygon>
              <path
                fill="#17A4DD"
                d="M16,8L16,8c-2.208,0-4,1.792-4,4c0,2.208,1.792,4,4,4l0,0V8L16,8L16,8z"
              ></path>
            </svg>
          </div>
          <div className="  flex flex-col  ">
            <span className="  text-5xl">FIGMA</span>
            <span className=" mt-4   text-slate-500">Interface Design</span>
          </div>
        </div>

        {/* Repeat for cards 2 to 12 */}
        {/* Card 2 */}
        <div className="rounded-xl p-6  text-white  bg-[#181c20]  relative aspect-w-1  aspect-h-1">
          <div className=" w-full h-[50%] flex  justify-between  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 20 20"
              viewBox="0 0 24 24"
              id="figma"
              className=" h-10 w-7  "
            >
              <path
                fill="#0ACF83"
                d="M8,24c2.208,0,4-1.792,4-4v-4H8c-2.208,0-4,1.792-4,4C4,22.208,5.792,24,8,24L8,24z"
              ></path>
              <path
                fill="#A259FF"
                d="M4,12c0-2.208,1.792-4,4-4h4v8H8C5.792,16,4,14.208,4,12L4,12z"
              ></path>
              <path
                fill="#F24E1E"
                d="M4,4c0-2.208,1.792-4,4-4h4v8H8C5.792,8,4,6.208,4,4L4,4z"
              ></path>
              <path
                fill="#09B472"
                d="M8.419,16H8c-2.208,0-4,1.792-4,4c0,2.208,1.792,4,4,4l0,0c0.142,0,0.281-0.007,0.419-0.022V16L8.419,16z"
              ></path>
              <path
                fill="#8D4DDE"
                d="M8.419,8H8c-2.208,0-4,1.792-4,4s1.792,4,4,4h0.419V8L8.419,8z"
              ></path>
              <path
                fill="#D3441A"
                d="M8.419,0H8C5.792,0,4,1.792,4,4s1.792,4,4,4h0.419V0L8.419,0z"
              ></path>
              <path
                fill="#FF7262"
                d="M12,0h4c2.208,0,4,1.792,4,4c0,2.208-1.792,4-4,4h-4V0L12,0z"
              ></path>
              <path
                fill="#1ABCFE"
                d="M20,12c0,2.208-1.792,4-4,4c-2.208,0-4-1.792-4-4c0-2.208,1.792-4,4-4C18.208,8,20,9.792,20,12L20,12z"
              ></path>
              <polygon
                fill="#DE6355"
                points="16 0 12 0 12 8 16 8 16 8 16 8 16 0 16 0"
              ></polygon>
              <path
                fill="#17A4DD"
                d="M16,8L16,8c-2.208,0-4,1.792-4,4c0,2.208,1.792,4,4,4l0,0V8L16,8L16,8z"
              ></path>
            </svg>
          </div>
          <div className="  flex flex-col  ">
            <span className="  text-5xl">FIGMA</span>
            <span className=" mt-4   text-slate-500">Interface Design</span>
          </div>
        </div>

        <div className="rounded-xl p-6  text-white  bg-[#181c20]  relative aspect-w-1  aspect-h-1">
          <div className=" w-full h-[50%] flex  justify-between  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 20 20"
              viewBox="0 0 24 24"
              id="figma"
              className=" h-10 w-7  "
            >
              <path
                fill="#0ACF83"
                d="M8,24c2.208,0,4-1.792,4-4v-4H8c-2.208,0-4,1.792-4,4C4,22.208,5.792,24,8,24L8,24z"
              ></path>
              <path
                fill="#A259FF"
                d="M4,12c0-2.208,1.792-4,4-4h4v8H8C5.792,16,4,14.208,4,12L4,12z"
              ></path>
              <path
                fill="#F24E1E"
                d="M4,4c0-2.208,1.792-4,4-4h4v8H8C5.792,8,4,6.208,4,4L4,4z"
              ></path>
              <path
                fill="#09B472"
                d="M8.419,16H8c-2.208,0-4,1.792-4,4c0,2.208,1.792,4,4,4l0,0c0.142,0,0.281-0.007,0.419-0.022V16L8.419,16z"
              ></path>
              <path
                fill="#8D4DDE"
                d="M8.419,8H8c-2.208,0-4,1.792-4,4s1.792,4,4,4h0.419V8L8.419,8z"
              ></path>
              <path
                fill="#D3441A"
                d="M8.419,0H8C5.792,0,4,1.792,4,4s1.792,4,4,4h0.419V0L8.419,0z"
              ></path>
              <path
                fill="#FF7262"
                d="M12,0h4c2.208,0,4,1.792,4,4c0,2.208-1.792,4-4,4h-4V0L12,0z"
              ></path>
              <path
                fill="#1ABCFE"
                d="M20,12c0,2.208-1.792,4-4,4c-2.208,0-4-1.792-4-4c0-2.208,1.792-4,4-4C18.208,8,20,9.792,20,12L20,12z"
              ></path>
              <polygon
                fill="#DE6355"
                points="16 0 12 0 12 8 16 8 16 8 16 8 16 0 16 0"
              ></polygon>
              <path
                fill="#17A4DD"
                d="M16,8L16,8c-2.208,0-4,1.792-4,4c0,2.208,1.792,4,4,4l0,0V8L16,8L16,8z"
              ></path>
            </svg>
          </div>
          <div className="  flex flex-col  ">
            <span className="  text-5xl">FIGMA</span>
            <span className=" mt-4   text-slate-500">Interface Design</span>
          </div>
        </div>

        <div className="rounded-xl p-6  text-white  bg-[#181c20]  relative aspect-w-1  aspect-h-1">
          <div className=" w-full h-[50%] flex  justify-between  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 20 20"
              viewBox="0 0 24 24"
              id="figma"
              className=" h-10 w-7  "
            >
              <path
                fill="#0ACF83"
                d="M8,24c2.208,0,4-1.792,4-4v-4H8c-2.208,0-4,1.792-4,4C4,22.208,5.792,24,8,24L8,24z"
              ></path>
              <path
                fill="#A259FF"
                d="M4,12c0-2.208,1.792-4,4-4h4v8H8C5.792,16,4,14.208,4,12L4,12z"
              ></path>
              <path
                fill="#F24E1E"
                d="M4,4c0-2.208,1.792-4,4-4h4v8H8C5.792,8,4,6.208,4,4L4,4z"
              ></path>
              <path
                fill="#09B472"
                d="M8.419,16H8c-2.208,0-4,1.792-4,4c0,2.208,1.792,4,4,4l0,0c0.142,0,0.281-0.007,0.419-0.022V16L8.419,16z"
              ></path>
              <path
                fill="#8D4DDE"
                d="M8.419,8H8c-2.208,0-4,1.792-4,4s1.792,4,4,4h0.419V8L8.419,8z"
              ></path>
              <path
                fill="#D3441A"
                d="M8.419,0H8C5.792,0,4,1.792,4,4s1.792,4,4,4h0.419V0L8.419,0z"
              ></path>
              <path
                fill="#FF7262"
                d="M12,0h4c2.208,0,4,1.792,4,4c0,2.208-1.792,4-4,4h-4V0L12,0z"
              ></path>
              <path
                fill="#1ABCFE"
                d="M20,12c0,2.208-1.792,4-4,4c-2.208,0-4-1.792-4-4c0-2.208,1.792-4,4-4C18.208,8,20,9.792,20,12L20,12z"
              ></path>
              <polygon
                fill="#DE6355"
                points="16 0 12 0 12 8 16 8 16 8 16 8 16 0 16 0"
              ></polygon>
              <path
                fill="#17A4DD"
                d="M16,8L16,8c-2.208,0-4,1.792-4,4c0,2.208,1.792,4,4,4l0,0V8L16,8L16,8z"
              ></path>
            </svg>
          </div>
          <div className="  flex flex-col  ">
            <span className="  text-5xl">FIGMA</span>
            <span className=" mt-4   text-slate-500">Interface Design</span>
          </div>
        </div>

        <div className="rounded-xl p-6  text-white  bg-[#181c20]  relative aspect-w-1  aspect-h-1">
          <div className=" w-full h-[50%] flex  justify-between  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 20 20"
              viewBox="0 0 24 24"
              id="figma"
              className=" h-10 w-7  "
            >
              <path
                fill="#0ACF83"
                d="M8,24c2.208,0,4-1.792,4-4v-4H8c-2.208,0-4,1.792-4,4C4,22.208,5.792,24,8,24L8,24z"
              ></path>
              <path
                fill="#A259FF"
                d="M4,12c0-2.208,1.792-4,4-4h4v8H8C5.792,16,4,14.208,4,12L4,12z"
              ></path>
              <path
                fill="#F24E1E"
                d="M4,4c0-2.208,1.792-4,4-4h4v8H8C5.792,8,4,6.208,4,4L4,4z"
              ></path>
              <path
                fill="#09B472"
                d="M8.419,16H8c-2.208,0-4,1.792-4,4c0,2.208,1.792,4,4,4l0,0c0.142,0,0.281-0.007,0.419-0.022V16L8.419,16z"
              ></path>
              <path
                fill="#8D4DDE"
                d="M8.419,8H8c-2.208,0-4,1.792-4,4s1.792,4,4,4h0.419V8L8.419,8z"
              ></path>
              <path
                fill="#D3441A"
                d="M8.419,0H8C5.792,0,4,1.792,4,4s1.792,4,4,4h0.419V0L8.419,0z"
              ></path>
              <path
                fill="#FF7262"
                d="M12,0h4c2.208,0,4,1.792,4,4c0,2.208-1.792,4-4,4h-4V0L12,0z"
              ></path>
              <path
                fill="#1ABCFE"
                d="M20,12c0,2.208-1.792,4-4,4c-2.208,0-4-1.792-4-4c0-2.208,1.792-4,4-4C18.208,8,20,9.792,20,12L20,12z"
              ></path>
              <polygon
                fill="#DE6355"
                points="16 0 12 0 12 8 16 8 16 8 16 8 16 0 16 0"
              ></polygon>
              <path
                fill="#17A4DD"
                d="M16,8L16,8c-2.208,0-4,1.792-4,4c0,2.208,1.792,4,4,4l0,0V8L16,8L16,8z"
              ></path>
            </svg>
          </div>
          <div className="  flex flex-col  ">
            <span className="  text-5xl">FIGMA</span>
            <span className=" mt-4   text-slate-500">Interface Design</span>
          </div>
        </div>

        <div className="rounded-xl p-6  text-white  bg-[#181c20]  relative aspect-w-1  aspect-h-1">
          <div className=" w-full h-[50%] flex  justify-between  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 20 20"
              viewBox="0 0 24 24"
              id="figma"
              className=" h-10 w-7  "
            >
              <path
                fill="#0ACF83"
                d="M8,24c2.208,0,4-1.792,4-4v-4H8c-2.208,0-4,1.792-4,4C4,22.208,5.792,24,8,24L8,24z"
              ></path>
              <path
                fill="#A259FF"
                d="M4,12c0-2.208,1.792-4,4-4h4v8H8C5.792,16,4,14.208,4,12L4,12z"
              ></path>
              <path
                fill="#F24E1E"
                d="M4,4c0-2.208,1.792-4,4-4h4v8H8C5.792,8,4,6.208,4,4L4,4z"
              ></path>
              <path
                fill="#09B472"
                d="M8.419,16H8c-2.208,0-4,1.792-4,4c0,2.208,1.792,4,4,4l0,0c0.142,0,0.281-0.007,0.419-0.022V16L8.419,16z"
              ></path>
              <path
                fill="#8D4DDE"
                d="M8.419,8H8c-2.208,0-4,1.792-4,4s1.792,4,4,4h0.419V8L8.419,8z"
              ></path>
              <path
                fill="#D3441A"
                d="M8.419,0H8C5.792,0,4,1.792,4,4s1.792,4,4,4h0.419V0L8.419,0z"
              ></path>
              <path
                fill="#FF7262"
                d="M12,0h4c2.208,0,4,1.792,4,4c0,2.208-1.792,4-4,4h-4V0L12,0z"
              ></path>
              <path
                fill="#1ABCFE"
                d="M20,12c0,2.208-1.792,4-4,4c-2.208,0-4-1.792-4-4c0-2.208,1.792-4,4-4C18.208,8,20,9.792,20,12L20,12z"
              ></path>
              <polygon
                fill="#DE6355"
                points="16 0 12 0 12 8 16 8 16 8 16 8 16 0 16 0"
              ></polygon>
              <path
                fill="#17A4DD"
                d="M16,8L16,8c-2.208,0-4,1.792-4,4c0,2.208,1.792,4,4,4l0,0V8L16,8L16,8z"
              ></path>
            </svg>
          </div>
          <div className="  flex flex-col  ">
            <span className="  text-5xl">FIGMA</span>
            <span className=" mt-4   text-slate-500">Interface Design</span>
          </div>
        </div>

        <div className="rounded-xl p-6  text-white  bg-[#181c20]  relative aspect-w-1  aspect-h-1">
          <div className=" w-full h-[50%] flex  justify-between  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 20 20"
              viewBox="0 0 24 24"
              id="figma"
              className=" h-10 w-7  "
            >
              <path
                fill="#0ACF83"
                d="M8,24c2.208,0,4-1.792,4-4v-4H8c-2.208,0-4,1.792-4,4C4,22.208,5.792,24,8,24L8,24z"
              ></path>
              <path
                fill="#A259FF"
                d="M4,12c0-2.208,1.792-4,4-4h4v8H8C5.792,16,4,14.208,4,12L4,12z"
              ></path>
              <path
                fill="#F24E1E"
                d="M4,4c0-2.208,1.792-4,4-4h4v8H8C5.792,8,4,6.208,4,4L4,4z"
              ></path>
              <path
                fill="#09B472"
                d="M8.419,16H8c-2.208,0-4,1.792-4,4c0,2.208,1.792,4,4,4l0,0c0.142,0,0.281-0.007,0.419-0.022V16L8.419,16z"
              ></path>
              <path
                fill="#8D4DDE"
                d="M8.419,8H8c-2.208,0-4,1.792-4,4s1.792,4,4,4h0.419V8L8.419,8z"
              ></path>
              <path
                fill="#D3441A"
                d="M8.419,0H8C5.792,0,4,1.792,4,4s1.792,4,4,4h0.419V0L8.419,0z"
              ></path>
              <path
                fill="#FF7262"
                d="M12,0h4c2.208,0,4,1.792,4,4c0,2.208-1.792,4-4,4h-4V0L12,0z"
              ></path>
              <path
                fill="#1ABCFE"
                d="M20,12c0,2.208-1.792,4-4,4c-2.208,0-4-1.792-4-4c0-2.208,1.792-4,4-4C18.208,8,20,9.792,20,12L20,12z"
              ></path>
              <polygon
                fill="#DE6355"
                points="16 0 12 0 12 8 16 8 16 8 16 8 16 0 16 0"
              ></polygon>
              <path
                fill="#17A4DD"
                d="M16,8L16,8c-2.208,0-4,1.792-4,4c0,2.208,1.792,4,4,4l0,0V8L16,8L16,8z"
              ></path>
            </svg>
          </div>
          <div className="  flex flex-col  ">
            <span className="  text-5xl">FIGMA</span>
            <span className=" mt-4   text-slate-500">Interface Design</span>
          </div>
        </div>

        <div className="rounded-xl p-6  text-white  bg-[#181c20]  relative aspect-w-1  aspect-h-1">
          <div className=" w-full h-[50%] flex  justify-between  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 20 20"
              viewBox="0 0 24 24"
              id="figma"
              className=" h-10 w-7  "
            >
              <path
                fill="#0ACF83"
                d="M8,24c2.208,0,4-1.792,4-4v-4H8c-2.208,0-4,1.792-4,4C4,22.208,5.792,24,8,24L8,24z"
              ></path>
              <path
                fill="#A259FF"
                d="M4,12c0-2.208,1.792-4,4-4h4v8H8C5.792,16,4,14.208,4,12L4,12z"
              ></path>
              <path
                fill="#F24E1E"
                d="M4,4c0-2.208,1.792-4,4-4h4v8H8C5.792,8,4,6.208,4,4L4,4z"
              ></path>
              <path
                fill="#09B472"
                d="M8.419,16H8c-2.208,0-4,1.792-4,4c0,2.208,1.792,4,4,4l0,0c0.142,0,0.281-0.007,0.419-0.022V16L8.419,16z"
              ></path>
              <path
                fill="#8D4DDE"
                d="M8.419,8H8c-2.208,0-4,1.792-4,4s1.792,4,4,4h0.419V8L8.419,8z"
              ></path>
              <path
                fill="#D3441A"
                d="M8.419,0H8C5.792,0,4,1.792,4,4s1.792,4,4,4h0.419V0L8.419,0z"
              ></path>
              <path
                fill="#FF7262"
                d="M12,0h4c2.208,0,4,1.792,4,4c0,2.208-1.792,4-4,4h-4V0L12,0z"
              ></path>
              <path
                fill="#1ABCFE"
                d="M20,12c0,2.208-1.792,4-4,4c-2.208,0-4-1.792-4-4c0-2.208,1.792-4,4-4C18.208,8,20,9.792,20,12L20,12z"
              ></path>
              <polygon
                fill="#DE6355"
                points="16 0 12 0 12 8 16 8 16 8 16 8 16 0 16 0"
              ></polygon>
              <path
                fill="#17A4DD"
                d="M16,8L16,8c-2.208,0-4,1.792-4,4c0,2.208,1.792,4,4,4l0,0V8L16,8L16,8z"
              ></path>
            </svg>
          </div>
          <div className="  flex flex-col  ">
            <span className="  text-5xl">FIGMA</span>
            <span className=" mt-4   text-slate-500">Interface Design</span>
          </div>
        </div>

        <div className="rounded-xl p-6  text-white  bg-[#181c20]  relative aspect-w-1  aspect-h-1">
          <div className=" w-full h-[50%] flex  justify-between  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 20 20"
              viewBox="0 0 24 24"
              id="figma"
              className=" h-10 w-7  "
            >
              <path
                fill="#0ACF83"
                d="M8,24c2.208,0,4-1.792,4-4v-4H8c-2.208,0-4,1.792-4,4C4,22.208,5.792,24,8,24L8,24z"
              ></path>
              <path
                fill="#A259FF"
                d="M4,12c0-2.208,1.792-4,4-4h4v8H8C5.792,16,4,14.208,4,12L4,12z"
              ></path>
              <path
                fill="#F24E1E"
                d="M4,4c0-2.208,1.792-4,4-4h4v8H8C5.792,8,4,6.208,4,4L4,4z"
              ></path>
              <path
                fill="#09B472"
                d="M8.419,16H8c-2.208,0-4,1.792-4,4c0,2.208,1.792,4,4,4l0,0c0.142,0,0.281-0.007,0.419-0.022V16L8.419,16z"
              ></path>
              <path
                fill="#8D4DDE"
                d="M8.419,8H8c-2.208,0-4,1.792-4,4s1.792,4,4,4h0.419V8L8.419,8z"
              ></path>
              <path
                fill="#D3441A"
                d="M8.419,0H8C5.792,0,4,1.792,4,4s1.792,4,4,4h0.419V0L8.419,0z"
              ></path>
              <path
                fill="#FF7262"
                d="M12,0h4c2.208,0,4,1.792,4,4c0,2.208-1.792,4-4,4h-4V0L12,0z"
              ></path>
              <path
                fill="#1ABCFE"
                d="M20,12c0,2.208-1.792,4-4,4c-2.208,0-4-1.792-4-4c0-2.208,1.792-4,4-4C18.208,8,20,9.792,20,12L20,12z"
              ></path>
              <polygon
                fill="#DE6355"
                points="16 0 12 0 12 8 16 8 16 8 16 8 16 0 16 0"
              ></polygon>
              <path
                fill="#17A4DD"
                d="M16,8L16,8c-2.208,0-4,1.792-4,4c0,2.208,1.792,4,4,4l0,0V8L16,8L16,8z"
              ></path>
            </svg>
          </div>
          <div className="  flex flex-col  ">
            <span className="  text-5xl">FIGMA</span>
            <span className=" mt-4   text-slate-500">Interface Design</span>
          </div>
        </div>

        {/* ... Repeat for cards 3 to 12 ... */}
      </div>
    </div>
  )
}

export default Stack
