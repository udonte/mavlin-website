import { motion } from "framer-motion";
import StatsSection from "../components/Home/Stats";
import Clients from "../components/Home/Clients";
import Portfolio from "../components/Projects/Portfolio";
import ProjectHero from "../components/Projects/ProjectHero";
import ExecutedProjects from "../components/Projects/ExecutedProjects";

const Projects = () => (
  <motion.div
    className=""
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="mt-16">
      <ProjectHero />
      <StatsSection />
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
        exit={{ opacity: 0 }}
      >
        <Portfolio />
        <ExecutedProjects />
      </motion.div>

      <Clients />
    </div>
  </motion.div>
);

export default Projects;
