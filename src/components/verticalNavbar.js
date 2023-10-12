import React, { useEffect } from "react"
import { Link } from "gatsby"
import Logo from "../images/logo.png"

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
      className="md:flex md:flex-col lg:flex lg:flex-col w-[23%] md:visible lg:visible hidden  bg-[#111418] min-h-screen flex-shrink-0"
    >
      <aside className="flex-grow bg-[#181c20] rounded-3xl pt-10 pl-10 mt-6 ml-5">
        <Link to="/home">
      <img src={Logo} alt="PORTal" class="w-36  pt-5 text-white" />
      </Link>

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
