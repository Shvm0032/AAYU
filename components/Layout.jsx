"use client";

import SidebarNav from "./SidebarNav";

export default function Layout({ children }) {
  return (
    <div className="bg-white relative overflow-x-hidden" style={{ minHeight: "100vh" }}>
      <SidebarNav />
      <main
        className="flex items-center justify-center px-[4%] py-[4%] md:pl-[12vw] md:pt-[6vh]  md:pb-[6vh] md:pr-[12vw]"
       
      >
        <div className="mx-auto" style={{ width: "100%" }}>
          {children}
        </div>
      </main>
    </div>
  );
}
