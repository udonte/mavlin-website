import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { NavHashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import Mavlinlogo from "../../assets/images/SnowlandImmigration/snowlandLogo.png";
import { VscClose } from "react-icons/vsc";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SnowlandHeader = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [MobileNav, setMobileNav] = useState(false);

  const menuItems = [
    { title: "Home", path: "/snowlandimmigration/#hero" },
    { title: "About", path: "/snowlandimmigration/#about" },
    { title: "Services", path: "/snowlandimmigration/#services" },
  ];

  const mobileItems = [
    { title: "Home", path: "/snowlandimmigration/#hero" },
    { title: "About", path: "/snowlandimmigration/#about" },
    { title: "Services", path: "/snowlandimmigration/#services" },
    { title: "Contact", path: "/snowlandimmigration/#snowland-contact-form" },
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white text-mavlin-blue px-8 py-6 lg:px-24 lg:py-4 fixed w-full z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <HashLink smooth to="/mavlin-farms/#hero">
            <img src={Mavlinlogo} alt="Mavlin Logo" className="w-[250px]" />
          </HashLink>
        </h1>
        <nav className="lg:flex space-x-8 hidden">
          {menuItems.map((item) => (
            <NavHashLink
              key={item.path}
              smooth
              className="font-bold hover:border-b-2 border-red-600"
              to={item.path}
            >
              {item.title}
            </NavHashLink>
          ))}
        </nav>
        <button className="px-4 py-2 hidden lg:block">
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

        <button
          className="text-3xl transition-all duration-500 block lg:hidden"
          onClick={() => setMobileNav((prev) => !prev)}
        >
          {MobileNav ? <VscClose /> : <MdMenu />}
        </button>

        {MobileNav && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute right-4 top-20 rounded-xl bg-white border border-gray-100 shadow-lg min-w-48 overflow-hidden "
            onMouseLeave={() => setMobileNav(false)}
          >
            {mobileItems.map((item, i) => (
              <HashLink
                key={i}
                to={item.path}
                className={`flex text-mavlin-blue hover:bg-mavlin-blue hover:text-white bg-white px-4 py-2  font-medium hover:border-x hover:border-mavlin-gold `}
              >
                {item.title}
              </HashLink>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default SnowlandHeader;
