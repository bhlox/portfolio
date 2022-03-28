import React from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "./Navbar";

function Layout({ children }) {
  const { ref, inView, entry } = useInView({ threshold: 1 });

  console.log(inView);

  return (
    <div className="dark overflow-hidden relative">
      <Navbar />
      <main
        ref={ref}
        className="max-w-7xl mx-auto dark:bg-slate-800 dark:text-gray-200 space-y-20 mt-12 p-4"
      >
        {children}
      </main>
    </div>
  );
}

export default Layout;
