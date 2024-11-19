import { NavLink } from "react-router-dom";
import Mavlinlogo from "../../assets/images/MavlinFarms/MavlinFarmsLogo.png";
import footerBackground from "../../assets/images/MavlinFarms/hero1.jpg"; // Add your background image here
import { NavHashLink } from "react-router-hash-link";

const MavlinFarmsFooter = () => {
  const menuItems = [
    { title: "Back to Top", path: "/mavlin-farms/#hero" },
    { title: "About", path: "/mavlin-farms/#about" },
    { title: "From the Farm", path: "/mavlin-farms/#fromFarm" },
  ];

  return (
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${footerBackground})`,
      }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-mavlin-farms-green/90"></div>

      {/* Footer content */}
      <div className="relative z-10 ">
        <div className="text-white px-24 py-16">
          <div className="flex items-start justify-between">
            {/* Mavlin Logo and Social Media */}
            <div className="flex items-start justify-start gap-8">
              <div className="bg-white p-2">
                <img src={Mavlinlogo} alt="Mavlin Logo" className="w-[100px]" />
              </div>
              <div className="w-full md:w-[344px] text-sm leading-6">
                Mavlin Farms is dedicated to providing fresh, nutritious, and
                responsibly grown products to its customers.
              </div>
            </div>

            {/* Quick Links */}
            <nav className="flex flex-col items-start justify-start gap-1">
              {menuItems.map((item) => (
                <NavHashLink
                  key={item.path}
                  smooth
                  className="hover:font-medium hover:text-mavlin-farms-orange"
                  to={item.path}
                >
                  {item.title}
                </NavHashLink>
              ))}
              <NavLink
                to={"/"}
                className="hover:font-medium hover:text-mavlin-farms-orange"
              >
                Mavlin Main Page
              </NavLink>
            </nav>

            <div className="space-y-4">
              <button className=" border px-4 py-2 border-mavlin-farms-green bg-mavlin-farms-orange w-fit text-mavlin-farms-green hover:bg-mavlin-farms-orange/90">
                <p>Contact Us</p>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-mavlin-farms-orange/30 px-24 py-12">
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

export default MavlinFarmsFooter;
