import { motion } from "framer-motion";

import SnowlandHero from "../components/SnowlandImmigration/SnowlandHero";
import SnowlandAbout from "../components/SnowlandImmigration/SnowlandAbout";
import SnowlandWhyWork from "../components/SnowlandImmigration/SnowlandWhyWork";
import SnowlandServices from "../components/SnowlandImmigration/SnowlandServices";
import SnowlandContact from "../components/SnowlandImmigration/SnowlandContact";

const Snowlandimmigration = () => (
  <motion.div
    className=""
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="mt-16">
      <SnowlandHero />
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
        exit={{ opacity: 0 }}
      >
        <SnowlandAbout />
        <SnowlandServices />
        <SnowlandWhyWork />
        <SnowlandContact />
      </motion.div>
    </div>
  </motion.div>
);

export default Snowlandimmigration;
