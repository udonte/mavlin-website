import { motion } from "framer-motion";
import StatsSection from "../components/Home/Stats";
import FarmHero from "../components/MavlinFarms/FarmHero";
import FarmAbout from "../components/MavlinFarms/FarmAbout";
import FromFarm from "../components/MavlinFarms/FromFarm";
import BoxProgram from "../components/MavlinFarms/BoxProgram";
import FAQsFarm from "../components/MavlinFarms/FAQsFarm";
import ContactFarm from "../components/MavlinFarms/ContactFarm";
import ProcessingExcellence from "../components/MavlinFarms/ProcessingExcellence";

const MavlinFarms = () => (
  <motion.div
    className=""
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="mt-16">
      <FarmHero />

      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
        exit={{ opacity: 0 }}
      >
        <FarmAbout />
        <FromFarm />
        {/* <BoxProgram /> */}
        {/* <FAQsFarm /> */}
        <ProcessingExcellence />
        <ContactFarm />
      </motion.div>
    </div>
  </motion.div>
);

export default MavlinFarms;
