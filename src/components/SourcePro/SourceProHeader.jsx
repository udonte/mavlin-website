import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { NavHashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";
import { VscClose } from "react-icons/vsc";
import { MdMenu } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const SourceProHeader = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Updated menu items based on our content structure
  const menuItems = [
    { id: "hero", title: "Home", path: "/sourcepro/#hero" },
    { id: "process", title: "Our Process", path: "/sourcepro/#process" },
    { id: "services", title: "Parts & Services", path: "/sourcepro/#services" },
    { id: "why-us", title: "Why SourcePro", path: "/sourcepro/#why-us" },
    { id: "contact", title: "Contact", path: "/sourcepro/#contact" },
  ];

  const mobileItems = menuItems;

  // Function to detect which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems
        .map((item) => ({
          id: item.id,
          element: document.getElementById(item.id),
        }))
        .filter((section) => section.element);

      // Find the section that's currently in view
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Function to check if a section is active
  const isActive = (sectionId) => {
    return activeSection === sectionId;
  };

  // Function to handle mobile navigation click
  const handleMobileNavClick = (sectionId) => {
    setIsMobileNavOpen(false);
    setActiveSection(sectionId);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed w-full z-50 py-4 backdrop-blur-md bg-white/95 border-b border-gray-100 shadow-sm"
    >
      <div className="container mx-auto px-4 lg:px-16 xl:px-24 flex justify-between items-center">
        {/* Logo */}
        <HashLink smooth to="/sourcepro/#hero" className="flex items-center">
          <div className="relative">
            <div className="w-full md:w-40 md:h-10 flex items-center justify-center">
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                SOURCEPRO
              </span>
              <span className="text-xs font-light text-gray-500 ml-2 mt-1">
                AUTOMOBILES
              </span>
            </div>
            {/* Optional badge for brand specialization */}
            <div className="absolute -bottom-2 right-0 flex gap-1">
              <span className="text-[8px] font-semibold px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded">
                MERCEDES
              </span>
              <span className="text-[8px] font-semibold px-1.5 py-0.5 bg-gray-50 text-gray-700 rounded">
                BMW
              </span>
            </div>
          </div>
        </HashLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.slice(0, -1).map((item) => (
            <div key={item.id} className="relative">
              <NavHashLink
                smooth
                className={`text-sm font-medium transition-all duration-300 relative group px-1 ${
                  isActive(item.id)
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-gray-900"
                }`}
                to={item.path}
                onClick={() => setActiveSection(item.id)}
              >
                {item.title}
                {/* Active indicator bar */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 ${
                    isActive(item.id) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </NavHashLink>

              {/* Optional: Active section dot indicator */}
              {isActive(item.id) && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -top-1 right-1 w-1 h-1 bg-black animate-pulse duration-200 transition-colors rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
            </div>
          ))}

          {/* Desktop CTA Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <HashLink
              smooth
              to="/sourcepro/#contact"
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group ${
                isActive("contact")
                  ? "bg-gradient-to-r from-blue-800 to-blue-700 text-white"
                  : "bg-gradient-to-r from-blue-600 to-blue-500 text-white"
              }`}
              onClick={() => setActiveSection("contact")}
            >
              <FiPhoneCall className="text-white group-hover:scale-110 transition-transform" />
              Contact Us
            </HashLink>
          </motion.div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          aria-label="Toggle menu"
        >
          {isMobileNavOpen ? (
            <VscClose className="text-2xl text-gray-700" />
          ) : (
            <MdMenu className="text-2xl text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileNavOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-1">
                {mobileItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <HashLink
                      to={item.path}
                      className={`flex items-center justify-between py-3 px-4 rounded-lg transition-all duration-200 group ${
                        isActive(item.id)
                          ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                      }`}
                      onClick={() => handleMobileNavClick(item.id)}
                    >
                      <div className="flex items-center gap-3">
                        {isActive(item.id) && (
                          <motion.div
                            className="w-2 h-2 bg-blue-600 rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                          />
                        )}
                        <span
                          className={`font-medium ${
                            isActive(item.id) ? "font-semibold" : ""
                          }`}
                        >
                          {item.title}
                        </span>
                      </div>
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          isActive(item.id)
                            ? "bg-blue-600 opacity-100"
                            : "bg-blue-600 opacity-0 group-hover:opacity-100"
                        } transition-opacity`}
                      ></div>
                    </HashLink>
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: mobileItems.length * 0.1 }}
                  className="pt-4"
                >
                  <HashLink
                    smooth
                    to="/sourcepro/#contact"
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-700 to-blue-600 text-white py-3.5 rounded-lg text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => handleMobileNavClick("contact")}
                  >
                    <FiPhoneCall className="text-white" />
                    Contact Our Experts
                  </HashLink>
                </motion.div>

                {/* Brand Specialization Badges for Mobile */}
                <div className="flex justify-center gap-3 pt-6">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded">
                      <span className="text-xs font-bold text-blue-700">
                        MB
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      Mercedes
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded">
                      <span className="text-xs font-bold text-gray-700">
                        BMW
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      BMW
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default SourceProHeader;
