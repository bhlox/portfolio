import React from "react";
import { useDarkContext } from "../context/dark-context";
import Navbar from "./Navbar";
import SocialSidebar from "./SocialSidebar";

function Layout({ children }) {
  const { darkMode } = useDarkContext();

  return (
    <div className={`${darkMode ? "dark" : ""} overflow-hidden relative `}>
      <Navbar />
      <div className="dark:bg-slate-800 dark:text-gray-200 bg-gray-200 text-slate-800">
        <main className="max-w-7xl mx-auto  space-y-20 mt-12 px-4 sm:px-6 lg:px-8 py-4">
          {children}
        </main>
      </div>
      <SocialSidebar />
    </div>
  );
}

export default Layout;
