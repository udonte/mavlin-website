import Mavlinlogo from "../assets/images/MavlinBlue.jpeg";
import footerBackground from "../assets/images/Footer/bg.png"; // Add your background image here
import { HashLink, NavHashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Projects", path: "/projects" },
    { title: "Snowland Immigration", path: "/snowlandimmigration/#hero" },
    { title: "Mavlin Farms", path: "/mavlin-farms/#hero" },
    { title: "Mavlin - Kronodaeka Flooring", path: "/mavlin-flooring/#hero" },
  ];

  return (
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${footerBackground})`,
      }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-mavlin-blue/90"></div>

      {/* Footer content */}
      <div className="relative z-10 ">
        <div className="text-white px-8 py-8 lg:px-24 lg:py-16">
          <div className="flex flex-col md:flex-row gap-8 items-start justify-center md:justify-between">
            {/* Mavlin Logo and Social Media */}
            <div className="flex flex-col md:flex-row items-start justify-start gap-8">
              <div className="bg-white p-2">
                <img src={Mavlinlogo} alt="Mavlin Logo" className="w-[100px]" />
              </div>
              <div className="w-full md:w-[344px] text-sm leading-6">
                Mavlin - A global brand bridging industries and continents for a
                sustainable future. With operations in Nigeria and Canada, we
                serve clients worldwide by bridging continents and industries.
              </div>
            </div>

            {/* Quick Links */}
            <nav className="flex flex-col items-start justify-start gap-2">
              {menuItems.map((item) => (
                <NavHashLink
                  key={item.path}
                  smooth
                  className="hover:font-medium hover:text-mavlin-gold"
                  to={item.path}
                >
                  {item.title}
                </NavHashLink>
              ))}
            </nav>

            <div className="space-y-4">
              <button className="px-4 py-2 hidden lg:block">
                <NavLink
                  to={"/contact#contact-form"}
                  className={({ isActive }) =>
                    `py-2 px-4 font-medium ${
                      isActive
                        ? "bg-white  text-mavlin-blue"
                        : "bg-mavlin-blue text-white"
                    }`
                  }
                >
                  Contact Us
                </NavLink>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-500 px-24 py-12">
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

export default Footer;
