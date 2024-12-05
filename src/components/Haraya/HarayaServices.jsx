import Service1 from "../../assets/images/Haraya/haraya6.jpg";
import Service2 from "../../assets/images/Haraya/haraya3.jpg";
import Service3 from "../../assets/images/Haraya/haraya9.jpg";
import Service4 from "../../assets/images/Haraya/haraya8.jpg";

// Mock data for services
const services = [
  {
    id: "01",
    title: "Fine Dining",
    image: Service1,
    description:
      "Indulge in a luxurious dining experience featuring expertly crafted continental and local dishes in an elegant and serene setting.",
  },
  {
    id: "02",
    title: "Private Lounges for Meetings",
    image: Service2,
    description:
      "Host your meetings, workshops, or conferences in our exclusive private lounges, tailored to provide comfort, privacy, and culinary excellence.",
  },
  {
    id: "03",
    title: "Garden Seat Out",
    image: Service3,
    description:
      "Enjoy a refreshing outdoor dining experience in our beautifully designed garden seating, perfect for relaxing moments or casual gatherings.",
  },
  {
    id: "04",
    title: "Personalized Services",
    image: Service4,
    description:
      "From custom menu options to attentive staff, we provide personalized services that cater to your unique dining needs and preferences.",
  },
];

const HarayaServices = () => {
  return (
    <section
      id="services"
      className="px-8 py-8 lg:px-24 lg:py-24 w-full bg-gray-100"
    >
      <div className="flex items-center justify-center w-full mb-12">
        <div className=" w-full md:w-1/2 text-center">
          <p className="text-mavlin-gold uppercase">Our Services</p>
          <p className="font-arimo text-3xl md:text-4xl text-mavlin-haraya-blue font-semibold">
            What We Offer
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transform transition-transform hover:scale-105"
          >
            {/* Image Section */}
            <div className="h-56 w-full bg-gray-200">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content Section */}
            <div className="p-6 flex flex-col">
              <p className="font-bold text-mavlin-haraya-blue mt-4 font-montserratAlternates italic">
                {service.title}
              </p>
              <p className="text-sm mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HarayaServices;
