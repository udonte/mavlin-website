import { motion } from "framer-motion";
import Hero from "../components/Home/Hero";
import Testimonials from "../components/Home/Testimonial";
import AboutUs from "../components/Home/AboutUs";
import Overview from "../components/Home/Overview";
import Services from "../components/Home/Services";
import WhyChoose from "../components/Home/WhyChoose";
import StatsSection from "../components/Home/Stats";
import OurMission from "../components/Home/OurMission";

const Home = () => (
  <motion.div
    className=""
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="mt-16">
      <Hero />
      <StatsSection />
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
        exit={{ opacity: 0 }}
      >
        <AboutUs />
      </motion.div>
      <Overview />
      <Services />
      <WhyChoose />
      <OurMission />
      <Testimonials />
    </div>
  </motion.div>
);

export default Home;
