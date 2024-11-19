import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import HeroImage1 from "../../assets/images/MavlinFarms/Hero1.jpg";
import HeroImage2 from "../../assets/images/MavlinFarms/Hero2.jpg";
import HeroImage3 from "../../assets/images/MavlinFarms/Hero3.jpg";

// Mock data for images and their associated text
const slides = [
  {
    image: HeroImage1,
    title: "Healthy Products Directly from the Farm",
    description:
      "Experience the freshness of farm-to-table products, grown using sustainable methods to bring you the best quality and flavor.",
  },
  {
    image: HeroImage2,
    title: "Fresh Fruits and Vegetables",
    description:
      "Our farm offers a variety of seasonal fruits and vegetables, harvested at peak ripeness to ensure maximum nutrition and taste.",
  },
  {
    image: HeroImage3,
    title: "Premium Livestock and Poultry",
    description:
      "We provide responsibly raised livestock and poultry products, ensuring quality meat and eggs while promoting animal welfare.",
  },
];

const FarmHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-[80vh] overflow-hidden bg-mavlin-blue/20"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full z-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.5)",
          }}
        />
      ))}

      <div className="absolute bottom-4 right-4 flex gap-8 z-20">
        <button
          onClick={handlePrev}
          className="bg-transparent border-r border-white hover:bg-gray/40 p-2 text-white"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="bg-transparent border-l border-white hover:bg-gray/40 p-2 text-white"
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="absolute inset-y-0 flex flex-col items-start justify-center h-full w-full md:w-1/2 text-white z-10 pl-4 md:pl-24">
        <h1 className="text-xl font-normal md:text-3xl text-left mb-4 slide-in uppercase tracking-widest">
          {slides[currentIndex].title}
        </h1>
        <p className="text-sm md:text-lg mb-6 text-left slide-in delay-150 italic font-montserratAlternates">
          {slides[currentIndex].description}
        </p>
      </div>

      <style>{`
        .slide-in {
          transform: translateX(100px);
          opacity: 0;
          animation: slideIn 1s forwards;
        }
        .delay-150 {
          animation-delay: 0.15s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        @keyframes slideIn {
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default FarmHero;
