import { NavLink } from "react-router-dom";
import Mavlinlogo from "../../assets/images/MavlinFlooring/mavlin-krono-logo-3.png";
import footerBackground from "../../assets/images/MavlinFlooring/Hero2.jpg";
import { HashLink, NavHashLink } from "react-router-hash-link";

const MavlinFlooringFooter = () => {
  const menuItems = [
    { title: "Back to Top", path: "/kronodaekaflooring/#hero" },
    { title: "About", path: "/kronodaekaflooring/#about" },
    { title: "Category", path: "/kronodaekaflooring/#category" },
  ];

  return (
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${footerBackground})`,
      }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-mavlin-krono-brown/90"></div>

      {/* Footer content */}
      <div className="relative z-10 ">
        <div className="text-white px-8 py-8 lg:px-24 lg:py-16">
          <div className="flex flex-col md:flex-row items-start justify-between">
            {/* Mavlin Logo and Social Media */}
            <div className="flex flex-col md:flex-row items-start justify-start gap-8">
              <div className="bg-white p-2">
                <img src={Mavlinlogo} alt="Mavlin Logo" className="w-[200px]" />
              </div>
              <div className="w-full md:w-[344px] text-sm leading-6">
                SWISS KRONO stands out as a premium choice for laminate wood
                flooring due to its combination of high-quality materials,
                advanced technology, and diverse design options.
              </div>
            </div>

            {/* Quick Links */}
            <nav className="flex flex-col items-start justify-start gap-1 mt-8 md:mt-0">
              {menuItems.map((item) => (
                <NavHashLink
                  key={item.path}
                  smooth
                  className="hover:font-medium hover:text-red-600"
                  to={item.path}
                >
                  {item.title}
                </NavHashLink>
              ))}
              <NavLink
                to={"/"}
                className="hover:font-medium hover:text-red-600"
              >
                Mavlin Main Page
              </NavLink>
            </nav>

            <div className="space-y-4 mt-8 md:mt-0">
              <button className="px-4 py-2">
                <HashLink
                  scroll={(el) => {
                    const yOffset = -100; // Adjust the offset to your liking
                    const y =
                      el.getBoundingClientRect().top + window.scrollY + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }}
                  smooth
                  to="kronodaekaflooring/#krono-contact-form"
                  className={`py-2 px-4 font-medium bg-red-600 text-white`}
                >
                  Contact Us
                </HashLink>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-red-600/30 px-24 py-12">
          <div className="container mx-auto text-left text-sm text-white">
            <p>
              &copy; {new Date().getFullYear()} Mavlin, All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MavlinFlooringFooter;
