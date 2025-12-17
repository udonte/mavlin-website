import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FiSearch, FiCheckCircle, FiClock, FiPackage } from "react-icons/fi";
// Import your luxury car images
import HeroImage1 from "../../assets/images/SourcePro/hero/Hero1.jpg";
import HeroImage2 from "../../assets/images/SourcePro/hero/Hero2.jpg";
import HeroImage3 from "../../assets/images/SourcePro/hero/Hero3.jpg";
import HeroImage4 from "../../assets/images/SourcePro/hero/Hero4.jpg";

// Mock data for slides - use high-quality luxury car images
const slides = [
  {
    image: HeroImage1,
    title: "The Exact Part. Guaranteed.",
    subtitle: "For Your Mercedes or BMW",
    description:
      "SourcePro connects you directly to manufacturer-verified parts unavailable in Nigeria. Expert consultation, precision sourcing, and delivery.",
    cta: "Find Your Part",
    stats: "50% faster sourcing time",
  },
  {
    image: HeroImage2,
    title: "Manufacturer-Direct Access",
    subtitle: "Unavailable Parts, Now Available",
    description:
      "We interface between global manufacturers and Nigerian luxury car owners, ensuring genuine components for peak performance.",
    cta: "View Our Process",
    stats: "99% accuracy rate",
  },
  {
    image: HeroImage3,
    title: "Expert Consultation Included",
    subtitle: "Avoid Costly Mistakes",
    description:
      "Our specialists verify every part requirement, ensuring 100% compatibility before ordering. Your vehicle's performance is our priority.",
    cta: "Consult Our Experts",
    stats: "Zero compatibility errors",
  },
  {
    image: HeroImage4,
    title: "Premium Logistics Network",
    subtitle: "Fast, Secure Delivery",
    description:
      "From global manufacturer to your workshop, we manage the entire supply chain with precision and care.",
    cta: "Track Your Order",
    stats: "24/7 shipment tracking",
  },
];

// Value proposition icons
const valueProps = [
  {
    icon: <FiSearch />,
    title: "Rare Parts",
    desc: "Locate discontinued components",
  },
  {
    icon: <FiCheckCircle />,
    title: "Guaranteed",
    desc: "100% manufacturer authentic",
  },
  {
    icon: <FiClock />,
    title: "Fast Turnaround",
    desc: "Minimize vehicle downtime",
  },
  {
    icon: <FiPackage />,
    title: "Verified",
    desc: "Thorough compatibility checks",
  },
];

const SourceProHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(handleNext, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section id="hero" className="relative w-full min-h-screen">
      {/* Background Slides with Parallax Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(10, 15, 30, 0.85) 0%, rgba(10, 15, 30, 0.4) 50%, rgba(10, 15, 30, 0.2) 100%), url(${slides[currentIndex].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent" />

      {/* Main Content */}
      <div className="h-full flex items-center ">
        <div className="container mx-auto px-4 lg:px-16 xl:px-24 py-8">
          <div className="">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <span className="px-4 py-1.5 bg-blue-600/20 backdrop-blur-sm rounded-full text-blue-400 text-xs md:text-sm font-medium border border-blue-500/30">
                EXCLUSIVE TO MERCEDES & BMW
              </span>
              <span className="text-gray-400 text-xs md:text-sm">
                • Premium Parts Specialist
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-bold text-white mb-6 leading-tight"
            >
              <span className="block text-4xl lg:text-6xl xl:text-7xl font-montserrat">
                {slides[currentIndex].title}
              </span>
              <span className="block text-blue-400 mt-2 text-xl md:text-3xl">
                {slides[currentIndex].subtitle}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed"
            >
              {slides[currentIndex].description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/30">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {slides[currentIndex].cta}
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className=" inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:border-white/40">
                How It Works →
              </button>
            </motion.div>

            {/* Value Propositions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl"
            >
              {valueProps.map((prop, index) => (
                <div
                  key={index}
                  className="group p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
                      {prop.icon}
                    </div>
                    <span className="text-white font-semibold">
                      {prop.title}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{prop.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute right-8 bottom-8 z-20">
        <div className="flex items-center gap-6">
          {/* Slide Dots */}
          <div className="flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-blue-500"
                    : "bg-white/50 hover:bg-white"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
              aria-label="Previous slide"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
              aria-label="Next slide"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute right-8 top-1/4 z-20 hidden lg:block"
      >
        <div className="bg-gradient-to-br from-blue-600/20 to-blue-900/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">
              {slides[currentIndex].stats.split(" ")[0]}
            </div>
            <div className="text-sm text-blue-300 font-medium">
              {slides[currentIndex].stats.split(" ").slice(1).join(" ")}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SourceProHero;
