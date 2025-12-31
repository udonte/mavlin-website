import { useState } from "react";
import Contact from "../../assets/images/MavlinFarms/fromFarm2.png"; // Add your background image here
import FormImage from "../../assets/images/MavlinFarms/fromFarm3.png"; // Add your background image here
import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const ContactFarm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    location: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Email is invalid";
    if (!formData.subject) formErrors.subject = "Subject is required";
    if (!formData.message) formErrors.message = "Message is required";
    if (!formData.location) formErrors.location = "location is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form data:", formData);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        location: "",
      });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section id="farm-contact-form">
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${Contact})`,
        }}
      >
        {/* Blue overlay */}
        <div className="absolute inset-0 bg-mavlin-farms-green bg-mav opacity-90"></div>

        {/* Footer content */}
        <div className="relative z-10 min-h-screen w-full">
          <div className="flex flex-col md:flex-row gap-8 px-8 py-8 lg:px-24 lg:py-24">
            {/* Form Section */}
            <div className="md:w-2/3">
              <div className="mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold font-montserratAlternates text-white">
                  CONTACT US
                </h2>
                <p className="text-mavlin-farms-orange text-sm tracking-widest mb-1">
                  SUBMIT INQUIRY
                </p>
              </div>
              {submitted && (
                <p className="text-white mb-4">
                  Thank you! Your message has been sent.
                </p>
              )}
              <form onSubmit={handleSubmit} noValidate>
                {/* name and email */}
                <div className="flex flex-col md:flex-row items-center gap-4 mb-2 w-full">
                  <div className="w-full">
                    <label htmlFor="name" className="block text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-gray-300 py-2 text-white focus:outline-none focus:border-mavlin-farms-orange"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div className="w-full">
                    <label htmlFor="email" className="block text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-gray-300 py-2 text-white focus:outline-none focus:border-mavlin-farms-orange"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* location and subject */}
                <div className="flex flex-col md:flex-row items-center gap-4 mb-2 w-full">
                  <div className="w-full">
                    <label htmlFor="location" className="block text-white">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-gray-300 py-2 text-white focus:outline-none focus:border-mavlin-farms-orange"
                    />
                    {errors.location && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.location}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <label htmlFor="subject" className="block text-white">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-gray-300 py-2 text-white focus:outline-none focus:border-mavlin-farms-orange"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full bg-transparent border-b border-gray-300 py-2 text-white focus:outline-none focus:border-mavlin-farms-orange resize-none"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className=" bg-mavlin-farms-orange text-mavlin-farms-green py-2 px-4  hover:bg-mavlin-farms-orange/90 transition-colors duration-300"
                >
                  SUBMIT
                </button>
              </form>
            </div>

            {/* Image Section */}
            <div className="md:w-1/3 hidden md:flex items-center justify-center p-6 h-500px">
              <img
                src={FormImage}
                alt="Office Environment"
                className="w-full h-full rounded object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* map */}
      <div className="px-8 py-8 lg:px-24 lg:py-24 flex flex-col md:flex-row items-start gap-8">
        <div className="w-full md:flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.9773316615665!2d3.3843684415000856!3d6.649731304601695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b937d2adb7203%3A0x8234f96a8a708de7!2s15%20Lagos%20-%20Ibadan%20Expy%2C%20Ojodu%2C%20Agege%20102109%2C%20Ogun%20State!5e0!3m2!1sen!2sng!4v1731856450445!5m2!1sen!2sng"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Our Location"
          ></iframe>
        </div>

        {/* address */}
        <div className="flex flex-col items-start justify-start gap-4 ">
          <div className="w-[400px] text-mavlin-farms-green p-8 border-l-4 border-mavlin-farms-orange shadow h-[200px]">
            <p className="text-[10px] text-gray-600 mb-4">NIGERIA</p>
            <p className=" font-montserratAlternates font-bold ">
              KM 15, Lagos - Ibadan Expressway, <br />
              Along Odofin Oke - Oguntola Village, <br /> Ogun State
            </p>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <div className="flex flex-col items-start gap-8">
              <div className="flex items-start gap-2 rounded">
                <div className="bg-mavlin-farms-orange text-white w-fit p-2 text-3xl">
                  <FaPhoneAlt />
                </div>
                <div className="text-mavlin-farms-green ">
                  <p className="text-[8px]">COMPANY PHONES</p>
                  <p className="text-sm font-medium mt-1">+1587 732 0245</p>
                  <p className="text-sm font-medium">+2349167360995</p>
                </div>
              </div>
              <div className="flex items-start gap-2 rounded">
                <div className="text-white bg-mavlin-farms-green w-fit p-2 text-3xl">
                  <IoChatbubbleEllipsesOutline />
                </div>
                <div className="text-mavlin-farms-green ">
                  <p className="text-[8px]">MAVLIN EMAILS</p>
                  <p className="text-sm font-medium mt-1">info@sourcepro.com</p>
                  <p className="text-sm font-medium">mavlin@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFarm;
