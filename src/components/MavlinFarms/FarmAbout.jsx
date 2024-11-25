import React from "react";
import About from "../../assets/images/MavlinFarms/about-farms.png";
import { HashLink } from "react-router-hash-link";

const FarmAbout = () => {
  return (
    <section
      id="about"
      className="px-8 py-2 lg:py-24 lg:px-24 flex flex-col md:flex-row items-start justify-between gap-8"
    >
      <div className=" w-full md:w-1/2 flex flex-col items-start justify-between h-[500px]">
        <p className="text-4xl font-bold text-mavlin-farms-green font-montserratAlternates uppercase">
          About Us
        </p>
        <div className="">
          <p>
            Mavlin Agric Farms Limited is a 25 acre farm located about 45
            kilometres outside of Lagos, Nigeria. We cultivate more than six
            acres in a diverse array of crops, fruits and vegetables primarily
            for direct sale to household in Lagos, but also for restaurants and
            wholesale. We also grow some herbs, and mushrooms and have future
            plans of livestock, poultry and fishery.
            <br />
            <br />
            MAFL uses a number of sustainable and organic farming techniques to
            produce tasty food. Here are some examples: cover cropping, crop
            rotation, minimal tilling, composting, integrated pest management,
            diversity in crops, drip irrigating with well water, and rotating
            fallow sections of land. Fertilizers used are only OMRI/Organically
            approved fertilizers.
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
            to="/mavlin-farms/#contact-form"
            className={`py-2 px-4 font-medium bg-mavlin-farms-green text-white transform hover:scale-50 hover:text-mavlin-farms-orange`}
          >
            Contact Us
          </HashLink>
        </button>
      </div>
      <div className="h-[500px] w-full mt-8 md:mt-0  md:w-1/2 shadow-2xl">
        <img
          src={About}
          alt="agriculture"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default FarmAbout;
