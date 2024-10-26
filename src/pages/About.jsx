import { motion } from "framer-motion";

const About = () => (
  <motion.div
    className="container mx-auto p-8"
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    exit={{ opacity: 0 }}
  >
    <h2 className="text-4xl font-bold mb-4">About Us</h2>
    <p className="text-lg text-gray-600">
      CompanyName is a leader in providing top-notch services...
    </p>
  </motion.div>
);

export default About;
