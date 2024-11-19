import React, { useState } from "react";
import AllBoxProgram from "./AllBoxProgram";
import VegetableBoxProgram from "./VegetableBoxProgram";
import FruitBoxProgram from "./FruitBoxProgram";
import RootBoxProgram from "./RootsBoxProgram";
import SeasonalBoxProgram from "./SeasonalBoxProgram";

const BoxProgram = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["All", "Vegetables", "Fruits", "Roots & Tubers", "Seasonals"];

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <AllBoxProgram />;
      case 1:
        return <VegetableBoxProgram />;
      case 2:
        return <FruitBoxProgram />;
      case 3:
        return <RootBoxProgram />;
      case 4:
        return <SeasonalBoxProgram />;

      default:
        return null;
    }
  };

  return (
    <section id="boxProgram" className="py-8 px-8 lg:py-24 lg:px-24">
      <div className="mx-auto w-full flex flex-col justify-start items-center">
        <p className="text-4xl font-bold text-mavlin-farms-green font-montserratAlternates uppercase">
          Farm Box Program
        </p>
        <p className="text-mavlin-farms-orange/90 font-medium mb-8">
          Get a subscription supply of fresh produce straight from our farm
        </p>
      </div>
      <div className="flex flex-col items-start">
        <div className="mx-auto flex items-start justify-between gap-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-2 py-1 text-lg font-semibold transition-all duration-400 text-left font-karla ${
                activeTab === index
                  ? "border-b border-mavlin-farms-orange text-mavlin-farms-green"
                  : "text-mavlin-farms-green/70 hover:text-mavlin-farms-green"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-8 bg-white transition-all duration-300">
          {renderTabContent()}
        </div>
      </div>
    </section>
  );
};

export default BoxProgram;
