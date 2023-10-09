import React from "react";
import VerticalNavbar from "./verticalNavbar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-[#101418]">
      <VerticalNavbar />
      <main className="flex-grow bg-[#101418] overflow-auto">
        {children}
      </main>
    </div>
  )
}

export default Layout;
