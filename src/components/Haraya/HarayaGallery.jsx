import React from "react";
import Marquee from "react-fast-marquee";
import { FaCircle } from "react-icons/fa";
import Gallery1 from "../../assets/images/Haraya/haraya.jpg";
import Gallery2 from "../../assets/images/Haraya/haraya1.jpg";
import Gallery3 from "../../assets/images/Haraya/haraya2.jpg";
import Gallery4 from "../../assets/images/Haraya/haraya3.jpg";
import Gallery5 from "../../assets/images/Haraya/haraya4.jpg";
import Gallery6 from "../../assets/images/Haraya/haraya5.jpg";
import Gallery7 from "../../assets/images/Haraya/haraya6.jpg";
import Gallery8 from "../../assets/images/Haraya/haraya7.jpg";
import Gallery9 from "../../assets/images/Haraya/haraya8.jpg";
import Gallery10 from "../../assets/images/Haraya/haraya9.jpg";

const clients = [
  {
    id: 1,
    image: Gallery1,
  },
  {
    id: 2,
    image: Gallery2,
  },
  {
    id: 3,
    image: Gallery3,
  },
  {
    id: 4,
    image: Gallery4,
  },
  {
    id: 5,
    image: Gallery5,
  },
  {
    id: 6,
    image: Gallery6,
  },
  {
    id: 7,
    image: Gallery7,
  },
  {
    id: 8,
    image: Gallery8,
  },
  {
    id: 9,
    image: Gallery9,
  },
  {
    id: 10,
    image: Gallery10,
  },
];

const HarayaGallery = () => {
  return (
    <div>
      <div className="py-24 flex flex-col items-center justify-center">
        <div className="w-full md:w-1/2 flex flex-col text-center mb-8">
          <p className="text-mavlin-gold uppercase">VISIT US</p>
          <p className="font-arimo text-3xl text-mavlin-haraya-blue font-semibold W-full ">
            For an Unforgettable Experience
          </p>
        </div>
        <div className="w-full overflow-hidden">
          <div className="">
            <Marquee
              className="w-full flex items-center justify-center"
              speed={20}
              pauseOnHover={true}
            >
              {clients.map((client) => (
                <div
                  key={client.id}
                  className="mx-4 w-[200px] h-[160px] md:h-[300px] md:w-[400px]"
                >
                  <img
                    src={client.image}
                    alt="client"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HarayaGallery;
