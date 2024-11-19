import React from "react";
import About from "../../assets/images/MavlinFarms/Processing.jpg";
import { HashLink } from "react-router-hash-link";

const ProcessingExcellence = () => {
  return (
    <section
      id=""
      className="py-24 px-24 flex items-start justify-between gap-8"
    >
      <div className="h-[500px] w-1/2 shadow-2xl">
        <img
          src={About}
          alt="agriculture"
          className="h-full w-full object-cover"
        />
      </div>
      <div className=" w-full md:w-1/2 flex flex-col items-start justify-between h-[500px]">
        <p className="text-4xl font-bold text-mavlin-farms-green font-montserratAlternates uppercase">
          Processing & Export
        </p>
        <div className="">
          <p>
            At Mavlin Farms, we take pride in our advanced processing
            capabilities that cater to both local and international markets. By
            transforming fresh produce into high-quality, value-added products,
            we ensure that our offerings meet the diverse needs of our customers
            while maintaining the highest standards of quality and
            sustainability.
            <br />
            <br />
            Our processing facilities are equipped to handle a wide range of
            agricultural products, enabling us to deliver fresh, packaged, and
            ready-to-use goods. This not only meets local demand but also
            positions us as a trusted exporter, bringing the richness of our
            farms to global markets.
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
            to="/mavlin-farms/#farm-contact-form"
            className={`py-2 px-4 font-medium bg-mavlin-farms-green text-white transform hover:scale-50 hover:text-mavlin-farms-orange`}
          >
            Contact Us
          </HashLink>
        </button>
      </div>
    </section>
  );
};

export default ProcessingExcellence;
