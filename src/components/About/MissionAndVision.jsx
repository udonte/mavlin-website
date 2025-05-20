import Mission from "../../assets/images/About/dredge.png";
import Vision from "../../assets/images/About/Vision.jpg";

const MissionAndVision = () => {
  return (
    <div className="px-6 py-8 lg:py-24 lg:px-24 w-full min-h-screen flex flex-col items-center">
      <div className="w-full max-w-7xl">
        {/* Mission Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16">
          <div className="w-full md:w-1/2 flex shadow-xl rounded-xl overflow-hidden h-[300px] md:h-[400px]">
            <img
              src={Mission}
              alt="Mission"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between w-full md:w-1/2 gap-6">
            <p className="text-mavlin-gold font-bold text-xs">MISSION</p>
            <p className="font-Manrope font-bold text-mavlin-blue text-xl md:text-2xl">
              Provide Quality Service across sectors
            </p>
            <div className="bg-gray-100 px-4 py-4 rounded-md shadow">
              <p className="font-karla text-sm md:text-base text-black leading-6">
                We want to provide innovative quality services to our clients on
                a timely schedule using the best available resources.
              </p>
            </div>
            <button className="bg-mavlin-blue py-2 px-6 text-lg font-semibold border border-black transition-transform transform hover:scale-105 text-white self-start">
              Discover more
            </button>
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 flex shadow-xl rounded-xl overflow-hidden h-[300px] md:h-[400px]">
            <img
              src={Vision}
              alt="Vision"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between w-full md:w-1/2 gap-6">
            <p className="text-mavlin-gold font-bold text-xs text-right">
              VISION
            </p>
            <p className="font-Manrope font-bold text-mavlin-blue text-xl md:text-2xl text-right">
              Be the global leader in cross-continental services
            </p>
            <div className="bg-gray-100 px-4 py-4 rounded-md shadow">
              <p className="font-karla text-sm md:text-base text-black text-right leading-6">
                We aim to be a top-class oil service company that competes
                favorably with the best, providing top-notch services in our
                segment of the oil service and supply industry wherever we work.
              </p>
            </div>
            <button className="bg-mavlin-blue py-2 px-6 text-lg font-semibold border border-black transition-transform transform hover:scale-105 text-white self-end">
              Discover more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVision;
