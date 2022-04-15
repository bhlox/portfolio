import React, { useEffect, useState } from "react";
import { GoTools } from "react-icons/go";

const phrase1 = ["am a", "build", "love exploring"];
const phrase2 = ["web developer", "projects", "new things"];

function HeroBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev === phrase1.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex mt-16 pb-16">
      <div className="space-y-4">
        <h2 className="text-6xl font-medium">Hello!</h2>
        <h3 className="flex items-end text-6xl gap-x-4 ">
          I am <span className="text-7xl italic font-bold">Kurk</span>
        </h3>
        <h3 className="text-6xl flex flex-col md:flex-row gap-x-2 md:items-center">
          I {phrase1[index]}
          <span className="underline text-7xl font-medium">
            {phrase2[index]}
          </span>
          {/* <GoTools className="hidden sm:inline" /> */}
        </h3>
      </div>
    </section>
  );
}

export default HeroBanner;
