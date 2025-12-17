import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { NavHashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import Mavlinlogo from "../../assets/images/Haraya/Haraya-Restaurant-Logo-web-White.png";
import { VscClose } from "react-icons/vsc";
import { MdMenu } from "react-icons/md";

const HarayaHeader = () => {
  const [MobileNav, setMobileNav] = useState(false);

  const menuItems = [
    { title: "HOME", path: "/harayarestaurants/#hero" },
    { title: "ABOUT", path: "/harayarestaurants/#about" },
    { title: "OUR OFFERINGS", path: "/harayarestaurants/#services" },
  ];

  const mobileItems = [
    { title: "Home", path: "/harayarestaurants/#hero" },
    { title: "About", path: "/harayarestaurants/#about" },
    { title: "Our Offerings", path: "/harayarestaurants/#services" },
    { title: "Contact", path: "/harayarestaurants/#contact-form" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#0c1f3c] text-white px-8 lg:px-24 py-2 fixed w-full z-50"
    >
      <div className="container mx-auto flex justify-between items-center bg-[#0c1f3c]">
        <h1 className="text-2xl font-bold">
          <HashLink smooth to="/mavlin-farms/#hero">
            <img
              src={Mavlinlogo}
              alt="Mavlin Logo"
              className="w-[100px] md:w-[300px]"
            />
          </HashLink>
        </h1>
        <nav className="lg:flex space-x-8 hidden font-manrope">
          {menuItems.map((item) => (
            <NavHashLink
              key={item.path}
              smooth
              className="font-bold hover:border-b-2 border-mavlin-gold font-manrope"
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
            to="/harayarestaurants/#contact-form"
            className={`py-2 px-4 font-medium bg-mavlin-gold text-white`}
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
                className={`flex text-mavlin-haraya-blue hover:bg-mavlin-haraya-blue hover:text-white  px-4 py-2  font-medium hover:border-x hover:border-mavlin-gold `}
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

export default HarayaHeader;
