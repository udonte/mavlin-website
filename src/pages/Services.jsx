import { motion } from "framer-motion";
import Hero from "../components/Home/Hero";
import Testimonials from "../components/Home/Testimonial";
import AboutUs from "../components/Home/AboutUs";
import Overview from "../components/Home/Overview";
import WhyChoose from "../components/Home/WhyChoose";
import StatsSection from "../components/Home/Stats";
import OurMission from "../components/Home/OurMission";
import Clients from "../components/Home/Clients";
import CoreServices from "../components/Services/CoreServices";
import ServicesHero from "../components/Services/ServicesHero";

const Services = () => (
  <motion.div
    className=""
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="mt-16">
      <ServicesHero />
      <StatsSection />
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
        exit={{ opacity: 0 }}
      >
        <CoreServices />
      </motion.div>

      <Clients />
    </div>
  </motion.div>
);

export default Services;
