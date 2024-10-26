import { NavLink } from "react-router-dom";
import Mavlinlogo from "../assets/images/MavlinBlue.png";
import { motion } from "framer-motion";

const menuItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Projects", path: "/projects" },
];

const Header = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white text-mavlin-blue px-24 py-4 fixed w-full z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <img src={Mavlinlogo} alt="Mavlin Logo" className="w-[70px]" />
        </h1>
        <nav className="flex space-x-8">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `hover:text-gray-400 ${
                  isActive ? "font-bold border-b-2 border-mavlin-blue" : ""
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
        <button className="bg-mavlin-blue text-white px-4 py-2">
          Contact Us
        </button>
      </div>
    </motion.nav>
  );
};

export default Header;
