// Mock data for services
const services = [
  {
    id: "01",
    title: "Client centered approach",
    description:
      "We respect our clients wishes, concerns, values, perspectives and strengths and counsel them accordingly to the best immigration way possible.",
  },
  {
    id: "02",
    title: "Integrity",
    description:
      "It is something that our team strives all the times and expects the same from the client to work in their best interest",
  },
  {
    id: "03",
    title: "Transparency",
    description:
      "We strongly believes in the value of openness, transparency and accountability to deliver our best to the client they deserve",
  },
  {
    id: "04",
    title: "Continuous learning",
    description:
      "Our team is always on top of  updated information with happenings in Canadian Immigration, where things are changing.",
  },
];

const SnowlandWhyWork = () => {
  return (
    <div className="px-24 py-24 w-full bg-gray-100">
      <div className="flex items-start justify-end w-full">
        <div className="text-right w-1/2">
          <p className="text-red-600 uppercase">Why Work with Us</p>
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
            <p className="font-bold text-4xl text-red-600 ">{service.id}</p>
            <p className="font-bold text-mavlin-blue mb-auto">
              {service.title}
            </p>
            <div className="text-sm text-[#787878] font-medium">
              {service.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SnowlandWhyWork;
