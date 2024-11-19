import { useState } from "react";
import { NavLink } from "react-router-dom";
import Mavlinlogo from "../assets/images/MavlinBlue.jpeg";
import { motion } from "framer-motion";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import { VscClose } from "react-icons/vsc";

const menuItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Projects", path: "/projects" },
];

const mobileItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Projects", path: "/projects" },
  { title: "Snowland Immigration", path: "/snowlandimmigration/#hero" },
  { title: "Mavlin Farms", path: "/mavlin-farms/#hero" },
  { title: "Mavlin - Kronodaeka Flooring", path: "/mavlin-flooring/#hero" },
];

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [MobileNav, setMobileNav] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white text-mavlin-blue px-4 lg:px-24 py-4 fixed w-full z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <NavLink to={"/"}>
            <img src={Mavlinlogo} alt="Mavlin Logo" className="w-[70px]" />
          </NavLink>
        </h1>
        <nav className=" space-x-8 hidden lg:flex">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `hover:font-bold ${
                  isActive
                    ? "font-bold border-b-2 border-mavlin-gold "
                    : "font-medium"
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
          {/* Subsidiaries Dropdown */}
          <div className="relative">
            <button
              className="font-medium flex items-center gap-1"
              onClick={toggleDropdown}
            >
              Business Associates
              <span className="text-sm">
                {isDropdownOpen ? <BiChevronUp /> : <BiChevronDown />}
              </span>
            </button>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute left-8 top-full mt-2 bg-white border border-gray-100 rounded shadow-lg min-w-48 "
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <NavLink
                  to={"/snowlandimmigration/#hero"}
                  className="block px-4 py-2  text-mavlin-blue text-xs font-medium hover:border-x hover:border-mavlin-gold hover:bg-mavlin-blue hover:text-white"
                >
                  Snowland Immigration
                </NavLink>
                <NavLink
                  to={"/mavlin-farms/#hero"}
                  className="block px-4 py-2 text-mavlin-blue text-xs font-medium hover:border-x hover:border-mavlin-gold hover:bg-mavlin-blue hover:text-white"
                >
                  Mavlin Farms
                </NavLink>
                <NavLink
                  to={"/mavlin-flooring/#hero"}
                  className="block px-4 py-2 text-mavlin-blue text-xs font-medium hover:border-x hover:border-mavlin-gold hover:bg-mavlin-blue hover:text-white"
                >
                  Mavlin Flooring
                </NavLink>
                <NavLink
                  to={"/#"}
                  className="block px-4 py-2 text-mavlin-blue text-xs font-medium hover:border-x hover:border-mavlin-gold hover:bg-mavlin-blue hover:text-white"
                >
                  Haraya Resturant & Cafe
                </NavLink>
              </motion.div>
            )}
          </div>
        </nav>
        <button className="px-4 py-2 hidden lg:block">
          <NavLink
            to={"/contact#contact-form"}
            className={({ isActive }) =>
              `py-2 px-4 font-medium ${
                isActive
                  ? "bg-mavlin-gold text-mavlin-blue"
                  : "bg-mavlin-blue text-white"
              }`
            }
          >
            Contact Us
          </NavLink>
        </button>
        <div
          className="lg:hidden
        "
        >
          <button
            className="text-3xl transition-all duration-500"
            onClick={() => setMobileNav((prev) => !prev)}
          >
            {MobileNav ? <VscClose /> : <MdMenu />}
          </button>

          {MobileNav && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute right-4 top-20 rounded-xl bg-white border border-gray-100 shadow-lg min-w-48 overflow-hidden"
              onMouseLeave={() => setMobileNav(false)}
            >
              {mobileItems.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-2  font-medium hover:border-x hover:border-mavlin-gold hover:bg-mavlin-blue hover:text-white ${
                      isActive
                        ? "bg-mavlin-blue text-white"
                        : "text-mavlin-blue bg-white"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
