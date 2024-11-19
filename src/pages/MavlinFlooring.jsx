import { motion } from "framer-motion";

import KronoHero from "../components/MavlinFlooring/KronoHero";
import KronoAbout from "../components/MavlinFlooring/KronoAbout";
import KronoCategory from "../components/MavlinFlooring/KronoCategory";
import FloorCategories from "../components/MavlinFlooring/FloorCategories";
import FlooringContact from "../components/MavlinFlooring/FlooringContact";

const MavlinFlooring = () => (
  <motion.div
    className=""
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="mt-16">
      <KronoHero />
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
        exit={{ opacity: 0 }}
      >
        <KronoAbout />
        <KronoCategory />
        <FloorCategories />
        <FlooringContact />
      </motion.div>
    </div>
  </motion.div>
);

export default MavlinFlooring;
