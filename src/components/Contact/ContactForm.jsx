import { useState } from "react";
import Contact from "../../assets/images/Contact/Form2.png"; // Add your background image here
import FormImage from "../../assets/images/Contact/Form2.png"; // Add your background image here

const ContactForm = () => {
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
    <section
      id="contact-form"
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${Contact})`,
      }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-mavlin-blue opacity-90"></div>

      {/* Footer content */}
      <div className="relative z-10 min-h-screen w-full">
        <div className="flex flex-col md:flex-row gap-8 px-8 py-8 lg:px-24 lg:py-24">
          {/* Form Section */}
          <div className="w-full md:w-2/3">
            <div className="mb-16">
              <>
                <p className="text-mavlin-gold text-sm tracking-widest mb-1">
                  SUBMIT INQUIRY
                </p>
                <p className="text-white font-arimo text-2xl md:text-3xl font-medium">
                  Get In Touch
                </p>
              </>
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
                    className="w-full bg-transparent border-b border-gray-300 py-2 text-white focus:outline-none focus:border-mavlin-gold"
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
                    className="w-full bg-transparent border-b border-gray-300 py-2 text-white focus:outline-none focus:border-mavlin-gold"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
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
                    className="w-full bg-transparent border-b border-gray-300 py-2 text-white focus:outline-none focus:border-mavlin-gold"
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
                    className="w-full bg-transparent border-b border-gray-300 py-2 text-white focus:outline-none focus:border-mavlin-gold"
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
                  className="w-full bg-transparent border-b border-gray-300 py-2 text-white focus:outline-none focus:border-mavlin-gold resize-none"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className=" bg-mavlin-gold text-mavlin-blue py-2 px-4  hover:bg-mavlin-gold/90 transition-colors duration-300"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/3 hidden md:flex items-center justify-center p-6 h-500px">
            <img
              src={FormImage}
              alt="Office Environment"
              className="w-full h-full rounded object-cover shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
