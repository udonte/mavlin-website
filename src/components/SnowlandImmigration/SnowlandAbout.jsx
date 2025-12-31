import React from "react";
import About from "../../assets/images/SnowlandImmigration/canadamap.png";
import { HashLink } from "react-router-hash-link";

const SnowlandAbout = () => {
  return (
    <section
      id="about"
      className="px-8 py-8 lg:py-24 lg:px-24 flex flex-col md:flex-row items-start justify-between gap-16"
    >
      <div className="h-[400px] w-full md:w-1/2 overflow-hidden">
        <img
          src={About}
          alt=""
          className="h-full w-full object-cover md:object-contain"
        />
      </div>
      <div className=" w-full md:w-1/2 flex flex-col items-start gap-8 h-[500px]">
        <p className="text-4xl font-bold text-red-600 font-montserratAlternates uppercase">
          WHO WE ARE
        </p>
        <div className="font-nunito text-black">
          <p>
            <span className="font-bold text-mavlin-blue text-lg">
              {" "}
              SnowLand Immigration Consulting Inc.
            </span>{" "}
            has been in the business over 10 years and our goal is to make the
            Canadian Immigration Process easy and stress free for our clients.
            <br />
            <br />
            We are a Regulated Canadian Immigration Consultant which authorizes
            us to advise and represent our clients. We strive to provide
            efficacious solutions to our clients with high service standards to
            make their Canadian Immigration dreams a reality.
          </p>
        </div>

        <button className="">
          <HashLink
            scroll={(el) => {
              const yOffset = -100; // Adjust the offset to your liking
              const y =
                el.getBoundingClientRect().top + window.scrollY + yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }}
            smooth
            to="/snowlandimmigration/#contact-form"
            className={`py-2 px-4 font-medium bg-red-600 text-white transform hover:scale-50 `}
          >
            Contact Us
          </HashLink>
        </button>
      </div>
    </section>
  );
};

export default SnowlandAbout;
