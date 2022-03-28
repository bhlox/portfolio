import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: Math.random() * 182731,
    photo: "/images/keyboard_game.png",
    title: "Press what you see",
    desc: "A simple keyboard game to test your hand eye coordination.",
    stack: ["CSS", "JS"],
    url: "https://press-what-you-see.vercel.app/",
    source: "https://github.com/bhlox/keyboard-game",
  },
  {
    id: Math.random() * 182731,
    photo: "/images/image-gallery.png",
    title: "Image Gallery",
    desc: "A stock photo like website where you could also search any images. Used with the pixabay API.",
    stack: ["tailwindCSS", "React"],
    url: "https://image-search-app-six.vercel.app/",
    source: "https://github.com/bhlox/image-search-app",
  },
  {
    id: Math.random() * 182731,
    photo: "/images/blogs.png",
    title: "Readis Blogs",
    desc: 'A blog platform that has social media like features. In blog format, users can post any thought they want. It has features of what is called a "CRUD" app. ',
    stack: ["tailwindCSS", "NextJS", "Node", "firebase"],
    url: "https://readdis-blogs.vercel.app/",
    source: "https://github.com/bhlox/nextjs-practice",
  },
];

function Projects() {
  return (
    <section className="space-y-6">
      <h2 className="text-5xl font-bold">
        Featured <span className="underline font-medium "> Projects</span>
      </h2>
      <div className="flex flex-wrap">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
