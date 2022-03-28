import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

function Navbar() {
  const [showSide, setShowSide] = useState(false);
  const { ref: navRef, inView, entry } = useInView({ threshold: 0 });

  // console.log(inView);

  return (
    <>
      <header
        ref={navRef}
        className={`bg-red-400 px-4 md:px-0 fixed top-0 w-full`}
      >
        <div
          className={`max-w-7xl ${
            inView ? "" : ""
          }  mx-auto flex justify-between py-3`}
        >
          <Link passHref href="/">
            <a className="">KurkBoard</a>
          </Link>
          <button
            onClick={() => setShowSide((prev) => !prev)}
            className="inline md:hidden text-2xl z-20"
          >
            <GiHamburgerMenu />
          </button>
          <div
            className={`md:space-x-4 md:static absolute top-0 flex flex-col md:flex-row h-screen md:h-full space-x-0 space-y-4 md:space-y-0 pt-24 px-4 md:pt-0 md:px-0 ${
              showSide ? "right-0 z-10 bg-red-400" : "-right-80"
            }  translate-x-0 duration-300`}
          >
            <a href="#section" className="text-2xl font-light">
              Projects
            </a>
            <a href="" className="text-2xl font-light">
              About me
            </a>
            <a href="" className="text-2xl font-light">
              Resume
            </a>
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
