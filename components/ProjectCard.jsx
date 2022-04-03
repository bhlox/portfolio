import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

function ProjectCard({ title, desc, stack, photo, gif, url, source, hint }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseLeave={() =>
        setTimeout(() => {
          setIsHovered(false);
        }, 400)
      }
      className="p-4 w-full sm:w-1/2 lg:w-1/3"
    >
      <div
        onMouseEnter={() =>
          setTimeout(() => {
            setIsHovered(true);
          }, 400)
        }
      >
        <div>
          <a target="_blank" rel="noreferrer" href={url}>
            <img
              className="h-60 w-full object-cover rounded rounded-b-none"
              src={isHovered ? gif : photo}
              alt=""
            />
          </a>
        </div>
        <div className="p-4 dark:bg-slate-700 bg-gray-300 rounded-t-none rounded-xl space-y-4">
          <div>
            <div className="flex justify-center space-x-4 text-lg">
              <a
                className="px-2 py-1 bg-blue-400 hover:bg-blue-500 rounded-xl"
                target="_blank"
                rel="noreferrer"
                href={url}
              >
                View demo
              </a>
              <a
                className="px-2 py-1 bg-blue-400 hover:bg-blue-500 rounded-xl"
                target="_blank"
                rel="noreferrer"
                href={source}
              >
                View code
              </a>
            </div>
          </div>

          <div className="flex space-x-1 items-center">
            <a
              target="_blank"
              rel="noreferrer"
              href={url}
              className="text-3xl font-medium hover:underline"
            >
              {title}
            </a>
            {hint && (
              <h4 className="relative group">
                <FaQuestionCircle className="text-2xl" />
                <span className="hidden group-hover:inline group-hover:absolute bottom-4 left-4 bg-blue-400 p-2 rounded md:text-xl  text-sm">
                  {hint.message}
                  <br /> email: {hint.username} <br /> password: {hint.password}
                </span>
              </h4>
            )}
          </div>
          <p className="text-xl">{desc}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {stack.map((entry) => (
              <span
                key={Math.random() * 24343}
                className="font-light dark:bg-slate-600 dark:text-gray-200 bg-gray-400 text-slate-800 rounded-xl px-2 py-1"
              >
                {entry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
