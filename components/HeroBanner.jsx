import React from "react";
import { GoTools } from "react-icons/go";

function HeroBanner() {
  return (
    <section className="flex">
      <div>
        <h2 className="text-5xl font-medium">Hello!</h2>
        <h3 className="flex items-end text-4xl gap-x-4">
          I am <span className="text-6xl italic font-bold">Kurk</span>
        </h3>
        <h3>
          I&apos;m a{" "}
          <span className="underline text-5xl font-medium">web developer</span>
          <GoTools />
        </h3>
      </div>
    </section>
  );
}

export default HeroBanner;
