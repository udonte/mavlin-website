import { FaHandshake, FaLightbulb, FaMedal, FaLeaf } from "react-icons/fa";

const CoreValues = () => {
  const values = [
    {
      id: 1,
      icon: <FaHandshake size={36} className="text-mavlin-gold" />,
      title: "Integrity",
      description:
        "Upholding the highest standards of honesty and transparency.",
      bgIcon: (
        <FaHandshake
          className="absolute text-mavlin-gold opacity-10"
          size={150}
        />
      ),
    },
    {
      id: 2,
      icon: <FaLightbulb size={36} className="text-mavlin-gold" />,
      title: "Innovation",
      description: "Continuously seeking and applying creative solutions.",
      bgIcon: (
        <FaLightbulb
          className="absolute text-mavlin-gold opacity-10"
          size={150}
        />
      ),
    },
    {
      id: 3,
      icon: <FaMedal size={36} className="text-mavlin-gold" />,
      title: "Excellence",
      description:
        "Commitment to delivering superior quality in everything we do.",
      bgIcon: (
        <FaMedal className="absolute text-mavlin-gold opacity-10" size={150} />
      ),
    },
    {
      id: 4,
      icon: <FaLeaf size={36} className="text-mavlin-gold" />,
      title: "Sustainability",
      description: "Prioritizing sustainable practices for a better future.",
      bgIcon: (
        <FaLeaf className="absolute text-mavlin-gold opacity-10" size={150} />
      ),
    },
  ];

  return (
    <div className="px-8 md:px-24 py-16 bg-gray-50 relative">
      <div className="w-full border-x border-mavlin-gold px-4 md:px-24 mx-auto text-center mb-12">
        <p className="text-mavlin-gold mb-2 text-sm">CORE VALUES</p>
        <p className="text-mavlin-blue font-arimo text-2xl md:text-3xl font-medium">
          The Standards We Stand For
        </p>
      </div>

      <div className="relative w-full flex flex-col items-center">
        {values.map((value, index) => (
          <div
            key={value.id}
            className={`relative flex items-center w-full max-w-md md:max-w-lg my-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Background Icon */}
            <div
              className="absolute top-0 left-0 transform -translate-y-10 -translate-x-10"
              style={{
                right: index % 2 === 0 ? "auto" : "-5px",
                left: index % 2 !== 0 ? "auto" : "-40px",
              }}
            >
              {value.bgIcon}
            </div>
            {/* Foreground Icon */}
            <div className="flex justify-center items-center bg-white p-4 rounded-full shadow-lg z-10">
              {value.icon}
            </div>
            <div
              className={`flex-1 ml-4 md:ml-8 w-fit z-10 ${
                index % 2 === 0 ? "text-right" : "text-left"
              }`}
            >
              <p className="text-mavlin-blue font-semibold text-lg mb-1">
                {value.title}
              </p>
              <p className="text-gray-600 text-xs font-semibold">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
