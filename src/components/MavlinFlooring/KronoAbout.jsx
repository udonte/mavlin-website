import React from "react";
import About from "../../assets/images/MavlinFlooring/krono about.png";
import { HashLink } from "react-router-hash-link";

const KronoAbout = () => {
  return (
    <section id="about" className="px-8 py-8 lg:py-24 lg:px-24 ">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        <div className="h-[500px] w-full md:w-1/2 shadow-xl border border-mavlin-krono-brown/50">
          <img
            src={About}
            alt="agriculture"
            className="h-full w-full object-cover"
          />
        </div>
        <div className=" w-full md:w-1/2 flex flex-col items-start gap-4 justify-between">
          <p className="text-4xl font-bold text-mavlin-krono-brown font-Karla uppercase">
            WHY SWISS KRONO WOOD FLOORING TILES?
          </p>
          <div className="font-montserratAlternates">
            <p>
              High-quality wood is the basic material for SWISS KRONO laminate
              floors. Our innovative laminate technology ensures stylish
              flooring covers that leave nothing to be desired in terms of care,
              resistance and indoor climate. This technology is based on
              high-density fibreboards (HDF), which are enhanced by an
              attractive decorative paper and an authentic surface structure.
              <br />
              <br />
              With almost 20 different laminate collections, from the GRAND
              SELECTION to SWISS SYNC CHROME, we offer the full range of visual
              options. From natural wood designs with boards right through to
              models with synchro pores for original texture, our range offers
              everything you could possibly want or need.
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
              to="/mavlin-flooring/#krono-contact-form"
              className={`py-2 px-4 font-medium bg-mavlin-krono-brown text-white transform hover:scale-50 hover:text-mavlin-farms-orange`}
            >
              Contact Us
            </HashLink>
          </button>
        </div>
      </div>
    </section>
  );
};

export default KronoAbout;
