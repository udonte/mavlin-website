import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHelpCircle,
  FiPackage,
  FiTruck,
  FiShield,
  FiCreditCard,
  FiGlobe,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

// Import FAQ-related images
import FAQHero from "../../assets/images/SourcePro/why/Mercedes-Benz-Logo.png";
import WarrantyImage from "../../assets/images/SourcePro/why/Mercedes-Benz-Logo.png";
import ShippingImage from "../../assets/images/SourcePro/why/Mercedes-Benz-Logo.png";
import PaymentImage from "../../assets/images/SourcePro/why/Mercedes-Benz-Logo.png";

const faqCategories = [
  {
    id: "sourcing",
    title: "Parts Sourcing",
    icon: <FiPackage className="text-xl" />,
    questions: [
      {
        q: "How do you source parts that are unavailable in Nigeria?",
        a: "We maintain direct relationships with Mercedes-Benz and BMW manufacturers, authorized dealers, and specialized suppliers across Europe, USA, and Asia. Our network allows us to access even discontinued or rare components through official channels.",
        expanded: false,
      },
      {
        q: "Can you source parts for any Mercedes or BMW model?",
        a: "Yes, we cover all Mercedes-Benz and BMW models from classic models to the latest releases. Our database includes parts for AMG, M Performance, Maybach, Alpina, and other specialized variants.",
        expanded: false,
      },
      {
        q: "How do you verify part authenticity and compatibility?",
        a: "Every part undergoes our 12-point verification process including manufacturer part number validation, vehicle VIN cross-referencing, technical specification matching, and physical inspection upon arrival.",
        expanded: false,
      },
      {
        q: "What if you source the wrong part?",
        a: "If we supply an incorrect part due to our error, we will source the correct component at no additional cost and handle all return shipping. Our accuracy rate is 99.8% due to our detailed consultation process.",
        expanded: false,
      },
    ],
  },
  {
    id: "shipping",
    title: "Shipping & Logistics",
    icon: <FiTruck className="text-xl" />,
    questions: [
      {
        q: "How long does shipping take to Nigeria?",
        a: "Standard delivery: 7-14 business days. Priority shipping: 3-7 business days. Express emergency: 1-3 business days. Times vary based on part availability and shipping method selected.",
        expanded: false,
      },
      {
        q: "Do you handle customs clearance?",
        a: "Yes, we handle complete door-to-door service including customs clearance, duties, and local delivery coordination. You receive one consolidated price with no hidden fees.",
        expanded: false,
      },
      {
        q: "Can I track my order?",
        a: "Yes, you receive real-time tracking from factory pickup through international shipping to final delivery. Our portal provides 24/7 access to shipment status.",
        expanded: false,
      },
      {
        q: "What areas in Nigeria do you deliver to?",
        a: "We deliver nationwide. Major cities (Lagos, Abuja, Port Harcourt) have next-day delivery after customs clearance. Other locations typically take 2-3 additional days.",
        expanded: false,
      },
    ],
  },
  {
    id: "warranty",
    title: "Warranty & Support",
    icon: <FiShield className="text-xl" />,
    questions: [
      {
        q: "What warranty do you provide on parts?",
        a: "All parts come with a minimum 12-month warranty. Genuine manufacturer parts carry their original warranty (typically 24 months). We provide full warranty documentation.",
        expanded: false,
      },
      {
        q: "What if the part fails during warranty?",
        a: "We provide replacement or full refund at your option. Our warranty covers both parts and labor costs at any of our partnered workshops across Nigeria.",
        expanded: false,
      },
      {
        q: "Do you provide installation support?",
        a: "Yes, we can recommend certified workshops in your area or provide remote technical support for qualified mechanics. For complex installations, we offer expert guidance.",
        expanded: false,
      },
      {
        q: "What after-sales support do you offer?",
        a: "Dedicated support for 30 days post-installation, lifetime technical consultation for the part, and priority service for future orders. We maintain detailed records of all parts supplied to your vehicle.",
        expanded: false,
      },
    ],
  },
  {
    id: "payment",
    title: "Payment & Ordering",
    icon: <FiCreditCard className="text-xl" />,
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "Bank transfer, credit/debit cards, and corporate purchase orders. We also offer installment plans for orders above ₦500,000 through our financing partners.",
        expanded: false,
      },
      {
        q: "When do I pay for my order?",
        a: "50% deposit to initiate sourcing, 50% balance before shipment release. For corporate clients, we offer net-30 payment terms upon credit approval.",
        expanded: false,
      },
      {
        q: "Can I cancel or modify my order?",
        a: "Orders can be modified within 24 hours of placement. Cancellations after sourcing has begun may incur a 15% administrative fee. No cancellation fees if part hasn't been sourced.",
        expanded: false,
      },
      {
        q: "Do you offer bulk discounts for workshops?",
        a: "Yes, registered workshops and dealerships receive volume discounts, priority sourcing, and dedicated account management. Contact our corporate team for customized pricing.",
        expanded: false,
      },
    ],
  },
];

