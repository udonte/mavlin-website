import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import AboutHero from "../../assets/images/About/AboutHero1.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Jane Doe",
    position: "CEO",
    description: "Leading the team with a passion for innovation and growth.",
    image: "https://via.placeholder.com/150", // Replace with actual image URLs
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    id: 2,
    name: "John Smith",
    position: "CTO",
    description: "Expert in technology, guiding our vision and strategy.",
    image: "https://via.placeholder.com/150",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    id: 3,
    name: "Mark Gunns",
    position: "Manager",
    description: "Expert in core team management and business operations.",
    image: "https://via.placeholder.com/150",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    id: 3,
    name: "Peter Lugers",
    position: "Field Agent",
    description: "Expert in all field operations and client interactions.",
    image: "https://via.placeholder.com/150",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
];

const OurTeam = () => {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${AboutHero})`,
      }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-mavlin-blue opacity-90"></div>

      <div className="px-8 md:px-24 py-14 relative z-10 ">
        <div className="w-full">
          <p className="text-white mb-2 text-sm">OUR TEAM</p>
          <p className="text-mavlin-gold mb-8 font-arimo text-2xl md:text-3xl font-medium">
            Meet the People Behind Our Success
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-24 h-24 mb-4 object-cover"
                />
                <p className="text-lg font-semibold text-mavlin-blue mb-1">
                  {member.name}
                </p>
                <p className="text-mavlin-gold text-sm font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {member.description}
                </p>
                <div className="flex gap-4">
                  <a
                    href={member.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin
                      size={20}
                      className="text-mavlin-blue hover:text-mavlin-gold"
                    />
                  </a>
                  <a
                    href={member.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter
                      size={20}
                      className="text-mavlin-blue hover:text-mavlin-gold"
                    />
                  </a>
                  <a
                    href={member.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook
                      size={20}
                      className="text-mavlin-blue hover:text-mavlin-gold"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
