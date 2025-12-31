import { motion } from "framer-motion";
import {
  FiPhoneCall,
  FiMail,
  FiClock,
  FiMapPin,
  FiUpload,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

// Import contact/support images
import ContactHero from "../../assets/images/SourcePro/why/bmw-logo.png";
import PartsCatalog from "../../assets/images/SourcePro/why/Mercedes-Benz-Logo.png";
import SupportTeam from "../../assets/images/SourcePro/why/Mercedes-Benz-Logo.png";

const SourceProContact = () => {
  const contactInfo = [
    {
      icon: <FiPhoneCall className="text-2xl" />,
      title: "Call Us",
      detail: "+1587 732 0245",
      subDetail: "Available 8AM - 6PM, Mon-Sat",
      color: "from-blue-600/20 to-blue-900/20",
      action: "tel:+15877320245",
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp",
      detail: "+234 916 736 0959",
      subDetail: "Fast response, send images",
      color: "from-green-600/20 to-green-900/20",
      action: "https://wa.me/2349167360959",
    },
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email",
      detail: "info@sourcepro.com",
      subDetail: "24-hour response time",
      color: "from-red-600/20 to-red-900/20",
      action: "mailto:info@sourcepro.com",
    },
  ];

  const addresses = [
    {
      city: "Lagos Office",
      location: "The Sage Centre for Leadership Excellence",
      address:
        "Eden Heights, 6 Elsie Femi Pearce Street Off Adeola Odeku St. Victoria Island, Lagos",
      color: "from-blue-600/20 to-blue-900/20",
    },
    {
      city: "Abuja Office",
      location: "Topnotch Advisory",
      address: "No 15 NPA Quarters, off IBB Way, Maitama, FCT Abuja",
      color: "from-purple-600/20 to-purple-900/20",
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Emergency Only" },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-gray-950 to-black overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 15, 30, 0.95), rgba(10, 15, 30, 0.98)), url(${ContactHero})`,
        }}
      />

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
            <FiMessageSquare className="text-blue-400 text-xl" />
            <span className="text-blue-400 font-semibold text-sm tracking-wider">
              START YOUR ORDER
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-montserrat">
            Initiate Your{" "}
            <span className="text-blue-400">Sourcing Request</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Provide details about your Mercedes or BMW part requirement. Our
            experts will verify, source, and provide a quote within 24 hours.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.action}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="block"
                >
                  <div
                    className={`h-full bg-gradient-to-br ${info.color} backdrop-blur-sm rounded-xl border border-white/10 p-6 transition-all duration-300 hover:border-blue-500/30 hover:shadow-xl`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-lg ${info.color
                          .split(" ")[0]
                          .replace("from-", "bg-")} border border-white/10`}
                      >
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold mb-1">
                          {info.title}
                        </div>
                        <div className="text-lg text-blue-300 font-medium mb-1">
                          {info.detail}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {info.subDetail}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Address Section */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FiMapPin className="text-blue-400" />
                Our Offices
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {addresses.map((address, index) => (
                  <motion.a
                    key={index}
                    href={address.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    className="block"
                  >
                    <div
                      className={`h-full bg-gradient-to-br ${address.color} backdrop-blur-sm rounded-xl border border-white/10 p-6 transition-all duration-300 hover:border-blue-500/30 hover:shadow-xl`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-lg ${address.color
                            .split(" ")[0]
                            .replace(
                              "from-",
                              "bg-"
                            )} border border-white/10 flex-shrink-0`}
                        >
                          <FiMapPin className="text-xl" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-bold text-lg mb-2">
                            {address.city}
                          </div>
                          <div className="text-blue-300 font-medium mb-2">
                            {address.location}
                          </div>
                          <div className="text-gray-300">{address.address}</div>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:w-1/2"
            >
              <div className="h-full bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <FiClock className="text-amber-400 text-xl" />
                  <h3 className="text-xl font-bold text-white">
                    Business Hours
                  </h3>
                </div>

                <div className="space-y-4">
                  {businessHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 border-b border-white/10 last:border-0"
                    >
                      <span className="text-gray-300 font-medium">
                        {schedule.day}
                      </span>
                      <span
                        className={`font-semibold ${
                          index === 2 ? "text-red-300" : "text-green-300"
                        }`}
                      >
                        {schedule.hours}
                      </span>
                    </div>
                  ))}

                  <div className="pt-4 mt-4 border-t border-white/10">
                    <p className="text-gray-400 text-sm">
                      <span className="font-semibold text-amber-400">
                        Note:
                      </span>{" "}
                      For emergency requests outside business hours, please call
                      or WhatsApp for immediate assistance.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Parts Request */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="lg:w-1/2"
            >
              <div className="relative h-full overflow-hidden rounded-xl group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${PartsCatalog})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <FiUpload className="text-white text-xl" />
                      <h3 className="text-xl font-bold text-white">
                        Looking To Get a Spare Part?
                      </h3>
                    </div>

                    <p className="text-gray-300 mb-6">
                      Upload images or part descriptions to our WhatsApp or send
                      as an email for fastest processing.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="text-white/80 text-sm">
                      What to include:
                    </div>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li className="flex items-center gap-2">
                        <FiCheckCircle className="text-green-400 flex-shrink-0" />
                        Vehicle make, model, and year
                      </li>
                      <li className="flex items-center gap-2">
                        <FiCheckCircle className="text-green-400 flex-shrink-0" />
                        Clear photos of the part or issue
                      </li>
                      <li className="flex items-center gap-2">
                        <FiCheckCircle className="text-green-400 flex-shrink-0" />
                        Part number (if available)
                      </li>
                      <li className="flex items-center gap-2">
                        <FiCheckCircle className="text-green-400 flex-shrink-0" />
                        Description of the problem
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Support Assurance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url(${SupportTeam})`,
                backgroundSize: "cover",
              }}
            />

            <div className="relative z-10 p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Expert Support Every Step of the Way
                  </h3>
                  <p className="text-gray-300">
                    From initial consultation to final delivery, our specialists
                    guide you through the entire sourcing process. We handle
                    manufacturer communication, logistics, and verification so
                    you can focus on what matters.
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mb-4">
                    <FiCheckCircle className="text-white text-2xl" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    24-Hour
                  </div>
                  <div className="text-gray-300">Initial Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SourceProContact;
