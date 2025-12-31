import { motion } from "framer-motion";
import { FiPhone, FiMail, FiClock } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import SourceProLogo from "../../assets/images/SourcePro/SourcePro-bg.png";

const SourceProFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About SourcePro", href: "#about" },
        { name: "Our Process", href: "#process" },
        { name: "Meet The Team", href: "#why-us" },
        { name: "Mercedes Parts", href: "#services" },
        { name: "BMW Parts", href: "#services" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Expert Consultation", href: "#contact" },
        { name: "FAQ", href: "#faq" },
        { name: "Bulk Orders", href: "#contact" },
      ],
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-950 to-black border-t border-white/10 font-grotesk">
      {/* Top Pattern */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="container mx-auto px-6 lg:px-16 xl:px-24 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="mb-8">
              {/* Logo */}
              <HashLink
                smooth
                to="/sourcepro/#hero"
                className="flex items-center"
              >
                <div className="relative">
                  <div className="w-32 md:w-40 md:h-10 flex">
                    <img src={SourceProLogo} alt="sourcepro" />
                  </div>
                </div>
              </HashLink>

              <p className="text-gray-400 mb-8 max-w-md">
                Premium parts procurement for Mercedes-Benz and BMW vehicles in
                Nigeria. Direct manufacturer access, guaranteed authenticity,
                and expert consultation.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FiPhone className="text-mavlin-sourcepro-blue mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Call Us</div>
                  <div className="text-gray-400">
                    +1587 732 0245, +234 916 736 0995
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiMail className="text-mavlin-sourcepro-blue mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-gray-400">info@sourcepro.com</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiClock className="text-mavlin-sourcepro-blue mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Business Hours</div>
                  <div className="text-gray-400">
                    Mon-Fri: 8AM-6PM | Sat: 9AM-4PM
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {footerLinks.map((column, colIndex) => (
                <motion.div
                  key={column.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: colIndex * 0.1 }}
                >
                  <h3 className="text-white font-semibold mb-4 text-lg font-montserrat">
                    {column.title}
                  </h3>
                  <ul className="space-y-3">
                    {column.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <HashLink
                          smooth
                          to={link.href}
                          className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                        >
                          {link.name}
                        </HashLink>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className=""
          >
            <HashLink
              smooth
              to="/sourcepro/#hero"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
            >
              <span>Back to Top</span>
              <span className="text-lg">↑</span>
            </HashLink>
          </motion.div>
          {/* Social Links & Copyright */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-right"
          >
            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              <p>© {currentYear} SourcePro Automobiles. All rights reserved.</p>
              <p className="mt-1">Luxury car parts procurement specialists.</p>
            </div>
            <div className="flex items-center lg:justify-end w-full">
              <Link
                to={"/"}
                className="bg-mavlin-sourcepro-blue hover:bg-blue-600 text-white font-montserrat px-4 py-2 flex items-center gap-2 mt-4 rounded-2xl w-fit font-bold"
              >
                <p>Mavlin Website</p>
                <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/30 via-blue-500/50 to-blue-500/30" />
    </footer>
  );
};

export default SourceProFooter;
