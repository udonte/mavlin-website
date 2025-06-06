import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { NavHashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import Mavlinlogo from "../../assets/images/MavlinFarms/MavlinFarmsLogo.png";
import { VscClose } from "react-icons/vsc";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [MobileNav, setMobileNav] = useState(false);

  const menuItems = [
    { title: "Home", path: "/mavlin-farms/#hero" },
    { title: "About", path: "/mavlin-farms/#about" },
    { title: "From the Farm", path: "/mavlin-farms/#fromFarm" },
    // { title: "Box Program", path: "/mavlin-farms/#boxProgram" },
    // { title: "FAQs", path: "/mavlin-farms/#farm-faqs" },
  ];

  const mobileItems = [
    { title: "Home", path: "/mavlin-farms/#hero" },
    { title: "About", path: "/mavlin-farms/#about" },
    { title: "From the Farm", path: "/mavlin-farms/#fromFarm" },
    { title: "Contact", path: "/mavlin-farms/#farm-contact-form" },
    // { title: "Box Program", path: "/mavlin-farms/#boxProgram" },
    // { title: "FAQs", path: "/mavlin-farms/#farm-faqs" },
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white text-mavlin-farms-green px-8 lg:px-24 py-4 fixed w-full z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <HashLink smooth to="/mavlin-farms/#hero">
            <img src={Mavlinlogo} alt="Mavlin Logo" className="w-[100px]" />
          </HashLink>
        </h1>
        <nav className="lg:flex space-x-8 hidden ">
          {menuItems.map((item) => (
            <NavHashLink
              key={item.path}
              smooth
              className="font-bold hover:border-b-2 border-mavlin-farms-orange"
              to={item.path}
              activeClassName="border-b-2 border-mavlin-farms-orange"
              // activeClassName={`font-bold `}
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
            to="/mavlin-farms/#farm-contact-form"
            className={`py-2 px-4 font-medium bg-mavlin-farms-green text-white`}
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
                className={`flex text-mavlin-farms-green hover:bg-mavlin-farms-green hover:text-white bg-white px-4 py-2  font-medium hover:border-x hover:border-mavlin-farms-orange `}
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

export default Header;
