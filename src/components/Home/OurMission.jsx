import footerBackground from "../../assets/images/footer/bg.png";

const OurMission = () => {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${footerBackground})`,
      }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-mavlin-blue opacity-90"></div>

      {/* Footer content */}
      <div className="relative z-10 ">
        <div className="px-24 py-16">
          <div className="w-full border-x border-mavlin-gold px-24 mx-auto">
            <p className="text-white mb-4">OUR MISSION</p>
            <p className="text-WHITE mb-4 text-mavlin-gold uppercase text-2xl">
              Client Satisfaction{" "}
            </p>
            <div className=" text-lg text-white font-arimo">
              We are passionate about driving sustainable development across
              sectors by delivering high-quality solutions and unparalleled
              service. We want to provide innovative{" "}
              <span className="text-mavlin-gold">
                quality services to our clients{" "}
              </span>{" "}
              on a timely schedule using the{" "}
              <span className="text-mavlin-gold">
                best available resources.
              </span>{" "}
            </div>
            <button className="mt-8 border px-4 py-2 border-white bg-transparent w-fit text-white hover:bg-black/10">
              <p>Contact Us</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
