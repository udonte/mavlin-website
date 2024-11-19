import { NavLink } from "react-router-dom";
import Mavlinlogo from "../../assets/images/SnowlandImmigration/snowlandLogo.png";
import footerBackground from "../../assets/images/SnowlandImmigration/ImmiHero6.jpg";
import { HashLink, NavHashLink } from "react-router-hash-link";

const SnowlandFooter = () => {
  const menuItems = [
    { title: "Back to Top", path: "/snowlandimmigration/#hero" },
    { title: "About", path: "/snowlandimmigration/#about" },
    { title: "Services", path: "/snowlandimmigration/#services" },
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
        <div className="text-white px-24 py-16">
          <div className="flex items-start justify-between">
            {/* Mavlin Logo and Social Media */}
            <div className="flex items-start justify-start gap-8">
              <div className="bg-white p-2">
                <img src={Mavlinlogo} alt="Mavlin Logo" className="w-[200px]" />
              </div>
              <div className="w-full md:w-[344px] text-sm leading-6">
                SnowLand Immigration Consulting Inc. has been in the business
                over 10 years and our goal is to make the Canadian Immigration
                Process easy and stress free for our clients.
              </div>
            </div>

            {/* Quick Links */}
            <nav className="flex flex-col items-start justify-start gap-1">
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

            <div className="space-y-4">
              <button className="px-4 py-2">
                <HashLink
                  scroll={(el) => {
                    const yOffset = -100; // Adjust the offset to your liking
                    const y =
                      el.getBoundingClientRect().top + window.scrollY + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }}
                  smooth
                  to="snowlandimmigration/#snowland-contact-form"
                  className={`py-2 px-4 font-medium bg-red-600 text-white`}
                >
                  Contact Us
                </HashLink>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 px-24 py-12">
          <div className="container mx-auto text-left text-sm text-white">
            <p>
              &copy; {new Date().getFullYear()} Snowland Immigration, All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnowlandFooter;
