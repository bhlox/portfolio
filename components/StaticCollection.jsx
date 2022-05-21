/* eslint-disable @next/next/no-img-element */
import React from "react";

const list = [
  {
    photo: "/images/static-1.png",
    link: "https://restaurant-sample-template.vercel.app/",
  },
  {
    photo: "/images/static-2.png",
    link: "https://food-template-2.vercel.app/",
  },
  {
    photo: "/images/static-3.png",
    link: "https://food-template-3.vercel.app/",
  },
];

function StaticCollection() {
  return (
    <section className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-5xl font-bold">My static sites collection</h2>
        <p className="text-xl font-light">
          All templates have a tech stack of NextJS, tailwind, RTK and SSR
        </p>
      </div>

      <div className="space-y-4">
        {list.map((item, i) => (
          <Site
            key={Math.random() * 131}
            {...item}
            title={`Template ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function Site({ title, photo, link }) {
  return (
    <>
      <a
        target="_blank"
        href={link}
        className="relative rounded block w-full"
        rel="noreferrer"
      >
        <img
          className="w-full h-60 object-cover brightness-75"
          src={photo}
          alt=""
        />

        <h4 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-medium inline-block rounded px-4 py-2 backdrop-blur bg-white/40 text-gray-100">
          {title}
        </h4>
      </a>
    </>
  );
}

export default StaticCollection;
