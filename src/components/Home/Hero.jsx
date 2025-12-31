import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import HeroImage1 from "../../assets/images/Home/HeroImage1.png";
import HeroImage2 from "../../assets/images/Home/HeroImage2.jpg";
import HeroImage3 from "../../assets/images/Home/HeroImage3.jpg";
import { Link } from "react-router-dom";

const images = [HeroImage1, HeroImage2, HeroImage3];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-mavlin-blue/90 ">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full z-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
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

      <div className="inset-y-0 flex flex-col items-start justify-center h-full w-full md:w-1/2 text-white z-10 pl-4 md:pl-24">
        <h1 className="text-xl font-normal md:text-3xl text-left  mb-4 slide-in uppercase tracking-widest">
          Global Solutions, Local Impact
        </h1>
        <p className="text-sm md:text-base mb-6 text-left slide-in delay-150">
          Mavlin stands at the forefront of innovation, dedicated to creating
          impactful, sustainable solutions across industries. From
          Telecommunications and Energy to and Technology, our mission is to
          bridge continents and uplift communities, one visionary project at a
          time.
        </p>
        <button className="bg-transparent py-2 px-6 hover:bg-black/30 text-lg font-semibold border border-white slide-in delay-300">
          <Link to={"/services"}>Discover more</Link>
        </button>
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
    </div>
  );
};

export default Hero;
