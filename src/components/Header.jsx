import { Link } from "react-router-dom";
import Mavlinlogo from "../assets/images/mavlinBlue.png";
import { motion } from "framer-motion";

const Header = () => (
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
      <div className="flex space-x-8">
        <Link to="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-400">
          About
        </Link>
        <Link to="/projects" className="hover:text-gray-400">
          Projects
        </Link>
      </div>
      <button className="bg-mavlin-blue text-white px-4 py-2">
        Contact Us
      </button>
    </div>
  </motion.nav>
);

export default Header;
