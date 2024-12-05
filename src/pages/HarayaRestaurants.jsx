import { motion } from "framer-motion";

import HarayaHero from "../components/Haraya/HarayaHero";
import HarayaAbout from "../components/Haraya/HarayaAbout";
import HarayaServices from "../components/Haraya/HarayaServices";
import HarayaContact from "../components/Haraya/HarayaContact";
import HarayaGallery from "../components/Haraya/HarayaGallery";

const HarayaRestaurants = () => (
  <motion.div
    className=""
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="mt-16">
      <HarayaHero />

      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
        exit={{ opacity: 0 }}
      >
        <HarayaAbout />
        <HarayaServices />
        <HarayaGallery />
        <HarayaContact />
      </motion.div>
    </div>
  </motion.div>
);

export default HarayaRestaurants;
