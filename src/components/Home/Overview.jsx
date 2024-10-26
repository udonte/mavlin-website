import Overview1 from "../../assets/images/Home/Overview1.png";
import Overview2 from "../../assets/images/Home/Overview2.png";
import Overview3 from "../../assets/images/Home/Overview3.png";
import Hero2 from "../../assets/images/Footer/bg.png";
import Hero1 from "../../assets/images/Home/HeroImage1.png";
import Logo from "../../assets/images/MavlinWhite.png";
import { FaArrowRight } from "react-icons/fa";

const Overview = () => {
  return (
    <div className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="relative">
          <img
            src={Overview1}
            alt="overview"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-[30%] h-[300px] left-6 z-10 p-4 w-full md:w-[30%]">
            <div className="text-lg mt-4 leading-8 text-mavlin-gold">
              Mavlin brings a unique blend of expertise, innovation, and
              commitment to quality, offering tailored solutions that drive
              success for our clients.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <img
            src={Overview3}
            alt="overview"
            className="w-full h-full object-cover"
          />
          <div
            className="relative bg-cover bg-center"
            style={{
              backgroundImage: `url(${Hero1})`,
            }}
          >
            {/* Blue overlay */}
            <div className="absolute inset-0 bg-mavlin-gold/90 opacity-90"></div>
            <p className="absolute p-4 bottom-4 text-white z-10 text-sm flex items-center gap-2">
              Check our Services
              <button className="bg-transparent border-l border-white hover:bg-gray/40 p-2 text-white">
                <FaArrowRight />
              </button>
            </p>
          </div>
          <div
            className="relative bg-cover bg-center"
            style={{
              backgroundImage: `url(${Hero2})`,
            }}
          >
            {/* Blue overlay */}
            <div className="absolute inset-0 bg-mavlin-blue/90 opacity-90"></div>
            <div className="rounded-md bg- p-6 w-full h-full backdrop-blur-sm">
              <img src={Logo} alt="overview" className="w-full" />
            </div>
          </div>

          <img
            src={Overview2}
            alt="overview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
