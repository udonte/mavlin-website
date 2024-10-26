import React from "react";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const AddressDetails = () => {
  return (
    <div className="px-24 py-24">
      <div className="flex items-center gap-4">
        <div className="md:w-2/3 p-4">
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
        <div className="md:w-1/3 p-4 flex items-center justify-center">
          <div className="flex flex-col items-start gap-8">
            <div className="flex items-start gap-2 rounded">
              <div className="text-mavlin-gold bg-mavlin-blue w-fit p-2 text-3xl">
                <FaPhoneAlt />
              </div>
              <div className="text-mavlin-blue ">
                <p className="text-[8px]">COMPANY PHONES</p>
                <p className="text-sm font-medium mt-1">+12345678098</p>
                <p className="text-sm font-medium">+12345678098</p>
              </div>
            </div>
            <div className="flex items-start gap-2 rounded">
              <div className="text-mavlin-gold bg-mavlin-blue w-fit p-2 text-3xl">
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
