import { motion } from "framer-motion";
import Testimonials from "../components/Home/Testimonial";
import AboutHero from "../components/About/AboutHero";
import CompanyDescription from "../components/About/CompanyDescription";
import StatsSection from "../components/Home/Stats";
import MissionAndVision from "../components/About/MissionAndVision";
import CoreValues from "../components/About/CoreValues";
import OurTeam from "../components/About/OurTeam";
import StaffVideo from "../components/About/StaffVideo";
import Clients from "../components/Home/Clients";
import MembershipSection from "../components/Home/Membership";

const About = () => (
  <motion.div
    className=""
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="mt-16">
      <AboutHero />
      <StatsSection />
      <CompanyDescription />
      <MembershipSection />
      <MissionAndVision />
      <CoreValues />
      <Clients />
    </div>
  </motion.div>
);

export default About;
