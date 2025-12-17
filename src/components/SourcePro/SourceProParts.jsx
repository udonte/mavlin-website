import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiPackage,
  FiSettings,
  FiShield,
  FiClock,
  FiGlobe,
  FiTool,
  FiCpu,
} from "react-icons/fi";
import { FaCar, FaTools } from "react-icons/fa";

// Import parts images - ensure these are high-quality images
import EngineParts from "../../assets/images/SourcePro/parts/135iEngineControlModuleBMW.png";
import BrakeSystem from "../../assets/images/SourcePro/parts/brake.jpg";
import Suspension from "../../assets/images/SourcePro/parts/AirSuspensionCompressorPumpBenz.png";
import Transmission from "../../assets/images/SourcePro/parts/ElectronicControlUnitBMW.png";
import Electronics from "../../assets/images/SourcePro/parts/DigitalInstrumentClusterBenz.png";
import Interior from "../../assets/images/SourcePro/parts/CommandOnlineHeadUnit2020C63SSedanBenz.png";
import Exterior from "../../assets/images/SourcePro/parts/HeadlightAssemblyBMW.png";
import CoolingSystem from "../../assets/images/SourcePro/parts/RadioComandHeadUnitBenz.png";
import Alternator from "../../assets/images/SourcePro/parts/alternator.png";

const partsCategories = [
  {
    id: 1,
    title: "Engine & Powertrain",
    description:
      "Complete engine assemblies, turbochargers, fuel injection systems, and all critical powertrain components.",
    image: EngineParts,
    icon: <FiSettings className="text-2xl" />,
    color: "from-red-600/20 to-red-900/20",
    border: "border-red-500/30",
    parts: ["Turbochargers", "Fuel Pumps", "ECU Modules", "Timing Chains"],
    brands: ["Mercedes-Benz", "BMW"],
  },
  {
    id: 2,
    title: "Brake & Safety Systems",
    description:
      "High-performance brake systems, ABS modules, sensors, and complete safety system components.",
    image: BrakeSystem,
    icon: <FaCar className="text-2xl" />,
    color: "from-orange-600/20 to-orange-900/20",
    border: "border-orange-500/30",
    parts: ["Brembo Calipers", "ABS Modules", "Brake Discs", "Sensors"],
    brands: ["BMW"],
  },
  {
    id: 3,
    title: "Suspension & Chassis",
    description:
      "Air suspension systems, adaptive dampers, control arms, and chassis reinforcement components.",
    image: Suspension,
    icon: <FiTool className="text-2xl" />,
    color: "from-amber-600/20 to-amber-900/20",
    border: "border-amber-500/30",
    parts: ["Air Struts", "Control Arms", "Bushings", "Stabilizer Bars"],
    brands: ["Mercedes-Benz"],
  },
  {
    id: 4,
    title: "Transmission Systems",
    description:
      "ZF automatic transmissions, clutch assemblies, mechatronics units, and transfer cases.",
    image: Transmission,
    icon: <FiCpu className="text-2xl" />,
    color: "from-green-600/20 to-green-900/20",
    border: "border-green-500/30",
    parts: ["Transmission Kits", "Mechatronics", "Torque Converters", "Seals"],
    brands: ["BMW"],
  },
  {
    id: 5,
    title: "Electronics & Modules",
    description:
      "Body control modules, infotainment systems, lighting control units, and sensor arrays.",
    image: Electronics,
    icon: <FiCpu className="text-2xl" />,
    color: "from-blue-600/20 to-blue-900/20",
    border: "border-blue-500/30",
    parts: ["BCM Modules", "Lighting Units", "Sensors", "Wiring Harnesses"],
    brands: ["Mercedes-Benz"],
  },
  {
    id: 6,
    title: "Interior Components",
    description:
      "Dashboard assemblies, seat mechanisms, climate control systems, and trim components.",
    image: Interior,
    icon: <FiPackage className="text-2xl" />,
    color: "from-indigo-600/20 to-indigo-900/20",
    border: "border-indigo-500/30",
    parts: ["Seat Motors", "Dashboard Panels", "AC Systems", "Wood Trim"],
    brands: ["Sedan", "Mercedes-Benz"],
  },
  {
    id: 7,
    title: "Exterior Body Parts",
    description:
      "Factory body panels, lighting assemblies, grilles, and aerodynamic components.",
    image: Exterior,
    icon: <FaCar className="text-2xl" />,
    color: "from-purple-600/20 to-purple-900/20",
    border: "border-purple-500/30",
    parts: ["Headlight Assemblies", "Body Panels", "Grilles", "Mirrors"],
    brands: ["BMW"],
  },
  {
    id: 8,
    title: "Cooling & Climate",
    description:
      "Radiator assemblies, AC compressors, condenser units, and complete climate systems.",
    image: CoolingSystem,
    icon: <FiSettings className="text-2xl" />,
    color: "from-cyan-600/20 to-cyan-900/20",
    border: "border-cyan-500/30",
    parts: ["Radiators", "AC Compressors", "Condensers", "Fans"],
    brands: ["Mercedes-Benz"],
  },
  {
    id: 9,
    title: "Altenating Systems",
    description: "Aternating systems and complete condenser units.",
    image: Alternator,
    icon: <FiSettings className="text-2xl" />,
    color: "from-cyan-600/20 to-cyan-900/20",
    border: "border-cyan-500/30",
    parts: ["Alternators", "Condensers"],
    brands: ["Mercedes-Benz"],
  },
];

