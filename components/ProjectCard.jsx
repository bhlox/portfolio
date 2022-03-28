import React from "react";

function ProjectCard({ title, desc, stack, photo, url, source }) {
  return (
    <div className="p-4 sm:w-1/2 lg:w-1/3 rounded">
      <div>
        <a target="_blank" rel="noreferrer" href={url}>
          <img
            className="h-60 w-full object-cover rounded"
            src={photo}
            alt=""
          />
        </a>
      </div>
      <div className="p-4">
        <div className="flex justify-center space-x-4 text-lg">
          <a target="_blank" rel="noreferrer" href={url}>
            View demo
          </a>
          <a target="_blank" rel="noreferrer" href={source}>
            View code
          </a>
        </div>
      </div>
      <div className="space-y-4">
        <a
          target="_blank"
          rel="noreferrer"
          href={url}
          className="text-3xl font-medium"
        >
          {title}
        </a>
        <p className="text-xl">{desc}</p>
        <div className="flex space-x-4">
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
  );
}

export default ProjectCard;
