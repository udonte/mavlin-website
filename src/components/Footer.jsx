import Mavlinlogo from "../assets/images/MavlinBlue.jpeg";
import footerBackground from "../assets/images/Footer/bg.png"; // Add your background image here

const Footer = () => {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${footerBackground})`,
      }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-mavlin-blue/90"></div>

      {/* Footer content */}
      <div className="relative z-10 ">
        <div className="text-white px-24 py-16">
          <div className="flex items-start justify-between">
            {/* Mavlin Logo and Social Media */}
            <div className="flex items-start justify-start gap-8">
              <div className="bg-white p-2">
                <img src={Mavlinlogo} alt="Mavlin Logo" className="w-[100px]" />
              </div>
              <div className="w-full md:w-[344px] text-sm leading-6">
                Mavlin - A global brand bridging industries and continents for a
                sustainable future. With operations in Nigeria and Canada, we
                serve clients worldwide by bridging continents and industries.
              </div>
            </div>

            {/* Quick Links */}
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
              <button className=" border px-4 py-2 border-white bg-transparent w-fit text-white hover:bg-black/10">
                <p>Contact Us</p>
              </button>
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
