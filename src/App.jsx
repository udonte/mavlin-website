import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "framer-motion";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
