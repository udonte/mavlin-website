import React from "react";
import image1 from "../../assets/images/MavlinFarms/fromFarm1.png";
import image2 from "../../assets/images/MavlinFarms/fromFarm2.png";
import image3 from "../../assets/images/MavlinFarms/fromFarm3.png";
import image4 from "../../assets/images/MavlinFarms/fromFarm4.png";

const images = [
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image2,
  },
  {
    id: 3,
    image: image3,
  },
  {
    id: 4,
    image: image4,
  },
];

const FromFarm = () => {
  return (
    <section id="fromFarm" className="py-8 px-8 lg:px-24 lg:py-24">
      <div className="mx-auto w-full flex flex-col justify-start items-center">
        <p className="text-4xl font-bold text-mavlin-farms-green font-montserratAlternates uppercase">
          From the Farm
        </p>
        <p className="text-mavlin-farms-orange/90 font-medium">
          Directly from the farm, freshly grown for our clients.
        </p>
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {images.map((item) => (
            <div
              className="h-[300px] w-full overflow-hidden rounded-lg shadow-lg"
              key={item.id}
            >
              <img
                src={item.image}
                alt="Olusola Full"
                className="object-cover h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FromFarm;
