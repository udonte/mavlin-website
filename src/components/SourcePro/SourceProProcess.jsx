import { motion } from "framer-motion";
import {
  FiMessageSquare,
  FiGlobe,
  FiCheckCircle,
  FiTruck,
  FiShield,
} from "react-icons/fi";
import { MdPrecisionManufacturing } from "react-icons/md";

// Import car parts images - make sure these are high-quality
import ProcessImage1 from "../../assets/images/SourcePro/process/engine-parts.jpg";
import ProcessImage2 from "../../assets/images/SourcePro/process/bmw-interior.jpg";
import ProcessImage3 from "../../assets/images/SourcePro/process/mercedes-parts.jpg";
import ProcessImage4 from "../../assets/images/SourcePro/process/logistics.jpg";
import ProcessImage5 from "../../assets/images/SourcePro/process/quality-check.jpg";

const processSteps = [
  {
    number: "01",
    title: "Expert Consultation",
    description:
      "Our specialists analyze your vehicle's needs with precision diagnostics to ensure 100% part compatibility.",
    icon: <FiMessageSquare className="text-2xl" />,
    image: ProcessImage1,
    parts: ["ECU Modules", "Suspension Components", "Engine Parts"],
    color: "from-blue-600/20 to-blue-900/20",
    border: "border-blue-500/30",
  },
  {
    number: "02",
    title: "Global Sourcing",
    description:
      "Direct access to Mercedes-Benz and BMW manufacturers worldwide for rare, discontinued, or specialized components.",
    icon: <FiGlobe className="text-2xl" />,
    image: ProcessImage2,
    parts: ["Transmission Systems", "Body Panels", "Interior Trim"],
    color: "from-gray-800/20 to-gray-900/20",
    border: "border-gray-600/30",
  },
  {
    number: "03",
    title: "Manufacturer Interface",
    description:
      "We act as your direct conduit to OEM suppliers, bypassing conventional supply chain limitations.",
    icon: <MdPrecisionManufacturing className="text-2xl" />,
    image: ProcessImage3,
    parts: ["Brake Systems", "Lighting Assemblies", "Electronic Modules"],
    color: "from-cyan-600/20 to-blue-800/20",
    border: "border-cyan-500/30",
  },
  {
    number: "04",
    title: "Premium Logistics",
    description:
      "Specialized handling and expedited shipping with real-time tracking from factory to your location.",
    icon: <FiTruck className="text-2xl" />,
    image: ProcessImage4,
    parts: ["Air Freight", "Customs Cleared", "Secure Packaging"],
    color: "from-emerald-600/20 to-teal-800/20",
    border: "border-emerald-500/30",
  },
  {
    number: "05",
    title: "Verification & Delivery",
    description:
      "Final quality inspection and compatibility verification before handover. Guaranteed authenticity.",
    icon: <FiCheckCircle className="text-2xl" />,
    image: ProcessImage5,
    parts: ["Quality Certified", "Warranty Included", "Installation Ready"],
    color: "from-violet-600/20 to-purple-800/20",
    border: "border-violet-500/30",
  },
];

const SourceProProcess = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="process"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-16 xl:px-24 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <span className="text-blue-400 font-semibold text-sm tracking-wider">
              OUR EXCLUSIVE PROCESS
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-montserrat">
            Your Direct Line to{" "}
            <span className="text-blue-400">Manufacturers</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A meticulous 5-step journey ensuring every Mercedes-Benz and BMW
            part reaches you with guaranteed authenticity, speed, and precision.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 via-blue-500/50 to-blue-500/30 transform -translate-x-1/2" />

          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className={`relative mb-16 lg:mb-24 last:mb-0 ${
                index % 2 === 0
                  ? "lg:pr-1/2 lg:pl-0 lg:text-right"
                  : "lg:pl-1/2 lg:pr-0"
              }`}
            >
              {/* Step Indicator */}
              <div
                className={`absolute hidden lg:block ${
                  index % 2 === 0
                    ? "left-1/2 -translate-x-1/2 lg:left-auto lg:right-1/2 lg:translate-x-6"
                    : "left-1/2 -translate-x-1/2 lg:left-1/2 lg:translate-x-6"
                } top-0 z-20`}
              >
                <div
                  className={`w-14 h-14 rounded-full ${step.color} backdrop-blur-sm border ${step.border} flex items-center justify-center`}
                >
                  <div className="text-2xl font-bold text-white">
                    {step.number}
                  </div>
                </div>
              </div>

              <div className="relative lg:max-w-lg mx-auto lg:mx-0">
                {/* Content Container */}
                <div
                  className={`bg-gradient-to-br ${
                    step.color
                  } backdrop-blur-sm rounded-2xl border ${
                    step.border
                  } p-8 shadow-2xl ${
                    index % 2 === 0 ? "lg:mr-12" : "lg:ml-12"
                  }`}
                >
                  {/* Step Header */}
                  <div
                    className={`flex items-center gap-4 mb-6 ${
                      index % 2 === 0 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`p-3 rounded-xl ${step.color} border ${step.border}`}
                    >
                      {step.icon}
                    </div>
                    <div
                      className={`flex-1 ${
                        index % 2 === 0 ? "lg:text-right" : ""
                      }`}
                    >
                      <div className="text-blue-400 font-semibold text-sm mb-1">
                        Step {step.number}
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Image Grid */}
                  <div className="mb-6">
                    <div className="relative h-48 lg:h-56 rounded-xl overflow-hidden group">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${step.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                          {index % 2 === 0 ? "Mercedes-Benz" : "BMW"} Parts
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Parts Examples */}
                  <div className="pt-6 border-t border-white/10">
                    <div className="text-white font-semibold mb-3">
                      Sample Components:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {step.parts.map((part, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10"
                        >
                          {part}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Node for Mobile */}
                <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2 -top-8 z-10">
                  <div
                    className={`w-12 h-12 rounded-full ${step.color} backdrop-blur-sm border ${step.border} flex items-center justify-center`}
                  >
                    <div className="text-xl font-bold text-white">
                      {step.number}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Assurance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 lg:mt-32"
        >
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-3 justify-center lg:justify-start mb-4">
                  <FiShield className="text-3xl text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">
                    Our Guarantee
                  </h3>
                </div>
                <p className="text-gray-300 max-w-2xl">
                  Every component undergoes 12-point verification. If it is not
                  100% authentic and compatible, we will source the correct part
                  at no additional cost to you.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300">
                  Start Your Order
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SourceProProcess;
