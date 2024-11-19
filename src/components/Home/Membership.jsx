import Coren from "../../assets/images/Home/coren.png";
import nse from "../../assets/images/Home/nse.png";

const MembershipSection = () => {
  return (
    <section className="py-8 px-8 lg:py-24 lg:px-24 text-center">
      <div className="container mx-auto px-8">
        <div className="mb-8">
          <p className="text-mavlin-gold uppercase ">Our Management</p>
          <p className="font-arimo text-xl lg:text-3xl text-mavlin-blue font-semibold">
            Professional Memberships
          </p>
        </div>

        <div className="lg:text-2xl text-mavlin-blue font-arimo mb-8">
          At Mavlin, we take pride in our team's professional credibility and
          dedication to excellence. Our management is registered with the{" "}
          <span className="text-mavlin-gold">
            Council for the Regulation of Engineering in Nigeria (COREN)
          </span>
          , ensuring adherence to the highest standards in engineering and
          management. Additionally, our team leaders are corporate members of
          the{" "}
          <span className=" text-mavlin-gold">
            Nigerian Society of Engineers (NSE)
          </span>
          , reinforcing our commitment to professionalism and innovation.
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <img
            src={Coren}
            alt="COREN Logo"
            className="w-48 h-40 object-contain"
          />
          <img src={nse} alt="NSE Logo" className="w-32 h-32 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
