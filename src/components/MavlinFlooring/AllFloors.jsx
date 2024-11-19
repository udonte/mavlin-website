import React from "react";
import BoxImage1 from "../../assets/images/MavlinFlooring/advancedplus1.png";
import BoxImage2 from "../../assets/images/MavlinFlooring/advancedplus2.png";
import BoxImage3 from "../../assets/images/MavlinFlooring/advancedplus3.png";
import BoxImage4 from "../../assets/images/MavlinFlooring/advanced1.png";
import BoxImage5 from "../../assets/images/MavlinFlooring/advanced2.png";
import BoxImage6 from "../../assets/images/MavlinFlooring/advanced3.png";
import BoxImage7 from "../../assets/images/MavlinFlooring/catwalk1.png";
import BoxImage8 from "../../assets/images/MavlinFlooring/catwalk2.png";
import BoxImage9 from "../../assets/images/MavlinFlooring/standard1.png";
import BoxImage10 from "../../assets/images/MavlinFlooring/standard2.png";
import BoxImage11 from "../../assets/images/MavlinFlooring/standard3.png";
import BoxImage12 from "../../assets/images/MavlinFlooring/basic1.png";

const mockData = [
  { id: 1, title: "Advanced Plus", image: BoxImage1 },
  { id: 2, title: "Advanced Plus", image: BoxImage2 },
  { id: 3, title: "Advanced Plus", image: BoxImage3 },
  { id: 4, title: "Advanced Decor", image: BoxImage4 },
  { id: 5, title: "Advanced Decor", image: BoxImage5 },
  { id: 6, title: "Advanced Decor", image: BoxImage6 },
  { id: 7, title: "Catwalk Decor", image: BoxImage7 },
  { id: 8, title: "Catwalk Decor", image: BoxImage8 },
  { id: 9, title: "Standard Decor", image: BoxImage9 },
  { id: 10, title: "Standard Decor", image: BoxImage10 },
  { id: 11, title: "Standard Decor", image: BoxImage11 },
  { id: 12, title: "Basic Decor", image: BoxImage12 },
];

const AllFloors = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4 w-">
      {mockData.map((item) => (
        <div
          key={item.id}
          className="p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all hover:border hover:border-mavlin-krono-brown/10 duration-500 group bg-white "
        >
          <div className="rounded-xl overflow-hidden h-[200px] mb-4">
            <img
              src={item.image}
              alt={item.title}
              className="object-contain h-full w-full transition-transform transform group-hover:scale-125"
            />
          </div>
          <p className="text-center font-bold text-mavlin-krono-brown">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AllFloors;
