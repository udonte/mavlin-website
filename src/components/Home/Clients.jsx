import React from "react";
import Marquee from "react-fast-marquee";
import { FaCircle } from "react-icons/fa";
import Client1 from "../../assets/images/Home/clientsImg/exxon.png";
import Client2 from "../../assets/images/Home/clientsImg/mobil.png";
import Client3 from "../../assets/images/Home/clientsImg/lng.png";
import Client4 from "../../assets/images/Home/clientsImg/ihs.png";
import Client5 from "../../assets/images/Home/clientsImg/huawei.png";
import Client6 from "../../assets/images/Home/clientsImg/maersk.png";
import Client7 from "../../assets/images/Home/clientsImg/pivot.png";
import Client8 from "../../assets/images/Home/clientsImg/electrix.png";
import Client9 from "../../assets/images/Home/clientsImg/lagosstate.png";
import Client10 from "../../assets/images/Home/clientsImg/nigeria.png";
import Client11 from "../../assets/images/Home/clientsImg/tricontinental.png";
import Client12 from "../../assets/images/Home/clientsImg/JuliusBerger.png";

const clients = [
  {
    id: 1,
    image: Client1,
  },
  {
    id: 2,
    image: Client2,
  },
  {
    id: 3,
    image: Client3,
  },
  {
    id: 4,
    image: Client4,
  },
  {
    id: 5,
    image: Client5,
  },
  {
    id: 6,
    image: Client6,
  },
  {
    id: 7,
    image: Client7,
  },
  {
    id: 8,
    image: Client8,
  },
  {
    id: 9,
    image: Client9,
  },
  {
    id: 10,
    image: Client10,
  },
  {
    id: 11,
    image: Client11,
  },
  {
    id: 12,
    image: Client12,
  },
];

const Clients = () => {
  return (
    <div>
      <div className="py-24 flex flex-col items-center justify-center">
        <div className="w-full md:w-1/2 flex flex-col text-center mb-8">
          <p className="text-mavlin-gold uppercase">CLIENTS</p>
          <p className="font-arimo text-3xl text-mavlin-blue font-semibold W-full ">
            See Our Esteemed Customers
          </p>
        </div>
        <div className="w-full overflow-hidden">
          <div className="">
            <Marquee
              className="w-full flex items-center justify-center"
              speed={25}
              gradient={true}
              pauseOnHover={true}
            >
              {clients.map((client) => (
                <div key={client.id} className="mx-4">
                  <img src={client.image} alt="client" />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
