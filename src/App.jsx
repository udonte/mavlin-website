// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import MavlinFarms from "./pages/MavlinFarms";
import MavlinFlooring from "./pages/MavlinFlooring";
import Layout from "./components/Layout";
import Snowlandimmigration from "./pages/SnowlandImmigration";
import HarayaRestaurants from "./pages/HarayaRestaurants";

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mavlin-farms" element={<MavlinFarms />} />
            <Route path="/kronodaekaflooring" element={<MavlinFlooring />} />
            <Route path="/harayarestaurants" element={<HarayaRestaurants />} />
            <Route
              path="/snowlandimmigration"
              element={<Snowlandimmigration />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
