import React from "react"
import VerticalNavbar from "./verticalNavbar"
import MobileNavbar from "./mobileNavbar"

const Layout = ({ children }) => {
  return (
    <div className="h-screen  bg-[#101418]">
      <MobileNavbar />
      <div className="flex h-full">
        <VerticalNavbar />
        <main className="flex-grow bg-[#101418] overflow-auto">{children}</main>
      </div>
    </div>
  )
}

export default Layout
