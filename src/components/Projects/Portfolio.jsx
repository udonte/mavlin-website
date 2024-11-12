import React from "react";
import Project1 from "../../assets/images/Projects/Project1.png";
import Project2 from "../../assets/images/Projects/Project2.png";
import Project3 from "../../assets/images/Projects/Project3.png";
import Project4 from "../../assets/images/Projects/Project4.png";
import Project5 from "../../assets/images/Projects/Project5.png";
import Project6 from "../../assets/images/Projects/Project6.png";
import Project7 from "../../assets/images/Projects/Project7.png";
import Project8 from "../../assets/images/Projects/Project8.png";

const portfolioData = [
  {
    title: "E-Commerce Platform",
    description:
      "An online shopping platform with real-time product updates, secure checkout, and dynamic product recommendations.",
    image: Project1,
  },
  {
    title: "Social Media App",
    description:
      "A social networking app with real-time chat, user profiles, and a news feed, aimed at connecting people globally.",
    image: Project2,
  },
  {
    title: "Project Management Tool",
    description:
      "A tool for tracking project tasks, timelines, and collaboration, ideal for teams working remotely.",
    image: Project3,
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing projects, skills, and testimonials with a custom blog.",
    image: Project4,
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing projects, skills, and testimonials with a custom blog.",
    image: Project5,
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing projects, skills, and testimonials with a custom blog.",
    image: Project6,
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing projects, skills, and testimonials with a custom blog.",
    image: Project7,
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing projects, skills, and testimonials with a custom blog.",
    image: Project8,
  },
];

const Portfolio = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 py-16">
      <div className="w-full md:w-1/2 flex flex-col text-center mx-auto my-8">
        <p className="text-mavlin-gold uppercase">SITE PICTURES</p>
        <p className="font-arimo text-3xl text-mavlin-blue font-semibold W-full ">
          See how projects are handled by a dedicated team
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-mavlin-gold"
          >
            <div className="h-[300px]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* <div className="p-6 text-sm">
              <h3 className="font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
