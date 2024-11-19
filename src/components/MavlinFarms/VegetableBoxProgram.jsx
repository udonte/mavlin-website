import React from "react";
import BoxImage1 from "../../assets/images/MavlinFarms/BoxProgram1.png";
import BoxImage2 from "../../assets/images/MavlinFarms/BoxProgram2.png";
import BoxImage3 from "../../assets/images/MavlinFarms/BoxProgram3.png";
import BoxImage4 from "../../assets/images/MavlinFarms/BoxProgram4.png";
import BoxImage5 from "../../assets/images/MavlinFarms/BoxProgram5.png";
import BoxImage6 from "../../assets/images/MavlinFarms/BoxProgram6.png";
import BoxImage7 from "../../assets/images/MavlinFarms/BoxProgram7.png";
import BoxImage8 from "../../assets/images/MavlinFarms/BoxProgram8.png";

const mockData = [
  { id: 1, title: "Sweet Potatoes", image: BoxImage2 },

  { id: 2, title: "Vareity Vegetales", image: BoxImage4 },
];

const VegetableBoxProgram = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {mockData.map((item) => (
        <div
          key={item.id}
          className="p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all hover:border hover:border-mavlin-farms-green/10 duration-500 group bg-white "
        >
          <div className="rounded-xl overflow-hidden h-[200px] mb-4">
            <img
              src={item.image}
              alt={item.title}
              className="object-contain h-full w-full transition-transform transform group-hover:scale-125"
            />
          </div>
          <p className="text-center font-bold text-mavlin-farms-green">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default VegetableBoxProgram;
