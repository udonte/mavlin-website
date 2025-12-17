import { motion } from "framer-motion";
import SourceProHero from "../components/SourcePro/SourceProHero";
import SourceProProcess from "../components/SourcePro/SourceProProcess";
import SourceProParts from "../components/SourcePro/SourceProParts";
import SourceProWhy from "../components/SourcePro/SourceProWhy";
import SourceProContact from "../components/SourcePro/SourceProContact";
import SourceProFAQ from "../components/SourcePro/SourceProFAQ";

const SourcePro = () => {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="mt-16"
        style={{ fontFamily: "Space Grotesk, sans-serif" }}
      >
        <SourceProHero />
        <motion.div
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
          exit={{ opacity: 0 }}
        >
          <SourceProProcess />
          <SourceProParts />
          <SourceProWhy />
          <SourceProContact />
          <SourceProFAQ />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SourcePro;

/* 
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Montserrat", "sans-serif";
}

*/
