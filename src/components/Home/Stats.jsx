import { useState, useEffect } from "react";

const StatsSection = () => {
  const stats = [
    { id: 1, target: 150, label: "Projects Completed" },
    { id: 2, target: 20, label: "Years of Experience" },
  ];

  const [counts, setCounts] = useState(
    stats.map(() => 0) // Initialize counts to 0 for each stat
  );

  useEffect(() => {
    const animateCounts = () => {
      const duration = 2000; // Animation duration in milliseconds
      const interval = 20; // Update interval in milliseconds

      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.target;
        const increment = end / (duration / interval);

        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            clearInterval(counter);
            start = end; // Set to end value once done
          }
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = Math.floor(start);
            return newCounts;
          });
        }, interval);
      });
    };

    // Start the animation immediately
    animateCounts();

    // Set interval to repeat the animation every 10 seconds
    const repeatInterval = setInterval(() => {
      setCounts(stats.map(() => 0)); // Reset counts before each new animation
      animateCounts();
    }, 10000);

    // Cleanup interval on unmount
    return () => clearInterval(repeatInterval);
  }, []);

  return (
    <div className="bg-gray-100 pb-16">
      <div className="container mx-auto px-4 lg:px-24">
        <div className="flex flex-col md:flex-row flex-wrap items-center md:flex-wrap justify-center gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 w-full md:w-36 lg:w-64"
            >
              <p className="text-2xl lg:text-3xl font-bold text-mavlin-blue">
                {counts[index]}+
              </p>
              <p className="text-lg font-medium mt-2 text-mavlin-gold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
