import React, { useState } from "react"
import { Link } from "gatsby"

function MobileNavbar() {
  const [isNavOpen, setNavOpen] = useState(false)

  return (
    <div className="rounded-3xl md:pb-0 lg:pd-0  ">
      <div className="top-bar rounded-3xl  md:hidden lg:hidden bg-green flex justify-between items-center p-4 ">
        <h1 className="font-leagueGothic text-white text-[40px] ">PORTal</h1>
        <div
          className={`hamburger-icon ${isNavOpen ? "open" : ""}`}
          onClick={() => setNavOpen(!isNavOpen)}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      <div className={`mobile-navbar ${isNavOpen ? "open" : ""}`}>
        <aside className="p-6">
          <nav className="w-full mt-10 ">
            <ul className="w-full text-white list-none">
              {/* ... rest of your nav links */}
              <li className="mb-4">
                <Link
                  to="/home"
                  className="text-[#96a0aa] no-underline font-leagueGothic text-[42px] nav-item"
                >
                  Home
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/"
                  className="text-[#96a0aa] no-underline font-leagueGothic text-[42px] nav-item"
                >
                  Projects
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/experience"
                  className="text-[#96a0aa] no-underline font-leagueGothic text-[42px] nav-item"
                >
                  Experience
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/stack"
                  className="text-[#96a0aa] no-underline font-leagueGothic text-[42px] nav-item"
                >
                  Stack
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/contact"
                  className="text-[#96a0aa] no-underline font-leagueGothic text-[42px] nav-item"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  )
}

export default MobileNavbar
