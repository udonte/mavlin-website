import React, { useState } from "react";

import AllFloors from "./AllFloors";
import AdvancedFloors from "./AdvancedFloors";
import AdvancedPlusFloors from "./AdvancedPlus";
import BasicFloors from "./BasicFloors";
import CatwalkFloors from "./CatwalkFloors";
import StandardFloors from "./StandardFloors";

const FloorCategories = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    "All",
    "Advanced",
    "Advanced Plus",
    "Basic",
    "Catwalk",
    "Standard",
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <AllFloors />;
      case 1:
        return <AdvancedFloors />;
      case 2:
        return <AdvancedPlusFloors />;
      case 3:
        return <BasicFloors />;
      case 4:
        return <CatwalkFloors />;
      case 5:
        return <StandardFloors />;

      default:
        return null;
    }
  };

  return (
    <section id="" className="py-8 px-8 lg:py-24 lg:px-24 w-full">
      <div className="mx-auto w-full flex flex-col justify-start items-center">
        <p className="text-4xl font-bold text-mavlin-krono-brown font-montserratAlternates uppercase">
          Floors
        </p>
      </div>
      <div className="flex flex-col items-start">
        <div className="mx-auto flex items-start justify-between gap-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-2 py-1 text-lg font-semibold transition-all duration-400 text-left font-karla ${
                activeTab === index
                  ? "border-b border-red-600 text-mavlin-krono-brown"
                  : "text-mavlin-krono-brown/70 hover:text-mavlin-krono-brown"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-8 bg-white transition-all duration-300 mx-auto min-h-screen">
          {renderTabContent()}
        </div>
      </div>
    </section>
  );
};

export default FloorCategories;
