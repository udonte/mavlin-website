import Mavlinlogo from "../assets/images/mavlinWhite.png";
import footerBackground from "../assets/images/footer/bg.png"; // Add your background image here
import { HiOutlineArrowRight } from "react-icons/hi";

const Footer = () => {
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
        <div className="text-white px-24 py-16">
          <div className="flex items-start justify-between">
            {/* Mavlin Logo and Social Media */}
            <div className="flex items-start justify-start gap-8">
              <img src={Mavlinlogo} alt="Mavlin Logo" className="w-[150px]" />
              <div className="w-full md:w-[344px] text-sm leading-6">
                Mavlin - A global brand with African roots, bridging industries
                and continents for a sustainable future. With operations in
                Nigeria and Canada, we serve clients worldwide by bridging
                continents and industries.
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex items-start gap-12 text-sm">
              <div>
                <div className="space-y-4">
                  <p className="cursor-pointer hover:text-gray-300 transition-colors">
                    Home
                  </p>
                  <p className="cursor-pointer hover:text-gray-300 transition-colors">
                    About
                  </p>
                  <p className="cursor-pointer hover:text-gray-300 transition-colors">
                    Services
                  </p>
                  <p>Projects</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="cursor-pointer hover:text-gray-300 transition-colors">
                  Facebook
                </p>
                <p className="cursor-pointer hover:text-gray-300 transition-colors">
                  Whatsapp
                </p>
                <p className="cursor-pointer hover:text-gray-300 transition-colors">
                  Twitter
                </p>
                <button className=" border px-4 py-2 border-white bg-transparent w-fit text-white hover:bg-black/10">
                  <p>Contact Us</p>
                </button>
              </div>
              <div>
                <p className="tracking-widest">SUBSCRIBE</p>
                <div className="flex items-start gap-1 mt-2">
                  <input
                    type="text"
                    placeholder="Your email"
                    className="bg-transparent outline-none border border-gray-500 px-2 py-1.5 text-xs text-white placeholder-gray-300"
                  />
                  <button className=" border-white hover:bg-black/10 hover:text-mavlin-blue text-white rounded-md text-xs py-2 px-4 transition-colors">
                    <HiOutlineArrowRight className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-500 px-24 py-12">
          <div className="container mx-auto text-left text-sm text-white">
            <p>
              &copy; {new Date().getFullYear()} Mavlin, All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
