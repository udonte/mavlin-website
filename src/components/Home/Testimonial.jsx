import { useState, useEffect, useRef } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import testimonial1 from "../../assets/images/Home/testimonial1.png";
import testimonial2 from "../../assets/images/Home/testimonial2.png";
import testimonial3 from "../../assets/images/Home/testimonial3.png";
import testimonial4 from "../../assets/images/Home/testimonial4.png";
import testimonial5 from "../../assets/images/Home/testimonial5.png";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const testimonials = [
  {
    id: 1,
    quote:
      "A real sense of community, nurtured.” Really appreciate the help and support from the staff during my trips.",
    name: "Alice Mark",
    image: testimonial1,
  },
  {
    id: 2,
    quote:
      "Slate helps you see how many more days you need to work to reach your financial goal.",
    name: "John Doe",
    image: testimonial2,
  },
  {
    id: 3,
    quote: "Loved the hospitality and services. Highly recommend!",
    name: "Emma Stone",
    image: testimonial3,
  },
  {
    id: 4,
    quote:
      "Mavlin provided us with excellent project management services that streamlined our operations. We couldn’t be happier with the results.!",
    name: "William Johnson",
    image: testimonial4,
  },
  {
    id: 5,
    quote: "Amazing service! Will definitely return for future trips.",
    name: "Sarah Connor",
    image: testimonial5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef(null);

  const totalTestimonials = testimonials.length;

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1
    );
  };

  // Automatically switch testimonials every 5 seconds
  useEffect(() => {
    autoPlayRef.current = setInterval(nextTestimonial, 3000);
    return () => clearInterval(autoPlayRef.current);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className=" px-4 py-8 lg:px-24 lg:py-24 overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-2 md:gap-8">
        {/* top */}
        <div className="w-full md:w-1/2 flex flex-col text-center">
          <p className="text-mavlin-gold uppercase">TESTIMONIAL</p>
          <p className="font-arimo text-3xl text-mavlin-blue font-semibold W-full ">
            We offer tailored solutions that drive success for our clients
          </p>
        </div>

        {/* Center Images */}
        <div className="flex items-center justify-center gap-4 mt-4 py-2 overflow-hidden transition-transform duration-2000 ease-in-out transform-gpu">
          {" "}
          <div className="relative overflow-hidden rounded-full cursor-pointer w-[130px] h-[130px] border-[10px] border-mavlin-gray-1">
            <img
              src={
                testimonials[
                  (currentIndex - 2 + totalTestimonials) % totalTestimonials
                ].image
              }
              alt="Next"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-100 opacity-50"></div>
          </div>
          <div className="relative overflow-hidden rounded-full cursor-pointer w-[130px] h-[130px] border-[10px] border-gray-200">
            <img
              src={
                testimonials[
                  (currentIndex - 1 + totalTestimonials) % totalTestimonials
                ].image
              }
              alt="Previous"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-600 opacity-40"></div>
          </div>
          <div className="relative overflow-hidden rounded-full cursor-pointer w-[200px] h-[200px] border-[12px] border-mavlin-gold transition-transform duration-500 hover:scale-110">
            <img
              src={currentTestimonial.image}
              alt="Current"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="relative overflow-hidden rounded-full cursor-pointer w-[130px] h-[130px] border-[10px] border-gray-200"
            onClick={prevTestimonial}
          >
            <img
              src={testimonials[(currentIndex + 1) % totalTestimonials].image}
              alt="Next"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-600 opacity-40"></div>
          </div>
          <div className="relative overflow-hidden rounded-full cursor-pointer w-[130px] h-[130px] border-[10px] border-gray-200">
            <img
              src={testimonials[(currentIndex + 2) % totalTestimonials].image}
              alt="Next"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-100 opacity-50"></div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col justify-start items-center gap-4 w-full ">
          {/* Quote mark and name */}
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-mavlin-blue text-7xl">
              <RiDoubleQuotesL />
            </div>
            <p className="text-xl md:text-3xl font-bold text-mavlin-blue transition-opacity duration-1000 ease-in-out ">
              {currentTestimonial.name}
            </p>
          </div>

          {/* Quote text */}
          <div className="flex items-start justify-between gap-4 w-full min-h-36">
            <div
              className="flex items-center justify-center w-fit md:w-16 h-fit md:h-16 p-1 text-mavlin-blue bg-mavlin-gray-2 hover:bg-mavlin-gold transition-all duration-300 ease-in-out rounded-full cursor-pointer"
              onClick={prevTestimonial}
            >
              <GoChevronLeft className="text-lg md:text-3xl" />
            </div>
            <div className="w-full md:w-[610px] text-center">
              <p className="text-mavlin-blue font-karla italic text-base md:text-xl font-medium transition-opacity duration-1000 ease-in-out">
                {currentTestimonial.quote}
              </p>
            </div>
            <div
              className="flex items-center justify-center w-fit md:w-16 h-fit md:h-16 p-1 text-mavlin-blue bg-mavlin-gray-2 hover:bg-mavlin-gold transition-all duration-300 ease-in-out rounded-full cursor-pointer"
              onClick={nextTestimonial}
            >
              <GoChevronRight className="text-lg md:text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