const guarantees = [
  {
    title: "100% Authentic",
    description: "Direct from manufacturers or authorized suppliers only",
    icon: <FiCheckCircle />,
    color: "text-green-400",
  },
  {
    title: "12-Point Verification",
    description: "Thorough inspection before delivery to ensure compatibility",
    icon: <FiShield />,
    color: "text-blue-400",
  },
  {
    title: "Fast Sourcing",
    description: "Average 7-14 day turnaround for rare parts",
    icon: <FiClock />,
    color: "text-amber-400",
  },
  {
    title: "Global Network",
    description: "Access to suppliers across Europe, US, and Asia",
    icon: <FiGlobe />,
    color: "text-purple-400",
  },
];

const SourceProParts = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-b from-gray-950 to-black overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 xl:px-24 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <FaTools className="text-blue-400 text-xl" />
            <span className="text-blue-400 font-semibold text-sm tracking-wider">
              PRECISION PARTS
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-montserrat">
            Premium Parts for{" "}
            <span className="text-blue-400">Peak Performance</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We specialize in sourcing genuine Mercedes-Benz and BMW components
            that maintain your vehicle performance, safety, and resale value.
          </p>
        </motion.div>

        {/* Parts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {partsCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <div
                className={`h-full bg-gradient-to-br ${category.color} backdrop-blur-sm rounded-2xl border ${category.border} overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-black/30`}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-contain bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${category.image})`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div
                      className={`p-2 rounded-lg ${category.color} border ${category.border} backdrop-blur-sm`}
                    >
                      {category.icon}
                    </div>
                  </div>

                  {/* Brand Badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {category.brands.map((brand, idx) => (
                      <div
                        key={idx}
                        className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-xs text-white"
                      >
                        {brand}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {category.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4">
                    {category.description}
                  </p>

                  {/* Parts List */}
                  <div className="space-y-2">
                    <div className="text-white/70 text-xs font-medium">
                      Common Components:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.parts.map((part, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 border border-white/10"
                        >
                          {part}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Guarantee Content */}
              <div>
                <div className="inline-flex items-center gap-2 mb-6">
                  <FiShield className="text-2xl text-blue-400" />
                  <span className="text-blue-400 font-semibold text-sm tracking-wider">
                    OUR GUARANTEE
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-6">
                  Why <span className="text-blue-400">Genuine Parts</span>{" "}
                  Matter
                </h3>

                <p className="text-gray-300 mb-8 leading-relaxed">
                  Using authentic manufacturer parts protects your investment.
                  Counterfeit or aftermarket components can compromise vehicle
                  safety, performance, and significantly reduce resale value.
                </p>

                {/* Guarantee Points */}
                <div className="space-y-4">
                  {guarantees.map((guarantee, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`mt-1 ${guarantee.color}`}>
                        {guarantee.icon}
                      </div>
                      <div>
                        <div className="text-white font-semibold">
                          {guarantee.title}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {guarantee.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Comparison Table */}
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-white/10 p-2 lg:p-6">
                <h4 className="text-xl font-bold text-white mb-6 text-center">
                  Genuine vs. Alternatives
                </h4>

                <div className="overflow-hidden rounded-lg">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-black/50">
                        <th className="text-left p-2 text-white text-xs md:text-base font-semibold">
                          Feature
                        </th>
                        <th className="p-2 text-green-400 font-semibold text-xs md:text-base">
                          Genuine Parts
                        </th>
                        <th className="p-2 text-red-400 font-semibold text-xs md:text-base">
                          Aftermarket
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          "Warranty Coverage",
                          "✓ Full Manufacturer",
                          "✗ Limited",
                        ],
                        [
                          "Performance Match",
                          "✓ 100% Compatible",
                          "✗ Variable",
                        ],
                        ["Safety Standards", "✓ Certified", "✗ Not Guaranteed"],
                        ["Resale Value", "✓ Maintained", "✗ Reduced"],
                        ["Longevity", "✓ OEM Quality", "✗ Inconsistent"],
                        [
                          "Installation Fit",
                          "✓ Perfect Fit",
                          "✗ May Require Mods",
                        ],
                      ].map(([feature, genuine, aftermarket], idx) => (
                        <tr key={idx} className="border-t border-white/10">
                          <td className="p-2 text-gray-300 text-xs md:text-base">
                            {feature}
                          </td>
                          <td className="p-2 text-center text-green-400 font-medium text-xs md:text-base">
                            {genuine}
                          </td>
                          <td className="p-2 text-center text-red-400 font-medium text-xs md:text-base">
                            {aftermarket}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url(${Alternator})`,
              backgroundSize: "cover",
            }}
          />

          <div className="relative z-10 p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Cannot Find Your Part?
                </h3>
                <p className="text-gray-300 max-w-2xl">
                  Send us the part number or describe your issue. Our experts
                  will locate and verify the exact component you need,
                  regardless of rarity or availability.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300">
                  Reachout to Us
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SourceProParts;
