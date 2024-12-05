import { NavLink } from "react-router-dom";
import Mavlinlogo from "../../assets/images/Haraya/Haraya-Restaurant-Logo-web-White.png";
import footerBackground from "../../assets/images/MavlinFarms/hero1.jpg"; // Add your background image here
import { HashLink, NavHashLink } from "react-router-hash-link";

const HarayaFooter = () => {
  const menuItems = [
    { title: "Back to Top", path: "/harayarestaurants/#hero" },
    { title: "About", path: "/harayarestaurants/#about" },
    { title: "Our Offerings", path: "/harayarestaurants/#services" },
  ];

  return (
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${footerBackground})`,
      }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-mavlin-haraya-blue/90"></div>

      {/* Footer content */}
      <div className="relative z-10 ">
        <div className="text-white px-8 py-8 lg:px-24 lg:py-16">
          <div className="flex flex-col md:flex-row items-start justify-between">
            {/* Mavlin Logo and Social Media */}
            <div className="flex flex-col md:flex-row items-start justify-start gap-8">
              <div className=" p-2">
                <img
                  src={Mavlinlogo}
                  alt="Mavlin Logo"
                  className="w-[100px] md:w-[300px]"
                />
              </div>
              <div className="w-full md:w-[344px] text-sm leading-6">
                Haraya Restaurants & Lounges is a unique dining destination
                offering a sophisticated and welcoming atmosphere in the heart
                of Abuja. We cater to a discerning clientele seeking a
                delightful culinary & dining experience.
              </div>
            </div>

            {/* Quick Links */}
            <nav className="flex flex-col items-start justify-start gap-1 mt-8 md:mt-0">
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
              <NavLink
                to={"/"}
                className="hover:font-medium hover:text-mavlin-gold"
              >
                Mavlin Main Page
              </NavLink>
            </nav>

            <div className="space-y-4 mt-8 md:mt-0">
              <button className="px-4 py-2 hidden lg:block">
                <HashLink
                  scroll={(el) => {
                    const yOffset = -100; // Adjust the offset to your liking
                    const y =
                      el.getBoundingClientRect().top + window.scrollY + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }}
                  smooth
                  to="/harayarestaurants/#contact-form"
                  className={`py-2 px-4 font-medium bg-mavlin-gold text-white`}
                >
                  Contact Us
                </HashLink>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-mavlin-gold/30 px-8 py-4 md:px-24 md:py-12">
          <div className="container mx-auto text-left text-sm text-white">
            <p>
              &copy; {new Date().getFullYear()} Haraya RC, All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HarayaFooter;
