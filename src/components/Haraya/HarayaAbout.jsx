import React from "react";
import About from "../../assets/images/Haraya/haraya1.jpg";
import { HashLink } from "react-router-hash-link";

const HarayaAbout = () => {
  return (
    <section
      id="about"
      className="px-8 py-8 lg:py-24 lg:px-24 flex flex-col md:flex-row items-start justify-between gap-8"
    >
      <div className=" w-full md:w-1/2 flex flex-col items-start justify-between ">
        <p className="text-4xl font-bold text-mavlin-haraya-blue font-manrope uppercase">
          About Us
        </p>
        <div className="font-karla">
          <p>
            Haraya Restaurant & Café (Haraya RC) stands as a premier fine-dining
            destination nestled in the vibrant city of Abuja, Nigeria’s capital.
            Open throughout the week, we warmly welcome our guests to indulge in
            a refined menu featuring an array of continental favorites alongside
            carefully crafted local dishes. For added convenience, we offer
            swift delivery to all locations across Abuja.
            <br />
            <br />
            At Haraya RC, we are dedicated to providing an unparalleled dining
            experience. From the rich flavors and exceptional quality of our
            meals to the inviting ambiance of our space, every detail is
            thoughtfully designed to delight. Our attentive service, soothing
            music, delightful aromas, and personalized touches ensure every
            guest feels right at home.
            <br />
            <br />
            Looking for the ideal venue? Haraya RC also offers affordable,
            well-equipped spaces perfect for breakfast meetings, workshops, and
            conferences, making us your go-to destination for business and
            leisure alike.
          </p>
        </div>

        <button className=" mt-4">
          <HashLink
            scroll={(el) => {
              const yOffset = -100; // Adjust the offset to your liking
              const y =
                el.getBoundingClientRect().top + window.scrollY + yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }}
            smooth
            to="/harayarestaurants/#contact-form"
            className={`py-2 px-4 font-medium bg-mavlin-haraya-blue text-white transform hover:scale-50 hover:text-mavlin-gold`}
          >
            Contact Us
          </HashLink>
        </button>
      </div>
      <div className="h-[500px] w-full mt-8 md:mt-0  md:w-1/2 shadow-2xl">
        <img src={About} alt="" className="h-full w-full object-cover" />
      </div>
    </section>
  );
};

export default HarayaAbout;
