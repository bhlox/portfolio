import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function SocialSidebar() {
  return (
    <div className="fixed pt-1 md:pt-0 left-0 bottom-0 w-screen md:max-w-max md:max-h-max md:top-1/3 md:left-0  dark:bg-slate-700 bg-gray-300 md:p-2">
      <div className="flex md:items-start md:justify-start md:flex-col md:space-y-2 text-4xl">
        <div className="w-1/3 md:w-full flex flex-col justify-center items-center md:border-r-0 border-r-2 border-slate-800 dark:border-gray-300 -space-y-2 group">
          <a
            href="mailto:kurkboard@gmail.com.com"
            target="_blank"
            rel="noreferrer"
            className="md:border-b-2 dark:border-gray-200 border-slate-800 md:pb-2"
          >
            <FiMail className="text-red-400 hover:scale-110 hover:-translate-y-2 transition-all duration-300" />
          </a>
          <span className="md:absolute md:left-0 group-hover:md:left-16 dark:md:bg-slate-700 md:bg-gray-300 md:p-2 md:scale-0 group-hover:scale-100 text-xl dark:text-gray-200 text-slate-800 tracking-widest transition-all duration-300">
            Email
          </span>
        </div>
        <div className="w-1/3 md:w-full flex flex-col justify-center items-center md:border-r-0 border-r-2 border-slate-800 dark:border-gray-300 -space-y-2 group">
          <a
            href="https://github.com/bhlox"
            target="_blank"
            rel="noreferrer"
            className="md:border-b-2 dark:border-gray-200 border-slate-800 md:pb-2"
          >
            <FaGithub className="hover:scale-110 hover:-translate-y-2 transition-all duration-300 dark:text-gray-200" />
          </a>
          <span className="md:absolute md:left-0 group-hover:md:left-16 md:bg-gray-300 dark:md:bg-slate-700 md:p-2 md:scale-0 group-hover:scale-100 text-xl dark:text-gray-200 text-slate-800 tracking-widest transition-all duration-300">
            Github
          </span>
        </div>
        <div className="w-1/3 md:w-full flex flex-col justify-center items-center -space-y-2 group">
          <a
            href="linkedin.com/in/kurk-villanueva-02779216b"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-blue-600 hover:scale-110 hover:-translate-y-2 transition-all duration-300" />
          </a>
          <span className="md:absolute md:left-0 group-hover:md:left-16 md:bg-gray-300 dark:md:bg-slate-700 md:p-2 md:scale-0 group-hover:scale-100 text-xl dark:text-gray-200 text-slate-800 tracking-widest transition-all duration-300">
            Linkedin
          </span>
        </div>
      </div>
    </div>
  );
}

export default SocialSidebar;
