import React from "react";
import { FaCircle } from "react-icons/fa";
import BoxImage1 from "../../assets/images/MavlinFlooring/Category1.png";
import BoxImage2 from "../../assets/images/MavlinFlooring/Category2.png";
import BoxImage3 from "../../assets/images/MavlinFlooring/Category3.png";
import BoxImage4 from "../../assets/images/MavlinFlooring/Category4.png";
import BoxImage5 from "../../assets/images/MavlinFlooring/Category5.png";
import BoxImage6 from "../../assets/images/MavlinFlooring/Category6.png";
import AllFloors from "./AllFloors";
import FloorCategories from "./FloorCategories";

const categories = [
  {
    id: 1,
    image: BoxImage1,
    title: "BASIC (6mm)",
    details: [
      "Dimensions: 1,376 ×193 mm",
      "Decors: 5",
      "Panels/box: 8 = 2.124 m²",
      "Boxes/pallet: 56 = 118.974 m²",
    ],
    subtitles: [
      {
        subtitle: "AC3/23:",
        description:
          "A laminate floor‘s resistance to wear is given as an abrasion class, e.g., AC4.",
      },
      {
        subtitle: "Angle-angle locking system:",
        description:
          "Fast installment thanks to an easy-to-use angle-angle locking system for the long and short sides of the boards.",
      },
    ],
  },
  {
    id: 2,
    image: BoxImage2,
    title: "STANDARD (7mm)",
    details: [
      "Dimensions: 1,376 ×193 mm",
      "Decors: 12",
      "Panels/box: 9 = 2.390 m²",
      "Boxes/pallet: 56 =133.840 m²",
    ],
    subtitles: [
      {
        subtitle: "AC3/31:",
        description:
          "The wear class figure indicates the level of use for which the laminate is suitable. 32 represents average commercial ",
      },
      {
        subtitle: "Angle-angle locking system:",
        description:
          "Fast installment thanks to an easy-to-use angle-angle locking system for the long and short sides of the boards.",
      },
    ],
  },
  {
    id: 3,
    image: BoxImage3,
    title: "STANDARD PLUS (7MM)",
    details: [
      "Dimensions: 1,380 ×193 mm",
      "Decors: 6",
      "Panels/box: 9 = 2.397 m²",
      "Boxes/pallet:56 =134.235 m²",
    ],
    subtitles: [
      {
        subtitle: "AC 4/31:",
        description:
          "The wear class figure indicates the level of use for which the laminate is suitable. 32 represents average commercial",
      },
      {
        subtitle: "v4:",
        description:
          "These panels have a 45° bevelled edge all the way round. Putting them together creates a V-shaped groove, which replicates the character of natural wooden floorboards.",
      },
      {
        subtitle: "CLIC SYSTEM + 5G:",
        description:
          "These floorboards use the CLIC system. Simple to lay with no need for a hammer, tapping block and crowbar. Safe and stable, you can walk on them right away.",
      },
    ],
  },
  {
    id: 4,
    image: BoxImage4,
    title: "CATWALK (8mm)",
    details: [
      "Dimensions: 1,376 ×193 mm",
      "Decors: 5",
      "Panels/box: 8 = 2.124 m²",
      "Boxes/pallet: 56 = 118.974 m²",
    ],
    subtitles: [
      {
        subtitle: "AC3/23:",
        description:
          "A laminate floor‘s resistance to wear is given as an abrasion class, e.g., AC4.",
      },
      {
        subtitle: "Angle-angle locking system:",
        description:
          "Fast installment thanks to an easy-to-use angle-angle locking system for the long and short sides of the boards.",
      },
    ],
  },
  {
    id: 5,
    image: BoxImage5,
    title: "ADVANCED (8mm)",
    details: [
      "Dimensions: 1,376 ×193 mm",
      "Decors: 13",
      "Panels/box: 8 = 2.131m²",
      "Boxes/pallet: 56 =119.320 m²",
    ],
    subtitles: [
      {
        subtitle: "AC 4/32:",
        description:
          "The wear class figure indicates the level of use for which the laminate is suitable. 32 represents average commercial",
      },
      {
        subtitle: "v4:",
        description:
          "These panels have a 45° bevelled edge all the way round. Putting them together creates a V-shaped groove, which replicates the character of natural wooden floorboards.",
      },
      {
        subtitle: "CLIC SYSTEM + 5G:",
        description:
          "These floorboards use the CLIC system. Simple to lay with no need for a hammer, tapping block and crowbar. Safe and stable, you can walk on them right away.",
      },
    ],
  },
  {
    id: 6,
    image: BoxImage6,
    title: "ADVANCED PLUS (8mm)",
    details: [
      "Dimensions: 1,380 × 244 mm",
      "Decors: 9",
      "Panels/box: 8 = 2.694 m²",
      "Boxes/pallet: 42 =113.138 m²",
    ],
    subtitles: [
      {
        subtitle: "AC 4/32:",
        description:
          "The wear class figure indicates the level of use for which the laminate is suitable. 32 represents average commercial",
      },
      {
        subtitle: "v4:",
        description:
          "These panels have a 45° bevelled edge all the way round. Putting them together creates a V-shaped groove, which replicates the character of natural wooden floorboards.",
      },
      {
        subtitle: "CLIC SYSTEM + 5G:",
        description:
          "These floorboards use the CLIC system. Simple to lay with no need for a hammer, tapping block and crowbar. Safe and stable, you can walk on them right away.",
      },
    ],
  },
];

const KronoCategory = () => {
  return (
    <section id="category" className="py-8 px-8 lg:py-24 lg:px-24">
      <div className="mx-auto text-center mb-8">
        <p className="text-4xl font-bold text-mavlin-krono-brown font-Karla uppercase">
          6 CATEGORIES, 60 STYLES/DECORS
        </p>
        <p className="text-black font-bold">The Very Best of Wood Flooring</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="p-4 hover:shadow-lg hover:scale-105 transition-all hover:border hover:border-mavlin-farms-green/10 duration-500 group bg-white rounded-xl"
          >
            <div
              className="overflow-hidden h-[200px] w-full mb-4 rounded-lg hover:scale-125"
              style={{
                backgroundImage: `url(${category.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div>
              <div className="flex items-start gap-2 text-center font-bold uppercase text-black text-xl mb-2">
                <p>{`0${category.id}`}</p>
                <p>{category.title}</p>
              </div>
              <div className="font-serif">
                <ul className="mb-4">
                  {category.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <FaCircle size={4} className="text-mavlin-krono-brown" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  {category.subtitles.map((sub, idx) => (
                    <div key={idx} className="mb-2">
                      <h4 className="font-bold text-mavlin-krono-brown">
                        {sub.subtitle}
                      </h4>
                      <p className="text-sm text-black">{sub.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KronoCategory;
