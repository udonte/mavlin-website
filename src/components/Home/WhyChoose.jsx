// Mock data for services
const services = [
  {
    id: "01",
    title: "Expertise and Experience",
    description:
      "With years of experience in the sales and marketing industry, our team has a deep understanding of the market dynamics.",
  },
  {
    id: "02",
    title: "Extensive Network",
    description:
      "We have established strong relationships with the leading solar and cable companies in the region",
  },
  {
    id: "03",
    title: "Client-Centered Approach",
    description:
      "Our clients are our priority, and we strive to exceed expectations through dedication and quality service.",
  },
  {
    id: "04",
    title: "Cost Savings",
    description:
      "By leveraging our industry knowledge and network, we can help you save money on your solar and cable purchases",
  },
];

const WhyChoose = () => {
  return (
    <div className="px-24 py-24 w-full bg-gray-100">
      <div className="flex items-start justify-end w-full">
        <div className="text-right w-1/2">
          <p className="text-mavlin-gold uppercase">Why Partner with Us</p>
          <p className="font-arimo text-3xl text-mavlin-blue font-semibold">
            We bring a unique blend of expertise, innovation, and commitment to
            quality
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col justify-center gap-2 bg-white shadow-xl rounded-xl px-4 py-6"
          >
            <p className="font-bold text-4xl text-mavlin-blue">{service.id}</p>
            <p className="font-bold text-[#5C5C5C]">{service.title}</p>
            <div className="text-sm text-[#787878] font-medium">
              {service.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
