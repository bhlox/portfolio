import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";
import { useDarkContext } from "../context/dark-context";

function Navbar() {
  const { setDarkMode, darkMode } = useDarkContext();
  const [showSide, setShowSide] = useState(false);

  return (
    <>
      <header
        // ref={navRef}
        className={`bg-blue-500 px-4 md:px-0 fixed top-0 w-full z-50 dark:text-gray-300 text-slate-800`}
      >
        <div className={`max-w-7xl mx-auto flex justify-between py-3`}>
          <Link passHref href="/">
            <a className="font-caveat text-4xl font-semibold hover:opacity-80">
              KurkBoard
            </a>
          </Link>
          <button
            onClick={() => setShowSide((prev) => !prev)}
            className="inline md:hidden text-2xl z-50"
          >
            <GiHamburgerMenu />
          </button>
          <div
            className={`md:space-x-4 md:static absolute top-0 flex flex-col md:flex-row md:items-center h-screen md:h-full space-x-0 space-y-8 md:space-y-0 pt-24 px-4 md:pt-0 md:px-0 ${
              showSide ? "right-0 z-10 bg-blue-500" : "-right-80"
            }  translate-x-0 duration-300`}
          >
            <a
              onClick={() => setShowSide(false)}
              href="#projects"
              className="inline md:hidden text-3xl font-light opacity-75 hover:opacity-100 "
            >
              Projects
            </a>
            <a
              onClick={() => setShowSide(false)}
              href="#about"
              className="inline md:hidden text-3xl font-light opacity-75 hover:opacity-100 "
            >
              About me
            </a>
            <a
              onClick={() => setShowSide(false)}
              href=""
              className="text-3xl font-light opacity-75 hover:opacity-100 outline outline-2 px-2 py-1 rounded"
            >
              Resume
            </a>
            <button
              className="text-3xl max-w-max self-center"
              onClick={() => setDarkMode((prev) => !prev)}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </header>
      {showSide && (
        <div
          onClick={() => setShowSide(false)}
          className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50"
        ></div>
      )}
    </>
  );
}

export default Navbar;
