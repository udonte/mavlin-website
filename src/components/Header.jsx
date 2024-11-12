import { NavLink } from "react-router-dom";
import Mavlinlogo from "../assets/images/MavlinBlue.jpeg";
import { motion } from "framer-motion";

const menuItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
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
          <NavLink to={"/"}>
            <img src={Mavlinlogo} alt="Mavlin Logo" className="w-[70px]" />
          </NavLink>
        </h1>
        <nav className="flex space-x-8">
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
          <button className={`font-medium`}>Subsidiaries</button>
        </nav>
        <button className=" px-4 py-2">
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
      </div>
    </motion.nav>
  );
};

export default Header;