const SourceProFAQ = () => {
  const [activeCategory, setActiveCategory] = useState("sourcing");
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const toggleQuestion = (categoryId, questionIndex) => {
    const key = `${categoryId}-${questionIndex}`;
    setExpandedQuestions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const currentCategory = faqCategories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <section
      id="faq"
      className="relative py-24 bg-gradient-to-b from-black to-gray-950 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230ea5e9' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <FiHelpCircle className="text-blue-400 text-xl" />
            <span className="text-blue-400 font-semibold text-sm tracking-wider">
              QUESTIONS ANSWERED
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-montserrat">
            Frequently Asked <span className="text-blue-400">Questions</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about sourcing genuine Mercedes and BMW
            parts through our premium service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 space-y-2">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-blue-600/20 to-blue-900/20 border border-blue-500/30 text-white"
                      : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      activeCategory === category.id
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-white/5"
                    }`}
                  >
                    {category.icon}
                  </div>
                  <span className="font-medium text-left">
                    {category.title}
                  </span>
                </button>
              ))}

              {/* Support Card */}
              <div className="mt-8 p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-center">
                  <FiHelpCircle className="text-blue-400 text-3xl mx-auto mb-4" />
                  <h4 className="text-white font-semibold mb-2">
                    Need More Help?
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Cant find the answer you are looking for?
                  </p>
                  <button className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300">
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FAQ Content */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-white/10 p-6 lg:p-8">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-900/20 border border-blue-500/30">
                  {currentCategory.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {currentCategory.title}
                  </h3>
                  <p className="text-gray-400">
                    Common questions about {currentCategory.title.toLowerCase()}
                  </p>
                </div>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {currentCategory.questions.map((question, index) => {
                  const key = `${activeCategory}-${index}`;
                  const isExpanded = expandedQuestions[key] || false;

                  return (
                    <motion.div
                      key={index}
                      initial={false}
                      animate={{
                        backgroundColor: isExpanded
                          ? "rgba(30, 41, 59, 0.5)"
                          : "rgba(30, 41, 59, 0.3)",
                        borderColor: isExpanded
                          ? "rgba(59, 130, 246, 0.3)"
                          : "rgba(255, 255, 255, 0.1)",
                      }}
                      className="rounded-xl border backdrop-blur-sm overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleQuestion(activeCategory, index)}
                        className="w-full flex items-center justify-between p-6 text-left"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                              <span className="text-blue-400 font-semibold text-sm">
                                Q
                              </span>
                            </div>
                            <h4 className="text-lg font-semibold text-white">
                              {question.q}
                            </h4>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-4 text-blue-400"
                        >
                          ▼
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 pt-2 border-t border-white/10">
                              <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                  <span className="text-green-400 font-semibold text-sm">
                                    A
                                  </span>
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                  {question.a}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>

              {/* Category Image */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="relative rounded-xl overflow-hidden h-48">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${
                        activeCategory === "sourcing"
                          ? FAQHero
                          : activeCategory === "shipping"
                          ? ShippingImage
                          : activeCategory === "warranty"
                          ? WarrantyImage
                          : PaymentImage
                      })`,
                      backgroundSize: "cover",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center p-8">
                    <div className="max-w-md">
                      <h4 className="text-xl font-bold text-white mb-2">
                        Need specific help with{" "}
                        {currentCategory.title.toLowerCase()}?
                      </h4>
                      <p className="text-gray-300">
                        Our specialists are available to answer detailed
                        questions about your specific needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: <FiCheckCircle />,
                value: "99.8%",
                label: "Accuracy Rate",
                color: "text-green-400",
              },
              {
                icon: <FiClock />,
                value: "24h",
                label: "Response Time",
                color: "text-blue-400",
              },
              {
                icon: <FiGlobe />,
                value: "12+",
                label: "Countries Sourced",
                color: "text-purple-400",
              },
              {
                icon: <FiShield />,
                value: "100%",
                label: "Authenticity Guarantee",
                color: "text-amber-400",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center"
              >
                <div className={`text-3xl mb-2 ${stat.color}`}>{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SourceProFAQ;
