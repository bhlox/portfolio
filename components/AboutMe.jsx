import React from "react";

function AboutMe() {
  return (
    <div id="about" className="flex pb-20">
      <div>
        <img src="" alt="" />
      </div>
      <div className="space-y-6">
        <h2 className="text-5xl font-medium">About me</h2>
        <p className="text-xl">
          I&apos;m a self-taught web developer based from the Philippines.
          Career shifter from a music teacher/musician to tech. I am fascinated
          by things that give me focus and one of those things I encountered
          during the covid pandemic era was the tech. It made me realize that I
          was always fond of how things work behind the scenes.{" "}
        </p>
        <p className="text-xl">
          Outside of coding, I love walking, I hangout with my niece whenever he
          comes to my space and I game during downtime.
        </p>
        {/* <p className="text-xl">
          And also you may call my name instead as &ldquo;<span>Kurky</span>
          &ldquo;. Why? Most coworkers, friends and acquaintances rarely call me
          &apos;Kurk&apos;. I&apos;ve asked and what I could summarize is that
          &apos;It just fits your personality&apos;.
        </p> */}
      </div>
    </div>
  );
}

export default AboutMe;
