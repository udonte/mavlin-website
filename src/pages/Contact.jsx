import { motion } from "framer-motion";
import StatsSection from "../components/Home/Stats";
import Testimonials from "../components/Home/Testimonial";
import ContactForm from "../components/Contact/ContactForm";
import ContactHero from "../components/Contact/ContactHero";
import AddressDetails from "../components/Contact/AddressDetails";
import Clients from "../components/Home/Clients";

const Contact = () => (
  <motion.div
    className=""
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="mt-16">
      <ContactHero />
      <StatsSection />
      <ContactForm />
      <AddressDetails />
      <Clients />
    </div>
  </motion.div>
);

export default Contact;
