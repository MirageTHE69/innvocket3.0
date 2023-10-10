import React, { useEffect } from "react"
import { Link } from "gatsby"

function VerticalNavbar() {
  useEffect(() => {
    const handleScroll = e => {
      document.querySelector("main").scrollTop += e.deltaY
    }

    const navElement = document.getElementById("verticalNavbar")
    navElement.addEventListener("wheel", handleScroll)

    // Cleanup after component unmounts
    return () => {
      navElement.removeEventListener("wheel", handleScroll)
    }
  }, [])

  return (
    <div
      id="verticalNavbar"
      className="md:flex md:flex-col lg:flex lg:flex-col w-[23%] md:visible lg:visible hidden  bg-[#111418] min-h-screen"
    >
      <aside className="flex-grow bg-[#181c20] rounded-3xl pt-12 pl-12 mt-6 ml-5">
        <h1 className="font-leagueGothic mb-8 text-white text-[42px]">
          PORTal
        </h1>
        <nav className="w-full mt-10  ">
          <ul className=" w-full text-white list-none  flex flex-col ">
            <li className="">
              <Link
                to="/home"
                className="text-[#96a0aa] no-underline font-leagueGothic text-[42px] nav-item"
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                to="/"
                className="text-[#96a0aa] no-underline font-leagueGothic text-[42px] nav-item "
              >
                Projects
              </Link>
            </li>
            <li className="">
              <Link
                to="/experience"
                className="text-[#96a0aa] no-underline font-leagueGothic text-[42px] nav-item "
              >
                Experience
              </Link>
            </li>
            <li className="">
              <Link
                to="/stack"
                className="text-[#96a0aa] no-underline font-leagueGothic text-[42px] nav-item "
              >
                Stack
              </Link>
            </li>
            <li className="">
              <Link
                to="/contact"
                className="text-[#96a0aa] no-underline font-leagueGothic text-[42px] nav-item "
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  )
}

export default VerticalNavbar
