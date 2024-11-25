import React from "react";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const AddressDetails = () => {
  return (
    <div className="px-8 py-8 lg:px-24 lg:py-24">
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321200.72566193534!2d-114.41816150612154!3d51.02758962008554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sng!4v1729975169582!5m2!1sen!2sng"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Our Location"
        ></iframe>
      </div>

      {/* address */}
      <div className="flex flex-col md:flex-row items-center gap-4 mt-16">
        <div className="w-[400px] text-mavlin-blue p-8 border-l-4 border-mavlin-gold shadow h-[200px]">
          <p className="text-[10px] text-gray-900 mb-4">
            MAVLGIN GOBAL SERVICE LTD, CANADA
          </p>
          <p className=" font-montserratAlternates font-bold">
            Nexus Business Centre, <br /> 3149 5th Avenue, <br /> NE Upper Unit
            Calgary, AB <br />
            T2A 6C9, Alberta, Canada
          </p>
        </div>
        <div className="w-[400px] text-mavlin-blue p-8 border-l-4 border-mavlin-gold shadow h-[200px]">
          <p className="text-[10px] text-gray-900 mb-4">
            MAVLIN PROJECTS LIMITED, NIGERIA
          </p>
          <p className=" font-montserratAlternates font-bold ">
            103 Rumuewhara new road layout, <br /> valley view estate, Atali,{" "}
            <br />
            Portharcourt. Nigeria
          </p>
        </div>
        <div className="p-4 flex items-center justify-center">
          <div className="flex flex-col items-start gap-8">
            <div className="flex items-start gap-2 rounded">
              <div className="bg-mavlin-gold text-white w-fit p-2 text-3xl">
                <FaPhoneAlt />
              </div>
              <div className="text-mavlin-blue ">
                <p className="text-[8px]">COMPANY PHONES</p>
                <p className="text-sm font-medium mt-1">+1587 732 0245</p>
                <p className="text-sm font-medium">+2349167360995</p>
              </div>
            </div>
            <div className="flex items-start gap-2 rounded">
              <div className="text-white bg-mavlin-blue w-fit p-2 text-3xl">
                <IoChatbubbleEllipsesOutline />
              </div>
              <div className="text-mavlin-blue ">
                <p className="text-[8px]">MAVLIN EMAILS</p>
                <p className="text-sm font-medium mt-1">info@mavlin.com</p>
                <p className="text-sm font-medium">mavlin@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;
