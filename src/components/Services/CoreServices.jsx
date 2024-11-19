import React from "react";
import { motion } from "framer-motion";
import HeroImage1 from "../../assets/images/Services/construction.jpg";
import HeroImage2 from "../../assets/images/Services/telecomms.jpg";
import HeroImage3 from "../../assets/images/Services/corrosion.jpg";
import HeroImage4 from "../../assets/images/Services/property.jpg";
import HeroImage5 from "../../assets/images/Services/procurement.jpg";
import HeroImage6 from "../../assets/images/Services/christmasTree.jpg";
import HeroImage7 from "../../assets/images/Services/flanks.jpg";
import HeroImage8 from "../../assets/images/Services/oilAndGas.jpg";
import HeroImage9 from "../../assets/images/Services/energy.jpg";
import HeroImage10 from "../../assets/images/Services/consultancy.jpg";
import HeroImage11 from "../../assets/images/Services/agriculture.jpg";
import HeroImage12 from "../../assets/images/Services/automobile.jpg";

const servicesData = [
  {
    title: "Construction (Civil and Mechanical Engineering)",
    description:
      "Our construction services encompass a full range of civil and mechanical engineering projects. We handle roads and buildings construction, as well as their ongoing upgrades and maintenance, ensuring durability and safety. In building systems, we specialize in creating equipment shelters and accommodation facilities suitable for both offshore and onshore environments. Our expertise extends to steel structures, where we manage the design, fabrication, and construction of storage tanks and platforms. Additionally, we provide comprehensive electrical supply and service solutions to support diverse construction and operational needs.",
    image: HeroImage1,
  },
  {
    title: "Telecommunication Infrastructure Provider",
    description:
      "As a trusted telecommunication infrastructure provider, we offer complete site acquisition services, from securing locations to preparing them for operational readiness. Our civil works and site build capabilities support the foundational infrastructure needed for telecommunications, while our transmission installation services ensure effective and seamless equipment setup. For ongoing reliability, we also provide regular site maintenance to keep telecommunication systems fully operational and efficient.",
    image: HeroImage2,
  },
  {
    title: "Corrosion Management",
    description:
      "Our corrosion management services are designed to protect the longevity and integrity of industrial structures and equipment. We conduct thorough corrosion assessments and apply protective coatings to shield surfaces from environmental wear. Our team installs and maintains cathodic protection systems tailored to pipelines, tanks, and marine assets, and offers corrosion monitoring through advanced sensors and remote tracking technologies. We support clients in selecting corrosion-resistant materials and can supply and apply chemical inhibitors for industrial processes. With regular inspection, repair, and maintenance services, our corrosion management solutions help clients extend the service life of critical assets.",
    image: HeroImage3,
  },
  {
    title: "Property Management",
    description:
      "In property management, we provide comprehensive support to maximize the value and operational efficiency of real estate assets. We assist in property acquisition, leasing, and tenant management, creating positive tenant relationships while ensuring properties are managed effectively. Our facility maintenance and operations services keep properties in top condition through regular inspections, repairs, and groundskeeping. We also optimize asset value with strategic upgrades and enhancements, backed by financial management and transparent reporting for streamlined finances. Additionally, we coordinate with trusted vendors and contractors, ensure compliance with safety standards, and manage all procurement and logistics needs to support ongoing property upkeep.",
    image: HeroImage4,
  },
  {
    title: "Procurement – Equipment and Materials",
    description:
      "Our procurement services provide access to a wide range of essential equipment and materials, specifically designed to meet industry requirements. We offer valves, seals, ring gaskets, O-rings, flanges, spools, and various fastening elements such as studs, bolts, and nuts. We also supply lubricants, grease, tubular, and crossovers to support diverse operational needs. With a focus on quality and reliability, our procurement services are designed to ensure that clients receive the materials they need to operate smoothly and efficiently.",
    image: HeroImage5,
  },
  {
    title: "Inspection Services",
    description:
      "Our inspection services ensure that assets and infrastructure comply with safety, quality, and regulatory standards. Through thorough and precise inspections, we provide clients with insights on the condition of their equipment and structures, helping them make informed decisions to maintain safety and functionality across their operations.",
    image: HeroImage6,
  },
  {
    title: "Other Services",
    description:
      "We offer specialized services that include wellhead maintenance and configuration to support efficient and safe oil and gas extraction processes. Our team provides torquing of connections, pressure testing, and installation of valve assemblies (also known as Christmas trees) for robust well control. Additionally, we provide expertise in running tools for drilling and production operations, pipeline works to support fluid transportation, and fabrication services tailored to client specifications.",
    image: HeroImage7,
  },
  {
    title: "Oil and Gas",
    description:
      "Our oil and gas services cover both upstream and downstream operations, including exploration, drilling, refining, and distribution. We specialize in project management, wellhead installation, pipeline construction, and maintenance for onshore and offshore facilities. Our services ensure operational safety, compliance, and efficiency in the energy sector by leveraging advanced technologies and skilled expertise.",
    image: HeroImage8,
  },
  {
    title: "Energy Solutions",
    description:
      "Our energy solutions cater to both renewable and non-renewable sectors, promoting sustainable practices and efficient resource utilization. We develop solar and wind energy projects, along with conventional power generation facilities. Our energy consulting services focus on optimizing energy consumption, reducing costs, and implementing environmentally friendly strategies to meet global energy demands.",
    image: HeroImage9,
  },
  {
    title: "Consultancy",
    description:
      "We provide expert consultancy services to support businesses across industries in achieving their goals. Our services include project feasibility analysis, risk management, operational improvement, and regulatory compliance. We work closely with clients to develop tailored solutions that align with their strategic objectives, enabling them to maximize efficiency and growth while mitigating potential risks.",
    image: HeroImage10,
  },
  {
    title: "Agriculture",
    description:
      "Our agricultural services focus on enhancing productivity and sustainability within the farming industry. We offer consultancy for crop management, soil improvement, and supply chain optimization, helping farmers and agribusinesses achieve efficient resource use and increase yield. Our services also include modern agricultural techniques and equipment to promote sustainable farming practices.",
    image: HeroImage11,
  },
  {
    title: "Automobile Services",
    description:
      "Our automobile services encompass comprehensive fleet management, vehicle maintenance, and repair. We support businesses in optimizing their transportation logistics, ensuring vehicles are maintained for maximum efficiency and minimal downtime. Our team also offers consultancy for automotive supply chain management, enhancing operational efficiency and reducing costs.",
    image: HeroImage12,
  },
];

const CoreServices = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 py-16 flex flex-col gap-12 w-full bg-white">
      {servicesData.map((service, index) => (
        <motion.div
          key={index}
          className={`flex flex-col md:flex-row items-start gap-8 md:gap-8 w-full mb-8 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="w-full md:w-1/2 h-64 md:h-72 lg:h-80 shadow-2xl overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover "
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-xl lg:text-2xl font-bold mb-2 text-mavlin-blue">
              {service.title}
            </h3>
            <p className="text-left font-karla">{service.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CoreServices;
