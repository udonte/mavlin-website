import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiStar,
  FiUsers,
  FiAward,
  FiGlobe,
  FiShield,
  FiClock,
} from "react-icons/fi";
import { FaTools } from "react-icons/fa";

import Workshop from "../../assets/images/SourcePro/why/Mercedes-Benz-Logo.png";
import MercedesLogo from "../../assets/images/SourcePro/why/Mercedes-Benz-Logo.png";
import BMWLogo from "../../assets/images/SourcePro/why/bmw-logo.png";

const valueProps = [
  {
    icon: <FiClock className="text-2xl" />,
    title: "Speed",
    description: "Average 7-14 day turnaround for even the rarest parts",
    metric: "50% Faster",
    color: "from-blue-600/20 to-blue-900/20",
  },
  {
    icon: <FiCheckCircle className="text-2xl" />,
    title: "Accuracy",
    description: "Zero compatibility errors in our history",
    metric: "100% Match",
    color: "from-green-600/20 to-green-900/20",
  },
  {
    icon: <FiGlobe className="text-2xl" />,
    title: "Global Reach",
    description: "Direct connections to suppliers in 12+ countries",
    metric: "12 Countries",
    color: "from-purple-600/20 to-purple-900/20",
  },
  {
    icon: <FiShield className="text-2xl" />,
    title: "Guarantee",
    description: "Full warranty on every part we supply",
    metric: "100% Warranty",
    color: "from-amber-600/20 to-amber-900/20",
  },
];

const testimonials = [
  {
    quote:
      "SourcePro found a discontinued transmission component for my 2015 S-Class that no other supplier in Nigeria could locate. Their expertise saved my vehicle.",
    author: "Michael Adebayo",
    vehicle: "Mercedes-Benz S550",
    rating: 5,
  },
  {
    quote:
      "As a BMW specialist workshop, we rely on SourcePro for genuine parts. Their verification process eliminates compatibility issues that plague our industry.",
    author: "Premium Auto Works",
    role: "Authorized BMW Service Center",
    rating: 4,
  },
  {
    quote:
      "The speed and accuracy of their service is unmatched. What takes others weeks, SourcePro delivers in days with guaranteed authenticity.",
    author: "Chioma Nwosu",
    vehicle: "BMW X5 M",
    rating: 5,
  },
];

const brandPartners = [
  { name: "Mercedes-Benz", logo: MercedesLogo, type: "OEM Manufacturer" },
  { name: "BMW", logo: BMWLogo, type: "OEM Manufacturer" },
];

const SourceProWhy = () => {
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

  return (
    <section
      id="why-us"
      className="relative py-24 bg-gradient-to-b from-black to-gray-950 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <FiStar className="text-blue-400 text-xl" />
            <span className="text-blue-400 font-semibold text-sm tracking-wider">
              WHY SOURCEPRO
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-montserrat">
            The Difference is in{" "}
            <span className="text-blue-400">Our Reliability</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We combine deep technical expertise with unparalleled global access
            to deliver what others cannot: genuine parts, guaranteed
            compatibility, and mission-critical speed.
          </p>
        </motion.div>

        {/* Value Propositions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div
                className={`h-full bg-gradient-to-br ${prop.color} backdrop-blur-sm rounded-2xl border border-white/10 p-6 transition-all duration-300 group-hover:border-blue-500/30 group-hover:shadow-2xl`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    {prop.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">
                      {prop.metric}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {prop.title}
                </h3>
                <p className="text-gray-300">{prop.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-10">
            <FiUsers className="text-blue-400 text-2xl" />
            <h3 className="text-3xl font-bold text-white">
              Trusted by Luxury Car Owners
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 group-hover:border-blue-500/30">
                  {/* Content */}
                  <div className="p-6">
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FiStar
                          key={i}
                          className="text-amber-400 fill-current"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-300 italic mb-6 leading-relaxed">
                      {testimonial.quote}
                    </p>

                    {/* Author Info */}
                    <div className="pt-4 border-t border-white/10">
                      <div className="font-bold text-white">
                        {testimonial.author}
                      </div>
                      {testimonial.vehicle && (
                        <div className="text-blue-300 text-sm">
                          {testimonial.vehicle}
                        </div>
                      )}
                      {testimonial.role && (
                        <div className="text-gray-400 text-sm">
                          {testimonial.role}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Brand Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <FiAward className="text-blue-400 text-xl" />
              <span className="text-blue-400 font-semibold text-sm tracking-wider">
                OFFICIAL PARTNERSHIPS
              </span>
            </div>
            <h3 className="text-3xl font-bold text-white font-montserrat">
              Direct Access to Premium Brands
            </h3>
          </div>

          {/* Brands Grid */}
          <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
              {brandPartners.map((brand, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                    {/* Brand Logo */}
                    <div className="h-16 w-32 mb-4 flex items-center justify-center">
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="h-full w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>

                    <div className="text-center">
                      <div className="text-white font-semibold mb-1">
                        {brand.name}
                      </div>
                      <div className="text-gray-400 text-sm">{brand.type}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Partnership Note */}
            <div className="mt-12 text-center">
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our direct manufacturer relationships ensure access to the
                latest components, technical specifications, and production
                updates for Mercedes-Benz and BMW vehicles.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-2xl"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url(${Workshop})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="relative z-10 p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Ready to Experience the SourcePro Difference?
                </h3>
                <p className="text-gray-300 max-w-2xl">
                  Join hundreds of satisfied Mercedes and BMW owners who trust
                  us for genuine parts, expert consultation, and unparalleled
                  service.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <FaTools />
                    Car Part Consultation
                  </span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SourceProWhy;
