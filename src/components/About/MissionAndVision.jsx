import Mission from "../../assets/images/About/Mission.png";
import Vision from "../../assets/images/About/Vision.jpg";

const MissionAndVision = () => {
  return (
    <div className="py-24 px-24 w-full min-h-screen flex items-center">
      <div className="w-full md:w-[70%] mx-auto h-full">
        {/* mission */}
        <div className="flex items-stretch gap-16 h-[400px]">
          <div className="flex w-full md:w-1/2 shadow-xl rounded-xl overflow-hidden">
            <img
              src={Mission}
              alt="mission"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between gap-4 w-full h-full md:w-1/2">
            <p className="text-mavlin-gold font-bold text-xs">MISSION</p>
            <p className="font-Manrope font-bold text-mavlin-blue text-2xl">
              Provide Quality Service across sectors
            </p>
            <div className="bg-gray-100 px-4 py-4 rounded-md  mt-8 flex items-center shadow">
              <p className="font-karla text-sm w-full md:w-[90%] leading-5 text-black">
                We want to deliver high-quality, integrated services across key
                industries by bridging African markets with international
                innovation and standards.
              </p>
            </div>
            <button className="bg-mavlin-blue py-2 px-6 text-lg font-semibold border border-black transition-transform transform hover:scale-105 text-white w-fit mt-8">
              Discover more
            </button>
          </div>
        </div>
        {/* vision */}
        <div className="flex items-stretch gap-16 mt-24 h-[400px]">
          <div className="flex flex-col justify-between items-end gap-4 w-full h-full md:w-1/2">
            <p className="text-mavlin-gold font-bold text-xs text-right">
              VISION
            </p>
            <p className="font-Manrope font-bold text-mavlin-blue text-2xl text-right">
              Be the global leader in cross-continental services
            </p>
            <div className="bg-gray-100 px-4 py-4 rounded-md  mt-8 flex items-center justify-end shadow ">
              <p className="font-karla text-sm w-full md:w-[90%] leading-5 text-black text-right">
                We aim to empower industries and communities through innovation
                and dedication.We belive in transformation through custom
                solutions and operational excellence.
              </p>
            </div>
            <button className="bg-mavlin-blue py-2 px-6 text-lg font-semibold border border-black transition-transform transform hover:scale-105 text-white w-fit mt-8">
              Discover more
            </button>
          </div>
          <div className="flex w-full md:w-1/2 shadow-xl rounded-xl overflow-hidden bg-gray-200">
            <img src={Vision} alt="mission" className="h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVision;
